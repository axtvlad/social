(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[5],{105:function(e,s,a){"use strict";a.r(s);var t=a(52),i=a(1),n=(a(0),a(92)),c=a.n(n),o=a(93),r=a.n(o),d=a(14),l=function(e){var s=e.id,a=e.name;return Object(i.jsx)("div",{className:"".concat(r.a.dialog," ").concat(r.a.active),children:Object(i.jsx)(d.b,{to:"/dialogs/"+s,activeClassName:r.a.active,children:a})})},u=a(94),g=a.n(u),j=function(e){var s=e.message;return Object(i.jsx)("div",{className:g.a.message,children:s})},b=a(19),m=a(29),O=a(16),_=function(e){var s=e.onSubmit;return Object(i.jsx)(b.b,{onSubmit:s,children:function(e){return Object(i.jsxs)("form",{onSubmit:e.handleSubmit,name:"AddMessageForm",children:[Object(i.jsx)("div",{children:Object(i.jsx)(b.a,{name:"messageText",component:m.b,placeholder:"Enter ur msg",validate:Object(O.a)(O.c,Object(O.b)(100))})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"Send"})})]})}})},f=function(e){var s=e.messages,a=e.sendMessage,t=e.dialogs,n=s.map((function(e){return Object(i.jsx)(j,{message:e.message,id:e.id},e.id)})),o=t.map((function(e){return Object(i.jsx)(l,{name:e.name,id:e.id},e.id)}));return Object(i.jsxs)("div",{className:c.a.dialogs,children:[Object(i.jsx)("div",{className:c.a.dialogsItems,children:o}),Object(i.jsxs)("div",{className:c.a.messages,children:[n,Object(i.jsx)(_,{onSubmit:function(e){a(e.messageText)}})]})]})},v=a(15),x=a(91),h=a(13),p=function(e){return e.dialogsPage.dialogs},D=function(e){return e.dialogsPage.messages};s.default=Object(h.d)(Object(v.b)((function(e){return{dialogs:p(e),messages:D(e)}}),{sendMessage:t.b}),x.a)(f)},91:function(e,s,a){"use strict";a.d(s,"a",(function(){return m}));var t=a(3),i=a(23),n=a(24),c=a(26),o=a(25),r=a(1),d=a(0),l=a.n(d),u=a(6),g=a(15),j=a(20),b=function(e){return{isAuth:Object(j.a)(e)}},m=function(e){var s=function(s){Object(c.a)(d,s);var a=Object(o.a)(d);function d(){return Object(i.a)(this,d),a.apply(this,arguments)}return Object(n.a)(d,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(e,Object(t.a)({},this.props)):Object(r.jsx)(u.a,{to:"/login"})}}]),d}(l.a.Component);return Object(g.b)(b)(s)}},92:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA","dialogs-items":"Dialogs_dialogs-items__11igu",dialog:"Dialogs_dialog__lk_cw",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up"}},93:function(e,s,a){e.exports={dialogs:"DialogItem_dialogs__3-Pix",dialog:"DialogItem_dialog__3tDA2",active:"DialogItem_active__2qnc5"}},94:function(e,s,a){e.exports={message:"Message_message__1MOXo"}}}]);
//# sourceMappingURL=5.919001aa.chunk.js.map