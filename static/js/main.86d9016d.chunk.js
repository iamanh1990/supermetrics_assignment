(this.webpackJsonphomework_supermetrics=this.webpackJsonphomework_supermetrics||[]).push([[0],{46:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(17),a=s.n(c),r=s(7),o=s(12),i=s(32),u=(s(46),s(2)),l=s(1),j=function(){return Object(l.jsxs)("div",{className:"container__box--home",children:[Object(l.jsx)("h1",{children:"Welcome to the App! Please click the button to continue"}),Object(l.jsx)(r.b,{className:"btn",to:"/login",children:"Go"})]})},d=s(9),b=s.n(d),m=s(11),p=s(3),O=s(18),h=s.n(O),f=function(){var e=Object(m.a)(b.a.mark((function e(t){var s,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.name,n=t.email,e.next=3,h.a.post("".concat("https://api.supermetrics.com/assignment","/register"),{client_id:"ju16a6m81mhid5ue1z3v2g0uh",email:n,name:s});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x="LOGGED_IN_USER",v="UPLOAD_POST_CREATORS",_=function(){var e=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("https://api.supermetrics.com/assignment","/posts"),{params:{sl_token:t,page:2}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=s(14),S=s(22),N=function(e){for(var t={},s=0;s<e.length;s++)t[e[s].from_id]?t[e[s].from_id]=Object(S.a)(Object(S.a)({},t[e[s].from_id]),{},{postsCount:t[e[s].from_id].postsCount+1,posts:[].concat(Object(g.a)(t[e[s].from_id].posts),[e[s]])}):t[e[s].from_id]={id:e[s].from_id,name:e[s].from_name,postsCount:1,posts:[e[s]]};return Object.values(t).sort((function(e,t){return e.name.localeCompare(t.name)}))},y=function(){var e=Object(o.b)(),t=Object(u.f)(),s=Object(n.useState)(""),c=Object(p.a)(s,2),a=c[0],r=c[1],i=Object(n.useState)(""),j=Object(p.a)(i,2),d=j[0],O=j[1],h=Object(n.useState)(""),g=Object(p.a)(h,2),S=g[0],y=g[1],w=Object(n.useState)(),C=Object(p.a)(w,2),k=C[0],E=C[1],D=function(){var s=Object(m.a)(b.a.mark((function s(n){var c,r,o,i,u,l,j;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(n.preventDefault(),a){s.next=6;break}return y("Name is required!"),s.abrupt("return");case 6:y("");case 7:if(d){s.next=12;break}return E("Email is required!"),s.abrupt("return");case 12:E("");case 13:return s.prev=13,s.next=16,f({name:a,email:d});case 16:return c=s.sent,r=c.data.data,o=r.client_id,i=r.sl_token,e({type:x,payload:{client_id:o,sl_token:i}}),s.next=21,_(i);case 21:u=s.sent,l=u.data.data.posts,j=N(l),e({type:v,payload:j}),t("/posts/".concat(j[0].id)),s.next=31;break;case 28:s.prev=28,s.t0=s.catch(13),console.log("From login page",s.t0);case 31:case"end":return s.stop()}}),s,null,[[13,28]])})));return function(e){return s.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"container__box--login",children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("form",{className:"form",onSubmit:D,children:[Object(l.jsxs)("div",{className:"form-control",children:[S&&Object(l.jsx)("span",{className:"error",children:S}),Object(l.jsx)("input",{type:"text",name:a,onChange:function(e){y(""),r(e.target.value)},className:"form-input",placeholder:"Enter your name..."})]}),Object(l.jsxs)("div",{className:"form-control",children:[k&&Object(l.jsx)("span",{className:"error",children:k}),Object(l.jsx)("input",{type:"email",value:d,onChange:function(e){E(""),O(e.target.value)},className:"form-input",placeholder:"Enter your email..."})]}),Object(l.jsx)("button",{type:"submit",className:"btn",children:"Go"})]})]})},w=function(e){var t=e.users,s=void 0===t?[]:t,c=e.usersSearch,a=e.setSort,r=e.setUsersSearch,o=e.setPostsSearch,i=Object(u.g)().userId,j=Object(u.f)(),d=Object(n.useState)([]),b=Object(p.a)(d,2),m=b[0],O=b[1],h=Object(n.useState)(void 0),f=Object(p.a)(h,2),x=f[0],v=f[1];Object(n.useEffect)((function(){O(s)}),[s]);return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"sidebar__search",children:Object(l.jsx)("input",{value:c,onChange:function(e){var t=e.target.value.toLowerCase();r(t),clearTimeout(x),v(setTimeout((function(){O(s);var e=s.filter((function(e){return e.name.toLowerCase().includes(t)}));O(e)}),500))},type:"text",placeholder:"Search user..."})}),Object(l.jsx)("div",{className:"sidebar__container",children:m.map((function(e){return Object(l.jsxs)("div",{className:"row sidebar__item ".concat(i===e.id&&"active"),onClick:function(){return function(e){j("/posts/".concat(e.id)),a("ascending"),O(s),r(""),o("")}(e)},children:[Object(l.jsx)("div",{className:"col-8 sidebar__item--name",children:e.name}),Object(l.jsx)("div",{className:"col-4 sidebar__item--count",children:e.postsCount})]},e.id)}))})]})},C=function(e){var t,s=e.post,n=void 0===s?{}:s;return Object(l.jsxs)("div",{className:"post__container",children:[Object(l.jsxs)("div",{className:"post__header",children:[Object(l.jsx)("div",{className:"post__time",children:(t=new Date(n.created_time),"".concat(new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)," ").concat(t.getDate(),", ").concat(t.getUTCFullYear()," ").concat(t.toLocaleTimeString()))}),Object(l.jsxs)("div",{className:"post__author",children:["Author: ",n.from_name]})]}),Object(l.jsx)("div",{className:"post__message",children:n.message})]})},k=function(e){return e.sort((function(e,t){return new Date(e.created_time)-new Date(t.created_time)}))},E=function(e){var t=e.posts,s=void 0===t?[]:t,c=e.sort,a=e.setSort,r=e.postsSearch,o=e.setPostsSearch,i=Object(n.useState)([]),u=Object(p.a)(i,2),j=u[0],d=u[1],b=Object(n.useState)(void 0),m=Object(p.a)(b,2),O=m[0],h=m[1];Object(n.useEffect)((function(){if("ascending"===c){var e=k(j);d(Object(g.a)(e))}else if("descending"===c){var t=function(e){return e.sort((function(e,t){return new Date(t.created_time)-new Date(e.created_time)}))}(j);d(Object(g.a)(t))}}),[c]),Object(n.useEffect)((function(){d(s)}),[s]);return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsxs)("div",{className:"posts__cta__container",children:[Object(l.jsxs)("div",{className:"posts__sort",children:[Object(l.jsx)("button",{type:"button",disabled:"ascending"===c&&!0,onClick:function(){return a("ascending")},children:"ASC"}),Object(l.jsx)("button",{type:"button",disabled:"descending"===c&&!0,onClick:function(){return a("descending")},children:"DESC"})]}),Object(l.jsx)("div",{className:"posts__search",children:Object(l.jsx)("input",{type:"text",value:r,placeholder:"Search posts...",onChange:function(e){return function(e){var t=e.target.value.toLowerCase();o(t),clearTimeout(O),h(setTimeout((function(){d(s);var e=s.filter((function(e){return e.message.toLowerCase().includes(t)}));d(e)}),500))}(e)}})})]}),j.map((function(e){return Object(l.jsx)(C,{post:e},e.id)}))]})},D=function(){var e=Object(u.g)().userId,t=Object(o.c)((function(e){return e.postCreators})),s=Object(n.useState)([]),c=Object(p.a)(s,2),a=c[0],i=c[1],j=Object(n.useState)([]),d=Object(p.a)(j,2),b=d[0],m=d[1],O=Object(n.useState)("ascending"),h=Object(p.a)(O,2),f=h[0],x=h[1],v=Object(n.useState)(""),_=Object(p.a)(v,2),g=_[0],S=_[1],N=Object(n.useState)(""),y=Object(p.a)(N,2),C=y[0],D=y[1];return Object(n.useEffect)((function(){i(t)}),[]),Object(n.useEffect)((function(){var s=t.find((function(t){return t.id===e}));s&&m(k(s.posts))}),[e]),Object(l.jsxs)("div",{className:"container__box--post",children:[Object(l.jsxs)("div",{className:"posts__cta__container",children:[Object(l.jsx)(r.b,{className:"btn",to:"/login",children:"Back"}),Object(l.jsx)(r.b,{className:"btn",to:"/",children:"Home"})]}),Object(l.jsx)("h1",{children:"This is the posts page"}),Object(l.jsx)("div",{className:"row",children:b.length>0?Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)(w,{users:a,usersSearch:g,setSort:x,setUsersSearch:S,setPostsSearch:D})}),Object(l.jsx)("div",{className:"col-8",children:Object(l.jsx)(E,{posts:b,sort:f,setSort:x,postsSearch:C,setPostsSearch:D})})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"There is no post to show yet or your token is expired. Please Login again to continue to use the App."}),Object(l.jsx)(r.b,{className:"btn",to:"/login",children:"Login"})]})})]})};var T=function(){return Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/",element:Object(l.jsx)(j,{})}),Object(l.jsx)(u.a,{path:"/login",element:Object(l.jsx)(y,{})}),Object(l.jsx)(u.a,{path:"/posts/:userId",element:Object(l.jsx)(D,{})})]})},L=s(8),P=s(21),A=s(33),F=s.n(A),I=s(35),U=s(34),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,s=t.type,n=t.payload;return s===x?n:e},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,s=t.type,n=t.payload;return s===v?n:e},q=Object(L.combineReducers)({user:G,postCreators:R}),B={key:"supermetrics",storage:F.a},J=Object(P.a)(B,q),W=[I.a],z=Object(L.createStore)(J,{},Object(U.composeWithDevTools)(L.applyMiddleware.apply(void 0,W))),H=Object(P.b)(z);a.a.render(Object(l.jsx)(o.a,{store:z,children:Object(l.jsx)(i.a,{loading:null,persistor:H,children:Object(l.jsx)(r.a,{basename:"/supermetrics_assignment",children:Object(l.jsx)(T,{})})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.86d9016d.chunk.js.map