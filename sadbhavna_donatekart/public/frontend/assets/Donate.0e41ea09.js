import{_ as m,o as i,c as p,k as o,e,t as n,F as _,C as l,r}from"./index.56f8c848.js";import{N as d,F as u}from"./Footer.b6aadd5a.js";const v={name:"Donate",components:{Navbar:d,Footer:u},data(){return{data:"",name:"",price:""}},mounted(){const t=l();this.name=t.params.name,this.price=t.params.price}},f={class:"container text-xl mt-10"},N=e("h1",null,"Donation page",-1);function h(t,F,x,D,a,b){const s=r("Navbar"),c=r("Footer");return i(),p(_,null,[o(s),e("div",f,[N,e("div",null,"Item Name "+n(a.name),1),e("div",null,"Item Price "+n(a.price),1)]),o(c)],64)}var B=m(v,[["render",h]]);export{B as default};
