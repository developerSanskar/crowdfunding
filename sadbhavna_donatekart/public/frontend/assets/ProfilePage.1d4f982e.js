import{N as D,F as N}from"./Footer.d499aaa3.js";import{_ as G,o as a,c as n,e as t,k as p,w as g,F as u,g as h,b as _,t as o,y as w,H as k,p as x,J as E,r as f,n as T}from"./index.ed725948.js";import{F as $}from"./FileUploader.ab4e3ddc.js";const j={name:"Login",components:{Navbar:D,Footer:N,FileUploader:$},data(){return{user_data:"",donation_details:"",donor:"",campaign_details:"",donor_total_donation_amount:0,donor_count_campaign:0,campaign_report:"",edit_profile:!1,email:"",phone:"",first_name:"",last_name:"",pan_number:""}},mounted(){const e=E();this.get_user_detail(e.params.name),this.get_donation_details(e.params.name),this.get_campaign_details(e.params.name),this.get_details_of_donor_donations(e.params.name),this.get_details_of_ngo_campaigns(e.params.name),this.donor=e.params.name},computed:{},resources:{download_80g(){return{method:"sadbhavna_donatekart.api.donor.download_80g",onSuccess:e=>{console.log("okey",e);let l=`/api/method/frappe.utils.print_format.download_pdf?doctype=Tax Exemption 80G Certificate&name=${e}&format=80G Certificate for Donation`;window.open(l,"_blank")},onError:e=>{console.log("somthing want wrong!",e)}}},get_details_of_donor_donations(){return{method:"sadbhavna_donatekart.api.donor.get_details_of_donor_donations",onSuccess:e=>{this.donor_count_campaign=e[0],this.donor_total_donation_amount=e[1]},onError:e=>{console.log("error",e)}}},get_details_of_ngo_campaigns(){return{method:"sadbhavna_donatekart.api.campaign.get_details_of_ngo_campaigns",onSuccess:e=>{this.campaign_report=e[0]},onError:e=>{console.log("error",e)}}},update_donor(){return{method:"sadbhavna_donatekart.api.donor.update_donor",onSuccess:e=>{this.$toast({title:"Profile Updated",text:"Your Profile is successfully updated.",customIcon:"check"}),this.$router.go(-1)},onError:e=>{console.log("error",e),this.$toast({title:"Error",text:e,customIcon:"circle-fail",appearance:"denger"})}}},set_image(){return{method:"sadbhavna_donatekart.api.donor.set_image",onSuccess:e=>{this.$toast({title:"Profile Picture Updated",text:"Your Profile Picture is successfully updated.",customIcon:"check"}),this.$router.go()},onError:e=>{console.log("error",e),this.$toast({title:"Error",text:e,customIcon:"circle-fail",appearance:"denger"})}}}},methods:{get_user_detail(e){let l="/api/resource/User/"+e;fetch(l,{method:"GET"}).then(d=>{d.json().then(c=>{this.user_data=c,this.email=c.data.email,this.phone=c.data.phone,this.first_name=c.data.first_name,this.last_name=c.data.last_name,this.pan_number=""})}).catch(d=>{console.error(d)})},get_donation_details(e){let l=`/api/resource/Donation?filters={"email": "${e}"}&fields=["*"]`;fetch(l,{method:"GET"}).then(d=>{d.json().then(c=>{this.donation_details=c})}).catch(d=>{console.log(d)})},download_80g(e,l){this.$resources.download_80g.submit({donation:e,date:l,donor:this.donor})},get_campaign_details(e){let l=`/api/resource/NGO?filters={"email": "${e}"}&fields=["name"]`;fetch(l,{method:"GET"}).then(d=>{d.json().then(c=>{let m=`/api/resource/Donation Campaign?filters={"ngo": "${c.data[0].name}"}&fields=["*"]`;fetch(m,{method:"GET"}).then(b=>{b.json().then(y=>{this.campaign_details=y.data})})})}).catch(d=>{console.log(d)})},get_details_of_donor_donations(e){this.$resources.get_details_of_donor_donations.submit({donor:e})},get_details_of_ngo_campaigns(e){this.$resources.get_details_of_ngo_campaigns.submit({ngo:e})},edit(){this.edit_profile=!0},save(){this.edit_profile=!1,this.$resources.update_donor.submit({first_name:this.first_name,last_name:this.last_name,phone:this.phone,old_email:this.donor,pan_number:this.pan_number})},cancel(){this.edit_profile=!1},upload_image(e){alert("clicked",e),console.log("url",e),this.$resources.set_image.submit({name:this.donor,user_image:e})}}},P={key:0,class:"profile-page"},F={class:"h-500-px bg-blueGray-200"},S={class:"pb-4 bg-blueGray-200"},U={class:"container mx-auto px-4 pt-96"},q={class:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"},Y={class:"px-6"},R={class:"flex flex-wrap justify-center"},V={class:"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"},L={key:0,class:"relative"},A=["src"],I={class:"shadow-xl rounded-full align-middle border-none absolute ml-12 mt-16 lg:ml-16"},B=["onClick"],H=t("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},null,-1),M=t("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"},null,-1),z=[H,M],J={key:1,class:"relative"},O=t("div",{class:"shadow-xl rounded-full h-40 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"},null,-1),K=[O],Q={class:"lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"},W={key:0,class:"py-6 px-3 mt-32 sm:mt-0"},X={class:"w-full lg:w-4/12 px-4 lg:order-1"},Z={key:0,class:"flex justify-center py-4 lg:pt-4 pt-8"},tt={class:"mr-4 p-3 text-center"},et={class:"text-xl font-bold block uppercase tracking-wide text-green-500"},ot={class:"text-sm text-blueGray-500"},st={class:"mr-4 p-3 text-center"},at={class:"text-xl font-bold block uppercase tracking-wide text-green-500"},nt={class:"text-sm text-blueGray-500"},lt={key:1,class:"flex justify-center py-4 lg:pt-4 pt-8"},it={class:"mr-4 p-3 text-center"},rt={class:"text-xl font-bold block uppercase tracking-wide text-green-500"},dt={class:"text-sm text-blueGray-500"},ct={class:"mr-4 p-3 text-center"},_t={class:"text-xl font-bold block uppercase tracking-wide text-blue-500"},mt={class:"text-sm text-blueGray-500"},pt={class:"lg:mr-4 p-3 text-center"},ut={class:"text-xl font-bold block uppercase tracking-wide text-red-500"},ht={class:"text-sm text-blueGray-500"},gt={class:"mt-10"},xt={class:"container mx-auto h-full"},ft={class:"w-full bg-grey-lightest"},bt={class:"container mx-auto py-0"},yt={class:"w-4/6 lg:w:4/6 mx-auto bg-white"},vt={class:""},wt={key:0,class:"text-center"},kt={class:"text-4xl font-semibold leading-normal mb-2 text-blueGray-700"},Ct={class:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"},Dt={key:1,class:"text-center"},Nt={class:"grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center mb-4"},Gt=t("label",{class:"block text-grey-darker text-sm font-bold mb-2",for:"first_name"},"First Name",-1),Et=t("label",{class:"block text-grey-darker text-sm font-bold mb-2",for:"last_name"},"Last Name",-1),Tt={class:"mb-4 lg:mr-8 sm:ml-0 lg:ml-8 sm:ml-0"},$t={class:"block text-grey-darker text-sm font-bold mb-2",for:"number"},jt=t("span",{class:"text-red-600"},"*",-1),Pt={key:0},Ft={key:0,class:"text-center pt-4 text-2xl text-gray-600"},St={key:1,class:"flex flex-col"},Ut={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},qt={class:"py-2 inline-block min-w-full sm:px-6 lg:px-8"},Yt={class:"overflow-hidden"},Rt={class:"min-w-full"},Vt={class:"bg-white border-b"},Lt={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},At={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},It={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},Bt={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},Ht={class:"bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"},Mt={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},zt={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},Jt={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},Ot=["onClick"],Kt={key:2},Qt=t("div",{class:"text-center font-bold text-gray-500"}," Donate Item to see Donations and Download Certificate ",-1),Wt={class:"text-center text-sm leading-normal mt-2 mb-5 text-blue-400 font-bold"},Xt={key:1},Zt={key:0,class:"text-center text-2xl text-gray-600"},te={key:1,class:"flex flex-col"},ee={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},oe={class:"py-2 inline-block min-w-full sm:px-6 lg:px-8"},se={class:"overflow-hidden"},ae={class:"min-w-full"},ne={class:"bg-white border-b"},le={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},ie={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},re={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},de={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},ce={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},_e={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},me={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"},pe={class:"bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"},ue={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},he={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},ge={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},xe={class:"text-sm text-green-500 font-bold px-6 py-4 whitespace-nowrap"},fe={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},be={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},ye={class:"text-center text-sm leading-normal m-4 text-blue-400 font-bold"},ve={key:2},we={class:"text-center font-bold text-gray-500"},ke={class:"text-center text-sm leading-normal mt-2 mb-5 text-blue-400 font-bold"};function Ce(e,l,d,c,s,m){const b=f("Navbar"),y=f("FileUploader"),v=f("router-link"),C=f("Footer");return s.user_data?(a(),n("main",P,[t("section",F,[p(b),t("div",S,[t("div",U,[t("div",q,[t("div",Y,[t("div",R,[t("div",V,[s.user_data.data.user_image?(a(),n("div",L,[t("img",{src:s.user_data.data.user_image,class:"shadow-xl rounded-full h-40 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px"},null,8,A),t("div",I,[p(y,{onSuccess:l[0]||(l[0]=i=>m.upload_image(i.file_url))},{default:g(({openFileSelector:i})=>[(a(),n("svg",{onClick:i,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-edit"},z,8,B))]),_:1})])])):(a(),n("div",J,K))]),(a(!0),n(u,null,h(s.user_data.data.roles,i=>(a(),n("div",Q,[i.role=="Donor"?(a(),n("div",W,[s.edit_profile?_("",!0):(a(),n("button",{key:0,onClick:l[1]||(l[1]=r=>m.edit()),class:"bg-green-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded lg:ml-0 md:ml-0 sm:ml-32 ease-linear transition-all duration-150",type:"button"}," Edit Profile "))])):_("",!0)]))),256)),s.user_data?(a(!0),n(u,{key:0},h(s.user_data.data.roles,i=>(a(),n("div",X,[i.role=="Donor"?(a(),n("div",Z,[t("div",tt,[t("span",et,o(s.donor_count_campaign),1),t("span",ot,o(e.$t("Total Donation Campaign")),1)]),t("div",st,[t("span",at,o(s.donor_total_donation_amount),1),t("span",nt,o(e.$t("Total Donate Amount")),1)])])):i.role=="Ngo"?(a(),n("div",lt,[t("div",it,[t("span",rt,o(s.campaign_report.total_live_campaign),1),t("span",dt,o(e.$t("Total Live Campaign")),1)]),t("div",ct,[t("span",_t,o(s.campaign_report.total_pending_campaign),1),t("span",mt,o(e.$t("Total Pending Campaign")),1)]),t("div",pt,[t("span",ut,o(s.campaign_report.total_rejected_campaign),1),t("span",ht,o(e.$t("Total Rejected Campaign")),1)])])):_("",!0)]))),256)):_("",!0)]),t("div",gt,[t("div",xt,[t("div",ft,[t("div",bt,[t("div",yt,[t("form",null,[t("div",vt,[s.edit_profile?(a(),n("div",Dt,[t("div",Nt,[t("div",null,[Gt,w(t("input",{class:"appearance-none form-control block border rounded w-full text-grey-darker","onUpdate:modelValue":l[2]||(l[2]=i=>s.first_name=i),placeholder:"Your first name",type:"text",required:""},null,512),[[k,s.first_name]])]),t("div",null,[Et,w(t("input",{class:"appearance-none border form-control block rounded w-full text-grey-darker","onUpdate:modelValue":l[3]||(l[3]=i=>s.last_name=i),type:"text",placeholder:"Your last name",required:""},null,512),[[k,s.last_name]])])]),t("div",Tt,[t("label",$t,[x(o(e.$t("Phone Number"))+" ",1),jt]),w(t("input",{class:"appearance-none border form-control block rounded w-full py-2 text-grey-darker","onUpdate:modelValue":l[4]||(l[4]=i=>s.phone=i),type:"number",placeholder:"Your phone number",required:""},null,512),[[k,s.phone]])]),t("button",{onClick:l[5]||(l[5]=i=>m.save()),class:"bg-green-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded mr-2 mb-4 ease-linear transition-all duration-150",type:"button"},o(e.$t("Save")),1),t("button",{onClick:l[6]||(l[6]=i=>m.cancel()),class:"bg-gray-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded mr-2 mb-4 ease-linear transition-all duration-150",type:"button"},o(e.$t("cancel")),1)])):(a(),n("div",wt,[t("h3",kt,o(s.user_data.data.full_name),1),t("div",Ct,[t("div",null,o(s.user_data.data.email),1),t("div",null,o(s.user_data.data.phone),1)])]))])])])])])])]),s.user_data?(a(!0),n(u,{key:0},h(s.user_data.data.roles,i=>(a(),n("div",null,[i.role=="Donor"?(a(),n("div",Pt,[s.donation_details.data!=""?(a(),n("div",Ft,o(e.$t("Your Donations")),1)):_("",!0),s.donation_details.data!=""?(a(),n("div",St,[t("div",Ut,[t("div",qt,[t("div",Yt,[t("table",Rt,[t("thead",Vt,[t("tr",null,[t("th",Lt,o(e.$t("Campaign Name")),1),t("th",At,o(e.$t("Amount")),1),t("th",It,o(e.$t("Date")),1),t("th",Bt,o(e.$t("Download 80G Certificate")),1)])]),t("tbody",null,[(a(!0),n(u,null,h(s.donation_details.data,r=>(a(),n("tr",Ht,[t("td",Mt,o(r.name),1),t("td",zt,o(r.amount),1),t("td",Jt,o(r.date),1),t("td",{class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer",onClick:De=>m.download_80g(r.name,r.date)},o(e.$t("Download")),9,Ot)]))),256))])])])])])])):(a(),n("div",Kt,[Qt,t("div",Wt,[p(v,{to:"/sadbhavna"},{default:g(()=>[x(o(e.$t("Click Here To Explore Campaign")),1)]),_:1})])]))])):i.role=="Ngo"?(a(),n("div",Xt,[s.campaign_details.data!=""?(a(),n("div",Zt,o(e.$t("Your Campaign")),1)):_("",!0),s.campaign_details.data!=""?(a(),n("div",te,[t("div",ee,[t("div",oe,[t("div",se,[t("table",ae,[t("thead",ne,[t("tr",null,[t("th",le,o(e.$t("Campaign Name")),1),t("th",ie,o(e.$t("Campaign Category")),1),t("th",re,o(e.$t("Requested Amount")),1),t("th",de,o(e.$t("Raised Amount")),1),t("th",ce,o(e.$t("Start Date")),1),t("th",_e,o(e.$t("End Date")),1),t("th",me,o(e.$t("Status")),1)])]),t("tbody",null,[(a(!0),n(u,null,h(s.campaign_details,r=>(a(),n("tr",pe,[t("td",ue,o(r.campaign_title),1),t("td",he,o(r.campaign_category),1),t("td",ge,o(r.donation_amount),1),t("td",xe,o(r.raised_amount),1),t("td",fe,o(r.start_date),1),t("td",be,o(r.end_date),1),t("td",{class:T(["text-sm font-bold px-6 py-4 whitespace-nowrap",r.status==="Live"?"text-green-500":"",r.status==="Pending"?"text-blue-500":"",r.status==="Rejected"?"text-red-500":"",r.status==="Closed"?"text-orange-500":""])},o(r.status),3)]))),256))])])]),t("div",ye,[p(v,{to:"/sadbhavna/request-campaign"},{default:g(()=>[x(o(e.$t("Request New Campaign")),1)]),_:1})])])])])):(a(),n("div",ve,[t("div",we,o(e.$t("You don't have any campaign live yet.")),1),t("div",ke,[p(v,{to:"/sadbhavna/request-campaign"},{default:g(()=>[x(o(e.$t("Click Here To Request A New Campaign")),1)]),_:1})])]))])):_("",!0)]))),256)):_("",!0)])])])]),p(C)])])):_("",!0)}var Te=G(j,[["render",Ce]]);export{Te as default};
