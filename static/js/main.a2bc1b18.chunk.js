(this.webpackJsonprightclick=this.webpackJsonprightclick||[]).push([[0],{213:function(e,t,n){e.exports=n.p+"static/media/Logo.d9d4f134.png"},214:function(e,t,n){e.exports=n.p+"static/media/LogoWhite.17285244.png"},230:function(e,t,n){e.exports=n(425)},235:function(e,t,n){},236:function(e,t,n){},307:function(e,t,n){},329:function(e,t,n){},333:function(e,t,n){},352:function(e,t,n){},415:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){},419:function(e,t,n){},421:function(e,t,n){},422:function(e,t,n){},423:function(e,t,n){},424:function(e,t,n){},425:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(41),l=n.n(i),r=(n(235),n(439)),c=n(199),d=n(437),m=n(218),s=n(436),u=n(51);n(236);function k(e){return"bordered"===e}var f=function(e){return o.a.createElement("a",{href:e.link.link},o.a.createElement(u.a,{className:"RLSocialPad ".concat(e.link.secondaryColor?e.link.secondaryColor:""),name:e.link.iconName,inverted:e.link.inverted,circular:(t=e.link.surrounded,"circular"===t),bordered:k(e.link.surrounded),color:e.link.color}));var t},p=function(e){return o.a.createElement("div",null,e.links.group.map((function(e,t){return o.a.createElement(f,{key:"social-link-".concat(t+1),link:e})})))},v=(n(307),function(e){return o.a.createElement(m.a,{src:e.src,className:"RLFixCenter RLOneSize",rounded:!0})}),E=(n(329),function(e){return o.a.createElement("div",null,o.a.createElement(s.a,{as:"h1",textAlign:"center",className:"RCTopPadding RCMarginBottom ".concat(e.profileTitle.color),style:{fontSize:"2.5em"}},e.profileTitle.title),o.a.createElement(s.a,{as:"h2",textAlign:"center",className:"RCMarginTop"},o.a.createElement(r.a,{textAlign:"center",className:"RCSpace-5"},o.a.createElement(r.a.Row,{className:"RCNoTopPadding ".concat(e.links.group[0].surrounded?"RCMarginBottom-2":"")},o.a.createElement(p,{links:e.links})),o.a.createElement(r.a.Row,{className:"RCNoTopPadding"},o.a.createElement(r.a.Column,{textAlign:"center"},o.a.createElement(v,{src:e.profileImg}))))))}),g=n(31),b=n(433),C=n(435),x=(n(333),function(e){return o.a.createElement(s.a,{as:"h1",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.data.modalAlternativeText.text?e.data.modalAlternativeText.text:e.data.name)}),h=n(200),S=n.n(h),T=function(e){return o.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n            <video\n            loop\n            muted\n            playsinline\n            autoplay\n            style="width:'.concat(e.w,"; height:").concat(e.h,'"\n            poster="').concat(e.poster,'"\n            >\n            <source type="video/mp4" src="').concat(e.video,'" />\n            </video>')}})},y=(n(352),Object(g.a)({customFont:{"font-family":function(e){return e.customFont?[e.customFont,"!important"]:["Lato","!important"]}}}));var R=function(e){var t,n,a,i=y(e);return o.a.createElement("div",{className:"center"},(t=e.link.mainMedia.type,n=e.link.mainMedia.link,e.deviceSize,a=e.link.mainMedia.videoPoster,"still"===t?o.a.createElement(m.a,{wrapped:!0,size:"medium",src:n}):"mp4"===t?o.a.createElement(T,{video:n,w:"100%",h:"100%",poster:a}):o.a.createElement(S.a,{url:n,width:"100%",height:"100%"})),o.a.createElement(b.a.Description,{className:"pushOff-y"},o.a.createElement("h3",{className:i.customFont},e.link.mainMedia.mediaText)))},z=(n(415),function(e){return o.a.createElement(C.a,{as:"a",href:e.link.link,fluid:!0,className:"pushoffButtom"},e.link.name)}),N=(n(416),n(417),Object(g.a)({customFont:{"font-family":function(e){return e.customFont}}})),w=function(e){var t=N(e),n=e.links.buttonColor;return o.a.createElement("div",null,o.a.createElement(b.a,{size:"small",trigger:o.a.createElement(C.a,Object.assign({fluid:!0,size:"big",color:e.links.buttonColor},n?{className:"RCPadding fontColor ".concat(e.links.fontColor," ").concat(t.customFont)}:{className:"RCPadding RCWhiteBG ".concat(t.customFont)}),e.links.name),closeIcon:!0},o.a.createElement(r.a,{centered:!0,columns:2},e.links.modalAlternativeText.removed?"":o.a.createElement(r.a.Row,{className:"RCTitleFix"},o.a.createElement(x,{data:e.links})),o.a.createElement(r.a.Row,null,o.a.createElement(b.a.Content,{image:!0,className:"RCCenter RCPushDown"},o.a.createElement(R,{link:e.links}),e.links.additionalLinks?e.links.additionalLinks.map((function(e,t){return o.a.createElement(z,{key:"links-modal-".concat(t+1),link:e})})):" ")))))},P=n(96),F=n(64),A=function(e){var t=function(){return o.a.createElement("span",null,e.completeText)};return o.a.createElement(F.a,{date:e.dateTime,renderer:function(e){var n=e.days,a=e.hours,i=e.minutes,l=e.seconds;return e.completed?o.a.createElement(t,null):o.a.createElement("span",null,n," days ",Object(F.b)(a),":",Object(F.b)(i),":",Object(F.b)(l))}})},L=(n(418),function(e){return o.a.createElement("div",null,e.timer?o.a.createElement(P.a,{as:"a",color:e.color,ribbon:!!e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text," ",o.a.createElement(A,{dateTime:e.timer,text:e.completeText})):o.a.createElement(P.a,{as:"a",color:e.color,ribbon:!!e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text))}),O=(n(60),function(e){return o.a.createElement("div",null,e.link.featured?o.a.createElement("div",null,o.a.createElement(L,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),o.a.createElement(w,{links:e.link,customFont:e.customFont})):o.a.createElement(w,{links:e.link,customFont:e.customFont}))}),M=(n(419),Object(g.a)({customFont:{"font-family":function(e){return[e.customFont,"!important"]}}})),j=function(e){var t=M(e),n=e.link.buttonColor;return o.a.createElement("div",null,e.link.featured?o.a.createElement("div",null,o.a.createElement(L,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),o.a.createElement(C.a,Object.assign({as:"a",href:e.link.link},n?{className:"RCPadding ".concat(t.customFont," ").concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(t.customFont," ").concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name)):o.a.createElement(C.a,Object.assign({as:"a",href:e.link.link},n?{className:"RCPadding ".concat(t.customFont," ").concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(t.customFont," ").concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name))},B=function(e){return o.a.createElement("div",null,e.link.featured?o.a.createElement("div",null,o.a.createElement(L,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),o.a.createElement(R,{customFont:e.customFont,link:e.link,type:e.link.type,deviceSize:e.deviceSize})):o.a.createElement(R,{customFont:e.customFont,link:e.link,type:e.link.type,deviceSize:e.deviceSize}))},D=Object(g.a)({customFont:{"font-family":function(e){return e.customFont?[e.customFont,"!important"]:""}}}),I=function(e){var t=D(e);return o.a.createElement("div",null,e.link.featured?o.a.createElement("div",null,o.a.createElement(L,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),o.a.createElement("a",{href:e.link.link},o.a.createElement(m.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),o.a.createElement(s.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff ".concat(t.customFont)},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText))):o.a.createElement("a",{href:e.link.link},o.a.createElement(m.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),o.a.createElement(s.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff TEST ".concat(t.customFont)},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)))},_=n(219),W=n(19),G=n(432),X=n(220),Z=n(431),H=function(e){var t=e.slides,n=e.size;return o.a.createElement(Z.a,{textAlign:"center"},o.a.createElement(C.a.Group,{size:n},Object(X.a)(Array(t).keys()).map((function(e){return o.a.createElement(C.a,{as:W.d,key:e,icon:"circle",slide:e})}))))};H.defaultProps={size:"mini"};var q=H,Y=(n(420),function(e){var t=Object(a.useState)(!1),n=Object(_.a)(t,2),i=n[0],l=n[1],c={modalAlternativeText:{text:""},name:e.name};return o.a.createElement(W.c,{naturalSlideWidth:100,naturalSlideHeight:110,totalSlides:e.collection.length,interval:e.collection.speed,isPlaying:!0},"internal"===e.linkType?o.a.createElement(W.g,null,e.collection.map((function(e,t){return o.a.createElement(W.f,{key:"Slide-image-".concat(t+1),index:t,tag:"button",onClick:function(){return l(!0)}},o.a.createElement(W.e,{src:e}))})),o.a.createElement(b.a,{size:"small",onClose:function(){return l(!1)},onOpen:function(){return l(!0)},open:i,closeIcon:!0},o.a.createElement(r.a,{centered:!0,columns:2},o.a.createElement(r.a.Row,{className:"RCTitleFix"},o.a.createElement(x,{data:c})),o.a.createElement(r.a.Row,null,o.a.createElement(b.a.Content,{image:!0,className:"RCCenter RCPushDown"},e.additionalLinks?e.additionalLinks.map((function(e,t){return o.a.createElement(z,{key:"links-modal-".concat(t+1),link:e})})):" "))))):"external"===e.linkType?o.a.createElement(W.g,null,e.collection.map((function(t,n){return o.a.createElement(W.f,{key:"Slide-image-".concat(n+1),index:n,tag:"a",href:e.link},o.a.createElement(W.e,{src:t}))}))):o.a.createElement(W.g,null,e.collection.map((function(e,t){return o.a.createElement(W.f,{key:"Slide-image-".concat(t+1),index:t},o.a.createElement(W.e,{src:e}))}))),o.a.createElement(G.a,null),e.collection.length>7?o.a.createElement(o.a.Fragment,null,o.a.createElement(W.a,{className:"ui button"},"Back"),o.a.createElement(W.b,{className:"ui button"},"Next")):o.a.createElement(q,{slides:e.collection.length}))}),J=function(e){return o.a.createElement("div",null,e.link.featured?o.a.createElement("div",null,o.a.createElement(L,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),o.a.createElement(Y,{collection:e.link.mainMedia.collection,linkType:e.link.mainMedia.linkType,link:e.link.link,name:e.link.mainMedia.mediaText,additionalLinks:e.link.additionalLinks}),o.a.createElement(s.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)):o.a.createElement("div",null,o.a.createElement(Y,{collection:e.link.mainMedia.collection,link:e.link.link,linkType:e.link.mainMedia.linkType,name:e.link.mainMedia.mediaText,additionalLinks:e.link.additionalLinks}),o.a.createElement(s.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)))},U=(n(421),function(e){var t=e.links.buttonColor;return o.a.createElement("div",null,o.a.createElement(b.a,{size:"small",trigger:o.a.createElement(C.a,Object.assign({fluid:!0,size:"big",color:e.links.buttonColor},t?{className:"RCPadding fontColor ".concat(e.link.fontColor)}:{className:"RCPadding RCWhiteBG"}),e.links.name),closeIcon:!0},o.a.createElement(r.a,{centered:!0,columns:2},e.links.modalAlternativeText.removed?"":o.a.createElement(r.a.Row,{className:"RCTitleFix"},o.a.createElement(x,{data:e.links})),o.a.createElement(r.a.Row,{className:"RLBio"},o.a.createElement(b.a.Content,{image:!0,className:"RCCenter RCPushDown"},e.links.bioContent.map((function(e,t){return o.a.createElement(s.a,{as:"h2",key:"Bio-header-".concat(t+1)},e.header,o.a.createElement(s.a.Subheader,{content:e.subHeader}))})))))))}),$=function(e){return o.a.createElement("div",null,e.link.featured?o.a.createElement("div",null,o.a.createElement(L,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),o.a.createElement(U,{links:e.link})):o.a.createElement(U,{links:e.link}))},V=function(e){var t=e.link.linkSpaced,n=e.link.colored;return o.a.createElement("div",null,"internal"===e.link.type?o.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),o.a.createElement(O,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})):"item"===e.link.type?o.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),o.a.createElement(B,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})):"still/external"===e.link.type?o.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),o.a.createElement(I,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})):"slideshow"===e.link.type?o.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),o.a.createElement(J,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})):"bio"===e.link.type?o.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),o.a.createElement($,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})):o.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),o.a.createElement(j,{link:e.link,deviceSize:e.deviceSize,customFont:e.customFont})))},K=(n(422),function(e){return o.a.createElement("div",{className:"stretched"},o.a.createElement(s.a,{as:"h2",color:e.links.groupColor},o.a.createElement("span",null,e.links.groupName)),o.a.createElement("div",null,e.links.group.map((function(t,n){return o.a.createElement(V,{key:"Social-links-".concat(n+1),link:t,deviceSize:e.deviceSize,customFont:e.customFont})}))))}),Q=n(213),ee=n.n(Q),te=n(214),ne=n.n(te),ae=(n(423),function(e){return o.a.createElement(r.a,{centered:!0,className:"RCMarginTop-1"},o.a.createElement(r.a.Row,{className:"RCMarginBottom-2"},o.a.createElement(c.a,null,o.a.createElement(E,{links:e.socialLinks,deviceSize:e.deviceSize,profileImg:e.profileImage,profileTitle:e.profileTitle}))),e.linkGroups.map((function(t,n){return o.a.createElement(r.a.Row,{key:"linkgroup-".concat(n+1),className:"RCNoTopPadding RCMarginBottom-2"},o.a.createElement(K,{key:n,links:t,deviceSize:e.deviceSize,customFont:e.customFont}))})),o.a.createElement("div",null,e.background.logoLink?o.a.createElement(r.a.Row,{className:"RCLogoZeroBottom"},o.a.createElement(d.a,{basic:!0,className:"RCLogoZeroBottom"},o.a.createElement(m.a,{className:"RCLogoZeroBottom",src:e.background.logoLink,as:"a",size:"tiny",href:e.background.logoActiveLink,target:"_blank",spaced:!0}))):"",o.a.createElement(d.a,{basic:!0,className:"".concat(e.background.logoLink?"RCDoubleLogo":"RCMarginBottom-1")},o.a.createElement(m.a,{src:(t=e.logo,"white"===t?ne.a:ee.a),as:"a",size:"small",href:"https://rightclickrva.com/business",target:"_blank",spaced:!0}))));var t}),oe=n(97),ie=n(215),le=n.n(ie),re={title:"Rayzor Ramon",color:"RLWhite"},ce={image:!1,imageLink:"",color:"background-image: linear-gradient(to right bottom, #12000d, #140016, #12001e, #140728, #110e33, #0b133e, #1a194d, #2a1e5c, #3b236a, #4e2778);"},de={group:[{name:"Instagram",iconName:"instagram",link:"https://www.instagram.com/rayzor_ramon_the_barber_",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Twitter",iconName:"twitter",link:"https://twitter.com/rayzzorramon",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Facebook",iconName:"facebook f",link:"https://www.facebook.com/Rayzor-Ramon-The-Bar-Ber-202433150376767/",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Youtube",iconName:"youtube",link:"https://youtube.com/channel/UCwUd_9OcxPl9qOyEk6PRihA",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0}]},me={groupName:"Book a Cut Today",groupColor:"RLWhite",groupFont:"",group:[{name:"Personal Appointments",link:"https://book.thecut.co/RAYZORAMONTHEBARBER",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!1,mainMedia:{},additionalLinks:[],color:"red",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}},{name:"Shop Appointments",link:"https://online.getsquire.com/book/taylors-barbershop-richmond/professional/sergio-31",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!1,mainMedia:{},additionalLinks:[],color:"red",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}},{name:"Beard Care & Apparel",link:"https://rayzorramonthebarber.bigcartel.com",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!1,mainMedia:{},additionalLinks:[],color:"red",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}},{name:"Slideshow",link:"https://venmo.com/code?user_id=2920916300333056019&created=1647041532.732115&printed=1",linkSpaced:!0,type:"slideshow",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{type:"slideshow",linkType:"internal",speed:1e3,mediaText:"Purchase a Proof",collection:["https://res.cloudinary.com/rightlink/image/upload/v1647041982/RazorRamon/proofs-2_cwuvkr.jpg","https://res.cloudinary.com/rightlink/image/upload/v1647040173/RazorRamon/proofs-1_y0q12y.jpg"]},additionalLinks:[{name:"Venmo",link:"https://venmo.com/code?user_id=2920916300333056019&created=1647041532.732115&printed=1"},{name:"Cash App",link:"https://cash.app/$RaYZorRamon"},{name:"Store",link:"https://google.com"}],color:"red",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""},bioContent:[]}]},se=n(216),ue=(n(424),[me]),ke=function(){var e=Object(oe.useMediaPredicate)("(max-width: 430px)"),t=Object(oe.useMediaPredicate)("(max-width: 768px)"),n=Object(oe.useMediaPredicate)("(max-width: 1024px)");return o.a.createElement("div",null,console.log("window Width",window.innerWidth),o.a.createElement(se.a,null,o.a.createElement("title",null,"Right-Link"),o.a.createElement("style",null,"\n              .RLgradient {\n                ".concat(ce.imageLink?ce.imageLink:ce.color?ce.color:"","\n               }\n                .root {\n                    height: 100%;\n                    overflow-x: hidden;\n                }\n            "))),o.a.createElement(le.a,{fonts:[{font:me.groupFont,weights:[400]}]}),o.a.createElement(ae,{deviceSize:e?"xs":t?"md":n?"lg":"xl",socialLinks:de,profileTitle:re,profileImage:"https://res.cloudinary.com/rightlink/image/upload/v1640960524/RazorRamon/razorRamon_hwe9lz.jpg",linkGroups:ue,logo:"colored",background:ce,customFont:me.groupFont}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,n){}},[[230,1,2]]]);
//# sourceMappingURL=main.a2bc1b18.chunk.js.map