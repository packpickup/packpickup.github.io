(this.webpackJsonppackpickup=this.webpackJsonppackpickup||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"vehicle-type-id":"vehicle-type-1","type":"Pickup (1 Ton)","image-url":"1-1t.svg"},{"vehicle-type-id":"vehicle-type-2","type":"Pickup (2,3,4 Ton)","image-url":"2-3t.svg"},{"vehicle-type-id":"vehicle-type-3","type":"Recovery","image-url":"3-recovery-3t.svg"},{"vehicle-type-id":"vehicle-type-4","type":"Movers","image-url":"4-mover-3t.svg"},{"vehicle-type-id":"vehicle-type-5","type":"Water Tanker","image-url":"5-water-tanker.svg"},{"vehicle-type-id":"vehicle-type-6","type":"Truck & Trailer","image-url":"6-trailer-truck.svg"}]')},24:function(e){e.exports=JSON.parse('[{"driver-id":"driver-1","vehicle-id":"vehicle-1","name":"Abdul Ghafoor","mobile":"+447722180577","country":"UAE","city":"Dubai","area":"Al Quoz, Sharjah","listing-order":"0","rating-stars":"4","not-used-labour-rate":"1 AED per hour","not-used-material-rate":"1 AED per box"},{"driver-id":"driver-2","vehicle-id":"vehicle-2","name":"Shah Islam","mobile":"+971505507892","country":"UAE","city":"Dubai","area":"Al Quoz, Sharjah, Dubai","listing-order":"1","rating-stars":"3","not-used-labour-rate":"1 AED per hour","not-used-material-rate":"1 AED per box"},{"driver-id":"driver-3","vehicle-id":"vehicle-3","name":"Kareem Jan Khan with long name","mobile":"+447722180577","country":"UAE","city":"Dubai","area":"Sharjah, Dubai","listing-order":"2","rating-stars":"5","not-used-labour-rate":"1 AED per hour","not-used-material-rate":"1 AED per box"},{"driver-id":"driver-4","vehicle-id":"vehicle-4","name":"Kareem Jan Khan with long name","mobile":"+447722180577","country":"UAE","city":"Dubai","area":"Sharjah, Dubai","listing-order":"2","rating-stars":"5","not-used-labour-rate":"1 AED per hour","not-used-material-rate":"1 AED per box"},{"driver-id":"driver-5","vehicle-id":"vehicle-5","name":"Abdul Shakoor","mobile":"+447722180577","country":"UAE","city":"Dubai","area":"Sharjah, Dubai","listing-order":"2","rating-stars":"5","not-used-labour-rate":"1 AED per hour","not-used-material-rate":"1 AED per box"}]')},29:function(e){e.exports=JSON.parse('[{"vehicle-id":"vehicle-1","vehicle-type-id":"vehicle-type-1","number-of-pictures":3,"vehicle-brand":"Toyota","brand-model":"Hilex","model-year":"2015"},{"vehicle-id":"vehicle-2","vehicle-type-id":"vehicle-type-1","number-of-pictures":1,"vehicle-brand":"BMW","brand-model":"5 series","model-year":"2017"},{"vehicle-id":"vehicle-3","vehicle-type-id":"vehicle-type-1","number-of-pictures":1,"vehicle-brand":"Toyota","brand-model":"Land cruiser","model-year":"2012"},{"vehicle-id":"vehicle-4","vehicle-type-id":"vehicle-type-2","number-of-pictures":2,"vehicle-brand":"Toyota","brand-model":"Big truck","model-year":"2014"},{"vehicle-id":"vehicle-5","vehicle-type-id":"vehicle-type-2","number-of-pictures":2,"vehicle-brand":"Honda","brand-model":"Civic","model-year":"2019"}]')},31:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},45:function(e,c,t){},46:function(e,c,t){},47:function(e,c,t){},48:function(e,c,t){},49:function(e,c,t){},51:function(e,c,t){"use strict";t.r(c);t(31),t(32);var i=t(0),a=t.n(i),r=t(13),s=t.n(r),n=(t(37),t(55)),l=t(12),o=t(6),d=(t(38),t(53)),j=t(54),h=t(1),b=function(){return Object(h.jsx)(d.a,{className:"header",children:Object(h.jsxs)(j.a,{xs:"12",style:{textAlign:"center",marginTop:12},children:[Object(h.jsx)(l.b,{to:"/",children:Object(h.jsx)("img",{className:"logo",src:"".concat("","/logo.svg"),alt:"Pack pickup"})}),Object(h.jsx)("div",{className:"divider"})]})})},m=(t(45),t(15)),v=function(){return Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)(d.a,{children:Object(h.jsxs)(j.a,{xs:"12",className:"banner-wrapper",children:[Object(h.jsxs)("div",{className:"user",children:[Object(h.jsx)("span",{children:"Guest"}),Object(h.jsx)("img",{src:"/avatar.svg",alt:"User"})]}),Object(h.jsx)("img",{src:"/home-bg.jpg",alt:"traffic on road",className:"banner"})]})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(j.a,{xs:"12",children:Object(h.jsx)("h1",{className:"title",children:"Hire Transportation Services"})})}),Object(h.jsx)(d.a,{children:m.map((function(e){return Object(h.jsx)(j.a,{xs:"6",className:"v-type",children:Object(h.jsx)(l.b,{to:"/search-results/?v-type=".concat(e["vehicle-type-id"]),children:Object(h.jsx)("img",{src:"".concat("","/vehicle-types/").concat(e["image-url"]),alt:e.type})})},e["vehicle-type-id"])}))}),Object(h.jsx)(d.a,{children:Object(h.jsx)(j.a,{children:Object(h.jsx)("img",{onClick:function(){return window.alert("Work in progress...")},className:"see-more",src:"".concat("","/vehicle-types/see-more-vehicles.svg"),alt:"See more"})})})]})},u=t(26),p=t(25),x=(t(46),t(56)),O=(t(47),t(17)),g=(t(48),function(e){var c=e.rating;return Object(h.jsxs)("span",{className:"rating-stars",children:[Object(O.a)(Array(c)).map((function(e,c){return"\u2605"})),Object(O.a)(Array(5-c)).map((function(e,c){return"\u2606"}))]})}),y=function(e){var c=e.vehicle,t=e.onClick,i=e.className,a=void 0===i?"":i;return Object(h.jsxs)(d.a,{className:"result-item ".concat(a," ").concat(t?"item-clickable":""),onClick:t,children:[Object(h.jsx)(j.a,{xs:"4",sm:"3",className:"v-main-img",children:Object(h.jsx)("img",{src:"".concat("","/vehicles/").concat(c["vehicle-id"],"/main.jpg"),alt:c["vehicle-brand"]})}),Object(h.jsxs)(j.a,{xs:"8",sm:"6",children:[Object(h.jsxs)("strong",{children:[c["vehicle-brand"]," - ",c["brand-model"]," -"," ",c["model-year"]]}),c.driver&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"driver-name-avatar",src:"".concat("","/green-avatar.svg"),alt:"Driver"})," ",c.driver.name]}),Object(h.jsxs)("div",{children:["Area: ",c.driver.area]}),Object(h.jsxs)("div",{children:[c.driver.city,", ",c.driver.country]})]})]}),c.driver&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{xs:"4",sm:"1",className:"spacer"}),Object(h.jsx)(j.a,{xs:"8",sm:"3",className:"driver-info",children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"driver-image",style:{backgroundImage:"url(".concat("","/vehicles/").concat(c["vehicle-id"],"/driver.jpg)")}}),Object(h.jsx)("span",{className:"rating",children:Object(h.jsx)(g,{rating:Number(c.driver["rating-stars"])})})]})})]})]})},f=(t(49),function(e){var c=e.vehicleType,t=e.selectedVehicle,i=e.onHide;return Object(h.jsxs)("div",{className:"vehicle-details",children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(j.a,{xs:"9",sm:"10",children:Object(h.jsx)("img",{className:"v-type-img",src:"".concat("","/vehicle-types/simple/").concat(c["image-url"]),alt:c.type})}),Object(h.jsx)(j.a,{xs:"3",sm:"2",className:"modal-close",children:Object(h.jsx)("img",{src:"".concat("","/close.svg"),alt:"Close",onClick:i})})]}),Object(h.jsx)(y,{className:"v-card",vehicle:t}),Object(h.jsxs)(d.a,{className:"comms",children:[Object(h.jsx)(j.a,{xs:"6",className:"sms",children:Object(h.jsxs)("a",{href:"tel:".concat(t.driver.mobile),children:["Call",Object(h.jsx)("img",{alt:"Call",src:"".concat("","/comms/phone-call.png")})]})}),Object(h.jsx)(j.a,{xs:"6",className:"whatsapp",children:Object(h.jsxs)("a",{target:"whatsapp",href:"https://wa.me/".concat(t.driver.mobile,"?text=Hello ").concat(t.driver.name.split(" ")[0],",%0a").concat(encodeURI("Message from: https://packpickup.com")," %0a").concat(encodeURI(N)),children:["WhatsApp",Object(h.jsx)("img",{alt:"WhatsApp",src:"".concat("","/comms/whatsapp.png")})]})})]}),Object(h.jsxs)(d.a,{className:"photos",children:[Object(h.jsx)(j.a,{xs:"12",children:Object(h.jsx)("strong",{children:"Reference photos:"})}),Object(h.jsx)(j.a,{xs:"12",sm:"6",children:Object(h.jsx)("img",{alt:"vehicle main",src:"".concat("","/vehicles/").concat(t["vehicle-id"],"/main.jpg")})}),Object(h.jsx)(j.a,{xs:"12",sm:"6",children:Object(h.jsx)("img",{alt:"driver",src:"".concat("","/vehicles/").concat(t["vehicle-id"],"/driver.jpg")})}),Object(O.a)(Array(t["number-of-pictures"])).map((function(e,c){return Object(h.jsx)(j.a,{xs:"12",sm:"6",children:Object(h.jsx)("img",{alt:"vehicle",src:"".concat("","/vehicles/").concat(t["vehicle-id"],"/").concat(c+1,".jpg")},c)},c)}))]}),Object(h.jsx)(d.a,{children:Object(h.jsx)("button",{className:"close",onClick:function(e){e.preventDefault(),i()},children:"Close"})})]})}),N="Are you available for packaging and transportation service?",k=t(24),A=t(29),D=function(){var e=Object(o.f)().search.split("?")[1].split("=")[1],c=Object(i.useState)(!1),t=Object(p.a)(c,2),a=t[0],r=t[1],s=Object(i.useState)(),n=Object(p.a)(s,2),b=n[0],v=n[1],O=Object(i.useMemo)((function(){return A.filter((function(c){return c["vehicle-type-id"]===e})).map((function(e){return Object(u.a)(Object(u.a)({},e),{},{driver:k.find((function(c){return c["vehicle-id"]===e["vehicle-id"]}))||k[0]})}))}),[e]),g=Object(i.useMemo)((function(){return m.find((function(c){return c["vehicle-type-id"]===e}))||m[0]}),[e]);return Object(h.jsxs)("div",{className:"search-results",children:[Object(h.jsxs)(d.a,{className:"header",children:[Object(h.jsxs)(j.a,{xs:"7",sm:"8",children:[Object(h.jsxs)("div",{className:"user",children:[Object(h.jsx)("img",{src:"/avatar.svg",alt:"User"}),Object(h.jsx)("span",{children:"Guest"})]}),Object(h.jsx)("h1",{children:g.type})]}),Object(h.jsx)(j.a,{xs:"5",sm:"4",children:Object(h.jsx)("img",{className:"v-type-img",src:"".concat("","/vehicle-types/simple/").concat(g["image-url"]),alt:g.type})})]}),0===O.length?Object(h.jsxs)("div",{children:["No vehicles found. Please ",Object(h.jsx)(l.b,{to:"/",children:"click here"})," to navigate to home page"]}):O.map((function(e){return Object(h.jsx)(y,{vehicle:e,onClick:function(){v(e),r(!0)}},e["vehicle-id"])})),Object(h.jsx)(x.a,{show:a,animation:!1,onHide:function(){r(!1),v(void 0)},dialogClassName:"custom-modal",children:b&&Object(h.jsx)(f,{vehicleType:g,selectedVehicle:b,onHide:function(){return r(!1)}})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(l.b,{className:"back-to-home-link",to:"/",children:"Main page"})})]})},E=function(){return Object(h.jsx)(l.a,{basename:"/",children:Object(h.jsxs)(n.a,{style:{maxWidth:540},children:[Object(h.jsx)(b,{}),Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(v,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/search-results",children:Object(h.jsx)(D,{})})]})}),Object(h.jsx)("footer",{className:"footer",children:Object(h.jsxs)("small",{children:["\xa9 PackPickup ",(new Date).getFullYear()]})})]})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(c){var t=c.getCLS,i=c.getFID,a=c.getFCP,r=c.getLCP,s=c.getTTFB;t(e),i(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),S()}},[[51,1,2]]]);
//# sourceMappingURL=main.542ce8d2.chunk.js.map