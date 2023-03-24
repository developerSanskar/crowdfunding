import{N as u,F as _}from"./Footer.b88d1f6e.js";import{_ as x,o as g,c as h,k as i,e,y as o,G as a,p as n,w as y,F as w,r as d}from"./index.df552b0b.js";const f={name:"Registration",components:{Navbar:u,Footer:_},data(){return{first_name:"",last_name:"",email:"",password:"",conform_password:"",phone_number:"",pan_number:""}},resources:{register(){return{method:"sadbhavna_donatekart.api.api.register",onSuccess:l=>{confirm("your registration is successfully now you can login")==!0?this.$router.push("/sadbhavna/login"):this.$router.go(-1)},onError:l=>{this.$toast({title:"Error",text:l,customIcon:"circle-fail",appearance:"denger"}),console.log(l)}}}},methods:{register(){this.password==this.conform_password?this.$resources.register.submit({first_name:this.first_name,last_name:this.last_name,email:this.email,password:this.password,phone_number:this.phone_number,pan_number:this.pan_number}):(this.$toast({title:"Error",text:"Your password is not match",customIcon:"circle-fail",appearance:"denger"}),this.password="",this.conform_password="")}}},v={class:"container mx-auto h-full pb-[48px]"},k=e("div",{class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[630px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}},null,-1),N={class:"w-full sm:pt-0 md:pt-5 lg:pt-12"},V={class:"container mx-auto py-0"},q={class:"w-4/6 lg:w:4/6 mx-auto bg-white"},F=e("div",{class:"text-[20px] md:text-[30px] lg:text-[36px] py-8 px-10 text-gray-600 text-bold text-center"}," Donor Registration ",-1),U={class:"relative z-0 py-4 px-8"},E={class:"flex mb-4"},C={class:"w-1/2 mr-1"},P=e("label",{class:"block text-gray-600 text-base mb-2"},[n("First Name "),e("span",{class:"text-red-600"},"*")],-1),R={class:"w-1/2 ml-1"},B=e("label",{class:"block text-gray-600 text-base mb-2"},"Last Name",-1),I={class:"mb-4"},z=e("label",{class:"block text-gray-600 text-base mb-2"},[n("Email Address "),e("span",{class:"text-red-600"},"*")],-1),A={class:"mb-4"},D=e("label",{class:"block text-gray-600 text-base mb-2"},[n("Password "),e("span",{class:"text-red-600"},"*")],-1),S={class:"mb-4"},T=e("label",{class:"block text-gray-600 text-base mb-2"},[n("Confirm Password "),e("span",{class:"text-red-600"},"*")],-1),j={class:"mb-4"},G=e("label",{class:"block text-gray-600 text-base mb-2"},"Phone Number",-1),L={class:"mb-4"},M=e("label",{class:"block text-gray-600 text-base mb-2"},"Pan Number",-1),Y={class:"flex items-center justify-between mt-8"},H={class:"block text-gray-600 text-base mb-2"};function J(l,t,K,O,s,p){const c=d("Navbar"),b=d("router-link"),m=d("Footer");return g(),h(w,null,[i(c),e("div",v,[k,e("div",N,[e("div",V,[e("div",q,[F,e("div",U,[e("div",E,[e("div",C,[P,o(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":t[0]||(t[0]=r=>s.first_name=r),type:"text",required:""},null,512),[[a,s.first_name]])]),e("div",R,[B,o(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":t[1]||(t[1]=r=>s.last_name=r),type:"text",required:""},null,512),[[a,s.last_name]])])]),e("div",I,[z,o(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":t[2]||(t[2]=r=>s.email=r),type:"email",required:""},null,512),[[a,s.email]])]),e("div",A,[D,o(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":t[3]||(t[3]=r=>s.password=r),type:"password",required:""},null,512),[[a,s.password]])]),e("div",S,[T,o(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":t[4]||(t[4]=r=>s.conform_password=r),type:"password",required:""},null,512),[[a,s.conform_password]])]),e("div",j,[G,o(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":t[5]||(t[5]=r=>s.phone_number=r),type:"number",required:""},null,512),[[a,s.phone_number]])]),e("div",L,[M,o(e("input",{class:"appearance-none border-gray-300 ho ver:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":t[6]||(t[6]=r=>s.pan_number=r),type:"text",required:""},null,512),[[a,s.pan_number]])]),e("div",Y,[e("button",{class:"bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg",type:"submit",onClick:t[7]||(t[7]=r=>p.register())}," Register ")]),e("span",H,[n(" Already have an account? "),i(b,{to:"/sadbhavna/login",class:"text-[#40b751]"},{default:y(()=>[n("Sign In")]),_:1})])])])])])]),i(m)],64)}var X=x(f,[["render",J]]);export{X as default};
