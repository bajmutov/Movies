"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[808],{211:function(e,r,n){n.d(r,{BF:function(){return d},SU:function(){return u},np:function(){return l},yw:function(){return p}});var t=n(861),a=n(757),c=n.n(a),i=n(243),s="https://api.themoviedb.org/3",o="fbcd27110e3ea351d2ea352461b15e7c",u=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(r,"?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},808:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(861),a=n(439),c=n(757),i=n.n(c),s=n(211),o=n(87),u=n(184),d=function(e){var r=e.location;return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"cast",state:{from:r},children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"reviews",state:{from:r},children:"Reviews"})})]})]})},l=n(686),p=n.n(l),v=n(791),f=n(689),h=function(){var e,r,n=(0,v.useState)({}),c=(0,a.Z)(n,2),l=c[0],h=c[1],x=(0,f.TH)(),m=(0,v.useRef)(null!==(e=null===(r=x.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies"),j=(0,f.UO)().movieId;(0,v.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.BF)(j);case 3:if(r=e.sent){e.next=6;break}throw new Error("No popular films today");case 6:h(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p().Notify.failure(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[j]);var w=l.poster_path,k=l.title,g=l.release_date,b=l.vote_average,y=l.overview,_=l.genres,Z=w&&k&&g&&b&&y&&(null===_||void 0===_?void 0:_.length)>0;return(0,u.jsx)(u.Fragment,{children:Z&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.rU,{to:m,children:"Go Back"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(w),alt:"Movie poster",width:300,height:400}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("h2",{children:[k," (",null===g||void 0===g?void 0:g.split("-")[0],")"]}),(0,u.jsxs)("p",{children:["User Score: ",Number(b).toFixed(2)]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:y}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("div",{children:null===_||void 0===_?void 0:_.map((function(e){var r=e.id,n=e.name;return(0,u.jsx)("p",{children:n},r)}))})]})]}),(0,u.jsx)("div",{children:(0,u.jsx)(d,{id:j,location:x})}),(0,u.jsx)(v.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading info..."}),children:(0,u.jsx)(f.j3,{})})]})})}}}]);
//# sourceMappingURL=808.a9c0e851.chunk.js.map