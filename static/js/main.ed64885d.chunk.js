(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{16:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return c}));var r=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce((function(e,n){return e||n(t)}),void 0)}},a=function(t){if(!t)return"Field is required"},c=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c}));var r=function(t){return t.auth.isAuth},a=function(t){return t.auth.login},c=function(t){return t.auth.userId}},29:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return l}));var r=n(3),a=n(32),c=n(1),i=(n(0),n(38)),u=n.n(i),s=function(t){t.input;var e=t.meta,n=e.touched,r=e.error,i=(t.child,Object(a.a)(t,["input","meta","child"])),s=n&&r;return Object(c.jsxs)("div",{className:u.a.formControl+" "+(s?u.a.error:""),children:[Object(c.jsx)("div",{children:i.children}),s&&Object(c.jsx)("div",{children:Object(c.jsx)("span",{children:r})})]})},o=function(t){var e=t.input,n=(t.meta,t.child,Object(a.a)(t,["input","meta","child"]));return Object(c.jsx)(s,Object(r.a)(Object(r.a)({},t),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},e),n))}))},l=function(t){var e=t.input,n=(t.meta,t.child,Object(a.a)(t,["input","meta","child"]));return Object(c.jsx)(s,Object(r.a)(Object(r.a)({},t),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},e),n))}))}},30:function(t,e,n){t.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},31:function(t,e,n){t.exports={header:"Header_header__1VCKf",logo:"Header_logo__3_SJs",loginBlock:"Header_loginBlock__6mma5"}},38:function(t,e,n){t.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue"}},39:function(t,e,n){"use strict";var r=n(1),a=(n(0),n(56)),c=n.n(a);e.a=function(){return Object(r.jsx)("div",{className:c.a.loader})}},40:function(t,e,n){"use strict";n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return x})),n.d(e,"c",(function(){return _})),n.d(e,"f",(function(){return w})),n.d(e,"g",(function(){return S})),n.d(e,"e",(function(){return y}));var r=n(4),a=n.n(r),c=n(7),i=n(18),u=n(3),s=n(8),o="social/profile/ADD_POST",l="social/profile/DELETE_POST",f="social/profile/SET_USER_PROFILE",d="social/profile/SET_IS_FETCHING",p="social/profile/SET_PROFILE_STATUS",j="social/profile/UPDATE_PHOTO_SUCCESS",b={posts:[{id:1,message:"happy ny!",likes:3},{id:2,message:"it is my first post",likes:5}],profile:null,isFetching:!1,profileStatus:""},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(u.a)(Object(u.a)({},t),{},{posts:[].concat(Object(i.a)(t.posts),[{id:3,message:e.postText,likes:0}])});case f:return Object(u.a)(Object(u.a)({},t),{},{profile:e.profile});case l:return Object(u.a)(Object(u.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!==e.id}))});case d:return Object(u.a)(Object(u.a)({},t),{},{isFetching:e.isFetching});case p:return Object(u.a)(Object(u.a)({},t),{},{profileStatus:e.profileStatus});case j:return Object(u.a)(Object(u.a)({},t),{},{profile:Object(u.a)(Object(u.a)({},t.profile),{},{photos:e.photos})});default:return t}},O=function(t){return{type:o,postText:t}},g=function(t){return{type:d,isFetching:t}},m=function(t){return{type:p,profileStatus:t}},v=function(t){return{type:j,data:t}},x=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(g(!0)),e.next=3,s.b.getProfile(t);case 3:r=e.sent,n({type:f,profile:r}),n(g(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getProfileStatus(t);case 2:r=e.sent,n(m(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.updateProfileStatus(t);case 3:0===(r=e.sent).data.resultCode?n(m(t)):r.data.messages.length&&alert(r.data.messages[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},S=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.uploadPhoto(t);case 2:0===(r=e.sent).resultCode?n(v(r.data.photos)):r.messages.length&&alert(r.messages[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n,r){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r().auth.userId,e.next=3,s.b.saveProfile(t);case 3:if(0!==(i=e.sent).resultCode){e.next=8;break}n(x(c)),e.next=12;break;case 8:if(!i.messages.length){e.next=12;break}return alert(i.messages[0]),e.next=12,Promise.reject(i.messages[0]);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},52:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s}));var r=n(18),a=n(3),c="social/dialogs/SEND_MESSAGE",i={dialogs:[{id:1,name:"Dima"},{id:2,name:"Andrew"}],messages:[{id:1,message:"HI!"},{id:2,message:"YO!"},{id:3,message:"Vlad! Happy NY!!"},{id:4,message:"Hi, how r u?"}]},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:return Object(a.a)(Object(a.a)({},t),{},{messages:[].concat(Object(r.a)(t.messages),[{id:5,message:e.messageText}])});default:return t}},s=function(t){return{type:c,messageText:t}}},53:function(t,e,n){"use strict";n.d(e,"d",(function(){return g})),n.d(e,"b",(function(){return S})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return E}));var r=n(4),a=n.n(r),c=n(7),i=n(18),u=n(3),s=n(8),o=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(u.a)(Object(u.a)({},t),r):t}))},l="social/users/FOLLOW",f="social/users/UNFOLLOW",d="social/users/SET_USERS",p="social/users/SET_TOTAL_USERS_COUNT",j="social/users/SET_CURRENT_PAGE",b="social/users/SET_IS_FETCHING",h="social/users/SET_FOLLOWING_IN_PROGRESS",O={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(u.a)(Object(u.a)({},t),{},{users:o(t.users,e.userId,"id",{followed:!0})});case f:return Object(u.a)(Object(u.a)({},t),{},{users:o(t.users,e.userId,"id",{followed:!1})});case d:return Object(u.a)(Object(u.a)({},t),{},{users:e.users});case p:return Object(u.a)(Object(u.a)({},t),{},{totalUsersCount:e.totalUsersCount});case j:return Object(u.a)(Object(u.a)({},t),{},{currentPage:e.currentPage});case b:return Object(u.a)(Object(u.a)({},t),{},{isFetching:e.isFetching});case h:return Object(u.a)(Object(u.a)({},t),{},{followingInProgress:e.isFetching?[].concat(Object(i.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!==e.userId}))});default:return t}},m=function(t){return{type:l,userId:t}},v=function(t){return{type:f,userId:t}},x=function(t){return{type:b,isFetching:t}},_=function(t,e){return{type:h,isFetching:t,userId:e}},w=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_(!0,n)),t.next=3,r(n);case 3:0===t.sent.resultCode&&e(c(n)),e(_(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),S=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r({type:j,currentPage:e}),n.next=4,s.d.getUsers(t,e);case 4:c=n.sent,r((i=c.items,{type:d,users:i})),r((a=c.totalCount,{type:p,totalUsersCount:a})),r(x(!1));case 8:case"end":return n.stop()}var a,i}),n)})));return function(t){return n.apply(this,arguments)}}()},y=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(n,t,s.d.follow,m);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(n,t,s.d.unfollow,v);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},56:function(t,e,n){t.exports={loader:"Preloader_loader__wv7rF",spin:"Preloader_spin__1PEvw"}},60:function(t,e,n){},64:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s}));var r=n(55),a=r.create({withCredentials:!0,headers:{"API-KEY":"5a02e0ce-1492-47cd-b69a-6445510cc320"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.get("users?count=".concat(t,"&page=").concat(e)).then((function(t){return t.data}))},follow:function(t){return a.post("follow/".concat(t)).then((function(t){return t.data}))},unfollow:function(t){return a.delete("follow/".concat(t)).then((function(t){return t.data}))}},i={me:function(){return a.get("auth/me").then((function(t){return t.data}))},login:function(t){return a.post("auth/login",t).then((function(t){return t.data}))},logout:function(){return a.delete("auth/login").then((function(t){return t.data}))}},u={getProfile:function(t){return a.get("profile/".concat(t)).then((function(t){return t.data}))},getProfileStatus:function(t){return a.get("profile/status/".concat(t)).then((function(t){return t.data}))},updateProfileStatus:function(t){return a.put("profile/status",{status:t}).then((function(t){return t}))},uploadPhoto:function(t){var e=new FormData;return e.append("image",t),a.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return t.data}))},saveProfile:function(t){return a.put("profile",t).then((function(t){return t.data}))}},s={getCaptchaUrl:function(){return a.get("security/get-captcha-url").then((function(t){return t}))}}},88:function(t,e,n){"use strict";n.r(e);var r=n(1),a=(n(60),n(27)),c=n.n(a),i=n(0),u=n.n(i),s=n(23),o=n(24),l=n(26),f=n(25),d=(n(64),n(30)),p=n.n(d),j=n(14),b=function(){return Object(r.jsx)("nav",{className:p.a.nav,children:[{to:"/profile",name:"Profile"},{to:"/dialogs",name:"Dialogs"},{to:"/users",name:"Users"},{to:"/settings",name:"Settings"}].map((function(t){return Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(j.b,{to:t.to,activeClassName:p.a.active,children:t.name})},t.to)}))})},h=function(){return Object(r.jsx)("div",{children:"news"})},O=function(){return Object(r.jsx)("div",{children:"music"})},g=function(){return Object(r.jsx)("div",{children:"settings"})},m=n(31),v=n.n(m),x=n.p+"static/media/Ava.33982d13.jpg",_=function(t){return Object(r.jsxs)("div",{className:v.a.header,children:[Object(r.jsx)("img",{className:v.a.logo,src:x,alt:"logo"}),Object(r.jsx)("div",{className:v.a.loginBlock,children:t.isAuth?Object(r.jsxs)("div",{children:[t.login,Object(r.jsx)("button",{onClick:t.logout,children:"Logout"})]}):Object(r.jsx)(j.b,{to:"/login",children:"Login"})})]})},w=n(15),S=n(4),y=n.n(S),E=n(7),C=n(3),P=n(8),k="social/auth/SET_AUTH_USER_DATA",I="social/auth/GET_CAPTCHA_URL_SUCCESS",T={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},U=function(t,e,n,r){return{type:k,payload:{userId:t,email:e,login:n,isAuth:r}}},A=function(t){return{type:I,captchaUrl:t}},N=function(){return function(){var t=Object(E.a)(y.a.mark((function t(e){var n,r,a,c,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.me();case 2:0===(n=t.sent).resultCode&&(r=n.data,a=r.id,c=r.email,i=r.login,e(U(a,c,i,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(){return function(){var t=Object(E.a)(y.a.mark((function t(e){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.c.getCaptchaUrl();case 2:n=t.sent,r=n.data.url,e(A(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=n(20),D=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(_,{logout:this.props.logout,isAuth:this.props.isAuth,login:this.props.login})}}]),n}(u.a.Component),R=Object(w.b)((function(t){return{isAuth:Object(L.a)(t),login:Object(L.b)(t)}}),{logout:function(){return function(){var t=Object(E.a)(y.a.mark((function t(e){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.logout();case 2:0===(n=t.sent).resultCode?e(U(null,null,null,!1)):n.messages.length&&alert(n.messages[0]);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(D),z=n(19),H=n(29),G=n(16),M=n(6),B=function(t){var e=t.onSubmit,n=t.captchaUrl;return Object(r.jsx)(z.b,{onSubmit:e,children:function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,name:"LoginForm",children:[Object(r.jsx)("div",{children:Object(r.jsx)(z.a,{name:"email",placeholder:"Email",component:H.a,validate:Object(G.a)(G.c,Object(G.b)(50))})}),Object(r.jsx)("div",{children:Object(r.jsx)(z.a,{name:"password",placeholder:"Password",type:"password",component:H.a,validate:Object(G.a)(G.c,Object(G.b)(50))})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(z.a,{name:"rememberMe",type:"checkbox",component:H.a})," remember me"]}),n&&Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:n,alt:"captcha"}),Object(r.jsx)("div",{children:Object(r.jsx)(z.a,{name:"captcha",type:"text",component:"input"})})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})}})},W=Object(w.b)((function(t){return{isAuth:Object(L.a)(t),captchaUrl:t.auth.captchaUrl}}),{login:function(t){return function(){var e=Object(E.a)(y.a.mark((function e(n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.login(t);case 2:0===(r=e.sent).resultCode?(n(N()),n(A(null))):(10===r.resultCode&&n(F()),r.messages.length&&alert(r.messages[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(t){var e=t.login,n=t.isAuth,a=t.captchaUrl;return n?Object(r.jsx)(M.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"LOGIN"}),Object(r.jsx)(B,{onSubmit:function(t){e(t)},captchaUrl:a})]})})),J=n(13),V="social/app/INITIALIZED_SUCCESS",Y={initialized:!1,globalError:null},K=n(39),X=n(40),q=n(52),Z=n(53),Q=n(57),$=Object(J.c)({profilePage:X.d,dialogsPage:q.a,usersPage:Z.d,auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return Object(C.a)(Object(C.a)({},t),e.payload);case I:return Object(C.a)(Object(C.a)({},t),{},{captchaUrl:e.captchaUrl});default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case V:return Object(C.a)(Object(C.a)({},t),{},{initialized:!0});default:return t}}}),tt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,et=Object(J.e)($,tt(Object(J.a)(Q.a)));window.store=et.getState();var nt=et,rt=function(t){var e=Object(r.jsx)("div",{children:"Loading..."});return function(n){return Object(r.jsx)(u.a.Suspense,{fallback:e,children:Object(r.jsx)(t,Object(C.a)({},n))})}},at=u.a.lazy((function(){return n.e(5).then(n.bind(null,105))})),ct=u.a.lazy((function(){return n.e(3).then(n.bind(null,103))})),it=u.a.lazy((function(){return n.e(4).then(n.bind(null,104))})),ut=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.initializeApp)()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(R,{}),Object(r.jsx)(b,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(M.a,{exact:!0,from:"/",to:"/profile"}),Object(r.jsx)(M.b,{render:rt(at),path:"/dialogs"}),Object(r.jsx)(M.b,{render:rt(ct),path:"/profile/:userId?"}),Object(r.jsx)(M.b,{render:rt(it),path:"/users"}),Object(r.jsx)(M.b,{render:function(){return Object(r.jsx)(h,{})},path:"/news"}),Object(r.jsx)(M.b,{render:function(){return Object(r.jsx)(O,{})},path:"/music"}),Object(r.jsx)(M.b,{render:function(){return Object(r.jsx)(g,{})},path:"/settings"}),Object(r.jsx)(M.b,{render:function(){return Object(r.jsx)(W,{})},path:"/login"})]})]}):Object(r.jsx)(K.a,{})}}]),n}(u.a.Component),st=Object(J.d)(M.f,Object(w.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(N());Promise.all([e]).then((function(){t({type:V})}))}}}))(ut),ot=function(t){return Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(j.a,{children:Object(r.jsx)(w.a,{store:nt,children:Object(r.jsx)(st,{})})})})};c.a.render(Object(r.jsx)(ot,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.ed64885d.chunk.js.map