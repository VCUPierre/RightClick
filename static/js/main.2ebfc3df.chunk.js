(this.webpackJsonprightclick=this.webpackJsonprightclick||[]).push([[0],{210:function(e,t,n){e.exports=n.p+"static/media/Logo.d9d4f134.png"},211:function(e,t,n){e.exports=n.p+"static/media/LogoWhite.17285244.png"},226:function(e,t,n){e.exports=n(418)},231:function(e,t,n){},232:function(e,t,n){},303:function(e,t,n){},323:function(e,t,n){},329:function(e,t,n){},347:function(e,t,n){},408:function(e,t,n){},409:function(e,t,n){},410:function(e,t,n){},411:function(e,t,n){},412:function(e,t,n){},414:function(e,t,n){},415:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(41),l=n.n(o),r=(n(231),n(432)),c=n(196),d=n(430),m=n(216),s=n(429),u=n(51);n(232);function k(e){return"bordered"===e}var f=function(e){return i.a.createElement("a",{href:e.link.link},i.a.createElement(u.a,{className:"RLSocialPad ".concat(e.link.secondaryColor?e.link.secondaryColor:""),name:e.link.iconName,inverted:e.link.inverted,circular:(t=e.link.surrounded,"circular"===t),bordered:k(e.link.surrounded),color:e.link.color}));var t},v=function(e){return i.a.createElement("div",null,e.links.group.map((function(e){return i.a.createElement(f,{link:e})})))},E=(n(303),function(e){return i.a.createElement(m.a,{src:e.src,className:"RLFixCenter RLOneSize",rounded:!0})}),p=(n(323),function(e){return i.a.createElement("div",null,i.a.createElement(s.a,{as:"h1",textAlign:"center",className:"RCTopPadding RCMarginBottom ".concat(e.profileTitle.color),style:{fontSize:"2.5em"}},e.profileTitle.title),i.a.createElement(s.a,{as:"h2",textAlign:"center",className:"RCMarginTop"},i.a.createElement(r.a,{textAlign:"center",className:"RCSpace-5"},i.a.createElement(r.a.Row,{className:"RCNoTopPadding"},i.a.createElement(v,{links:e.links})),i.a.createElement(r.a.Row,{className:"RCNoTopPadding"},i.a.createElement(r.a.Column,{textAlign:"center"},i.a.createElement(E,{src:e.profileImg}))))))}),b=n(25),g=n(426),x=n(428),S=(n(329),function(e){return i.a.createElement(s.a,{as:"h1",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.data.modalAlternativeText.text?e.data.modalAlternativeText.text:e.data.name)}),C=n(198),h=n.n(C),T=function(e){return i.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n            <video\n            loop\n            muted\n            playsinline\n            autoplay\n            style="width:'.concat(e.w,"; height:").concat(e.h,'"\n            poster="').concat(e.poster,'"\n            >\n            <source type="video/mp4" src="').concat(e.video,'" />\n            </video>')}})},z=(n(347),Object(b.a)({customFont:{"font-family":function(e){return e.customFont?[e.customFont,"!important"]:["Lato","!important"]}}}));var y=function(e){var t,n,a,o=z(e);return i.a.createElement("div",{className:"center"},(t=e.link.mainMedia.type,n=e.link.mainMedia.link,e.deviceSize,a=e.link.mainMedia.videoPoster,"still"===t?i.a.createElement(m.a,{wrapped:!0,size:"medium",src:n}):"mp4"===t?i.a.createElement(T,{video:n,w:"100%",h:"100%",poster:a}):i.a.createElement(h.a,{url:n,width:"100%",height:"100%"})),i.a.createElement(g.a.Description,{className:"pushOff-y"},i.a.createElement("h3",{className:o.customFont},e.link.mainMedia.mediaText)))},R=(n(408),function(e){return i.a.createElement(x.a,{as:"a",href:e.link.link,fluid:!0,className:"pushoffButtom"},e.link.name)}),N=(n(409),n(410),Object(b.a)({customFont:{"font-family":function(e){return e.customFont}}})),P=function(e){var t=N(e),n=e.links.buttonColor;return i.a.createElement("div",null,i.a.createElement(g.a,{size:"small",trigger:i.a.createElement(x.a,Object.assign({fluid:!0,size:"big",color:e.links.buttonColor},n?{className:"RCPadding fontColor ".concat(e.links.fontColor," ").concat(t.customFont)}:{className:"RCPadding RCWhiteBG ".concat(t.customFont)}),e.links.name),closeIcon:!0},i.a.createElement(r.a,{centered:!0,columns:2},e.links.modalAlternativeText.removed?"":i.a.createElement(r.a.Row,{className:"RCTitleFix"},i.a.createElement(S,{data:e.links})),i.a.createElement(r.a.Row,null,i.a.createElement(g.a.Content,{image:!0,className:"RCCenter RCPushDown"},i.a.createElement(y,{link:e.links}),e.links.additionalLinks?e.links.additionalLinks.map((function(e){return i.a.createElement(R,{link:e})})):" ")))))},w=n(92),F=n(63),A=function(e){var t=function(){return i.a.createElement("span",null,e.completeText)};return i.a.createElement(F.a,{date:e.dateTime,renderer:function(e){var n=e.days,a=e.hours,o=e.minutes,l=e.seconds;return e.completed?i.a.createElement(t,null):i.a.createElement("span",null,n," days ",Object(F.b)(a),":",Object(F.b)(o),":",Object(F.b)(l))}})},O=(n(411),function(e){return i.a.createElement("div",null,e.timer?i.a.createElement(w.a,{as:"a",color:e.color,ribbon:e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text,"  ",i.a.createElement(A,{dateTime:e.timer,text:e.completeText})):i.a.createElement(w.a,{as:"a",color:e.color,ribbon:e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text))}),L=(n(60),function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(O,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(P,{links:e.link,customFont:e.customFont})):i.a.createElement(P,{links:e.link,customFont:e.customFont}))}),M=(n(412),Object(b.a)({customFont:{"font-family":function(e){return[e.customFont,"!important"]}}})),j=function(e){var t=M(e),n=e.link.buttonColor;return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(O,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(x.a,Object.assign({as:"a",href:e.link.link},n?{className:"RCPadding ".concat(t.customFont," ").concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(t.customFont," ").concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name)):i.a.createElement(x.a,Object.assign({as:"a",href:e.link.link},n?{className:"RCPadding ".concat(t.customFont," ").concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(t.customFont," ").concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name))},D=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(O,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(y,{customFont:e.customFont,link:e.link,type:e.link.type,deviceSize:e.deviceSize})):i.a.createElement(y,{customFont:e.customFont,link:e.link,type:e.link.type,deviceSize:e.deviceSize}))},B=Object(b.a)({customFont:{"font-family":function(e){return e.customFont?[e.customFont,"!important"]:""}}}),I=function(e){var t=B(e);return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(O,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement("a",{href:e.link.link},i.a.createElement(m.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),i.a.createElement(s.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff ".concat(t.customFont)},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText))):i.a.createElement("a",{href:e.link.link},i.a.createElement(m.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),i.a.createElement(s.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff TEST ".concat(t.customFont)},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)))},W=n(29),_=n(425),G=n(215),X=n(424),H=function(e){var t=e.slides,n=e.size;return i.a.createElement(X.a,{textAlign:"center"},i.a.createElement(x.a.Group,{size:n},Object(G.a)(Array(t).keys()).map((function(e){return i.a.createElement(x.a,{as:W.d,key:e,icon:"circle",slide:e})}))))};H.defaultProps={size:"mini"};var q=H,J=(n(413),function(e){return i.a.createElement(W.c,{naturalSlideWidth:100,naturalSlideHeight:110,totalSlides:e.collection.length,interval:e.collection.speed,isPlaying:!0},i.a.createElement(W.g,null,e.collection.map((function(e,t){return i.a.createElement(W.f,{index:t},i.a.createElement(W.e,{src:e}))}))),i.a.createElement(_.a,null),e.collection.length>7?i.a.createElement(i.a.Fragment,null,i.a.createElement(W.a,{className:"ui button"},"Back"),i.a.createElement(W.b,{className:"ui button"},"Next")):i.a.createElement(q,{slides:e.collection.length}))}),U=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(O,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(J,{collection:e.link.mainMedia.collection}),i.a.createElement(s.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)):i.a.createElement("div",null,i.a.createElement(J,{collection:e.link.mainMedia.collection}),i.a.createElement(s.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)))},Y=(n(414),function(e){var t=e.links.buttonColor;return i.a.createElement("div",null,i.a.createElement(g.a,{size:"small",trigger:i.a.createElement(x.a,Object.assign({fluid:!0,size:"big",color:e.links.buttonColor},t?{className:"RCPadding fontColor ".concat(e.link.fontColor)}:{className:"RCPadding RCWhiteBG"}),e.links.name),closeIcon:!0},i.a.createElement(r.a,{centered:!0,columns:2},e.links.modalAlternativeText.removed?"":i.a.createElement(r.a.Row,{className:"RCTitleFix"},i.a.createElement(S,{data:e.links})),i.a.createElement(r.a.Row,{className:"RLBio"},i.a.createElement(g.a.Content,{image:!0,className:"RCCenter RCPushDown"},e.links.bioContent.map((function(e){return i.a.createElement(s.a,{as:"h2"},e.header,i.a.createElement(s.a.Subheader,{content:e.subHeader}))})))))))}),Z=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(O,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(Y,{links:e.link})):i.a.createElement(Y,{links:e.link}))},$=function(e){var t=e.link.linkSpaced,n=e.link.colored;return i.a.createElement("div",null,"internal"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(L,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})):"item"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(D,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})):"still/external"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(I,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})):"slideshow"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(U,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})):"bio"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(Z,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})):i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(j,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})))},K=(n(415),function(e){return i.a.createElement("div",{className:"stretched"},i.a.createElement(s.a,{as:"h2",color:e.links.groupColor},i.a.createElement("span",null,e.links.groupName)),i.a.createElement("div",null,e.links.group.map((function(t){return i.a.createElement($,{link:t,deviceSize:e.deviceSize,customFont:e.customFont})}))))}),Q=n(210),V=n.n(Q),ee=n(211),te=n.n(ee),ne=(n(416),function(e){return i.a.createElement(r.a,{centered:!0},i.a.createElement(r.a.Row,null,i.a.createElement(c.a,null,i.a.createElement(p,{links:e.socialLinks,deviceSize:e.deviceSize,profileImg:e.profileImage,profileTitle:e.profileTitle}))),e.linkGroups.map((function(t,n){return i.a.createElement(r.a.Row,{className:"RCNoTopPadding"},i.a.createElement(K,{key:n,links:t,deviceSize:e.deviceSize,customFont:e.customFont}))})),i.a.createElement(d.a,{basic:!0},i.a.createElement(m.a,{src:(t=e.logo,"white"===t?te.a:V.a),as:"a",size:"small",href:"https://rightclickrva.com/business",target:"_blank",spaced:!0})));var t}),ae=n(93),ie=n(212),oe=n.n(ie),le={title:"Razor Ramon",color:"RLWhite"},re=!1,ce="",de="background-image: linear-gradient(to right bottom, #12000d, #140016, #12001e, #140728, #110e33, #0b133e, #1a194d, #2a1e5c, #3b236a, #4e2778);",me={group:[{name:"Instagram",iconName:"instagram",link:"https://www.instagram.com/rayzor_ramon_the_barber_",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Twitter",iconName:"twitter",link:"https://twitter.com/razzorramon",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Facebook",iconName:"facebook f",link:"https://www.facebook.com/Rayzor-Ramon-The-Bar-Ber-202433150376767/",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Youtube",iconName:"youtube",link:"https://youtube.com/channel/UCwUd_9OcxPl9qOyEk6PRihA",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0}]},se={groupName:"Book a Cut Today",groupColor:"RLWhite",groupFont:"",group:[{name:"Personal Appointments",link:"book.thecut.co/RAYZORAMONTHEBARBER",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!1,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}},{name:"Shop Appointments",link:"https://online.getsquire.com/book/taylors-barbershop-richmond/professional/sergio-31",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!1,mainMedia:{},additionalLinks:[],color:"red",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}}]},ue=n(213),ke=(n(417),Object(b.a)({backgroundImg:{"background-image":"url(".concat(re?ce:"",")"),"background-repeat":"no-repeat","background-position":"50% 45%","background-attachment":"fixed","background-size":"contain"}})),fe=[se],ve=function(){var e=Object(ae.useMediaPredicate)("(max-width: 430px)"),t=Object(ae.useMediaPredicate)("(max-width: 768px)"),n=Object(ae.useMediaPredicate)("(max-width: 1024px)"),a=ke();return i.a.createElement("div",{className:a.backgroundImg},console.log("window Width",window.innerWidth),i.a.createElement(ue.a,null,i.a.createElement("title",null,"Right-Link"),i.a.createElement("style",null,"\n              .RLgradient {\n                ".concat(de,"\n               }\n            "))),i.a.createElement(oe.a,{fonts:[{font:se.groupFont,weights:[400]}]}),i.a.createElement(ne,{deviceSize:e?"xs":t?"md":n?"lg":"xl",socialLinks:me,profileTitle:le,profileImage:"https://res.cloudinary.com/rightlink/image/upload/v1640960524/RazorRamon/razorRamon_hwe9lz.jpg",linkGroups:fe,logo:"colored",customFont:se.groupFont}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,n){}},[[226,1,2]]]);
//# sourceMappingURL=main.2ebfc3df.chunk.js.map