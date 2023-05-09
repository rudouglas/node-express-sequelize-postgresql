(this["webpackJsonpreact-hooks-crud"]=this["webpackJsonpreact-hooks-crud"]||[]).push([[0],{29:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(22),s=c.n(i),a=c(6),l=c(2),o=(c(28),c(29),c(8)),r=c(7),d=c(3),j=c(23),b=c.n(j).a.create({baseURL:"http://0.0.0.0:10000/api",headers:{"Content-type":"application/json"}}),u={getAll:function(){return b.get("/tutorials")},get:function(e){return b.get("/tutorials/".concat(e))},create:function(e){return b.post("/tutorials",e)},update:function(e,t){return b.put("/tutorials/".concat(e),t)},remove:function(e){return b.delete("/tutorials/".concat(e))},removeAll:function(){return b.delete("/tutorials")},findByTitle:function(e){return b.get("/tutorials?title=".concat(e))}},h=c(0),O=function(){var e={id:null,title:"",description:"",published:!1},t=Object(n.useState)(e),c=Object(d.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(!1),l=Object(d.a)(a,2),j=l[0],b=l[1],O=function(e){var t=e.target,c=t.name,n=t.value;s(Object(r.a)(Object(r.a)({},i),{},Object(o.a)({},c,n)))};return Object(h.jsx)("div",{className:"submit-form",children:j?Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"You submitted successfully!"}),Object(h.jsx)("button",{className:"btn btn-success",onClick:function(){s(e),b(!1)},children:"Add"})]}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"title",children:"Title"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"title",required:!0,value:i.title,onChange:O,name:"title"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"description",children:"Description"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"description",required:!0,value:i.description,onChange:O,name:"description"})]}),Object(h.jsx)("button",{onClick:function(){var e={title:i.title,description:i.description};u.create(e).then((function(e){s({id:e.data.id,title:e.data.title,description:e.data.description,published:e.data.published}),b(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},className:"btn btn-success",children:"Submit"})]})})},m=function(e){var t=Object(l.g)().id,c=Object(l.f)(),i=Object(n.useState)({id:null,title:"",description:"",published:!1}),s=Object(d.a)(i,2),a=s[0],j=s[1],b=Object(n.useState)(""),O=Object(d.a)(b,2),m=O[0],x=O[1];Object(n.useEffect)((function(){t&&function(e){u.get(e).then((function(e){j(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}(t)}),[t]);var p=function(e){var t=e.target,c=t.name,n=t.value;j(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},c,n)))},f=function(e){var t={id:a.id,title:a.title,description:a.description,published:e};u.update(a.id,t).then((function(t){j(Object(r.a)(Object(r.a)({},a),{},{published:e})),console.log(t.data)})).catch((function(e){console.log(e)}))};return Object(h.jsx)("div",{children:a?Object(h.jsxs)("div",{className:"edit-form",children:[Object(h.jsx)("h4",{children:"Tutorial"}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"title",children:"Title"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",value:a.title,onChange:p})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"description",children:"Description"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"description",name:"description",value:a.description,onChange:p})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:Object(h.jsx)("strong",{children:"Status:"})}),a.published?"Published":"Pending"]})]}),a.published?Object(h.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return f(!1)},children:"UnPublish"}):Object(h.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return f(!0)},children:"Publish"}),Object(h.jsx)("button",{className:"badge badge-danger mr-2",onClick:function(){u.remove(a.id).then((function(e){console.log(e.data),c("/tutorials")})).catch((function(e){console.log(e)}))},children:"Delete"}),Object(h.jsx)("button",{type:"submit",className:"badge badge-success",onClick:function(){u.update(a.id,a).then((function(e){console.log(e.data),x("The tutorial was updated successfully!")})).catch((function(e){console.log(e)}))},children:"Update"}),Object(h.jsx)("p",{children:m})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Please click on a Tutorial..."})]})})},x=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(null),l=Object(d.a)(s,2),o=l[0],r=l[1],j=Object(n.useState)(-1),b=Object(d.a)(j,2),O=b[0],m=b[1],x=Object(n.useState)(""),p=Object(d.a)(x,2),f=p[0],g=p[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){u.getAll().then((function(e){i(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))};return Object(h.jsxs)("div",{className:"list row",children:[Object(h.jsx)("div",{className:"col-md-8",children:Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by title",value:f,onChange:function(e){var t=e.target.value;g(t)}}),Object(h.jsx)("div",{className:"input-group-append",children:Object(h.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){u.findByTitle(f).then((function(e){i(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))},children:"Search"})})]})}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("h4",{children:"Tutorials List"}),Object(h.jsx)("ul",{className:"list-group",children:c&&c.map((function(e,t){return Object(h.jsx)("li",{className:"list-group-item "+(t===O?"active":""),onClick:function(){return function(e,t){r(e),m(t)}(e,t)},children:e.title},t)}))}),Object(h.jsx)("button",{className:"m-3 btn btn-sm btn-danger",onClick:function(){u.removeAll().then((function(e){console.log(e.data),v(),r(null),m(-1)})).catch((function(e){console.log(e)}))},children:"Remove All"})]}),Object(h.jsx)("div",{className:"col-md-6",children:o?Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Tutorial"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:Object(h.jsx)("strong",{children:"Title:"})})," ",o.title]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:Object(h.jsx)("strong",{children:"Description:"})})," ",o.description]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:Object(h.jsx)("strong",{children:"Status:"})})," ",o.published?"Published":"Pending"]}),Object(h.jsx)(a.b,{to:"/tutorials/"+o.id,className:"badge badge-warning",children:"Edit"})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Please click on a Tutorial..."})]})})]})};var p=function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(h.jsx)("a",{href:"/tutorials",className:"navbar-brand",children:"bezKoder"}),Object(h.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(a.b,{to:"/tutorials",className:"nav-link",children:"Tutorials"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(a.b,{to:"/add",className:"nav-link",children:"Add"})})]})]}),Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",element:Object(h.jsx)(x,{})}),Object(h.jsx)(l.a,{path:"/tutorials",element:Object(h.jsx)(x,{})}),Object(h.jsx)(l.a,{path:"/add",element:Object(h.jsx)(O,{})}),Object(h.jsx)(l.a,{path:"/tutorials/:id",element:Object(h.jsx)(m,{})})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(a.a,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.74cfec05.chunk.js.map