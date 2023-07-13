"use strict";(self.webpackChunkcourier=self.webpackChunkcourier||[]).push([[242],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>f});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),l=s(n),m=o,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||c;return n?t.createElement(f,i(i({ref:r},d),{},{components:n})):t.createElement(f,i({ref:r},d))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[l]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7800:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var t=n(7462),o=(n(7294),n(3905));const c={title:"Custom Message Codec",description:"Tutorial on using custom message encoder and decoders."},i=void 0,a={unversionedId:"Tutorials/custom_codec",id:"Tutorials/custom_codec",title:"Custom Message Codec",description:"Tutorial on using custom message encoder and decoders.",source:"@site/docs/Tutorials/custom_codec.md",sourceDirName:"Tutorials",slug:"/Tutorials/custom_codec",permalink:"/courier-go/docs/Tutorials/custom_codec",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorials/custom_codec.md",tags:[],version:"current",frontMatter:{title:"Custom Message Codec",description:"Tutorial on using custom message encoder and decoders."},sidebar:"tutorialSidebar",previous:{title:"Background Broker Connect",permalink:"/courier-go/docs/Tutorials/connect_background"},next:{title:"Publish Message",permalink:"/courier-go/docs/Tutorials/publish"}},u={},s=[{value:"Writing Custom Encoder Decoder",id:"writing-custom-encoder-decoder",level:3},{value:"Registering Encoder Decoder",id:"registering-encoder-decoder",level:3}],d={toc:s},l="wrapper";function p(e){let{components:r,...n}=e;return(0,o.kt)(l,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"writing-custom-encoder-decoder"},"Writing Custom Encoder Decoder"),(0,o.kt)("p",null,"First write a custom encoder and decoder to work with the data types your project uses."),(0,o.kt)("p",null,"One common codec is ",(0,o.kt)("inlineCode",{parentName:"p"},"protobuf"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="decoder.go"',title:'"decoder.go"'},'var bufPool = &sync.Pool{\n    New: func() interface{} {\n        return new(bytes.Buffer)\n    },\n}\n\n// NewDecoder returns a new decoder that reads from r.\n//\n// The decoder introduces its own buffering.\nfunc NewDecoder(r io.Reader) *Decoder {\n    return &Decoder{r: r}\n}\n\n// A Decoder reads and decodes proto values from an input stream.\ntype Decoder struct {\n    r io.Reader\n}\n\n// Decode reads the proto-encoded value from its\n// input and stores it in the value pointed to by v.\nfunc (d *Decoder) Decode(v interface{}) error {\n    m, ok := v.(proto.Message)\n    if !ok {\n        return errors.New("value should be a proto.Message")\n    }\n\n    buf := bufPool.Get().(*bytes.Buffer)\n    defer bufPool.Put(buf)\n\n    buf.Reset()\n\n    if _, err := buf.ReadFrom(d.r); err != nil {\n        return err\n    }\n\n    if err := proto.Unmarshal(buf.Bytes(), m); err != nil {\n        return err\n    }\n\n    return nil\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="encoder.go"',title:'"encoder.go"'},'// NewEncoder returns a new encoder that writes to w.\nfunc NewEncoder(w io.Writer) *Encoder {\n    return &Encoder{w: w}\n}\n\n// An Encoder writes proto values to an output stream.\ntype Encoder struct {\n    w io.Writer\n}\n\n// Encode writes the proto encoding of v to the stream.\nfunc (e *Encoder) Encode(v interface{}) error {\n    m, ok := v.(proto.Message)\n    if !ok {\n        return errors.New("value should be a proto.Message")\n    }\n\n    b, err := proto.Marshal(m)\n    if err != nil {\n        return err\n    }\n\n    if _, err := e.w.Write(b); err != nil {\n        return err\n    }\n\n    return nil\n}\n')),(0,o.kt)("h3",{id:"registering-encoder-decoder"},"Registering Encoder Decoder"),(0,o.kt)("p",null,"You can then use this codec to encode/decode protobuf messages with courier client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="client.go"',title:'"client.go"'},"client, _ := courier.NewClient(\n    courier.WithCustomEncoder(func(w io.Writer) courier.Encoder { return NewEncoder(w) }),\n    courier.WithCustomDecoder(func(r io.Reader) courier.Decoder { return NewDecoder(r) }),\n)\n")))}p.isMDXComponent=!0}}]);