"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[774],{211:function(n,e,t){t.d(e,{BF:function(){return p},E3:function(){return x},SU:function(){return s},np:function(){return d},yw:function(){return f}});var r=t(861),a=t(757),i=t.n(a),c=t(243),o="https://api.themoviedb.org/3",u="fbcd27110e3ea351d2ea352461b15e7c",s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/search/movie?query=").concat(e,"&api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},854:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(119),a=t(184),i=function(){return(0,a.jsx)(r.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})}},774:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,i,c=t(861),o=t(439),u=t(757),s=t.n(u),p=t(211),d=t(854),f=t(168),x=t(444),l=x.ZP.input(r||(r=(0,f.Z)(["\n  display: inline-block;\n  width: 50%;\n  padding: 8px;\n  font: inherit;\n  font-size: 20px;\n  border: 1px solid grey;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  opacity: 0.7;\n\n  &:hover {\n    opacity: 1;\n    box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);\n  }\n"]))),v=x.ZP.button(a||(a=(0,f.Z)(["\n  display: inline-block;\n  width: 70px;\n  height: 40px;\n  margin-left: 10px;\n  border: 1px solid grey;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.7;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n\n  &:hover {\n    opacity: 1;\n    box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);\n  }\n"]))),h=x.ZP.form(i||(i=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  padding: 10px;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),m=t(184),b=function(n){var e=n.onSubmit;return(0,m.jsxs)(h,{onSubmit:e,children:[(0,m.jsx)(l,{type:"text",name:"movieName",autoFocus:!0,placeholder:"example: Batman"}),(0,m.jsx)(v,{type:"submit",children:"Search"})]})},g=t(686),w=t.n(g),y=t(791),k=t(87),Z=t(689),j=function(){var n,e=(0,y.useState)(!1),t=(0,o.Z)(e,2),r=t[0],a=t[1],i=(0,k.lr)(),u=(0,o.Z)(i,2),f=u[0],x=u[1],l=null!==(n=f.get("movieName"))&&void 0!==n?n:"",v=(0,y.useState)([]),h=(0,o.Z)(v,2),g=h[0],j=h[1],_=(0,Z.TH)();return(0,y.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(!0),n.next=4,(0,p.E3)(l);case 4:e=n.sent,j(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),w().Notify.failure(n.t0.message);case 11:return n.prev=11,a(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[l]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.movieName.value;if(e.trim()||alert("Input movie name"),""===e)return x({});x({movieName:e}),n.target.reset()}}),r&&(0,m.jsx)(d.a,{}),(0,m.jsx)("ul",{children:g.map((function(n){var e=n.id,t=n.title;return(0,m.jsx)("li",{children:(0,m.jsx)(k.rU,{to:"/movies/".concat(e),state:{from:_},children:t})},e)}))})]})}}}]);
//# sourceMappingURL=774.5f70a680.chunk.js.map