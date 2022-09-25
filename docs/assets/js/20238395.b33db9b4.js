"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[6101],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=m(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(h,i(i({ref:e},c),{},{components:n})):a.createElement(h,i({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84709:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"JSON",slug:"json-overview.html",sidebar_label:"Overview"},s=void 0,m={unversionedId:"assertions/json/overview",id:"version-5.4/assertions/json/overview",title:"JSON",description:"Basic matchers",source:"@site/versioned_docs/version-5.4/assertions/json/overview.md",sourceDirName:"assertions/json",slug:"/assertions/json/json-overview.html",permalink:"/docs/assertions/json/json-overview.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/assertions/json/overview.md",tags:[],version:"5.4",frontMatter:{title:"JSON",slug:"json-overview.html",sidebar_label:"Overview"},sidebar:"assertions",previous:{title:"Core",permalink:"/docs/assertions/core-matchers.html"},next:{title:"Overview",permalink:"/docs/assertions/json/json-overview.html"}},c={},p=[{value:"Basic matchers",id:"basic-matchers",level:2},{value:"Content-based matching",id:"content-based-matching",level:2},{value:"Schema validation",id:"schema-validation",level:2}],d={toc:p};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"basic-matchers"},"Basic matchers"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Matcher"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Targets"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"shouldBeValidJson")),(0,o.kt)("td",{parentName:"tr",align:null},"verifies that a given string parses to valid json"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Multiplatform")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"shouldBeJsonObject")),(0,o.kt)("td",{parentName:"tr",align:null},"asserts that a string is a valid JSON ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"object"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Multiplatform")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"shouldBeJsonArray")),(0,o.kt)("td",{parentName:"tr",align:null},"asserts that a string is a valid JSON ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"array"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Multiplatform")))),(0,o.kt)("h2",{id:"content-based-matching"},"Content-based matching"),(0,o.kt)("p",null,"For more details, see ",(0,o.kt)("a",{parentName:"p",href:"content-json-matchers.html"},"here")," or follow matcher-specific links below"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Matcher"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Targets"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"content-json-matchers.html#shouldequaljson"},"shouldEqualJson")),(0,o.kt)("td",{parentName:"tr",align:null},"Verifies that a String matches a given JSON structure."),(0,o.kt)("td",{parentName:"tr",align:"left"},"Multiplatform")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"content-json-matchers.html#shouldequalspecifiedjson"},"shouldEqualSpecifiedJson")),(0,o.kt)("td",{parentName:"tr",align:null},"Verifies that a String matches a given JSON structure, but allows additional unspecified properties."),(0,o.kt)("td",{parentName:"tr",align:"left"},"Multiplatform")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"content-json-matchers.html#shouldcontainjsonkey"},"shouldContainJsonKey")),(0,o.kt)("td",{parentName:"tr",align:null},"Verifies that a String is JSON, and contains a given JSON path"),(0,o.kt)("td",{parentName:"tr",align:"left"},"JVM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"content-json-matchers.html#shouldcontainjsonkey"},"shouldContainJsonKeyValue")),(0,o.kt)("td",{parentName:"tr",align:null},"Verifies that a String is JSON, and contains a given JSON path with the specified value"),(0,o.kt)("td",{parentName:"tr",align:"left"},"JVM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"content-json-matchers.html#shouldcontainjsonkey"},"shouldMatchJsonResource")),(0,o.kt)("td",{parentName:"tr",align:null},"Verifies that a String is matches the JSON content of a given test resource"),(0,o.kt)("td",{parentName:"tr",align:"left"},"JVM")))),(0,o.kt)("h2",{id:"schema-validation"},"Schema validation"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Matcher"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Targets"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"json-schema-matchers.html"},"shouldMatchSchema")),(0,o.kt)("td",{parentName:"tr",align:null},"Validates that a ",(0,o.kt)("inlineCode",{parentName:"td"},"String")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"kotlinx.serialization.JsonElement")," matches a ",(0,o.kt)("inlineCode",{parentName:"td"},"JsonSchema"),". See description below for details on constructing schemas."),(0,o.kt)("td",{parentName:"tr",align:"left"},"Multiplatform")))))}u.isMDXComponent=!0}}]);