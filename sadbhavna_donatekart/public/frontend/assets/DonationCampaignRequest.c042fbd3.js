import{N as y,F as f}from"./Footer.5561ae1c.js";import{_ as x,o as c,c as d,k as m,e,b as g,n as h,y as s,H as i,t as l,F as v,p,r as u}from"./index.a6d7915d.js";const E={name:"Donation Campaign Request",components:{Navbar:y,Footer:f},data(){return{openTab:1,full_name:"",fullNameError:"",campaign_type:"",organisation_name:"",organizationNameError:"",organisation_website:"",email:"",emailError:"",phone:"",phoneError:"",error:!1,campaign_story:"",campaignStoryError:"",social_media_page:"",beneficiary_group:"",beneficiaryGroupError:""}},resources:{request_campaign(){return{method:"sadbhavna_donatekart.api.campaign.request_campaign",onSuccess:a=>{confirm("Your Request is successfully sent to sadbhavna donatekart")==!0?this.$router.push("/sadbhavna"):this.$router.go(-1)},onError:a=>{console.log(a),this.$toast({title:"Error",text:a,customIcon:"circle-fail",appearance:"denger"})}}}},methods:{resetForm(){this.full_name="",this.organisation_name="",this.organisation_website="",this.phone="",this.email="",this.social_media_page="",this.campaign_story="",this.beneficiary_group=""},toggleTabs:function(a){this.openTab=a,this.tab=this.tabNumber},validPassword:function(a){var r=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;return r.test(a)},validEmail:function(a){var r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r.test(a)},validPhone:function(a){var r=/^[6-9][0-9]{9}$/;return r.test(a)},validName:function(a){var r=/^[a-zA-Z\\s]*$/;return r.test(a)},request_campaign(a,r){this.openTab==1?(this.campaign_type="NGO",!this.full_name&&!this.organisation_name&&!this.phone&&!this.email&&!this.campaign_story&&!this.beneficiary_group?(this.fullNameError="Please enter Fullname!",this.organizationNameError="Please enter organization name!",this.phoneError="Please enter phone number!",this.emailError="Please enter email!",this.campaignStoryError="Please enter campaign story!",this.beneficiaryGroupError="Please enter beneficiary group!",this.error==!0):this.full_name==""?(this.fullNameError="Enter valid fullname!",this.error=!0,console.log("full name")):this.organisation_name==""?(this.organizationNameError="Enter valid organization name!",this.error=!0,console.log("organization name")):this.phone==""||!this.validPhone(this.phone)?(this.phoneError="Enter valid phone number!",this.error=!0,console.log("phone")):this.email==""||!this.validEmail(this.email)?(this.emailError="Enter valid email!",this.error=!0,console.log("email")):this.campaign_story==""?(this.campaignStoryError="Enter campaign story!",this.error=!0,console.log("campaign_story")):this.beneficiary_group==""?(this.beneficiaryGroupError="Enter beneficiary group!",this.error=!0,console.log("beneficiary_group")):(console.log("done"),this.$resources.request_campaign.submit({full_name:this.full_name,campaign_type:this.campaign_type,organisation_name:this.organisation_name,organisation_website:this.organisation_website,email:this.email,phone:this.phone,campaign_story:this.campaign_story,social_media_page:this.social_media_page,beneficiary_group:this.beneficiary_group}),this.error==!1)):(this.campaign_type="Indivisual/Group",!this.full_name&&!this.phone&&!this.email&&!this.campaign_story&&!this.beneficiary_group?(this.fullNameErrorindividualgroup="Please enter Fullname!",this.phoneErrorindividualgroup="Please enter phone number!",this.emailErrorindividualgroup="Please enter email!",this.campaignStoryErrorindividualgroup="Please enter campaign story!",this.beneficiaryGroupErrorindividualgroup="Please enter beneficiary group!",this.error==!0):this.full_name==""?(this.fullNameError="Enter valid fullname!",this.error=!0,console.log("full name")):this.phone==""||!this.validPhone(this.phone)?(this.phoneError="Enter valid phone number!",this.error=!0,console.log("phone")):this.email==""||!this.validEmail(this.email)?(this.emailError="Enter valid email!",this.error=!0,console.log("email")):this.campaign_story==""?(this.campaignStoryError="Enter campaign story!",this.error=!0,console.log("campaign_story")):this.beneficiary_group==""?(this.beneficiaryGroupError="Enter beneficiary group!",this.error=!0,console.log("beneficiary_group")):(console.log("done"),this.$resources.request_campaign.submit({full_name:this.full_name,campaign_type:this.campaign_type,email:this.email,phone:this.phone,campaign_story:this.campaign_story,social_media_page:this.social_media_page,beneficiary_group:this.beneficiary_group}),this.error==!1))}}},w={class:"container mx-auto"},k={key:0,class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[542px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}},N={key:1,class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-[300px] sm:h-0 md:h-0 lg:h-0 xl:h-[535px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}},P={class:"container mx-auto h-full"},z={class:"w-full pt-[28px]"},F={class:"container mx-auto py-0"},T={class:"w-6/6 lg:w:4/6 mx-auto bg-white"},C=e("div",{class:"text-[24px] md:text-[30px] lg:text-[36px] px-10 text-[#40b751] font-bold text-center"}," Campaign Request ",-1),G={class:"relative z-0"},S={class:"sm:py-2 md:py-4 lg:py-8"},V={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex mb-0 flex-wrap pt-4 ml-10 mr-11 pb-4 flex-row"},q={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},U={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},O={class:"px-4 py-2 flex-auto"},R={class:"tab-content tab-space"},A={class:"py-4 px-8"},B={class:"mb-4"},Z=e("label",{class:"block text-gray-600 text-base mb-2",for:"email"},[p("Full Name "),e("span",{class:"text-red-600"},"*")],-1),D={class:"text-red-600"},I={key:0,class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"},M={class:"mb-4"},W=e("label",{class:"block text-gray-600 text-base mb-2"},[p("Organisation Name "),e("span",{class:"text-red-600"},"*")],-1),H={class:"text-red-600"},Y={class:"mb-4"},j=e("label",{class:"block text-gray-600 text-base mb-2"},"Organisation Website",-1),J={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4"},K={class:"mb-6"},L=e("label",{class:"block text-gray-600 text-base mb-2"},[p("Phone "),e("span",{class:"text-red-600"},"*")],-1),Q={class:"text-red-600"},X={class:"mb-6"},$=e("label",{class:"block text-gray-600 text-base mb-2"},[p("Email "),e("span",{class:"text-red-600"},"*")],-1),ee={class:"text-red-600"},re={class:"mb-6"},te=e("label",{class:"block text-gray-600 text-base mb-2"},"Social Media Page",-1),oe={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"},ae={class:"mb-6"},se=e("label",{class:"block text-gray-600 text-base mb-2"},[p("Campaign Story "),e("span",{class:"text-red-600"},"*")],-1),ie={class:"text-red-600"},ne={class:"mb-6"},le=e("label",{class:"block text-gray-600 text-base mb-2"},[p("Beneficiary Group "),e("span",{class:"text-red-600"},"*")],-1),pe={class:"text-red-600"},ce={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"};function de(a,r,ge,me,t,n){const b=u("Navbar"),_=u("Footer");return c(),d(v,null,[m(b),e("div",w,[t.openTab==1?(c(),d("div",k)):g("",!0),t.openTab==2?(c(),d("div",N)):g("",!0),e("div",P,[e("div",z,[e("div",F,[e("div",T,[C,e("div",G,[e("div",S,[e("ul",V,[e("li",q,[e("a",{class:h(["mb-3 md:mb-0 lg:mb-0 cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block",{"text-[#40b751] bg-white":t.openTab!==1,"text-white bg-[#40b751]":t.openTab===1}]),onClick:r[0]||(r[0]=o=>n.toggleTabs(1))}," NGO ",2)]),e("li",U,[e("a",{class:h(["cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal",{"text-[#40b751] bg-white":t.openTab!==2,"text-white bg-[#40b751]":t.openTab===2}]),onClick:[r[1]||(r[1]=o=>n.toggleTabs(2)),r[2]||(r[2]=(...o)=>n.resetForm&&n.resetForm(...o))]}," Individual Group ",2)])]),e("div",O,[e("div",R,[e("div",A,[e("div",B,[Z,s(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",placeholder:"Enter Full Name","onUpdate:modelValue":r[3]||(r[3]=o=>t.full_name=o),type:"text"},null,512),[[i,t.full_name]]),e("p",D,l(t.fullNameError),1)]),t.openTab==1?(c(),d("div",I,[e("div",M,[W,s(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 rounded w-full py-2 px-3 hover:border-[#40b751] text-grey-darker",type:"text",placeholder:"Enter Organisation Name","onUpdate:modelValue":r[4]||(r[4]=o=>t.organisation_name=o)},null,512),[[i,t.organisation_name]]),e("p",H,l(t.organizationNameError),1)]),e("div",Y,[j,s(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Organisation Website","onUpdate:modelValue":r[5]||(r[5]=o=>t.organisation_website=o)},null,512),[[i,t.organisation_website]])])])):g("",!0),e("div",J,[e("div",K,[L,s(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Phone Number","onUpdate:modelValue":r[6]||(r[6]=o=>t.phone=o)},null,512),[[i,t.phone]]),e("p",Q,l(t.phoneError),1)]),e("div",X,[$,s(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"email",placeholder:"Enter Email","onUpdate:modelValue":r[7]||(r[7]=o=>t.email=o)},null,512),[[i,t.email]]),e("p",ee,l(t.emailError),1)]),e("div",re,[te,s(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Social Media Page","onUpdate:modelValue":r[8]||(r[8]=o=>t.social_media_page=o)},null,512),[[i,t.social_media_page]])])]),e("div",oe,[e("div",ae,[se,s(e("textarea",{id:"comment",rows:"4","onUpdate:modelValue":r[9]||(r[9]=o=>t.campaign_story=o),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Campaign Story"},null,512),[[i,t.campaign_story]]),e("p",ie,l(t.campaignStoryError),1)]),e("div",ne,[le,s(e("textarea",{id:"comment",rows:"4","onUpdate:modelValue":r[10]||(r[10]=o=>t.beneficiary_group=o),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Beneficiary Group"},null,512),[[i,t.beneficiary_group]]),e("p",pe,l(t.beneficiaryGroupError),1)])]),e("div",ce,[e("button",{class:"appearance-none border-gray-600 rounded sm:mr-0 md:mr-20 lg:mr-32 py-2 px-2 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751] text-base uppercase rounded",onClick:r[11]||(r[11]=o=>n.request_campaign())},"Campaign Request"),e("button",{class:"cursor-pointer grid sm:place-content-center md:place-content-end lg:place-content-end appearance-non pr-2 text-[#aaa] py-2 tracking-wide font-bold text-xl rounded",onClick:r[12]||(r[12]=(...o)=>n.resetForm&&n.resetForm(...o))},"Reset Form")])])])])])])])])])])]),m(_)],64)}var be=x(E,[["render",de]]);export{be as default};