"use strict";(self.webpackChunkdt_adoptionoverview_extension=self.webpackChunkdt_adoptionoverview_extension||[]).push([[649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Guides",p={unversionedId:"Guides",id:"Guides",title:"Guides",description:"Deploy Extension",source:"@site/docs/Guides.md",sourceDirName:".",slug:"/Guides",permalink:"/insightify/docs/Guides",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Guides.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/insightify/docs/get-started"},next:{title:"Quick Links",permalink:"/insightify/docs/Quick-Links"}},s={},l=[{value:"Deploy Extension",id:"deploy-extension",level:3},{value:"Configurables",id:"configurables",level:4},{value:"Look around",id:"look-around",level:3}],d={toc:l};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guides"},"Guides"),(0,r.kt)("h3",{id:"deploy-extension"},"Deploy Extension"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Within Dynatrace, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Settings >> Monitored technologies >> Custom extensions")," tab",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"upload-extension",src:n(3836).Z,width:"3550",height:"1804"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"Insightify")," and configure it.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"configure-extension",src:n(6467).Z,width:"2314",height:"1716"})))),(0,r.kt)("h4",{id:"configurables"},"Configurables"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint name")," The name that you want to refer the tenant with.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Tenant URL")," The tenant-URL you would like to fetch data from.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Tenant Token")," Token generated with access to read metrics, access problems, events. For details on how to generate token, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.dynatrace.com/support/help/shortlink/token"},"help link"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Tenant Config Token")," Token generated with permissions to ingest metrics, read metrics, ingest logs (optional), write and read configuration.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Capture and report problem data")," Flag to pull problem data and report data on problems in the Insightify Dashboard/Device. Default value of the configuration is ",(0,r.kt)("strong",{parentName:"p"},"Yes"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Capture and report feature adoption data")," Flag to pull problem data and report data on Dynatrace adoption flags in a dashboard named ",(0,r.kt)("inlineCode",{parentName:"p"},"Insightify Adoption Overview"),". Default value of the configuration is ",(0,r.kt)("strong",{parentName:"p"},"Yes"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Capture and report problem data per management")," Flag to pull problem data and report data on problems per management zone in a dashboard named ",(0,r.kt)("inlineCode",{parentName:"p"},"Insightify Incident Report"),". Default value of the configuration is ",(0,r.kt)("strong",{parentName:"p"},"No"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Push problem details as log")," Configure to push the problem details as logs. If configured, the endpoint will be used to push the problem details as logs using ",(0,r.kt)("inlineCode",{parentName:"p"},"/ingest/logs")," api. By default, feature is disabled.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Value Benefit Realisation")," Dashboard highlighting the cost savings using a default cost model. The dashboard is created once ",(0,r.kt)("strong",{parentName:"p"},"Capture and report problem data per management")," is enabled.  "),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Once configured, successful extension start. It should display the Ok status.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The extension will take upto couple of minutes to initialize for the first run.")),(0,r.kt)("h3",{id:"look-around"},"Look around"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to Technologies and find metrics for your endpoint:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"topology-view",src:n(3555).Z,width:"3014",height:"1250"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Group page lets you analyze the group and view the performance of its members.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"topology-view",src:n(4640).Z,width:"3136",height:"1750"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Analyze various chart types on device page by navigating to the group instance (endpoint)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"deep-dive",src:n(4441).Z,width:"3026",height:"1810"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Lastly, multiple dashboards will be created (depending on your configuration) for each of the endpoint for a quick view of each endpoint.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"dashboard-view-1",src:n(6414).Z,width:"1792",height:"940"}),"  "),(0,r.kt)("p",{parentName:"li"},"If you have enabled ",(0,r.kt)("strong",{parentName:"p"},"Capture and report problem data per management zone"),", an additional dashboard ",(0,r.kt)("strong",{parentName:"p"},"Insightify: Incident Report: Endpoint-name")," will be created.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"dashboard-view-2",src:n(9342).Z,width:"1788",height:"920"}),"  "))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Consumption data per management-zone is available only on the dashboard view or under Data explorer.")))}c.isMDXComponent=!0},6414:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Adoption_Overview-7cfa9f2e8c4d58319b0d1d5530b36a3b.gif"},9342:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Incident_Report-28a5d58e0c5e320475d1f6c4fc52d8f6.gif"},3836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Upload_health_extension-50d59f76ddb108bdcd608a722ba419e2.png"},4441:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deep_dive-628608f5b8916b12b7208e34ec87ba30.png"},6467:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extension-config-page-153970fd08d9e9caafd96245906aa0ef.png"},4640:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/topology_view-ef89e6c623e192737670e55b3ae221f6.png"},3555:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/topology_view_extension-9619261beaed5ddb067a8e0528c48fe6.png"}}]);