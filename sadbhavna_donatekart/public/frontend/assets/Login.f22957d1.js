var h=(l,t,n)=>new Promise((c,a)=>{var i=o=>{try{s(n.next(o))}catch(r){a(r)}},d=o=>{try{s(n.throw(o))}catch(r){a(r)}},s=o=>o.done?c(o.value):Promise.resolve(o.value).then(i,d);s((n=n.apply(l,t)).next())});import{_ as x,x as f,o as w,c as v,k as u,e,y as g,z as b,w as _,F as y,p as m,r as p}from"./index.a2387282.js";import{N as k,F as G}from"./Footer.feb8376d.js";const $={name:"Login",components:{Navbar:k,Footer:G},data(){return{password:"",email:"",isLogin:!1}},resources:{login(){return{method:"/api/method/login",onSuccess:()=>h(this,null,function*(){this.$router.push("/sadbhavna")}),onError:l=>{this.$toast({title:"Error",text:"User Name or Password Incorrect",customIcon:"circle-fail",appearance:"denger"}),this.email="",this.password=""}}},login_with_google(){return{method:"frappe.www.login.login_via_token",onSuccess:()=>{this.$router.push("/sadbhavna")},onError:l=>{console.log("error",l),this.$toast({title:"Error",text:"Something want Wrong!",customIcon:"circle-fail",appearance:"denger"})}}}},methods:{login(){this.$resources.login.submit({usr:this.email,pwd:this.password})},login_with_google:l=>{let t=f(l.credential),n=t.email,c=t.family_name,a=t.given_name,i=t.picture,d=`http://sadbhavnadonatekart.com:8080/api/method/sadbhavna_donatekart.api.api.login_with_google?email=${n}&first_name=${c}&last_name=${a}&image_url=${i}`;fetch(d,{method:"GET"}).then(s=>{s.json().then(o=>{console.log("asdf",o.message),console.log("asdf",o),o.message,window.location="http://sadbhavnadonatekart.com:8080/home"})}).catch(function(s){log("Request failed",s)})}}},E={class:"container mx-auto h-full my-20"},F={class:"flex content-center items-center justify-center h-full"},N={class:"w-11/12 md:w-6/12 lg:w-4/12 px-4"},V={class:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"},I={class:"flex-auto px-4 lg:px-10 py-10 pt-5"},L=e("div",{class:"text-blueGray-400 text-center mb-3 font-bold text-[40px] md:text-[45px] lg:text-[45px]"},[e("small",null,"sign in ")],-1),S={class:"relative w-full mb-3"},q=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"},[m(" Email "),e("span",{class:"text-red-600"},"*")],-1),B={class:"relative w-full mb-3"},C=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"},[m(" Password "),e("span",{class:"text-red-600"},"*")],-1),P={class:"text-center mt-6"},T=e("br",null,null,-1);function U(l,t,n,c,a,i){const d=p("Navbar"),s=p("router-link"),o=p("Footer");return w(),v(y,null,[u(d),e("div",E,[e("div",F,[e("div",N,[e("div",V,[e("div",I,[L,e("form",null,[e("div",S,[q,g(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>a.email=r),type:"email",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Email",required:""},null,512),[[b,a.email]])]),e("div",B,[C,g(e("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>a.password=r),type:"password",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Password",required:""},null,512),[[b,a.password]])]),e("div",P,[e("button",{style:{"background-color":"#40b751"},class:"cursor-pointer border-[#40b751] hover:border-[#40b751] bg-[#40b751] hover:bg-transparent text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 w-full ease-linear transition-all duration-150",type:"button",onClick:t[2]||(t[2]=r=>i.login())}," Sign In ")]),u(s,{to:"/sadbhavna/registration",class:"text-green-500"},{default:_(()=>[m("Register")]),_:1}),T,u(s,{to:"auto-login",class:"text-green-500"},{default:_(()=>[m("Other Login Method")]),_:1})])])])])])]),u(o)],64)}var R=x($,[["render",U]]);export{R as default};
