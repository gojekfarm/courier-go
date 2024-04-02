package otelcourier

import (
	"context"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/metric"
	"go.opentelemetry.io/otel/propagation"
	oteltrace "go.opentelemetry.io/otel/trace"
)

// Option helps configure trace options.
type Option interface{ apply(*traceOptions) }

// TopicAttributeTransformer helps transform topic before making an attribute for it.
type TopicAttributeTransformer func(context.Context, string) string

// WithTracerProvider specifies a tracer provider to use for creating a tracer.
// If none is specified, the global provider is used.
func WithTracerProvider(provider oteltrace.TracerProvider) Option {
	return optFn(func(opts *traceOptions) { opts.tracerProvider = provider })
}

// WithMeterProvider specifies a meter provider to use for creating a meter.
// If none is specified, the global provider is used.
func WithMeterProvider(provider metric.MeterProvider) Option {
	return optFn(func(opts *traceOptions) { opts.meterProvider = provider })
}

// WithTextMapPropagator specifies the propagator to use for extracting/injecting key-value texts.
// If none is specified, the global provider is used.
func WithTextMapPropagator(propagator propagation.TextMapPropagator) Option {
	return optFn(func(opts *traceOptions) { opts.propagator = propagator })
}

// WithTextMapCarrierExtractFunc is used to specify the function which should be used to
// extract propagation.TextMapCarrier from the ongoing context.Context.
func WithTextMapCarrierExtractFunc(fn func(context.Context) propagation.TextMapCarrier) Option {
	return optFn(func(opts *traceOptions) { opts.textMapCarrierExtractor = fn })
}

// DisableCallbackTracing disables implicit tracing on subscription callbacks.
var DisableCallbackTracing = &disableTracePathOpt{traceCallback}

// DisablePublisherTracing disables courier.Publisher tracing.
var DisablePublisherTracing = &disableTracePathOpt{tracePublisher}

// DisableSubscriberTracing disables courier.Subscriber tracing.
var DisableSubscriberTracing = &disableTracePathOpt{traceSubscriber}

// DisableUnsubscriberTracing disables courier.Unsubscriber tracing.
var DisableUnsubscriberTracing = &disableTracePathOpt{traceUnsubscriber}

// DefaultTopicAttributeTransformer is the default transformer for topic attribute.
func DefaultTopicAttributeTransformer(_ context.Context, topic string) string { return topic }

/// private types and functions

type optFn func(*traceOptions)

func (fn optFn) apply(opts *traceOptions) { fn(opts) }

func defaultOptions() *traceOptions {
	return &traceOptions{
		tracerProvider:   otel.GetTracerProvider(),
		meterProvider:    otel.GetMeterProvider(),
		propagator:       otel.GetTextMapPropagator(),
		tracePaths:       tracePublisher + traceSubscriber + traceUnsubscriber + traceCallback,
		topicTransformer: DefaultTopicAttributeTransformer,
	}
}

const (
	tracePublisher tracePath = 1 << iota
	traceSubscriber
	traceUnsubscriber
	traceCallback
)

type traceOptions struct {
	tracerProvider          oteltrace.TracerProvider
	meterProvider           metric.MeterProvider
	propagator              propagation.TextMapPropagator
	textMapCarrierExtractor func(context.Context) propagation.TextMapCarrier
	tracePaths              tracePath
	topicTransformer        TopicAttributeTransformer
}

type tracePath uint

func (tp tracePath) match(o tracePath) bool { return tp&o != 0 }

type disableTracePathOpt struct{ tracePath }

func (o *disableTracePathOpt) apply(opts *traceOptions) { opts.tracePaths &^= o.tracePath }

func (t TopicAttributeTransformer) apply(opts *traceOptions) { opts.topicTransformer = t }
