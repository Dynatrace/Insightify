"use strict";(self.webpackChunkdt_adoptionoverview_extension=self.webpackChunkdt_adoptionoverview_extension||[]).push([[278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="Troubleshooting guide",s={unversionedId:"Troubleshooting",id:"Troubleshooting",title:"Troubleshooting guide",description:"1. Configuration error(Extension doesn't exist on given host)",source:"@site/docs/Troubleshooting.md",sourceDirName:".",slug:"/Troubleshooting",permalink:"/Insightify/docs/Troubleshooting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Troubleshooting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick Links",permalink:"/Insightify/docs/Quick-Links"},next:{title:"Other use-cases",permalink:"/Insightify/docs/Advanced use-cases"}},p={},l=[],u={toc:l};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting-guide"},"Troubleshooting guide"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configuration error(Extension doesn't exist on given host)"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("img",{alt:"image",src:n(2319).Z,width:"2080",height:"422"}),"  ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Error"),": This error suggests the extension is not unzipped within the ActiveGate folder, hence, the tenant is not able to configure it.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution"),": To fix the error, unzip the custom.remote.python.dt_health_report.zip folder in ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin_deployment")," directory (usually it is at ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/dynatrace/remotepluginmodule/plugin_deployment/"),") location within your ActiveGate host. Once you unzip it, try to re-confiugre the endpoint within your tenanat.  "),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Missing data"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("img",{alt:"image",src:n(7680).Z,width:"2436",height:"938"}),"  ")),(0,a.kt)("p",null,"In case you are not seeing data in a particular tile, there could be the following reasons:  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Tokens missing scope:",(0,a.kt)("br",{parentName:"p"}),"\n","Please refer to the ",(0,a.kt)("strong",{parentName:"p"},"Getting started section")," to verify that the tokens has required scope to pull API metrics. To make sure it would work, try running the API by accessing API swagger with the same token and see if that works.  ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configuration is not set to capture the data:",(0,a.kt)("br",{parentName:"p"}),"\n","Navigate to the endpoint within the extension and verify if you have enabled the extension to pull data from those tiles.",(0,a.kt)("br",{parentName:"p"}),"\n","For example, to pull problem data, please make sure that you have ",(0,a.kt)("strong",{parentName:"p"},"Capture and report problem data")," to ",(0,a.kt)("strong",{parentName:"p"},"Yes"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"image",src:n(3392).Z,width:"1728",height:"1360"}),"  "))),(0,a.kt)("p",null,"Similarly, to pull adoption data, please make sure that you have ",(0,a.kt)("strong",{parentName:"p"},"Capture and report feature adoption data")," to ",(0,a.kt)("strong",{parentName:"p"},"Yes"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"image",src:n(2771).Z,width:"1728",height:"1360"}),"  "),(0,a.kt)("p",null,"Lastly, to pull data as per management zones, make sure that you have ",(0,a.kt)("strong",{parentName:"p"},"Capture consumption data per consumption data")," to ",(0,a.kt)("strong",{parentName:"p"},"Yes"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"image",src:n(5662).Z,width:"1728",height:"1360"}),"  "),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Granularity of data",(0,a.kt)("br",{parentName:"li"}),"If the above two conditions are fulfilled and still you are not getting data, it is likely that the API call is not made internally by the extension. Please note the data is pulled periodically depending on the type of metrics.  ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For reference"),":",(0,a.kt)("br",{parentName:"p"}),"\n","Data for ",(0,a.kt)("strong",{parentName:"p"},"Problems")," are pulled only ",(0,a.kt)("strong",{parentName:"p"},"once per day"),(0,a.kt)("br",{parentName:"p"}),"\n","Data for ",(0,a.kt)("strong",{parentName:"p"},"License consumption")," is pulled ",(0,a.kt)("strong",{parentName:"p"},"once every hour"),(0,a.kt)("br",{parentName:"p"}),"\n","Data for ",(0,a.kt)("strong",{parentName:"p"},"Adoption feature metrics")," is pulled ",(0,a.kt)("strong",{parentName:"p"},"once every week"),"  "),(0,a.kt)("p",null,"This is done to ",(0,a.kt)("em",{parentName:"p"},"limit")," the DDU consumption as well as considering data would be more useful when pulled at the above said granulatrity."))}c.isMDXComponent=!0},2319:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Configuration_error-398c62e964df4ff912b70697329e8a66.png"},5662:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/HU_management_zone-5bbcc67487c52a29336201587f96de4f.png"},2771:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adoption_config-67879d0ab208f90a9b6811be4a2fd093.png"},7680:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/missing_data-6d0c316b6a0da9629e5528d89116f543.png"},3392:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/problem_config-c2869084cffcc0266b3125fb58bdad43.png"}}]);