"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9633],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=r.createContext({}),d=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=d(n.components);return r.createElement(l.Provider,{value:e},n.children)},u="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),u=d(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,o(o({ref:e},c),{},{components:t})):r.createElement(f,o({ref:e},c))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[u]="string"==typeof n?n:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8657:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const a={},o=void 0,s={unversionedId:"tailwindcss/Grid Layout",id:"tailwindcss/Grid Layout",title:"Grid Layout",description:"Locale Dropdown",source:"@site/docs/tailwindcss/5. Grid Layout.md",sourceDirName:"tailwindcss",slug:"/tailwindcss/Grid Layout",permalink:"/docs/tailwindcss/Grid Layout",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/tailwindcss/5. Grid Layout.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dark Mode",permalink:"/docs/tailwindcss/Dark Mode"},next:{title:"Customizing Tailwind",permalink:"/docs/tailwindcss/Customizing Tailwind"}},l={},d=[],c={toc:d},u="wrapper";function p(n){let{components:e,...a}=n;return(0,i.kt)(u,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Locale Dropdown",src:t(1770).Z,width:"1303",height:"891"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import "./GridLayout.css"\n\nfunction GridLayoutWithCss() {\n  return (\n    <>\n      <div className="mx-auto p-8 w-full lg:w-1/2">\n        <h1 className="text-3xl font-bold">Grid Layout Examples With CSS</h1>\n        <h2 className="my-6 text-2xl underline underline-offset-2">\n          Example #1\n        </h2>\n        <div\n          style={{\n            display: "grid",\n            gap: "8px 16px", // \u540c columnGap\u548crowGap\n            gridColumn: 3,\n            gridRow: 2,\n            // columnGap: "16px",\n            // rowGap: "8px",\n            gridTemplateColumns: "1fr 1fr 1fr", // \u5e73\u5747\u5206\uff0c\u5982\u679c\u662f2fr 1fr 1fr\u5c31\u662f\u5e73\u5747\u5206\u4e3a4\u4efd\uff0c\u7b2c\u4e00\u4efd\u53602\u4e2a\u957f\u5ea6\n            gridTemplateRows: "1fr 1fr"\n          }}\n        >\n          <div\n            className="box"\n            style={{\n              gridRowStart: "1", // \u4ece\u7b2c\u4e00\u884c\u5f00\u59cb\n              gridRowEnd: "span 2", // \u6a2a\u8de8\u4e24\u884c\n              // gridRow: "1/ span 2",\n              gridColumnStart: "1", // \u4ece\u7b2c\u4e00\u5217\u5f00\u59cb\n              gridColumnEnd: "span 2" // \u6a2a\u8de8\u4e24\u5217\n              // gridColumn: "1 / span 2" // \u4ece\u7b2c\u4e00\u5217\u5f00\u59cb\uff0c\u6a2a\u8de82\u5217\n              // gridColumn: "1 / 3" // \u4ece\u7b2c\u4e00\u5217\u5f00\u59cb\uff0c\u5230\u7b2c\u4e09\u5217\u4e4b\u524d\u5408\u5e76\uff0c\u4e0d\u5305\u542b\u7b2c\u4e09\u5217\n              // grid-area: 1 / 1 / span 2 / span 2 // \u5408\u5e76\u5199\u6cd5\n            }}\n          >\n            1\n          </div>\n          <div className="box">2</div>\n          <div className="box">3</div>\n        </div>\n      </div>\n    </>\n  )\n}\n\nfunction GridLayoutWithTailWind() {\n  return (\n    <>\n      <div className="mx-auto p-8 w-full lg:w-1/2">\n        <h1 className="text-3xl font-bold">\n          Grid Layout Examples With Tailwind\n        </h1>\n        <h2 className="my-6 text-2xl underline underline-offset-2">\n          Example #2\n        </h2>\n        <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-2">\n          <div className="box row-span-2 col-span-2">1</div>\n          <div className="box">2</div>\n          <div className="box">3</div>\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default function GridLayout() {\n  return (\n    <div className="w-full grid grid-rows-1 grid-cols-1 gap-x-2">\n      <GridLayoutWithCss />\n      <GridLayoutWithTailWind />\n    </div>\n  )\n}\n')))}p.isMDXComponent=!0},1770:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/40cedc5ff5a6c16957ed84e692b2d2f-402b8287ca228ee26689db72e8e0654f.png"}}]);