"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9763],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(1966),i=(t(9496),t(9613));const o={},s="\u5e38\u7528 scss mixin \u5c01\u88c5",a={unversionedId:"snippets/css/mixin",id:"snippets/css/mixin",title:"\u5e38\u7528 scss mixin \u5c01\u88c5",description:"\u8282\u6d41 css \u52a8\u753b\u5b9e\u73b0",source:"@site/docs/snippets/css/mixin.mdx",sourceDirName:"snippets/css",slug:"/snippets/css/mixin",permalink:"/website/docs/snippets/css/mixin",draft:!1,tags:[],version:"current",lastUpdatedAt:1689172169,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"\u4f7f\u7528 scss \u5b9e\u73b0 tailwind \u7684\u6837\u5f0f",permalink:"/website/docs/snippets/css/tailwind"}},l={},c=[{value:"\u8282\u6d41 css \u52a8\u753b\u5b9e\u73b0",id:"\u8282\u6d41-css-\u52a8\u753b\u5b9e\u73b0",level:2},{value:"\u9690\u85cf\u6eda\u52a8\u6761",id:"\u9690\u85cf\u6eda\u52a8\u6761",level:2},{value:"\u5904\u7406\u6587\u672c\u6ea2\u51fa",id:"\u5904\u7406\u6587\u672c\u6ea2\u51fa",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5e38\u7528-scss-mixin-\u5c01\u88c5"},"\u5e38\u7528 scss mixin \u5c01\u88c5"),(0,i.kt)("h2",{id:"\u8282\u6d41-css-\u52a8\u753b\u5b9e\u73b0"},"\u8282\u6d41 css \u52a8\u753b\u5b9e\u73b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin enable-button-throttle() {\n  .ant-btn {\n    animation: throttle 500ms step-end forwards;\n  }\n\n  .ant-btn:active {\n    animation: none;\n  }\n  @keyframes throttle {\n    from {\n      pointer-events: none;\n    }\n    to {\n      pointer-events: all;\n    }\n  }\n}\n@mixin disable-button-throttle() {\n  [class*='ant-btn'] {\n    animation: none !important;\n  }\n}\n")),(0,i.kt)("h2",{id:"\u9690\u85cf\u6eda\u52a8\u6761"},"\u9690\u85cf\u6eda\u52a8\u6761"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"// \u6a2a\u5411\u9690\u85cf\u6eda\u52a8\u6761\uff0c\u9700\u8981\u8bbe\u7f6e\u5f53\u524d\u6587\u672c\u4e0d\u6362\u884c\n@mixin hide-scrollbarX() {\n  &::-webkit-scrollbar {\n    display: none; /* Chrome Safari */\n  }\n  & {\n    white-space: nowrap; //\u6587\u672c\u4e0d\u6362\u884c\n    scrollbar-width: none; /* firefox */\n    -ms-overflow-style: none; /* IE 10+ */\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n}\n\n@mixin hide-scrollbarY() {\n  &::-webkit-scrollbar {\n    display: none; /* Chrome Safari */\n  }\n  & {\n    scrollbar-width: none; /* firefox */\n    -ms-overflow-style: none; /* IE 10+ */\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n}\n")),(0,i.kt)("h2",{id:"\u5904\u7406\u6587\u672c\u6ea2\u51fa"},"\u5904\u7406\u6587\u672c\u6ea2\u51fa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"// \u5355\u884c\u6587\u672c\u7701\u7565  \u9700\u8981\u786e\u5b9a\u5bb9\u5668\u5bbd\u5ea6\n@mixin single-line-ellipsis($width) {\n  width: $width;\n  white-space: nowrap; /* \u4f7f\u6587\u672c\u4e0d\u53ef\u6362\u884c */\n  overflow: hidden; /* \u9690\u85cf\u6ea2\u51fa\u90e8\u5206 */\n  text-overflow: ellipsis; /* \u663e\u793a\u7701\u7565\u7b26\u53f7\u6765\u4ee3\u8868\u88ab\u9690\u85cf\u7684\u6587\u672c */\n}\n\n// \u591a\u884c\u6587\u672c\u56fa\u5b9a\u7701\u7565\uff0c\u9700\u8981\u786e\u5b9a\u884c\u6570\u548c\u5bbd\u5ea6\n@mixin multi-line-ellipsis($width, $lineCount) {\n  width: $width;\n  word-wrap: break-word; /* \u5185\u5bb9\u5b58\u5728\u82f1\u8bed\u6216\u6570\u5b57\u65f6\u5f3a\u5236\u6362\u884c */\n  overflow: hidden; /* \u9690\u85cf\u6ea2\u51fa\u90e8\u5206 */\n  text-overflow: ellipsis; /* \u663e\u793a\u7701\u7565\u7b26\u53f7\u6765\u4ee3\u8868\u88ab\u9690\u85cf\u7684\u6587\u672c */\n  display: -webkit-box; /* \u5c06\u5bf9\u8c61\u4f5c\u4e3a\u5f39\u6027\u4f38\u7f29\u76d2\u5b50\u6a21\u578b\u663e\u793a */\n  -webkit-box-orient: vertical; /* \u8bbe\u7f6e\u76d2\u5b50\u5185\u6392\u5217\u987a\u5e8f\u4e3a\u7eb5\u5411 */\n  -webkit-line-clamp: $lineCount; /* \u9650\u5236\u5757\u5143\u7d20\u663e\u793a\u7684\u6587\u672c\u7684\u884c\u6570 */\n}\n")))}u.isMDXComponent=!0}}]);