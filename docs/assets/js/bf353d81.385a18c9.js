"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[9326],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"blocking_tests",title:"Blocking Tests",slug:"blocking-tests.html",sidebar_label:"Blocking Tests"},c=void 0,l={unversionedId:"framework/timeouts/blocking_tests",id:"version-5.4/framework/timeouts/blocking_tests",title:"Blocking Tests",description:"When specifying timeouts in tests, Kotest uses the withTimeout coroutine functions that the Kotlin coroutine",source:"@site/versioned_docs/version-5.4/framework/timeouts/blocking_tests.md",sourceDirName:"framework/timeouts",slug:"/framework/timeouts/blocking-tests.html",permalink:"/docs/framework/timeouts/blocking-tests.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/framework/timeouts/blocking_tests.md",tags:[],version:"5.4",frontMatter:{id:"blocking_tests",title:"Blocking Tests",slug:"blocking-tests.html",sidebar_label:"Blocking Tests"},sidebar:"framework",previous:{title:"Project Timeout",permalink:"/docs/framework/timeouts/project-timeouts.html"},next:{title:"Fail Fast",permalink:"/docs/framework/fail-fast.html"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When specifying timeouts in tests, Kotest uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"withTimeout")," coroutine functions that the Kotlin coroutine\nlibrary provides. These timeouts are co-operative in nature, and a timeout is detected when a coroutine suspends, resumes, or calls ",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"."),(0,i.kt)("p",null,"However when executing blocking code, the thread will be blocked and so the coperative approach will not work.\nIn this scenario we must revert to interrupting the thread using ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread.interrupt")," or something similar. In order\nfor this interruption to work safely, we must execute the test on a dedicated thread."),(0,i.kt)("p",null,"Therefore, it is up to the user to signify to Kotest that they want a particular test to execute on a dedicated\nthread that can be safely used for interruption. We do this by enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockingTest")," flag in test config."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyBlockingTest : FunSpec() {\n  init {\n\n    test("interrupt me!").config(blockingTest = true, timeout = 10.seconds) {\n       Thread.sleep(100000000)\n    }\n\n    test("uses suspension").config(timeout = 10.seconds) {\n      delay(100000000)\n    }\n  }\n}\n')),(0,i.kt)("p",null,"In the above example, the first test requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockingTest")," flag because it uses a thread blocking operation.\nThe second test does not because it uses a suspendable operation."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This feature is only available on the JVM.")))}f.isMDXComponent=!0}}]);