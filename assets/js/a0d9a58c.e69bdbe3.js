"use strict";(self.webpackChunkdt_adoptionoverview_extension=self.webpackChunkdt_adoptionoverview_extension||[]).push([[334],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,b=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return a?r.createElement(b,s(s({ref:t},d),{},{components:a})):r.createElement(b,s({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3381:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:5},s="Other use-cases",i={unversionedId:"Advanced use-cases",id:"Advanced use-cases",title:"Other use-cases",description:"Whilst the extension generates the metrics and plot these onto the dashboard, there are some other features that you can leverage by doing additional configuration",source:"@site/docs/Advanced use-cases.md",sourceDirName:".",slug:"/Advanced use-cases",permalink:"/Insightify/docs/Advanced use-cases",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Advanced use-cases.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting guide",permalink:"/Insightify/docs/Troubleshooting"},next:{title:"Advanced Settings",permalink:"/Insightify/docs/Advanced Settings"}},p={},l=[{value:"Know your generated metrics",id:"know-your-generated-metrics",level:2},{value:"Create Customized Benefits Valuation/Dashboard Reports",id:"create-customized-benefits-valuationdashboard-reports",level:2},{value:"Dashboard Reports",id:"dashboard-reports",level:2},{value:"Single value trend",id:"single-value-trend",level:2},{value:"Setting custom alerts",id:"setting-custom-alerts",level:2},{value:"Compare consumption or adoption metrics across different endpoints",id:"compare-consumption-or-adoption-metrics-across-different-endpoints",level:2}],d={toc:l};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"other-use-cases"},"Other use-cases"),(0,n.kt)("p",null,"Whilst the extension generates the metrics and plot these onto the dashboard, there are some other features that you can leverage by doing additional configuration"),(0,n.kt)("h2",{id:"know-your-generated-metrics"},"Know your generated metrics"),(0,n.kt)("p",null,"Extension will create the following metrics (depending on your configuration) that can be leveraged  "),(0,n.kt)("details",null,(0,n.kt)("summary",null,"License Metrics"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"| Metric Name                          | Dimensions                           | Generated by configuration              |\n|--------------------------------------|--------------------------------------|-----------------------------------------|\n| Host License Usage                   |     -                                |        Default                          |\n| DEM License Usage                    |     -                                |        Default                          |\n| DDU License Usage                    |     -                                |        Default                          |\n| consumption.hostUnits                | mgmt_zone,Custom Device,host_group   |   Capture consumption by management zone, hostgroup|\n| consumption.demUnits                 | mgmt_zone,Custom Device              |   Capture consumption by management zone |\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Feature Flags"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"| Metric Name                          | Dimensions                           | Generated by configuration              |\n|--------------------------------------|--------------------------------------|-----------------------------------------|\n| Feature Flag - Tags                  |             -                        |  Capture and report feature adoption data |\n| Feature Flag - Session replay        |             -                        |  Capture and report feature adoption data |\n| Feature Flag - Session Properties    |             -                        |  Capture and report feature adoption data |\n| Feature Flag - Request Attribtues    |             -                        |  Capture and report feature adoption data |\n| Feature Flag - Process Groups        |             -                        |  Capture and report feature adoption data |\n| Feature Flag - Problem Notifications |             -                        |  Capture and report feature adoption data |\n| Feature Flag - Management Zone       |             -                        |  Capture and report feature adoption data |\n| Feature Flag - Key Requests          |             -                        |  Capture and report feature adoption data |\n| Feature Flag - Conversion Goals      |             -                        |  Capture and report feature adoption data |\n| Feature Flag - Alerting Profile      |             -                        |  Capture and report feature adoption data |\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Problem Analysis"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"| Metric Name                          | Dimensions                           |      Generated by configuration           |\n|--------------------------------------|--------------------------------------|-------------------------------------------|\n| Problem Analysis                     |        Application Problem           |  Capture and report problem data          |\n| Problem Analysis                     |        Availability Problem          |  Capture and report problem data          |\n| Problem Analysis                     |        Custom Problem                |  Capture and report problem data          |\n| Problem Analysis                     |        Environment Problem           |  Capture and report problem data          |\n| Problem Analysis                     |        Error Problem                 |  Capture and report problem data          |\n| Problem Analysis                     |        Infrastructure Problem        |  Capture and report problem data          |\n| Problem Analysis                     |        Mean Resolution Time          |  Capture and report problem data          |\n| Problem Analysis                     |        Performance Problem           |  Capture and report problem data          |\n| Problem Analysis                     |        Resource Problem              |  Capture and report problem data          |\n| Problem Analysis                     |        Service Problem               |  Capture and report problem data          |\n| Problem Analysis                     |        Total Problems                |  Capture and report problem data          |\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Incident metrics"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"| Metric Name                          | Dimensions                            |      Generated by configuration           |\n|--------------------------------------|---------------------------------------|-------------------------------------------|\n| reported_application_problems         |    mgmt_zone,Custom Device           | Capture problem data per management       |\n| reported_availability_problems        |    mgmt_zone,Custom Device           | Capture problem data per management       |\n| reported_custom_problems              |    mgmt_zone,Custom Device           | Capture problem data per management       |\n| reported_error_problems               |    mgmt_zone,Custom Device           | Capture problem data per management       |\n| reported_infra_problems               |    mgmt_zone,Custom Device           | Capture problem data per management       |\n| reported_performance_problems         |    mgmt_zone,Custom Device           | Capture problem data per management       |\n| reported_resource_problems            |    mgmt_zone,Custom Device           | Capture problem data per management       |\n| total_reported_problems               |    mgmt_zone,Custom Device           | Capture problem data per management       |  \n| mttr_rca                              |    mgmt_zone,Custom Device           | Capture problem data per management       |\n| mttr_wo_rca                           |    mgmt_zone,Custom Device           | Capture problem data per management       |\n"))),(0,n.kt)("h2",{id:"create-customized-benefits-valuationdashboard-reports"},"Create Customized Benefits Valuation/Dashboard Reports"),(0,n.kt)("p",null,"Using the metrics available within the extension, create ",(0,n.kt)("strong",{parentName:"p"},"customised dashboards")," for showcasing Benefits Relisation. For example, using the problems data I created a dashboard as below that provides quick sneak peak into different aspects of Problems generated, RCA available, MTTR when RCA is available, etc.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"benefits-realisation-rpt",src:a(1249).Z,width:"1444",height:"947"}),"  "),(0,n.kt)("h2",{id:"dashboard-reports"},"Dashboard Reports"),(0,n.kt)("p",null,"End-user can subscribe to get the dashboard reports weekly or monthly. More details on how to can be found in our help ",(0,n.kt)("a",{parentName:"p",href:"https://www.dynatrace.com/support/help/shortlink/dashboard-reports"},"documentation link"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"dashboard-report",src:a(8186).Z,width:"3538",height:"1100"})),(0,n.kt)("h2",{id:"single-value-trend"},"Single value trend"),(0,n.kt)("p",null,"Navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Data Explorer")," screen for a specific metric and set expected thresholds for a specific metric. This can be powerful to get a quick view of say ",(0,n.kt)("strong",{parentName:"p"},"MTTR"),", etc.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"threshold-view",src:a(1189).Z,width:"3582",height:"1650"}),"\n",(0,n.kt)("img",{alt:"threshold-view_1",src:a(1389).Z,width:"2276",height:"1186"})),(0,n.kt)("h2",{id:"setting-custom-alerts"},"Setting custom alerts"),(0,n.kt)("p",null,"You can setup custom alerts on any of the generated metrics so as to be alerted for any abberations. This could be particularly useful for use-cases wherein you as an end-user would like a specific group to be notified once their consumption goes beyond a threshold. To setup a custom alert, navigate to ",(0,n.kt)("strong",{parentName:"p"},"Settings > Anomaly Detection >> Custom events for alerting")," and set the threshold.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"custom-alert",src:a(9811).Z,width:"1762",height:"913"}),"\n",(0,n.kt)("img",{alt:"custom-alert",src:a(5241).Z,width:"3038",height:"1664"})),(0,n.kt)("p",null,"In the above screenshot, a custom alert is setup for management zone ",(0,n.kt)("inlineCode",{parentName:"p"},"Cloud:AWS")," to be alerted whenever the host consumption in endpoint ",(0,n.kt)("inlineCode",{parentName:"p"},"Non-prod")," breaches 200.  "),(0,n.kt)("h2",{id:"compare-consumption-or-adoption-metrics-across-different-endpoints"},"Compare consumption or adoption metrics across different endpoints"),(0,n.kt)("p",null,"You can setup reports to compare adoption data or license data across different endpoints to give an overview how the different tenants are utlizing/adopting Dynatrace. To compare across tenants, navigate to ",(0,n.kt)("strong",{parentName:"p"},"Data explorer")," and split the metric(s) across different endpoints.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"compare-tiles",src:a(4878).Z,width:"2974",height:"1728"}),"  "),(0,n.kt)("p",null,"This can be further pinned back to the dashboard by clicking on ",(0,n.kt)("strong",{parentName:"p"},"Pin to Dashboard"),".",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"compare-tile-2",src:a(2533).Z,width:"2860",height:"1690"})))}m.isMDXComponent=!0},1249:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Benefits_Realisation_Report-fe1b850a809582867788d0ba8f8cf36b.gif"},4878:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/compare_config_1-9e2e5f67e716e3b5284d1428218b1d92.png"},2533:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/config_tile_2-db846e32c5c411636736deec53a8b24a.png"},9811:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/custom_alert_mgmt_zone-84064315e7223ed3511e5e81bc3e7a89.gif"},5241:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/custom_alert_mgmt_zone_2-e19ffcdc29da0a9630dd8b11d687f73a.png"},8186:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard_subscribe_report-66dc7351f0e7ad493467e029a45c692d.png"},1189:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard_tile_threshold-097c08ea69e56af08e2d3fa224be9249.png"},1389:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard_tile_threshold_2-cd41553dd5b8c3955fab524d922f8602.png"}}]);