(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{134:function(e,t,c){},135:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(35),r=c.n(n),i=(c(81),c(82),c.p+"static/media/logo.4225a6c4.png"),l=c(0);var o=function(e){return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"nav-link",children:e.text})})};function j(){return Object(l.jsx)("a",{href:"/",className:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none",children:Object(l.jsx)("img",{src:i,className:"bi me-2 my_brand",alt:"logo"})})}function d(){return Object(l.jsxs)("ul",{className:"nav nav-pills",children:[Object(l.jsx)(o,{text:"Work",link:"https://www.marisatania.com"}),Object(l.jsx)(o,{text:"About",link:"https://www.marisatania.com/about"}),Object(l.jsx)(o,{text:"Contact",link:"https://www.marisatania.com/contact-marisa"})]})}function b(){return Object(l.jsxs)("header",{className:"d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom",children:[Object(l.jsx)(j,{}),Object(l.jsx)(d,{})]})}function u(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(b,{})})}var m=function(e){return Object(l.jsx)(u,{})},h=c(16),x=c(137),O=c(139),p=c(140),f=c(138),g=c(24),v=function(e){var t=Object(a.useState)(!1),c=Object(h.a)(t,2),s=c[0],n=c[1];return Object(l.jsxs)(x.a,{direction:"right",isOpen:s,toggle:function(){return n(!s)},children:[Object(l.jsxs)(O.a,{caret:!0,children:[Object(l.jsx)(g.c,{className:"my-icon-class"}),"Quick Links"]}),Object(l.jsxs)(p.a,{children:[Object(l.jsx)(f.a,{children:Object(l.jsx)("a",{href:"https://github.com/CS601-F21/side-project-mt-cs/",className:"dropdown-link",target:"_blank",rel:"noreferrer",children:"Repository"})}),Object(l.jsx)(f.a,{divider:!0}),Object(l.jsx)(f.a,{children:Object(l.jsx)("a",{href:"https://github.com/CS601-F21/side-project-mt-cs/blob/main/gaea_webapp/README.md",className:"dropdown-link",target:"_blank",rel:"noreferrer",children:"Installation"})}),Object(l.jsx)(f.a,{divider:!0}),Object(l.jsx)(f.a,{children:Object(l.jsx)("a",{href:"https://github.com/CS601-F21/side-project-mt-cs/blob/main/README.md",className:"dropdown-link",target:"_blank",rel:"noreferrer",children:"Documentation"})})]})]})};function N(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("ul",{className:"nav flex-column",children:[Object(l.jsx)("li",{className:"nav-item text-left",children:Object(l.jsxs)("a",{className:"nav-link btn active my-nav-link rounded","aria-current":"page",href:"/search",children:[Object(l.jsx)(g.d,{})," Search Workloads"]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(v,{})})]})})}var w=function(e){return Object(l.jsx)("nav",{id:"sidebarMenu",className:"col-md-3 col-lg-3 d-md-block bg-light sidebar collapse",children:Object(l.jsx)("div",{className:"position-sticky pt-3",children:Object(l.jsx)(N,{})})})},k=c(12),y=c(14),C=c(33),S=c.n(C),A=c(4),F=c(5),E=c(9),H=c(8),L=c(29),_=c.n(L),D=function(e){Object(E.a)(c,e);var t=Object(H.a)(c);function c(){return Object(A.a)(this,c),t.apply(this,arguments)}return Object(F.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"table-responsive",children:[Object(l.jsx)("h3",{className:"text-center",children:"Update History"}),Object(l.jsx)(_.a,{pagination:!0,highlightOnHover:!0,columns:this.props.columns,data:this.props.data})]})}}]),c}(s.a.Component),R=D;var T=function(e){var t=0,c=e.dataList;for(var a in c){t+=c[a].value}return Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsxs)("div",{className:"h-100 p-3 border bg-light rounded-3",children:[Object(l.jsxs)("div",{className:"justify-content-between row",children:[Object(l.jsx)("p",{className:"col text-left",children:"Total Data Size"}),Object(l.jsx)(g.b,{className:"my-icons text-right col-md-2"})]}),Object(l.jsx)("h3",{className:"text-center",children:t})]})})};var I=function(e){var t=e.dataList.slice(1).length;return Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsxs)("div",{className:"h-100 border p-3 bg-light rounded-3",children:[Object(l.jsxs)("div",{className:"justify-content-between row",children:[Object(l.jsx)("p",{className:"col text-left",children:"Number Of Active Dashboard"}),Object(l.jsx)(g.a,{className:"my-icons text-right col-md-2"})]}),Object(l.jsx)("h3",{className:"text-center",children:t})]})})},M=c(76);function W(e,t){return t.value-e.value}var P=function(e){console.log(e);var t={labels:[],datasets:[{label:"Most Used",backgroundColor:"#6a9ecc",borderColor:"rgba(184,206,224,1)",borderWidth:1,data:[]}]},c=e.dataList.slice(1).sort(W).slice(0,10);for(var a in c)t.datasets[0].data.push(c[a].value),t.labels.push(c[a].workload_name);return Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsxs)("div",{className:"h-100 p-2 border bg-light rounded-3",children:[Object(l.jsx)("p",{children:"Top Most Used Workloads"}),Object(l.jsx)(M.a,{data:t,options:{title:{display:!0,text:"Average Rainfall per month",fontSize:20},legend:{display:!0,position:"right"}}})]})})};var G=function(e){return Object(l.jsx)("div",{className:"col-md-6 text-center",children:Object(l.jsxs)("div",{className:"h-100 border p-3 bg-light rounded-3",children:[Object(l.jsx)("p",{children:"Page Hits Per Day"}),Object(l.jsx)("div",{className:"table-responsive",id:"page-hits-table",children:Object(l.jsx)(_.a,{pagination:!0,highlightOnHover:!0,columns:e.pageHitsHeaders,data:e.pageHitsContents})})]})})};var z=function(e){return Object(l.jsxs)("p",{className:"read-more",children:[e.text.slice(0,120)," ...",Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:"read more"})]})};var U=function(e){return Object(l.jsx)("div",{className:"col-md-4 img-link",children:Object(l.jsxs)("div",{className:"h-100 border text-center bg-light rounded",children:[Object(l.jsx)("img",{alt:"logo",src:i,className:"h-50 rounded-circle d-block mx-auto"}),Object(l.jsx)(z,{className:"h-50",text:e.text,link:e.link})]})})};function B(){return Object(l.jsxs)("div",{className:"container-fluid py-5",children:[Object(l.jsx)("h1",{className:"display-5 fw-bold",children:"GAEA"}),Object(l.jsxs)("p",{className:"fs-6",children:["Welcome to GAEA!",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"One stop workload data visualization, search, filter and progress history manager."]})]})}function J(e){return Object(l.jsx)("div",{className:"col-md-12 py-3",children:Object(l.jsxs)("div",{className:"row align-items-md-stretch",children:[Object(l.jsx)(T,{dataList:e.dataArray}),Object(l.jsx)(I,{dataList:e.dataArray})]})})}function K(e){return Object(l.jsx)("div",{className:"col-md-12 py-3",children:Object(l.jsxs)("div",{className:"row align-items-md-stretch",children:[Object(l.jsx)(P,{dataList:e.dataArray}),Object(l.jsx)(G,{pageHitsContents:e.pageHitsContents,pageHitsHeaders:e.pageHitsHeaders})]})})}function Q(){return Object(l.jsx)("div",{className:"col-md-12 py-3",children:Object(l.jsxs)("div",{className:"row align-items-md-stretch",children:[Object(l.jsx)(U,{text:"Github Repository",link:"https://github.com/CS601-F21/side-project-mt-cs/"}),Object(l.jsx)(U,{text:"\n          Installation and how to run React.js web app using npm and yarn\n          ",link:"https://github.com/CS601-F21/side-project-mt-cs/blob/main/gaea_webapp/README.md"}),Object(l.jsx)(U,{text:"\n          Overview, wireframes, tech stack, and schema\n          ",link:"https://github.com/CS601-F21/side-project-mt-cs/blob/main/README.md"})]})})}var q=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(h.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)([]),d=Object(h.a)(j,2),b=d[0],u=d[1],m=Object(a.useState)([]),x=Object(h.a)(m,2),O=x[0],p=x[1],f=Object(a.useState)([]),g=Object(h.a)(f,2),v=g[0],N=g[1],w=function(){S.a.get("http://10.105.184.110:8000/api/workload/").then((function(e){var t=e.data,c=[];for(var a in t[0])"status"!==a&&"run_id"!==a&&"progress"!==a&&"steps"!==a||c.push(a);var n=c.map((function(e){return"status"===e?{name:e,selector:function(t){return t[e]},sortable:!0,cell:function(t){return Object(l.jsxs)("div",{className:"row align-items-center text-left",children:[Object(l.jsx)("div",{className:"".concat("Completed"===t[e]?"progress-complete":"In Progress"===t[e]?"progress":"Error"===t[e]?"progress-cancel":"")}),t[e]]})}}:"progress"===e?{name:e,selector:function(t){return t[e]},sortable:!0,cell:function(t){var c=t[e].slice(1).map((function(e,t){return Object(l.jsx)("p",{children:e},t)}));return Object(l.jsxs)("div",{className:"dropdown",children:[Object(l.jsx)("button",{className:"dropbtn",children:t[e].slice(0,1)}),Object(l.jsx)("div",{className:"dropdown-content",children:c})]})}}:{name:e,selector:function(t){return t[e]},sortable:!0}})),r=[{name:"",selector:function(e){return e.status},button:!0,cell:function(e){return"Completed"===e.status?Object(l.jsx)("a",{className:"btn btn-primary",href:"https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads.html",target:"_blank",rel:"noopener noreferrer",children:"Workload"}):""}}],i=[].concat(Object(y.a)(n),r);u(t),o(i),s(t)})).catch((function(e){return console.log(e)})),k()},k=function(){S.a.get("http://10.105.184.110:8000/api/page_hits/").then((function(e){var t=e.data,c=[];for(var a in t[0])c.push(a);var s=c.map((function(e){return{name:e,selector:function(t){return t[e]},sortable:!0}}));p(t),N(s)})).catch((function(e){return console.log(e)}))};return Object(a.useEffect)((function(){window.addEventListener("load",w)})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(B,{}),Object(l.jsx)(J,{dataArray:c}),Object(l.jsx)(K,{dataArray:c,pageHitsHeaders:v,pageHitsContents:O}),Object(l.jsx)(Q,{}),Object(l.jsx)(R,{columns:i,data:b})]})};var V=function(){return Object(l.jsxs)("div",{className:"container-fluid py-5",children:[Object(l.jsx)("h1",{className:"display-5 fw-bold",children:"PAGE NOT FOUND"}),Object(l.jsxs)("p",{className:"fs-4",children:["The page you are looking for does not exist. ",Object(l.jsx)("a",{href:"/",children:"Back To Dashboard"})]})]})};var X=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(h.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)([]),d=Object(h.a)(j,2),b=d[0],u=d[1];return Object(a.useEffect)((function(){S.a.get("http://10.105.184.110:8000/api/workload/").then((function(e){var t=e.data,c=t.filter((function(e){return"Completed"===e.status||"In Progress"===e.status})),a=[],n=[],r=function(e){"workload_url"!==e?a.push(e):n=[{name:e,selector:function(t){return t[e]},button:!0,cell:function(t){return Object(l.jsx)("a",{className:"btn btn-primary btn-sm",href:t[e],target:"_blank",rel:"noopener noreferrer",children:"Workload"})}}]};for(var i in t[0])r(i);var j=a.filter((function(e){return"progress"!==e})).map((function(e){return{name:e,selector:function(t){return t[e]}}})),d=[].concat(Object(y.a)(n),Object(y.a)(j));u(c),s(c),o(d)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("div",{className:"col-md-12",children:[Object(l.jsx)("div",{className:"py-5 filter-box",children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.keyword.value,a=e.target.tag.value,s=e.target.runid.value,n=c.filter((function(e){return e.workload_name.toLowerCase().includes(t.toLowerCase())})).filter((function(e){return e.run_id.toLowerCase().includes(s.toLowerCase())})).filter((function(e){return e.tags.toLowerCase().includes(a.toLowerCase())}));u(n)},children:Object(l.jsxs)("div",{className:"form-row row filter-form",children:[Object(l.jsxs)("div",{className:"form-group col-md-3",children:[Object(l.jsx)("label",{htmlFor:"inputKeyword4",children:"Workload"}),Object(l.jsx)("input",{name:"keyword",type:"text",className:"form-control",id:"inputKeyword4",placeholder:"..."})]}),Object(l.jsxs)("div",{className:"form-group col-md-3",children:[Object(l.jsx)("label",{htmlFor:"inputRunID4",children:"Run ID"}),Object(l.jsx)("input",{name:"runid",type:"text",className:"form-control",id:"inputRunID4",placeholder:"..."})]}),Object(l.jsxs)("div",{className:"form-group col-md-3",children:[Object(l.jsx)("label",{htmlFor:"inputTag4",children:"Tag"}),Object(l.jsx)("input",{name:"tag",type:"text",className:"form-control",id:"inputTag4",placeholder:"..."})]}),Object(l.jsx)("input",{id:"filter",className:"col-md-2 filter-btn",type:"submit",value:"Filter"})]})})}),Object(l.jsx)(_.a,{pagination:!0,highlightOnHover:!0,columns:i,data:b.slice(0,20)})]})};var Y=function(e){return Object(l.jsx)("div",{className:"w-100",children:Object(l.jsx)("footer",{className:"text-center justify-content-between align-items-center py-3 my-4 border-top mb-0",children:Object(l.jsx)("p",{className:"mb-5 text-center",children:"\xa9 2021, GAEA. All Rights Reserved"})})})};var Z=function(){return Object(l.jsxs)("main",{className:"col-md-9 ms-sm-auto col-lg-9",children:[Object(l.jsxs)(k.c,{children:[Object(l.jsx)(k.a,{path:"/",component:function(){return Object(l.jsx)(q,{})},exact:!0}),Object(l.jsx)(k.a,{path:"/search",component:function(){return Object(l.jsx)(X,{})}}),Object(l.jsx)(k.a,{component:V})]}),Object(l.jsx)(Y,{})]})};var $=function(e){return Object(l.jsx)("main",{children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(w,{}),Object(l.jsx)(Z,{})]})})})};c(134);var ee=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)($,{})]})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,141)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))},ce=c(43);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(ce.a,{children:Object(l.jsx)(ee,{})})}),document.getElementById("root")),te()},82:function(e,t,c){}},[[135,1,2]]]);
//# sourceMappingURL=main.5d87d024.chunk.js.map