(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(15),s=a.n(r),l=a(2),o=a.n(l),m=a(5),i=a(16),d=a(17),u=a(19),h=a(18),v=a(3),p=a(20),b=a(4),E=a.n(b),f=(a(44),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={confirmed:0,recovered:0,deaths:0,countries:[]},a.getCountryData=a.getCountryData.bind(Object(v.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(m.a)(o.a.mark((function e(){var t,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://covid19.mathdro.id/api");case 2:return t=e.sent,e.next=5,E.a.get("https://covid19.mathdro.id/api/countries");case 5:a=e.sent,c=Object.keys(a.data.countries),this.setState({confirmedc:t.data.confirmed.value,recoveredc:t.data.recovered.value,deathsc:t.data.deaths.value,countries:c});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCountryData",value:function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://covid19.mathdro.id/api/countries/".concat(t.target.value));case 3:a=e.sent,this.setState({confirmed:a.data.confirmed.value,recovered:a.data.recovered.value,deaths:a.data.deaths.value}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),404===e.t0.response.status&&this.setState({confirmed:"Not Found",recovered:"Not Found",deaths:"Not Found"});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderCountryOptions",value:function(){return this.state.countries.map((function(e,t){return n.a.createElement("option",{key:t},e)}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"shadow-sm p-3 mb-5 bg-white rounded"},n.a.createElement("h2",{className:"text-center font-weight-bold"},"Covid-19 live")),n.a.createElement("div",{className:"container mx-auto px-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",null,n.a.createElement("h3",null,"Worldwide"),"   ",n.a.createElement("br",null))),n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:" box1  shadow-lg p-3 mb-5 bg-white   col-12 col-sm-12 col-md-3 col-mx-3"},n.a.createElement("h3",null,"Confirmed"),n.a.createElement("h2",{className:"tc"},this.state.confirmedc)),n.a.createElement("div",{className:"box2  shadow-lg p-3 mb-5 bg-white  col-12 col-sm-12 col-md-3 col-mx-3 "},n.a.createElement("h3",null,"Recoverd"),n.a.createElement("h2",{className:"tr"},this.state.recoveredc)),n.a.createElement("div",{className:"box3  shadow-lg p-3 mb-5 bg-white  col-12 col-sm-12 col-md-3 col-mx-3 "},n.a.createElement("h3",null,"Deaths"),n.a.createElement("h2",{className:"td"},this.state.deathsc)))),n.a.createElement("div",{className:"container mx-auto px-4"},n.a.createElement("div",{className:"pb-3 row  flex"},n.a.createElement("div",{className:"col-12 col-sm-12 col-md-9 col-mx-9"},n.a.createElement("h3",null,"Country :",this.getCountryData)),n.a.createElement("div",{className:" col-12 col-sm-12 col-md-3 col-mx-3"},n.a.createElement("select",{onChange:this.getCountryData,className:" browser-default custom-select"},this.renderCountryOptions()))),n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:" box1  shadow-lg p-3 mb-5 bg-white   col-12 col-sm-12 col-md-3 col-mx-3 "},n.a.createElement("h3",null,"Confirmed"),n.a.createElement("h2",{className:"tc"},this.state.confirmed)),n.a.createElement("div",{className:"box2  shadow-lg p-3 mb-5 bg-white  col-12 col-sm-12 col-md-3 col-mx-3 "},n.a.createElement("h3",null,"Recoverd"),n.a.createElement("h2",{className:"tr"},this.state.recovered)),n.a.createElement("div",{className:"box3  shadow-lg p-3 mb-5 bg-white  col-12 col-sm-12 col-md-3 col-mx-3 "},n.a.createElement("h3",null,"Deaths"),n.a.createElement("h2",{className:"td"},this.state.deaths))),n.a.createElement("div",{className:"profile_d text-center shadow-lg p-3 mb-5 bg-white rounded"},n.a.createElement("h2",{className:"profile  "},"Created by ",n.a.createElement("a",{href:"https://www.facebook.com/SakibHasan99"},"Sakib Hasan\ud83d\ude0d")))))}}]),t}(n.a.Component));s.a.render(n.a.createElement(f,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0014d311.chunk.js.map