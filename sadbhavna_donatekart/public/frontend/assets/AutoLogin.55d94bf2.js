import{_,G as x,o as h,c as g,k as c,e as t,t as r,y as f,H as v,n as w,b as u,p as y,F as k,r as b}from"./index.a6d7915d.js";import{N as $,F as L}from"./Footer.5561ae1c.js";const F={name:"Auto Login",components:{Navbar:$,Footer:L},data(){return{phone:"",email:"",error:""}},mounted(){FB.init({appId:"1616534218770661",cookie:!0,xfbml:!0,version:"v13.0"})},resources:{login_with_whatsapp(){return{method:"sadbhavna_donatekart.api.api.login_with_whatsapp",onSuccess:e=>{console.log("okey",e);let o=e[0],a=e[1],i=e[2];this.$router.push(`/sadbhavna/otp/${o}&${a}&${i}`)},onError:e=>{console.log("error",e)}}},login_with_sms(){return{method:"sadbhavna_donatekart.api.api.login_with_sms",onSuccess:e=>{console.log("okey",e);let o=e[0],a=e[1],i=e[2];this.$router.push(`/sadbhavna/otp/${o}&${a}&${i}`)},onError:e=>{console.log("error",e)}}}},methods:{login_with_google:e=>{let o=x(e.credential),a=o.email,i=o.family_name,s=o.given_name,l=o.picture,p=`https://crowdfunding.frappe.cloud/api/method/sadbhavna_donatekart.api.api.login_with_google?email=${a}&first_name=${i}&last_name=${s}&image_url=${l}`;fetch(p,{method:"GET"}).then(d=>{d.json().then(m=>{var n=globalThis.$cookies.get("route");n!=null?globalThis.$router.go(-1):globalThis.$router.push("/sadbhavna")})}).catch(function(d){log("Request failed",d)})},login_with_whatsapp(){var e=/^[6-9][0-9]{9}$/;this.phone==""?this.error="Please enter mobile number for login with Whatsapp":e.test(this.phone)==!1?this.error="Please enter 10 digit mobile number":(this.error="",this.$resources.login_with_whatsapp.submit({phone:this.phone}))},login_with_sms(){var e=/^[6-9][0-9]{9}$/;this.phone==""?this.error="Please enter mobile number for login with SMS":e.test(this.phone)==!1?this.error="Please enter 10 digit mobile number":this.$resources.login_with_sms.submit({phone:this.phone})},checkLoginState(){FB.getLoginStatus(function(e){e.status==="connected"?FB.api("/me",function(o){console.log("UserInfo:",o)}):console.log("User is not logged in with Facebook")})}}},S={class:"container mx-auto mb-[150px]"},N=t("div",{class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-[330px] sm:h-0 md:h-0 lg:h-0 xl:h-[485px] sm:w-0 md:w-0 lg:w-0 xl:w-[600px] sm:right-0 md:right-2 lg:right-2 xl:right-0 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}},null,-1),T={class:"container mx-auto h-full"},B={class:"w-full pt-0 md:pt-5 lg:pt-12"},C={class:"container py-0"},P={class:"w-5/5 md:w-6/6 lg:w-4/6 mx-auto bg-white"},E={class:"py-1 md:py-4 lg:py-8 px-4 md:px-6 lg:px-10 font-semibold text-gray-600 text-gray-600 text-center text-[30px] md:text-[32px] lg:text-[40px]"},V={class:"relative py-4 z-0 px-8"},D={class:"mb-4"},G={class:"block text-gray-600 text-base mb-2",for:"phone"},z={key:0,class:"text-red-500"},A={key:1,class:"text-sm text-gray-400"},I={class:"mb-4 grid md:grid-cols-2 sm:grid-cols-1"},M=t("div",{class:"mb-4"},[t("div",{class:"flex items-center uppercase text-gray-600 my-4 before:flex-1 before:border-t before:border-gray-600 before:mt-0.5 after:flex-1 after:border-t after:border-gray-600 after:mt-0.5"},[t("p",{class:"text-center mx-4 mb-0"},"Or")])],-1),U={class:"mb-4 grid md:grid-cols-2 sm:grid-cols-1"},j={class:"text-center"},O={class:"mb-4"},R={class:"flex mb-10 justify-between"},W=t("a",null,null,-1),q={class:"text-[#40b751] font-bold text-lg",href:"/sadbhavna/registration"},H={class:"mb-4"},K={class:"block text-gray-600 text-center text-base mb-2"},Y={class:"text-[#40b751]",href:"/sadbhavna/login"};function J(e,o,a,i,s,l){const p=b("Navbar"),d=b("GoogleLogin"),m=b("Footer");return h(),g(k,null,[c(p),t("div",S,[N,t("div",T,[t("div",B,[t("div",C,[t("div",P,[t("div",E,r(e.$t("Login")),1),t("div",V,[t("div",D,[t("label",G,r(e.$t("Enter Your Number")),1),f(t("input",{onKeyup:o[0]||(o[0]=n=>s.error=""),class:w("appearance-none hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker border",(s.error=="","border-red-600")),"onUpdate:modelValue":o[1]||(o[1]=n=>s.phone=n),type:"number"},null,34),[[v,s.phone]]),s.error?(h(),g("div",z,r(s.error),1)):u("",!0),s.phone&&!s.error?(h(),g("span",A,r(e.$t("An OTP will be sent to"))+" "+r(s.phone),1)):u("",!0)]),t("div",I,[t("button",{class:"appearance-none border-gray-600 rounded mb-5 py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded",onClick:o[2]||(o[2]=n=>l.login_with_whatsapp())},r(e.$t("Login with Whatsapp")),1),t("button",{class:"appearance-none border-gray-600 lg:ml-2 mb-5 sm:ml-2 rounded py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded",onClick:o[3]||(o[3]=n=>l.login_with_sms())},r(e.$t("Login with SMS")),1)]),M,t("div",U,[t("div",j,[c(d,{callback:l.login_with_google},null,8,["callback"])]),t("button",{class:"fb-login-button","data-button-type":"","data-use-continue-as":"true","data-width":"","data-hight":"",onClick:o[4]||(o[4]=n=>l.checkLoginState())}," Login with Facebook ")]),t("div",O,[t("div",R,[W,t("a",q,r(e.$t("Register")),1)])]),t("div",H,[t("span",K,[t("a",Y,r(e.$t("Login")),1),y(" \xA0via ID "+r(e.$t("Password")),1)])])])])])])])]),c(m)],64)}var Z=_(F,[["render",J]]);export{Z as default};