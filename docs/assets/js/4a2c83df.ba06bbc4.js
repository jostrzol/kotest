"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[1860],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),p=d(a),u=r,k=p["".concat(s,".").concat(u)]||p[u]||h[u]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},18902:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return h}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"Klock Matchers",slug:"klock-matchers.html",sidebar_label:"Klock"},s=void 0,d={unversionedId:"assertions/klock",id:"version-5.3/assertions/klock",title:"Klock Matchers",description:"Matchers for the Klock library, provided by the kotest-assertions-klock module.",source:"@site/versioned_docs/version-5.3/assertions/klock.md",sourceDirName:"assertions",slug:"/assertions/klock-matchers.html",permalink:"/docs/5.3/assertions/klock-matchers.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/assertions/klock.md",tags:[],version:"5.3",frontMatter:{title:"Klock Matchers",slug:"klock-matchers.html",sidebar_label:"Klock"},sidebar:"assertions",previous:{title:"Konform",permalink:"/docs/5.3/assertions/konform-matchers.html"},next:{title:"Compiler",permalink:"/docs/5.3/assertions/compiler-matchers.html"}},m={},h=[],p={toc:h};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Matchers for the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/korlibs/klock"},"Klock")," library, provided by the ",(0,l.kt)("inlineCode",{parentName:"p"},"kotest-assertions-klock")," module."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Matcher"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSameYear(otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date has the same year as the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSameMonth(otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date has the same month as the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSameDay(otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date has the same day of the month as the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldBeBefore(otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date is before the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldBeAfter(otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date is after the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldBeBetween(firstDate, secondDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date is between firstdate and seconddate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveYear(year)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct year.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveMonth(month)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct month.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveDay(day)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct day of year.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveHour(hour)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct hour.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveMinute(Minute)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct minute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSecond(second)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameHoursAs(time)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same hours as the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveHours(hours)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the given hours.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameMinutesAs(time)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same minutes as the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveMinutes(minutes)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the given minutes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameSeconds(time)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same seconds as the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSeconds(seconds)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the given seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameMillisecondsAs(time)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same milliseconds as the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveMilliseconds(millis)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the given millis.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldBeBefore(time)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time is before the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldBeAfter(time)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time is after the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldBeBetween(time, time)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time is between the two given times.")))))}u.isMDXComponent=!0}}]);