(this.webpackJsonprightclick=this.webpackJsonprightclick||[]).push([[0],{208:function(e,t,n){e.exports=n.p+"static/media/Logo.d9d4f134.png"},209:function(e,t,n){e.exports=n.p+"static/media/LogoWhite.17285244.png"},225:function(e,t,n){e.exports=n(415)},230:function(e,t,n){},231:function(e,t,n){},302:function(e,t,n){},322:function(e,t,n){},326:function(e,t,n){},344:function(e,t,n){},405:function(e,t,n){},406:function(e,t,n){},407:function(e,t,n){},408:function(e,t,n){},409:function(e,t,n){},411:function(e,t,n){},412:function(e,t,n){},415:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(40),r=n.n(l),o=(n(230),n(429)),c=n(195),d=n(427),s=n(215),m=n(426),u=n(50);n(231);function k(e){return"bordered"===e}var f=function(e){return i.a.createElement("a",{href:e.link.link},i.a.createElement(u.a,{className:"RLSocialPad ".concat(e.link.secondaryColor?e.link.secondaryColor:""),name:e.link.iconName,inverted:e.link.surroundedInColor,circular:(t=e.link.surrounded,"circular"===t),bordered:k(e.link.surrounded),color:e.link.color}));var t},p=function(e){return i.a.createElement("div",null,e.links.group.map((function(e){return i.a.createElement(f,{link:e})})))},v=(n(302),function(e){return i.a.createElement(s.a,{src:e.src,className:"RLFixCenter RLOneSize",rounded:!0})}),E=(n(322),function(e){return i.a.createElement("div",null,i.a.createElement(m.a,{as:"h1",textAlign:"center",className:"RCTopPadding RCMarginBottom ".concat(e.profileTitle.color),style:{fontSize:"2.5em"}},e.profileTitle.title),i.a.createElement(m.a,{as:"h2",textAlign:"center",className:"RCMarginTop"},i.a.createElement(o.a,{textAlign:"center",className:"RCSpace-5"},i.a.createElement(o.a.Row,null,i.a.createElement(p,{links:e.links})),i.a.createElement(o.a.Row,{className:"RCNoTopPadding"},i.a.createElement(o.a.Column,{textAlign:"center"},i.a.createElement(v,{src:e.profileImg}))))))}),b=n(423),g=n(425),x=(n(326),function(e){return i.a.createElement(m.a,{as:"h1",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.data.modalAlternativeText.text?e.data.modalAlternativeText.text:e.data.name)}),S=n(196),h=n.n(S),C=function(e){return i.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n            <video\n            loop\n            muted\n            playsinline\n            autoplay\n            style="width:'.concat(e.w,"; height:").concat(e.h,'"\n            poster="').concat(e.poster,'"\n            >\n            <source type="video/mp4" src="').concat(e.video,'" />\n            </video>')}})};n(344);var T=function(e){return i.a.createElement("div",{className:"center"},(t=e.link.mainMedia.type,n=e.link.mainMedia.link,e.deviceSize,a=e.link.mainMedia.videoPoster,"still"===t?i.a.createElement(s.a,{wrapped:!0,size:"medium",src:n}):"mp4"===t?i.a.createElement(C,{video:n,w:"100%",h:"100%",poster:a}):i.a.createElement(h.a,{url:n,width:"100%",height:"100%"})),i.a.createElement(b.a.Description,{className:"pushOff-y"},i.a.createElement("h3",null,e.link.mainMedia.mediaText)));var t,n,a},y=(n(405),function(e){return i.a.createElement(g.a,{as:"a",href:e.link.link,fluid:!0,className:"pushoffButtom"},e.link.name)}),z=(n(406),n(407),function(e){var t=e.links.buttonColor;return i.a.createElement("div",null,i.a.createElement(b.a,{size:"small",trigger:i.a.createElement(g.a,Object.assign({fluid:!0,size:"big",color:e.links.buttonColor},t?{className:"RCPadding fontColor ".concat(e.links.fontColor)}:{className:"RCPadding RCWhiteBG"}),e.links.name),closeIcon:!0},i.a.createElement(o.a,{centered:!0,columns:2},e.links.modalAlternativeText.removed?"":i.a.createElement(o.a.Row,{className:"RCTitleFix"},i.a.createElement(x,{data:e.links})),i.a.createElement(o.a.Row,null,i.a.createElement(b.a.Content,{image:!0,className:"RCCenter RCPushDown"},i.a.createElement(T,{link:e.links}),e.links.additionalLinks?e.links.additionalLinks.map((function(e){return i.a.createElement(y,{link:e})})):" ")))))}),P=n(91),R=n(62),N=function(e){var t=function(){return i.a.createElement("span",null,e.completeText)};return i.a.createElement(R.a,{date:e.dateTime,renderer:function(e){var n=e.days,a=e.hours,l=e.minutes,r=e.seconds;return e.completed?i.a.createElement(t,null):i.a.createElement("span",null,n," days ",Object(R.b)(a),":",Object(R.b)(l),":",Object(R.b)(r))}})},A=(n(408),function(e){return i.a.createElement("div",null,e.timer?i.a.createElement(P.a,{as:"a",color:e.color,ribbon:e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text,"  ",i.a.createElement(N,{dateTime:e.timer,text:e.completeText})):i.a.createElement(P.a,{as:"a",color:e.color,ribbon:e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text))}),w=(n(59),function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(A,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(z,{links:e.link})):i.a.createElement(z,{links:e.link}))}),L=(n(409),function(e){var t=e.link.buttonColor;return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(A,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(g.a,Object.assign({as:"a",href:e.link.link},t?{className:"RCPadding ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name)):i.a.createElement(g.a,Object.assign({as:"a",href:e.link.link},t?{className:"RCPadding ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name))}),O=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(A,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(T,{link:e.link,type:e.link.type,deviceSize:e.deviceSize})):i.a.createElement(T,{link:e.link,type:e.link.type,deviceSize:e.deviceSize}))},M=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(A,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement("a",{href:e.link.link},i.a.createElement(s.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),i.a.createElement(m.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText))):i.a.createElement("div",null,i.a.createElement(s.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),i.a.createElement(m.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)))},j=n(28),D=n(422),I=n(214),W=n(421),_=function(e){var t=e.slides,n=e.size;return i.a.createElement(W.a,{textAlign:"center"},i.a.createElement(g.a.Group,{size:n},Object(I.a)(Array(t).keys()).map((function(e){return i.a.createElement(g.a,{as:j.d,key:e,icon:"circle",slide:e})}))))};_.defaultProps={size:"mini"};var B=_,G=(n(410),function(e){return i.a.createElement(j.c,{naturalSlideWidth:100,naturalSlideHeight:110,totalSlides:e.collection.length,interval:e.collection.speed,isPlaying:!0},i.a.createElement(j.g,null,e.collection.map((function(e,t){return i.a.createElement(j.f,{index:t},i.a.createElement(j.e,{src:e}))}))),i.a.createElement(D.a,null),e.collection.length>7?i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a,{className:"ui button"},"Back"),i.a.createElement(j.b,{className:"ui button"},"Next")):i.a.createElement(B,{slides:e.collection.length}))}),X=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(A,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(G,{collection:e.link.mainMedia.collection}),i.a.createElement(m.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)):i.a.createElement("div",null,i.a.createElement(G,{collection:e.link.mainMedia.collection}),i.a.createElement(m.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)))},F=(n(411),function(e){var t=e.links.buttonColor;return i.a.createElement("div",null,i.a.createElement(b.a,{size:"small",trigger:i.a.createElement(g.a,Object.assign({fluid:!0,size:"big",color:e.links.buttonColor},t?{className:"RCPadding fontColor ".concat(e.link.fontColor)}:{className:"RCPadding RCWhiteBG"}),e.links.name),closeIcon:!0},i.a.createElement(o.a,{centered:!0,columns:2},e.links.modalAlternativeText.removed?"":i.a.createElement(o.a.Row,{className:"RCTitleFix"},i.a.createElement(x,{data:e.links})),i.a.createElement(o.a.Row,{className:"RLBio"},i.a.createElement(b.a.Content,{image:!0,className:"RCCenter RCPushDown"},e.links.bioContent.map((function(e){return i.a.createElement(m.a,{as:"h2"},e.header,i.a.createElement(m.a.Subheader,{content:e.subHeader}))})))))))}),H=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(A,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(F,{links:e.link})):i.a.createElement(F,{links:e.link}))},J=function(e){var t=e.link.linkSpaced,n=e.link.colored;return i.a.createElement("div",null,"internal"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(w,{link:e.link,deviceSize:e.deviceSize})):"item"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(O,{link:e.link,deviceSize:e.deviceSize})):"still/external"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(M,{link:e.link,deviceSize:e.deviceSize})):"slideshow"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(X,{link:e.link,deviceSize:e.deviceSize})):"bio"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(H,{link:e.link,deviceSize:e.deviceSize})):i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(L,{link:e.link,deviceSize:e.deviceSize})))},q=(n(412),function(e){return i.a.createElement("div",{className:"stretched"},i.a.createElement(m.a,{as:"h2"},i.a.createElement("span",null,e.links.groupName)),i.a.createElement("div",null,e.links.group.map((function(t){return i.a.createElement(J,{link:t,deviceSize:e.deviceSize})}))))}),K=n(208),V=n.n(K),$=n(209),Q=n.n($),U=function(e){return i.a.createElement(o.a,{centered:!0},i.a.createElement(o.a.Row,null,i.a.createElement(c.a,null,i.a.createElement(E,{links:e.socialLinks,deviceSize:e.deviceSize,profileImg:e.profileImage,profileTitle:e.profileTitle}))),e.linkGroups.map((function(t,n){return i.a.createElement(o.a.Row,null,i.a.createElement(q,{key:n,links:t,deviceSize:e.deviceSize}))})),i.a.createElement(d.a,{basic:!0},i.a.createElement(s.a,{src:(t=e.logo,"white"===t?Q.a:V.a),as:"a",size:"small",href:"https://rightclickrva.com/business",target:"_blank",spaced:!0})));var t},Y=n(92),Z=n(213),ee={title:"P2P Rixh",color:"RLWhite"},te=!0,ne="https://res.cloudinary.com/rightlink/image/upload/v1594868601/p2pRich/logo_vcg55z.png",ae="background-image: linear-gradient(to right top, #000000, #1a1a1a, #2d2d2d, #424242, #585858, #585858, #585858, #585858, #424242, #2d2d2d, #1a1a1a, #000000);",ie={group:[{name:"Instagram",iconName:"instagram",link:"https://instagram.com/p2prixhmusic",color:"red",secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Twitter",iconName:"twitter",link:"https://twitter.com/pay2playrich",color:"red",secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Sound Cloud",iconName:"soundcloud",link:"https://soundcloud.com/p2prixh",color:"red",secondaryColor:"",surrounded:"circular",surroundedInColor:!0}]},le=n(211),re=Object(Z.a)({backgroundImg:{"background-image":"url(".concat(te?ne:"",")"),"background-repeat":"no-repeat","background-position":"50% 45%","background-attachment":"fixed","background-size":"contain"}}),oe=[{groupName:"",groupColor:"",group:[{name:"Latest EP",link:"",linkSpaced:!0,type:"still/external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",featuredAltStyle:"",pinned:!0,mainMedia:{type:"still/external",link:"https://res.cloudinary.com/rightlink/image/upload/v1617817684/p2pRich/4_The_Common_Wealth_dznnwy.jpg",mediaText:"Latest EP",videoPoster:""},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:'Hit Single "Playing 4 Keeps"',link:"",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",featuredAltStyle:"",pinned:!0,mainMedia:{type:"still/external",link:"https://res.cloudinary.com/rightlink/image/upload/v1598754596/p2pRich/p2pEP_kzbolj.png",mediaText:"Spaceships In The Suburbs",videoPoster:""},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longestText",modalAlternativeText:{removed:!1,text:""}},{name:"Artist Website",link:"https://unitedmasters.com/p2p-rich",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:"Spaceships in the Suburbs - EP",link:"https://music.apple.com/us/album/spaceships-in-the-suburbs-ep/1529346651",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",featuredAltStyle:"",pinned:!0,mainMedia:{type:"still/external",link:"https://res.cloudinary.com/rightlink/image/upload/v1598754596/p2pRich/p2pEP_kzbolj.png",mediaText:"Spaceships In The Suburbs",videoPoster:""},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longestText",modalAlternativeText:{removed:!1,text:""}},{name:"Deadman Wonderland Video",link:"https://youtu.be/PJOmprROWmM",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longestText",modalAlternativeText:{removed:!1,text:""}}]}],ce=function(){var e=Object(Y.useMediaPredicate)("(max-width: 430px)"),t=Object(Y.useMediaPredicate)("(max-width: 768px)"),n=Object(Y.useMediaPredicate)("(max-width: 1024px)"),a=re();return i.a.createElement("div",{className:a.backgroundImg},console.log("window Width",window.innerWidth),i.a.createElement(le.a,null,i.a.createElement("title",null,"Right-Link"),i.a.createElement("style",null,"\n              .RLgradient {\n                ".concat(ae,"\n               }\n            "))),i.a.createElement(U,{deviceSize:e?"xs":t?"md":n?"lg":"xl",socialLinks:ie,profileTitle:ee,profileImage:"https://res.cloudinary.com/rightlink/image/upload/v1592673758/p2pRich/Profile1_hohiq3.jpg",linkGroups:oe,logo:"colored"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,n){}},[[225,1,2]]]);
//# sourceMappingURL=main.64ed51c2.chunk.js.map