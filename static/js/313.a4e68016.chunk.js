"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[313],{3313:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t=r(9439),s=r(2791),a=r(1002);function i(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function l(e){i(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,a.Z)(e)&&"[object Date]"===n?new Date(e.getTime()):"number"===typeof e||"[object Number]"===n?new Date(e):("string"!==typeof e&&"[object String]"!==n||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}var o={list:"FriendsCards_list__A0P3X",card:"FriendsCards_card__2nOll",title:"FriendsCards_title__3L7B8",columnContainer:"FriendsCards_columnContainer__bwgu3",imgContainer:"FriendsCards_imgContainer__K40SA",img:"FriendsCards_img__iz75W",info:"FriendsCards_info__c4Na2",infoItem:"FriendsCards_infoItem__ludOp",label:"FriendsCards_label__-v44Z",labelNoInfo:"FriendsCards_labelNoInfo__AgTvE",time:"FriendsCards_time__yDRZ-",text:"FriendsCards_text__LD4VJ",textNoInfo:"FriendsCards_textNoInfo__QGOva",workingHoursBlock:"FriendsCards_workingHoursBlock__C9IVu",tableColumn:"FriendsCards_tableColumn__G9Q6j"},c=r(3329);function d(e){var n=e.sponsors,r=(0,s.useState)(null),a=(0,t.Z)(r,2),d=a[0],u=a[1],m=new Date,f=function(e){return i(1,arguments),l(e).getDay()}(m),h=null;n.workDays&&(h=n.workDays[f]);var _=h&&function(e,n){i(2,arguments);var r=l(e).getTime(),t=l(n.start).getTime(),s=l(n.end).getTime();if(!(t<=s))throw new RangeError("Invalid interval");return r>=t&&r<=s}(m,{start:new Date(1970,0,1,parseInt(h.from.split(":")[0]),parseInt(h.from.split(":")[1])),end:new Date(1970,0,1,parseInt(h.to.split(":")[0]),parseInt(h.to.split(":")[1]))}),p=function(e){return["MN","TU","WE","TH","FR","SA","SU"][e]},x=function(e){if(!e)return"";var n=e.split(":").map((function(e){return parseInt(e,10)})),r=(0,t.Z)(n,2),s=r[0],a=r[1];return"".concat(s,":").concat(a.toString().padStart(2,"0"))};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{className:o.list,children:n.map((function(e,n){var r=e._id,t=e.title,s=e.url,a=e.addressUrl,i=e.imageUrl,l=e.address,m=e.workDays,f=e.phone,h=e.email;return(0,c.jsxs)("li",{className:o.card,children:[(0,c.jsx)("a",{href:s,className:o.title,target:"blanc",children:t}),(0,c.jsxs)("div",{className:o.columnContainer,children:[(0,c.jsx)("div",{className:o.imgContainer,children:(0,c.jsx)("img",{src:i||"https://static.vecteezy.com/system/resources/previews/000/618/739/original/cute-little-kitten-vector.jpg",alt:"Logo",className:o.img})}),(0,c.jsxs)("ul",{className:o.info,children:[(0,c.jsxs)("li",{className:o.infoItem,onClick:function(){return function(e){u(e===d?null:e)}(n)},children:[m?(0,c.jsxs)("div",{className:o.time,children:[(0,c.jsx)("p",{className:o.label,children:"Time:"}),_?(0,c.jsx)("p",{className:o.text,children:"Is currently open"}):(0,c.jsx)("p",{className:o.text,children:"Closed"})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:o.labelNoInfo,children:"Time:"}),(0,c.jsx)("p",{className:o.textNoInfo,children:"No information"})]}),m&&n===d&&(0,c.jsx)("div",{className:o.workingHoursBlock,children:(0,c.jsx)("table",{className:o.workingHoursTable,children:(0,c.jsx)("tbody",{children:m.map((function(e,n){return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:o.tableColumn,children:p(n)}),(0,c.jsxs)("td",{children:[x(e.from)," - ",x(e.to)]})]},n)}))})})})]}),(0,c.jsxs)("li",{className:o.infoItem,children:[(0,c.jsx)("p",{className:o.label,children:"Adress:"}),(0,c.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:o.text,children:l||"website only"})]}),h&&(0,c.jsxs)("li",{className:o.infoItem,children:[(0,c.jsx)("p",{className:o.label,children:"Email:"}),(0,c.jsx)("a",{href:"mailto:{email}",className:o.text,children:h})]}),f&&(0,c.jsxs)("li",{className:o.infoItem,children:[(0,c.jsx)("p",{className:o.label,children:"Phone:"}),(0,c.jsx)("a",{href:"tel:{phone}",className:o.text,children:f})]})]})]})]},r)}))})})}var u=r(5861),m=r(4687),f=r.n(m),h=r(1243),_=function(){var e=(0,u.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.get("/friends");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=_,x=r(6673),g="OurFriendsPage_container__YtCyY",j="OurFriendsPage_title__b3yc2",N=r(6391);function b(){var e=(0,s.useState)([]),n=(0,t.Z)(e,2),r=n[0],a=n[1],i=(0,s.useState)(!1),l=(0,t.Z)(i,2),o=l[0],u=l[1];return(0,s.useEffect)((function(){u(!0),p().then((function(e){a(e),u(!1)})).catch((function(e){console.log(e),u(!1)}))}),[]),o?(0,c.jsx)(x.Z,{}):(0,c.jsx)(N.Z,{children:(0,c.jsxs)("div",{className:g,children:[(0,c.jsx)("h1",{className:j,children:"Our Friends"}),r.length>0&&(0,c.jsx)(d,{sponsors:r})]})})}}}]);
//# sourceMappingURL=313.a4e68016.chunk.js.map