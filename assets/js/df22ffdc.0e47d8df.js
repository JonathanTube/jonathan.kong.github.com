"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=o,v=l["".concat(u,".").concat(f)]||l[f]||m[f]||a;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,c={unversionedId:"react-router/v6/basic",id:"react-router/v6/basic",title:"basic",description:"",source:"@site/docs/react-router/v6/1.basic.md",sourceDirName:"react-router/v6",slug:"/react-router/v6/basic",permalink:"/docs/react-router/v6/basic",draft:!1,editUrl:"https://github.com/JonathanTube/Jonathan.Kong.github.com/tree/main/docs/react-router/v6/1.basic.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"navLink",permalink:"/docs/react-router/v5/navLink"},next:{title:"hierachy",permalink:"/docs/react-router/v6/hierachy"}},u={},p=[],s={toc:p},l="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.jsx"',title:'"main.jsx"'},'import { HashRouter, Link, Route, Routes, Navigate } from "react-router-dom"\nimport styled from "styled-components"\nimport From from "./from"\nimport To from "./to"\nconst NavBox = styled.nav`\n  a {\n    margin: 20px 10px;\n  }\n`\n\nexport default function Main() {\n  return (\n    <HashRouter>\n      <NavBox>\n        <Link to="/from">from component</Link>\n        <Link to="/to">to component</Link>\n        <Link to="/test">test</Link>\n      </NavBox>\n      <div>\n        {/* \u76f8\u5bf9\u4e8ev5\u7248\u672c\uff1aSwitch => Routes */}\n        <Routes>\n          {/* \u76f8\u5bf9\u4e8ev5\u7248\u672c\uff1aRedirect => Navigator */}\n          {/* \u9047\u5230Navigate\u5c31\u4f1a\u8df3\u8f6c */}\n          {/* \u5339\u914d\u8def\u5f84\u5982\u679c\u662f/root,\u8c03\u5230/from */}\n          <Route path="/" element={<Navigate to="/from" />} />\n          {/* \u76f8\u5bf9\u4e8ev5\u7248\u672c\uff1acomponent => element \uff0c\u4e5f\u4e0d\u9700\u8981exact\u7cbe\u786e\u5339\u914d */}\n          <Route path="/from" element={<From />} />\n          <Route path="/to" element={<To />} />\n          {/* \u53ef\u4ee5\u7ed9<Navigate />\u4f20\u9012\u53c2\u6570 */}\n          <Route\n            path="/test"\n            element={\n              <Navigate\n                to={{\n                  pathname: "/to",\n                  search: "param=x"\n                }}\n              />\n            }\n          />\n          {/* \u5339\u914d\u5176\u4ed6\u8def\u5f84\uff0c\u8df3\u8f6c\u5230to\uff0creplace\u662f\u66ff\u6362\u5f53\u524d\u8def\u7531\u5730\u5740 */}\n          {/* \u5fc5\u987b\u5199\u5728\u6700\u540e\u4e00\u4e2a */}\n          <Route path="*" element={<Navigate to="/to" replace />} />\n        </Routes>\n      </div>\n    </HashRouter>\n  )\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="from.jsx"',title:'"from.jsx"'},"export default function From() {\n  return (\n    <>\n      <h1>From Component</h1>\n    </>\n  )\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="to.jsx"',title:'"to.jsx"'},"export default function To() {\n  return (\n    <>\n      <h1>To Component</h1>\n    </>\n  )\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")))}m.isMDXComponent=!0}}]);