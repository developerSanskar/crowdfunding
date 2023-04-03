import{_ as g,D as x,o as n,c as i,e as t,n as f,k as m,w as c,p as h,t as s,b as v,y as w,E as $,F as k,g as y,C,r as p,A as L}from"./index.5cb9ca0b.js";var D="/assets/sadbhavna_donatekart/frontend/assets/logo-2.1.fe0b7f94.png";const I={name:"Navbar",setup(){return{user:C("user")}},components:{Dialog:x},data(){return{showMenu:!1,showDialog:!1,language:localStorage.getItem("lang")||window.navigator.language,languages:[{key:"en-GB",value:"English"},{key:"gu",value:"\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"},{key:"hi",value:"\u0939\u093F\u0902\u0926\u0940"}],n:window.navigator.language,l:localStorage.getItem("lang")}},mounted(){},resources:{logout(){return{method:"logout",onSuccess:e=>{this.$toast({title:"Success",text:"You successfully logout",customIcon:"check"}),this.$router.go()},onError(){console.log("Error"),this.$toast({title:"Error",text:"Somthing want wrong during Logout!",customIcon:"circle-fail",appearance:"denger"})}}}},methods:{handleChange(e){localStorage.setItem("lang",e.target.value),window.location.reload()},show_logout_dialog(){this.showDialog=!0},logout(){this.$resources.logout.submit()},profile(){const e=Object.fromEntries(document.cookie.split("; ").map(o=>o.split("=")).map(o=>[o[0],decodeURIComponent(o[1])]));this.$router.push(`/sadbhavna/profile/${e.user_id}`)}},mounted(){this.user.isLoggedIn()}},S={class:"pt-2 pl-2 md:pl-4 lg:pl-[46px] xl:pl-24 pr-2 md:pr-4 lg:pr-[46px] xl:pr-24"},F={class:"rounded-xl bg-[#40b751]"},H={class:"px-[5px] md:px-[5px] lg:px-[0px] xl:px-[35px] py-[5px] md:py-[5px] lg:py-[20px] lg:flex lg:justify-between lg:items-center"},V={class:"flex justify-between"},N=t("div",{class:"flex items-center flex-shrink-0"},[t("a",{href:"/sadbhavna"},[t("img",{src:D,class:"mb-2 lg:mb-0 sm:mt-2 lg:mt-0 sm:mr-0 md:mr-32 lg:mr-32 w-20 lg:w-36 h-20 lg:h-44 ml-0 lg:ml-6"})])],-1),A=t("button",{type:"button",class:"text-white hover:text-white focus:outline-none focus:text-white"},[t("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[t("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z "})])],-1),E=[A],M={href:"#",class:"transition font-bold text-white hover:text-black"},B={class:"group relative inline-block"},W={href:"/sadbhavna/blog",class:"transition font-bold text-white hover:text-black"},z=["value"];function U(e,o,u,b,a,r){const d=p("router-link"),_=p("Dialog");return n(),i("div",S,[t("div",F,[t("nav",H,[t("div",V,[N,t("div",{onClick:o[0]||(o[0]=l=>a.showMenu=!a.showMenu),class:"pr-[20px] md:pr-[20px] lg:pr-[5px] flex lg:hidden"},E)]),t("ul",{class:f([a.showMenu?"flex":"hidden","fontfamily text-[15px] p-[15px] md:p-[15px] lg:p-[15px] flex-col sm:mt-8 md:mt-2 lg:mt-0 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-6 lg:mt-0"])},[t("li",null,[m(d,{to:"/sadbhavna",class:"transition font-bold text-white hover:text-black"},{default:c(()=>[h(s(e.$t("Home")),1)]),_:1})]),t("li",null,[t("a",M,s(e.$t("About")),1)]),t("li",null,[m(d,{to:"/sadbhavna/request-campaign",class:"transition font-bold text-white hover:text-black"},{default:c(()=>[h(s(e.$t("Request a Campaign")),1)]),_:1})]),t("li",null,[m(d,{to:"/sadbhavna/contact-us",class:"transition font-bold text-white hover:text-black"},{default:c(()=>[h(s(e.$t("Contact")),1)]),_:1})]),t("li",null,[t("span",B,[t("a",W,s(e.$t("Blog")),1)])]),this.user.isLoggedIn()?(n(),i("li",{key:0,onClick:o[1]||(o[1]=l=>r.profile()),class:"font-bold text-white hover:text-black cursor-pointer"},s(e.$t("Profile")),1)):v("",!0),t("li",null,[w(t("select",{class:"appearance-none border-0 border-gray-300 mt-2 hover:border-[#40b751] rounded w-24 py-2 px-3 text-grey-darker","onUpdate:modelValue":o[2]||(o[2]=l=>a.language=l),onChange:o[3]||(o[3]=l=>r.handleChange(l))},[(n(!0),i(k,null,y(a.languages,l=>(n(),i("option",{value:l.key,class:"bg-green-500"},s(l.value),9,z))),256))],544),[[$,a.language]])]),t("li",null,[this.user.isLoggedIn()?(n(),i("button",{key:0,onClick:o[4]||(o[4]=l=>r.show_logout_dialog()),class:"transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-4 pt-2 pb-2 pl-8 pr-8 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1"},s(e.$t("Logout")),1)):(n(),i("button",{key:1,onClick:o[5]||(o[5]=l=>this.$router.push("/sadbhavna/auto-login")),class:"transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-4 pt-2 pb-2 pl-8 pr-8 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1"},s(e.$t("Login")),1))])],2)]),m(_,{options:{title:e.$t("Logout"),message:e.$t("Are you sure want to logout?"),size:"sm",actions:[{label:e.$t("Confirm"),appearance:"success",handler:({close:l})=>{this.logout(),l()}},{label:e.$t("Cancel")}]},modelValue:a.showDialog,"onUpdate:modelValue":o[6]||(o[6]=l=>a.showDialog=l)},null,8,["options","modelValue"])])])}var Mt=g(I,[["render",U]]),j="/assets/sadbhavna_donatekart/frontend/assets/facebook.9ac7fe2c.svg",P="/assets/sadbhavna_donatekart/frontend/assets/twitter.bf573150.svg",q="/assets/sadbhavna_donatekart/frontend/assets/insta.cc93ce04.svg",G="/assets/sadbhavna_donatekart/frontend/assets/linkedin.08a20e56.svg";const O={name:"Footer",theme:{screens:{medium:"758px"}},mounted(){}},R={class:"px-10 md:px-50 lg:px-30 xl:px-0 bg-[#40b751]"},Q={class:"container w-full pt-10 md:pt-10 lg:pt-20 sm:pb-0 ml-auto mr-auto text-neutral-50"},T={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:gap-auto md-gap:4 lg:gap-auto pb-5 md:pb-10 lg:pb-2 px-0 py-0"},Y={class:"sm:col-span-2 md:col-span-2 lg:col-auto"},J={class:"font-bold text-white mb-6 text-xl mb-4"},K=L('<p class="text-whitetext-gray-500 -pr-[200px] dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cumque tenetur inventore veniam, hic vel ipsa necessitatibus ducimus architecto fugiat!</p><div class="my-5 pr-4"><div class="flex space-x-6 mt-8"><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+j+'"><p class="sr-only">Facebook page</p></a><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+P+'"><p class="sr-only">Twitter page</p></a><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+q+'"><p class="sr-only">Instagram page</p></a><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+G+'"><p class="sr-only">Linkedin account</p></a></div></div>',2),X={class:"sm:pl-[0px] md:pl-[0px] lg:pl-[60px] md:pb-10 sm:pb-10"},Z={class:"font-bold text-white mb-6 text-xl mb-4 pt-10 md:pt-5 lg:pt-0"},tt={class:"text-white"},et={class:"sm:mb-2 md:mb-2 lg:mb-4"},st={href:"#"},ot={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},lt={href:"#"},at={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},nt={href:"#"},it={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},rt={href:"#"},mt={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},dt={href:"#"},ct={class:"sm:pl-[0px] md:pl-[0px] lg:pl-[50px] sm:pr-28 md:pr-32 lg:pr-0"},ht={class:"font-bold text-white mb-6 text-xl mb-4 pt-10 md:pt-5 lg:pt-0"},pt={class:"text-white"},gt={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},ut={href:"#"},bt={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},_t={href:"#"},xt={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},ft={href:"#"},vt={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},wt={href:"#"},$t={class:"sm:pl-[0px] md:pl-[0px] lg:pl-[60px]"},kt={class:"font-bold text-white mb-6 text-xl mb-4 pt-10 md:pt-5 lg:pt-0"},yt={class:"text-white"},Ct={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},Lt={href:"#"},Dt={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},It={href:"#"},St={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},Ft={href:"#"},Ht={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},Vt={href:"#"},Nt=t("div",{class:"text-center px-4 pb-8 pt-12 border-t border-white border-opacity-10 border-neutral-100"},[t("span",{class:"text-sm font-normal mb-4 mt-0font-semiboldtext-whitetext-gray-500 dark:text-gray-400"},"Copyright \xA9 2023 All rights reserved ")],-1);function At(e,o,u,b,a,r){return n(),i("div",R,[t("footer",Q,[t("div",T,[t("div",Y,[t("h2",J,s(e.$t("About")),1),K]),t("div",X,[t("h2",Z,s(e.$t("Quick Links")),1),t("ul",tt,[t("li",et,[t("a",st,s(e.$t("Symptoms")),1)]),t("li",ot,[t("a",lt,s(e.$t("Prevention")),1)]),t("li",at,[t("a",nt,s(e.$t("FAQs")),1)]),t("li",it,[t("a",rt,s(e.$t("About Coronavirus")),1)]),t("li",mt,[t("a",dt,s(e.$t("Contact Us")),1)])])]),t("div",ct,[t("h2",ht,s(e.$t("Helpful Link")),1),t("ul",pt,[t("li",gt,[t("a",ut,s(e.$t("Helathcare Professional")),1)]),t("li",bt,[t("a",_t,s(e.$t("LGU Facilities")),1)]),t("li",xt,[t("a",ft,s(e.$t("Protect Your Family")),1)]),t("li",vt,[t("a",wt,s(e.$t("World Health")),1)])])]),t("div",$t,[t("h2",kt,s(e.$t("Resources")),1),t("ul",yt,[t("li",Ct,[t("a",Lt,s(e.$t("WHO Website")),1)]),t("li",Dt,[t("a",It,s(e.$t("CDC Website")),1)]),t("li",St,[t("a",Ft,s(e.$t("Gov Website")),1)]),t("li",Ht,[t("a",Vt,s(e.$t("DOH Website")),1)])])])]),Nt])])}var Bt=g(O,[["render",At]]);export{Bt as F,Mt as N};
