(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[5],{104:function(e,s,a){"use strict";a.r(s);var t,n=a(23),i=a(24),c=a(26),o=a(25),r=a(1),d=a(52),g=a(0),u=a.n(g),l=a(92),j=a.n(l),m=a(93),b=a.n(m),O=a(14),_=function(e){var s=e.id,a=e.name;return Object(r.jsx)("div",{className:"".concat(b.a.dialog," ").concat(b.a.active),children:Object(r.jsx)(O.b,{to:"/dialogs/"+s,activeClassName:b.a.active,children:a})})},x=a(94),f=a.n(x),v=function(e){var s=e.message;return Object(r.jsx)("div",{className:f.a.message,children:s})},h=a(19),p=a(29),D=a(16);!function(e){e.messageText="messageText"}(t||(t={}));var M=function(e){var s=e.onSubmit;return Object(r.jsx)(h.b,{onSubmit:s,children:function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,name:"AddMessageForm",children:[Object(r.jsx)("div",{children:Object(r.jsx)(h.a,{name:t.messageText,component:p.b,placeholder:"Enter ur msg",validate:Object(D.a)(D.c,Object(D.b)(100))})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Send"})})]})}})},A=function(e){var s=e.messages,a=e.sendMessage,t=e.dialogs,n=s.map((function(e){return Object(r.jsx)(v,{message:e.message},e.id)})),i=t.map((function(e){return Object(r.jsx)(_,{name:e.name,id:e.id},e.id)}));return Object(r.jsxs)("div",{className:j.a.dialogs,children:[Object(r.jsx)("div",{className:j.a.dialogsItems,children:i}),Object(r.jsxs)("div",{className:j.a.messages,children:[n,Object(r.jsx)(M,{onSubmit:function(e){a(e.messageText)}})]})]})},S=a(15),N=a(13),k=function(e){return e.dialogsPage.dialogs},w=function(e){return e.dialogsPage.messages},I=a(91),T=function(e){Object(c.a)(a,e);var s=Object(o.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,s=e.messages,a=e.dialogs,t=e.sendMessage;return Object(r.jsx)(A,{messages:s,dialogs:a,sendMessage:t})}}]),a}(u.a.Component);s.default=Object(N.d)(Object(S.b)((function(e){return{dialogs:k(e),messages:w(e)}}),{sendMessage:d.a.sendMessage}),I.a)(T)},91:function(e,s,a){"use strict";a.d(s,"a",(function(){return g}));var t=a(3),n=a(30),i=a(1),c=(a(0),a(7)),o=a(15),r=a(20),d=function(e){return{isAuth:Object(r.a)(e)}};function g(e){return Object(o.b)(d)((function(s){s.isAuth;var a=Object(n.a)(s,["isAuth"]);return s.isAuth?Object(i.jsx)(e,Object(t.a)({},a)):Object(i.jsx)(c.a,{to:"/login"})}))}},92:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA","dialogs-items":"Dialogs_dialogs-items__11igu",dialog:"Dialogs_dialog__lk_cw",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up"}},93:function(e,s,a){e.exports={dialogs:"DialogItem_dialogs__3-Pix",dialog:"DialogItem_dialog__3tDA2",active:"DialogItem_active__2qnc5"}},94:function(e,s,a){e.exports={message:"Message_message__1MOXo"}}}]);
//# sourceMappingURL=5.cf3be005.chunk.js.map