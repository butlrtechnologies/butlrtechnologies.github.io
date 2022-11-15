"use strict";(self.webpackChunkbutlr_integrations=self.webpackChunkbutlr_integrations||[]).push([[69],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),y=o,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},s="Get your access token",i={unversionedId:"tutorials/GetAccessToken",id:"tutorials/GetAccessToken",title:"Get your access token",description:"1 - Using your Username and Password",source:"@site/docs/tutorials/GetAccessToken.md",sourceDirName:"tutorials",slug:"/tutorials/GetAccessToken",permalink:"/docs/tutorials/GetAccessToken",draft:!1,editUrl:"https://github.com/butlrtechnologies/butlrtechnologies.github.io/tree/main/docs/tutorials/GetAccessToken.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"},next:{title:"GraphQL - Get Sensors",permalink:"/docs/tutorials/GraphQLGetSensors"}},c={},l=[{value:"1 - Using your Username and Password",id:"1---using-your-username-and-password",level:2},{value:"2 - Using your API Credentials",id:"2---using-your-api-credentials",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-your-access-token"},"Get your access token"),(0,o.kt)("h2",{id:"1---using-your-username-and-password"},"1 - Using your Username and Password"),(0,o.kt)("p",null,"Get an access token using your username and password.  You can use the following command to get an access token:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api.butlr.io/api/v2/login\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "username": "your@email.com",\n    "password": "your_password"\n}\'\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "your_access_token",\n    "refresh_token": "your_refresh_token",\n    "id_token": "your_id_token",\n    "scope": "your_scopes",\n    "expires_in": 1000,\n    "token_type": "Bearer"\n}\n')),(0,o.kt)("h2",{id:"2---using-your-api-credentials"},"2 - Using your API Credentials"),(0,o.kt)("p",null,"Another way to get an access token is by using your API credentials.  You can use the following command to get an access token:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api.butlr.io/api/v2/clients/login\' \\\n--header \'content-type: application/json\' \\\n--data-raw \'{\n    "client_id": "your_client_id",\n    "client_secret": "your_client_secret"",\n    "audience": "https://butlrauth/",\n    "grant_type": "client_credentials"\n}\'\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "your_access_token",\n    "scope": "your_scopes",\n    "expires_in": 3666,\n    "token_type": "Bearer"\n}\n')))}p.isMDXComponent=!0}}]);