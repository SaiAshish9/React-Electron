(this["webpackJsonpelectron-react"]=this["webpackJsonpelectron-react"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),i=c(4),o=c.n(i),a=(c(10),c(11),c(3)),l=function(){return Object(n.jsx)("svg",{className:"icon-file",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Object(n.jsx)("path",{d:"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"})})},j=function(){return Object(n.jsx)("svg",{className:"icon-folder",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(n.jsx)("path",{d:"M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z"})})},d=function(){return Object(n.jsx)("svg",{className:"icon-folder",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(n.jsx)("path",{d:"M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z"})})},u=function(e){var t=e.files,c=e.onBack,r=e.onOpen;return Object(n.jsx)("table",{class:"table",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{className:"clickable",onClick:c,children:[Object(n.jsx)("td",{className:"icon-row",children:Object(n.jsx)(d,{})}),Object(n.jsx)("td",{children:"..."}),Object(n.jsx)("td",{})]}),t.map((function(e){var t=e.name,c=e.directory,s=e.size;return Object(n.jsxs)("tr",{className:"clickable",onClick:function(){return c&&r(t)},children:[Object(n.jsx)("td",{className:"icon-row",children:c?Object(n.jsx)(j,{}):Object(n.jsx)(l,{})}),Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("span",{className:"float-end",children:s})})]})}))]})})},h=window.require("fs"),b=window.require("path"),m=window.require("@electron/remote").app,x=function(e){var t=Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]};var O=function(){var e=Object(r.useState)(m.getAppPath()),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(r.useMemo)((function(){return h.readdirSync(c).map((function(e){var t,n=h.statSync(b.join(c,e));return{name:e,size:n.isFile()?x(null!==(t=n.size)&&void 0!==t?t:0):null,directory:n.isDirectory()}})).sort((function(e,t){return e.directory===t.directory?e.name.localeCompare(t.name):e.directory?-1:1}))}),[c]),o=Object(r.useState)(""),l=Object(a.a)(o,2),j=l[0],d=l[1],O=i.filter((function(e){return e.name.startsWith(j)}));return Object(n.jsxs)("div",{className:"container mt-2",children:[Object(n.jsx)("h4",{children:c}),Object(n.jsx)("div",{className:"form-group mt-4 mb-2",children:Object(n.jsx)("input",{value:j,onChange:function(e){return d(e.target.value)},className:"form-control form-control-sm",placeholder:"File search"})}),Object(n.jsx)(u,{files:O,onBack:function(){return s(b.dirname(c))},onOpen:function(e){return s(b.join(c,e))}})]})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e5ae7375.chunk.js.map