"use strict";(self.webpackChunkcourier=self.webpackChunkcourier||[]).push([[259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),f=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=f(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=f(n),k=r,m=s["".concat(l,".").concat(k)]||s[k]||u[k]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var f=2;f<o;f++)i[f]=n[f];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,c={unversionedId:"sdk/xds/backoff",id:"sdk/xds/backoff",title:"backoff",description:"Package backoff provides exponential backoff capabilities",source:"@site/docs/sdk/xds/backoff.md",sourceDirName:"sdk/xds",slug:"/sdk/xds/backoff",permalink:"/courier-go/docs/sdk/xds/backoff",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/xds/backoff.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"xDS",permalink:"/courier-go/docs/sdk/xds/"},next:{title:"bootstrap",permalink:"/courier-go/docs/sdk/xds/bootstrap"}},l={},f=[{value:"Index",id:"index",level:2},{value:"Variables",id:"variables",level:2}],p={toc:f},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backoff"},"backoff"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gojek/courier-go/xds/backoff"\n')),(0,r.kt)("p",null,"Package backoff provides exponential backoff capabilities"),(0,r.kt)("h2",{id:"index"},"Index"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#variables"},"Variables")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Exponential"},"type Exponential"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Exponential.Backoff"},"func ","(","bc Exponential",")"," Backoff","(","retries int",")"," time.Duration")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Strategy"},"type Strategy"))),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("a",{name:"DefaultExponential"}),"DefaultExponential is an exponential backoff implementation using the default values for all the configurable knobs defined in https://github.com/grpc/grpc/blob/master/doc/connection-backoff.md.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var DefaultExponential = Exponential{Config: grpcbackoff.DefaultConfig}\n")),(0,r.kt)("a",{name:"Exponential"}),"## type [Exponential](https://github.com/gojek/courier-go/blob/main/xds/backoff/backoff.go#L27-L30)",(0,r.kt)("p",null,"Exponential implements exponential backoff algorithm as defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc/blob/master/doc/connection-backoff.md"},"https://github.com/grpc/grpc/blob/master/doc/connection-backoff.md"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Exponential struct {\n    // Config contains all options to configure the backoff algorithm.\n    Config grpcbackoff.Config\n}\n")),(0,r.kt)("a",{name:"Exponential.Backoff"}),"### func \\(Exponential\\) [Backoff](https://github.com/gojek/courier-go/blob/main/xds/backoff/backoff.go#L34)",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (bc Exponential) Backoff(retries int) time.Duration\n")),(0,r.kt)("p",null,"Backoff returns the amount of time to wait before the next retry given the number of retries."),(0,r.kt)("a",{name:"Strategy"}),"## type [Strategy](https://github.com/gojek/courier-go/blob/main/xds/backoff/backoff.go#L12-L16)",(0,r.kt)("p",null,"Strategy defines the methodology for backing off after a grpc connection failure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Strategy interface {\n    // Backoff returns the amount of time to wait before the next retry given\n    // the number of consecutive failures.\n    Backoff(retries int) time.Duration\n}\n")),(0,r.kt)("p",null,"Generated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/princjef/gomarkdoc"},"gomarkdoc")))}u.isMDXComponent=!0}}]);