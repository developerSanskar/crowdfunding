import{N as i,F as d}from"./Footer.fddd4ee2.js";import{_ as m,o as _,c as p,k as a,e,p as t,t as u,w as f,F as x,C as h,r as s}from"./index.d369d6b4.js";var b="/assets/sadbhavna_donatekart/frontend/assets/check.7e38faa7.png";const g={name:"Donation Success Page",components:{Navbar:i,Footer:d},data(){return{total_donation:100}},mounted(){const o=h();this.total_donation=o.params.donation,console.log("route",o)}},v={class:"container mx-auto h-full"},k={class:""},y={class:"px-6 mb-40 mt-40"},N={class:"text-center mt-12"},F=e("div",{class:"grid place-content-center"},[e("img",{class:"h-16 w-16",src:b})],-1),G=e("h3",{class:"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"}," Thanks for your Support ",-1),w={class:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"},C=e("i",{class:"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"},null,-1),S={class:"text-green-500"},B=e("div",{class:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"},[e("i",{class:"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"}),t(" 100% of your money will fund for people in need and also make a real difference to people's lives. ")],-1);function D(o,V,$,E,n,P){const r=s("Navbar"),c=s("router-link"),l=s("Footer");return _(),p(x,null,[a(r),e("section",null,[e("div",v,[e("div",k,[e("div",y,[e("div",N,[F,G,e("div",w,[C,t(" Your donation of "),e("span",S,u(n.total_donation),1),t(" has been processed ")]),B,a(c,{to:"/sadbhavna",class:"text-green-500"},{default:f(()=>[t("Explore More Campaign")]),_:1})])])])])]),a(l)],64)}var R=m(g,[["render",D]]);export{R as default};
