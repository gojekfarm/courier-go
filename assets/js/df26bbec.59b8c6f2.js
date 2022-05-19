"use strict";(self.webpackChunkcourier=self.webpackChunkcourier||[]).push([[139],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8155:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"Publish Message",description:"Tutorial on publishing messages via client"},u=void 0,c={unversionedId:"Tutorials/publish",id:"Tutorials/publish",title:"Publish Message",description:"Tutorial on publishing messages via client",source:"@site/docs/Tutorials/publish.md",sourceDirName:"Tutorials",slug:"/Tutorials/publish",permalink:"/courier-go/docs/Tutorials/publish",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorials/publish.md",tags:[],version:"current",frontMatter:{title:"Publish Message",description:"Tutorial on publishing messages via client"},sidebar:"tutorialSidebar",previous:{title:"Custom Message Codec",permalink:"/courier-go/docs/Tutorials/custom_codec"},next:{title:"Subscribe Messages",permalink:"/courier-go/docs/Tutorials/subscribe"}},l={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once you have initialised the courier client and established a connection with the broker, you can publish message in the following way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="publisher.go" {7-13,17}',title:'"publisher.go"',"{7-13,17}":!0},'type chatMessage struct {\n    From string      `json:"from"`\n    To   string      `json:"to"`\n    Data interface{} `json:"data"`\n}\n\nmsg := &chatMessage{\n    From: "test-username-1",\n    To:   "test-username-2",\n    Data: map[string]string{\n        "message": "Hi, User 2!",\n    },\n}\n\nvar client courier.Publisher\n\n_ = client.Publish(context.Background(), "chat/test-username-2/send", msg)\n')))}m.isMDXComponent=!0}}]);