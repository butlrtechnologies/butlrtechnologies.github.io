"use strict";(self.webpackChunkbutlr_integrations=self.webpackChunkbutlr_integrations||[]).push([[842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=a,m=d["".concat(i,".").concat(g)]||d[g]||c[g]||o;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},p="Get Group",s={unversionedId:"tutorials/graphql/GraphQLGetGroups",id:"tutorials/graphql/GraphQLGetGroups",title:"Get Group",description:"1 - Get Access Token",source:"@site/docs/tutorials/graphql/GraphQLGetGroups.md",sourceDirName:"tutorials/graphql",slug:"/tutorials/graphql/GraphQLGetGroups",permalink:"/docs/tutorials/graphql/GraphQLGetGroups",draft:!1,editUrl:"https://github.com/butlrtechnologies/butlrtechnologies.github.io/tree/main/docs/tutorials/graphql/GraphQLGetGroups.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create Group",permalink:"/docs/tutorials/graphql/GraphQLCreateGroup"},next:{title:"Get Sensors",permalink:"/docs/tutorials/graphql/GraphQLGetSensors"}},i={},l=[{value:"1 - Get Access Token",id:"1---get-access-token",level:2},{value:"2 - GraphQL Query",id:"2---graphql-query",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-group"},"Get Group"),(0,a.kt)("h2",{id:"1---get-access-token"},"1 - ",(0,a.kt)("a",{parentName:"h2",href:"/docs/tutorials/GetAccessToken"},"Get Access Token")),(0,a.kt)("h2",{id:"2---graphql-query"},"2 - GraphQL Query"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CURL Request")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api-dev.butlr.io/api/v3/graphql' \\\n--header 'Authorization: Bearer INSERT_TOKEN_HERE' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"query\":\"{\\n    groups {\\n        data {\\n            name\\n            group_id\\n            ids\\n        }\\n    }\\n}\",\"variables\":{}}'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GraphQL Query")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    groups {\n        data {\n            name\n            group_id\n            ids\n        }\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "groups": {\n            "data": [\n                {\n                    "name": "Random Sensor 01",\n                    "group_id": "group_001",\n                    "ids": [\n                        "sensor_001",\n                        "sensor_002"\n                    ]\n                }\n            ]\n        }\n    }\n}\n')))}c.isMDXComponent=!0}}]);