import{N as x,F as y}from"./Footer.fddd4ee2.js";import{_ as f,o as p,c,k as m,e,b as g,n as b,y as s,z as a,t as n,F as v,p as l,r as u}from"./index.d369d6b4.js";const w={name:"Donation Campaign Request",components:{Navbar:x,Footer:y},data(){return{openTab:1,full_name:"",fullNameError:"",campaign_type:"",organisation_name:"",organizationNameError:"",organisation_website:"",email:"",emailError:"",phone:"",phoneError:"",error:!1,campaign_story:"",campaignStoryError:"",social_media_page:"",beneficiary_group:"",beneficiaryGroupError:""}},resources:{request_campaign(){return{method:"sadbhavna_donatekart.api.campaign.request_campaign",onSuccess:i=>{this.$toast({title:"Success",text:"Your Request is successfully sent to sadbhavna donatekart",customIcon:"check"}),this.$router.go()},onError:i=>{console.log(i),this.$toast({title:"Error",text:i,customIcon:"circle-fail",appearance:"denger"})}}}},methods:{toggleTabs:function(i){this.openTab=i,this.tab=this.tabNumber},request_campaign(i,o){this.openTab==1?(this.campaign_type="NGO",this.full_name==""&&(this.fullNameError="invalid",this.error=!0,console.log("full name")),this.organisation_name==""&&(this.organizationNameError="invalid",this.error=!0,console.log("organization name")),this.email==""&&(this.emailError="invalid",this.error=!0,console.log("email")),this.phone==""&&(this.phoneError="invalid",this.error=!0,console.log("phone")),this.campaign_story==""&&(this.campaignStoryError="invalid",this.error=!0,console.log("campaign_story")),this.beneficiary_group==""?(this.beneficiaryGroupError="invalid",this.error=!0,console.log("beneficiary_group")):(this.error==!1,this.$resources.request_campaign.submit({full_name:this.full_name,campaign_type:this.campaign_type,organisation_name:this.organisation_name,organisation_website:this.organisation_website,email:this.email,phone:this.phone,campaign_story:this.campaign_story,social_media_page:this.social_media_page,beneficiary_group:this.beneficiary_group}),console.log("done"))):(this.campaign_type="Indivisual/Group",this.full_name==""&&(this.fullNameError="invalid",this.error=!0,console.log("full name")),this.email==""&&(this.emailError="invalid",this.error=!0,console.log("email")),this.phone==""&&(this.phoneError="invalid",this.error=!0,console.log("phone")),this.campaign_story==""&&(this.campaignStoryError="invalid",this.error=!0,console.log("campaign_story")),this.beneficiary_group==""?(this.beneficiaryGroupError="invalid",this.error=!0,console.log("beneficiary_group")):(this.error==!1,this.$resources.request_campaign.submit({full_name:this.full_name,campaign_type:this.campaign_type,email:this.email,phone:this.phone,campaign_story:this.campaign_story,social_media_page:this.social_media_page,beneficiary_group:this.beneficiary_group}),console.log("done")))}}},k={class:"container mx-auto"},E={key:0,class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[650px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}},N={key:1,class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-[300px] sm:h-0 md:h-0 lg:h-0 xl:h-[643px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}},T={class:"container mx-auto h-full"},V={class:"w-full sm:pt-0 md:pt-5 lg:pt-12"},q={class:"container mx-auto py-0"},C={class:"w-6/6 lg:w:4/6 mx-auto bg-white"},S=e("div",{class:"text-[24px] md:text-[30px] lg:text-[36px] py-8 px-10 text-gray-600 font-[200px] text-center"}," Donation Campaign request ",-1),z={class:"relative z-0"},G={class:"sm:p-10"},U={class:"flex mb-0 flex-wrap pt-4 ml-10 mr-11 pb-4 flex-row"},F={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},D={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},B={class:"px-4 py-2 flex-auto"},I={class:"tab-content tab-space"},O={class:"py-4 px-8"},R={class:"mb-4"},M=e("label",{class:"block text-gray-600 text-base mb-2",for:"email"},[l("Full Name "),e("span",{class:"text-red-600"},"*")],-1),P={class:"text-red-600"},W={key:0,class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"},Y={class:"mb-4"},j=e("label",{class:"block text-gray-600 text-base mb-2"},[l("Organisation Name "),e("span",{class:"text-red-600"},"*")],-1),A={class:"text-red-600"},H={class:"mb-4"},J=e("label",{class:"block text-gray-600 text-base mb-2"},"Organisation Website",-1),K={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4"},L={class:"mb-6"},Q=e("label",{class:"block text-gray-600 text-base mb-2"},[l("Phone "),e("span",{class:"text-red-600"},"*")],-1),X={class:"text-red-600"},Z={class:"mb-6"},$=e("label",{class:"block text-gray-600 text-base mb-2"},[l("Email "),e("span",{class:"text-red-600"},"*")],-1),ee={class:"text-red-600"},te={class:"mb-6"},oe=e("label",{class:"block text-gray-600 text-base mb-2"},"Social Media Page",-1),re={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"},se={class:"mb-6"},ae=e("label",{class:"block text-gray-600 text-base mb-2"},[l("Campaign Story "),e("span",{class:"text-red-600"},"*")],-1),ie={class:"text-red-600"},ne={class:"mb-6"},le=e("label",{class:"block text-gray-600 text-base mb-2"},[l("Beneficiary Group "),e("span",{class:"text-red-600"},"*")],-1),pe={class:"text-red-600"},ce={class:"mb-6"};function de(i,o,ge,me,t,d){const h=u("Navbar"),_=u("Footer");return p(),c(v,null,[m(h),e("div",k,[t.openTab==1?(p(),c("div",E)):g("",!0),t.openTab==2?(p(),c("div",N)):g("",!0),e("div",T,[e("div",V,[e("div",q,[e("div",C,[S,e("div",z,[e("div",G,[e("ul",U,[e("li",F,[e("a",{class:b(["cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal",{"text-[#40b751] bg-white":t.openTab!==1,"text-white bg-[#40b751]":t.openTab===1}]),onClick:o[0]||(o[0]=r=>d.toggleTabs(1))}," NGO ",2)]),e("li",D,[e("a",{class:b(["cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal",{"text-[#40b751] bg-white":t.openTab!==2,"text-white bg-[#40b751]":t.openTab===2}]),onClick:o[1]||(o[1]=r=>d.toggleTabs(2))}," Individual Group ",2)])]),e("div",B,[e("div",I,[e("div",O,[e("div",R,[M,s(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":o[2]||(o[2]=r=>t.full_name=r),type:"text"},null,512),[[a,t.full_name]]),e("p",P,n(t.fullNameError),1)]),t.openTab==1?(p(),c("div",W,[e("div",Y,[j,s(e("input",{class:"appearance-none border-gray-300 rounded w-full py-2 px-3 hover:border-[#40b751] text-grey-darker",type:"text","onUpdate:modelValue":o[3]||(o[3]=r=>t.organisation_name=r)},null,512),[[a,t.organisation_name]]),e("p",A,n(t.organizationNameError),1)]),e("div",H,[J,s(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text","onUpdate:modelValue":o[4]||(o[4]=r=>t.organisation_website=r)},null,512),[[a,t.organisation_website]])])])):g("",!0),e("div",K,[e("div",L,[Q,s(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text","onUpdate:modelValue":o[5]||(o[5]=r=>t.phone=r)},null,512),[[a,t.phone]]),e("p",X,n(t.phoneError),1)]),e("div",Z,[$,s(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"email","onUpdate:modelValue":o[6]||(o[6]=r=>t.email=r)},null,512),[[a,t.email]]),e("p",ee,n(t.emailError),1)]),e("div",te,[oe,s(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text","onUpdate:modelValue":o[7]||(o[7]=r=>t.social_media_page=r)},null,512),[[a,t.social_media_page]])])]),e("div",re,[e("div",se,[ae,s(e("textarea",{id:"comment",rows:"4","onUpdate:modelValue":o[8]||(o[8]=r=>t.campaign_story=r),class:"hover:border-[#40b751] w-full py-2 px-3 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600"},null,512),[[a,t.campaign_story]]),e("p",ie,n(t.campaignStoryError),1)]),e("div",ne,[le,s(e("textarea",{id:"comment",rows:"4","onUpdate:modelValue":o[9]||(o[9]=r=>t.beneficiary_group=r),class:"hover:border-[#40b751] w-full py-2 px-3 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600"},null,512),[[a,t.beneficiary_group]]),e("p",pe,n(t.beneficiaryGroupError),1)])]),e("div",ce,[e("button",{class:"appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] text-lg uppercase rounded",onClick:o[10]||(o[10]=r=>d.request_campaign())},"Submit")])])])])])])])])])])]),m(_)],64)}var he=f(w,[["render",de]]);export{he as default};
