(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[4],{263:function(e,s,t){"use strict";t.d(s,"a",(function(){return u}));var a=t(1),n=t(31),i=t(2),c=(t(0),t(35)),o=t(23),r=t(68),d=function(e){return{isAuth:Object(r.b)(e)}};function u(e){return Object(o.b)(d)((function(s){s.isAuth;var t=Object(n.a)(s,["isAuth"]);return s.isAuth?Object(i.jsx)(e,Object(a.a)({},t)):Object(i.jsx)(c.a,{to:"/login"})}))}},265:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__-2Tiq",dialog:"Dialogs_dialog__1NKvi",active:"Dialogs_active__aFoJ-"}},266:function(e,s,t){e.exports={dialogs:"DialogItem_dialogs__sIfQj",dialog:"DialogItem_dialog__37ti9",active:"DialogItem_active__28sA1"}},295:function(e,s,t){"use strict";t.r(s);var a,n=t(10),i=t(12),c=t(13),o=t(14),r=t(2),d=t(128),u=t(0),g=t.n(u),l=t(265),j=t.n(l),b=t(266),m=t.n(b),O=t(52),v=function(e){var s=e.id,t=e.name,a="/dialogs/".concat(s);return Object(r.jsx)("div",{className:"".concat(m.a.dialog," ").concat(m.a.active),children:Object(r.jsx)(O.b,{to:a,activeClassName:m.a.active,children:t})})},x=function(e){var s=e.message;return Object(r.jsx)("div",{children:s})},f=t(6),h=t(42);!function(e){e.messageText="messageText"}(a||(a={}));var _=g.a.memo((function(e){var s=e.sendMessage,t=Object(f.a)({},a.messageText,"");return Object(r.jsx)(h.d,{onSubmit:function(e,t){var a=t.setSubmitting;s(e),a(!1)},initialValues:t,children:function(e){var s=e.isSubmitting;return Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.b,{component:"textarea",name:a.messageText}),Object(r.jsx)(h.a,{name:a.messageText,component:"div"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",disabled:s,children:"Send"})})]})}})})),p=function(e){var s=e.messages,t=e.sendMessage,a=e.dialogs,n=s.map((function(e){return Object(r.jsx)(x,{message:e.message},e.id)})),i=a.map((function(e){return Object(r.jsx)(v,{name:e.name,id:e.id},e.id)}));return Object(r.jsxs)("div",{className:j.a.dialogs,children:[Object(r.jsx)("div",{className:j.a.dialogsItems,children:i}),Object(r.jsxs)("div",{className:j.a.messages,children:[n,Object(r.jsx)(_,{sendMessage:t})]})]})},M=t(23),D=t(57),N=function(e){return e.dialogsPage.dialogs},T=function(e){return e.dialogsPage.messages},A=t(263),I=function(e){Object(c.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,s=e.messages,t=e.dialogs,a=e.sendMessage;return Object(r.jsx)(p,{messages:s,dialogs:t,sendMessage:a})}}]),t}(g.a.Component);s.default=Object(D.d)(Object(M.b)((function(e){return{dialogs:N(e),messages:T(e)}}),{sendMessage:d.a.sendMessage}),A.a)(I)}}]);
//# sourceMappingURL=4.9d2bb005.chunk.js.map