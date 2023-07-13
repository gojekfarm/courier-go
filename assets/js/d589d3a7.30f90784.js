"use strict";(self.webpackChunkcourier=self.webpackChunkcourier||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=o,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Getting Started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Introduction",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/courier-go/docs/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Middlewares",permalink:"/courier-go/docs/Tutorials/Middlewares/"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Usage",id:"usage",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Courier Golang client library provides an opinionated wrapper over paho MQTT library to add features on top of it."),(0,o.kt)("p",null,"Long running connection is a persistent connection established between client & server for instant bi-directional communication. A long running connection is maintained for maximum possible duration with the help of keep alive packets. This helps in saving battery and data on mobile devices."),(0,o.kt)("p",null,'MQTT is an extremely lightweight protocol which works on publish/subscribe messaging model. It is designed for connections with remote locations where a "small code footprint" is required or the network bandwidth is limited.'),(0,o.kt)("p",null,"The protocol usually runs over TCP/IP; however, any network protocol that provides ordered, lossless, bi-directional connections can support MQTT."),(0,o.kt)("p",null,"MQTT has 3 built-in QoS levels for Reliable Message Delivery:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"QoS 0(At most once) - the message is sent only once and the client and broker take no additional steps to acknowledge delivery (fire and forget)."),(0,o.kt)("li",{parentName:"ul"},"QoS 1(At least once) - the message is re-tried by the sender multiple times until acknowledgement is received (acknowledged delivery)."),(0,o.kt)("li",{parentName:"ul"},"QoS 2(Exactly once) - the sender and receiver engage in a two-level handshake to ensure only one copy of the message is received (assured delivery).")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/gojek/courier-go\n")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.go")," file and add the following code to it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "os"\n    "os/signal"\n    "time"\n\n    "github.com/gojek/courier-go"\n)\n\nfunc main() {\n    c, err := courier.NewClient(\n        courier.WithUsername("username"),\n        courier.WithPassword("password"),\n        courier.WithAddress("localhost", 1883),\n    )\n\n    if err != nil {\n        panic(err)\n    }\n\n    if err := c.Start(); err != nil {\n        panic(err)\n    }\n\n    ctx, _ := signal.NotifyContext(context.Background(), os.Interrupt, os.Kill)\n\n    tick := time.NewTicker(time.Second)\n    for {\n        select {\n        case t := <-tick.C:\n            msg := map[string]interface{}{\n                "time": t.UnixNano(),\n            }\n            if err := c.Publish(context.Background(), "topic", msg, courier.QOSOne); err != nil {\n                fmt.Printf("Publish() error = %s\\n", err)\n            } else {\n                fmt.Println("Publish() success")\n            }\n        case <-ctx.Done():\n            tick.Stop()\n            c.Stop()\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);