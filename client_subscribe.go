package courier

import (
	"bytes"
	"context"

	mqtt "github.com/eclipse/paho.mqtt.golang"
)

// Subscribe allows to subscribe to messages from an MQTT broker
func (c *Client) Subscribe(ctx context.Context, topic string, callback MessageHandler, opts ...Option) error {
	return c.subscriber.Subscribe(ctx, topic, callback, opts...)
}

// SubscribeMultiple allows to subscribe to messages on multiple topics from an MQTT broker
func (c *Client) SubscribeMultiple(
	ctx context.Context,
	topicsWithQos map[string]QOSLevel,
	callback MessageHandler,
) error {
	return c.subscriber.SubscribeMultiple(ctx, topicsWithQos, callback)
}

// UseSubscriberMiddleware appends a SubscriberMiddlewareFunc to the chain.
// Middleware can be used to intercept or otherwise modify, process or skip subscriptions.
// They are executed in the order that they are applied to the Client.
func (c *Client) UseSubscriberMiddleware(mwf ...SubscriberMiddlewareFunc) {
	for _, fn := range mwf {
		c.sMiddlewares = append(c.sMiddlewares, fn)
	}

	c.subscriber = subscriberFuncs(c)

	for i := len(c.sMiddlewares) - 1; i >= 0; i-- {
		c.subscriber = c.sMiddlewares[i].Middleware(c.subscriber)
	}
}

func subscriberFuncs(c *Client) Subscriber {
	return NewSubscriberFuncs(
		func(ctx context.Context, topic string, callback MessageHandler, opts ...Option) (err error) {
			o := composeOptions(opts)
			c.execute(func(cc mqtt.Client) {
				t := cc.Subscribe(topic, o.qos, callbackWrapper(c, callback))
				err = c.handleToken(ctx, t, ErrSubscribeTimeout)
			})

			return
		},
		func(ctx context.Context, topicsWithQos map[string]QOSLevel, callback MessageHandler) (err error) {
			c.execute(func(cc mqtt.Client) {
				t := cc.SubscribeMultiple(routeFilters(topicsWithQos), callbackWrapper(c, callback))
				err = c.handleToken(ctx, t, ErrSubscribeMultipleTimeout)
			})

			return
		},
	)
}

func callbackWrapper(c *Client, callback MessageHandler) mqtt.MessageHandler {
	return func(_ mqtt.Client, m mqtt.Message) {
		ctx := context.Background()

		msg := NewMessageWithDecoder(
			c.options.newDecoder(ctx, bytes.NewReader(m.Payload())),
		)
		msg.ID = int(m.MessageID())
		msg.Topic = m.Topic()
		msg.Duplicate = m.Duplicate()
		msg.Retained = m.Retained()
		msg.QoS = QOSLevel(m.Qos())

		callback(ctx, c, msg)
	}
}

func routeFilters(topicsWithQos map[string]QOSLevel) map[string]byte {
	m := make(map[string]byte)
	for topic, q := range topicsWithQos {
		m[topic] = byte(q)
	}

	return m
}
