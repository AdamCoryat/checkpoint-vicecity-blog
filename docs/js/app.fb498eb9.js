(function(t){function e(e){for(var s,i,n=e[0],c=e[1],l=e[2],m=0,u=[];m<n.length;m++)i=n[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/checkpoint-vicecity-blog/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"068b":function(t,e,a){"use strict";var s=a("d043"),o=a.n(s);o.a},"225b":function(t,e,a){},3415:function(t,e,a){"use strict";var s=a("686b"),o=a.n(s);o.a},3438:function(t,e,a){"use strict";var s=a("9e9a"),o=a.n(s);o.a},3695:function(t,e,a){t.exports=a.p+"img/vice.ca8b5a72.png"},"3a19":function(t,e,a){t.exports=a.p+"img/profile.dd082741.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("navbar"),a("router-view"),a("my-footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-bg"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light shadow"},[s("router-link",{staticClass:"navbar-brand d-flex",attrs:{to:{name:"Home"}}},[s("div",{staticClass:"d-flex flex-column align-items-center"},[s("img",{staticStyle:{width:"2em","margin-top":"-10px"},attrs:{alt:"Vice Logo",src:a("3695")}})])]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[s("router-link",{staticClass:"nav-link text-primary",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[s("router-link",{staticClass:"nav-link text-primary",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e(),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"CreateBlog"==t.$route.name}},[s("router-link",{staticClass:"nav-link text-primary",attrs:{to:{name:"CreateBlog"}}},[t._v("Create Blog")])],1):t._e()]),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("335d"),l=a("bc3a"),d=a.n(l);const m=d.a.create({baseURL:"https://cw-bloggr.herokuapp.com/api/",timeout:3e3}),u=function(t){m.defaults.headers.authorization=t},p=function(){m.defaults.headers.authorization=""};var f={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(u(this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){p(),await this.$auth.logout({returnTo:window.location.origin})}}},g=f,b=(a("3438"),a("2877")),v=Object(b["a"])(g,i,n,!1,null,"0e97c800",null),h=v.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myfooter primary-font text-primary text-center d-flex justify-content-center flex-wrap align-content-center",attrs:{id:"myfooter"}},[a("p",[t._v("Made with Love by A.D.D Designs LLC")])])}],w={name:"myfooter",data(){return{}},computed:{},methods:{},components:{}},x=w,_=(a("760e"),Object(b["a"])(x,C,y,!1,null,"12e54c5d",null)),$=_.exports,B=(a("1940"),{name:"App",async beforeCreate(){await Object(c["c"])(),this.$auth.isAuthenticated&&(u(this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:h,MyFooter:$}}),E=B,P=(a("5c0b"),Object(b["a"])(E,o,r,!1,null,null,null)),j=P.exports,k=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid"},[t._m(0),a("div",{staticClass:"row d-flex justify-content-center"},t._l(t.blogs,(function(t){return a("blog",{key:t._id,attrs:{blog:t}})})),1)])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-4 d-flex justify-content-center"},[s("img",{staticClass:"border border-success m-2 shadow rounded",staticStyle:{width:"25vw"},attrs:{src:a("70c6"),alt:""}})]),s("div",{staticClass:"col-4 d-flex justify-content-center"},[s("img",{staticClass:"border border-success m-2 shadow rounded",staticStyle:{width:"30vw"},attrs:{src:a("6444"),alt:""}})]),s("div",{staticClass:"col-4 d-flex justify-content-center"},[s("img",{staticClass:"border border-success m-2 shadow rounded",staticStyle:{width:"25vw"},attrs:{src:a("a44d"),alt:""}})])])}],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"blog"}},[a("div",{staticClass:"col-6 col-md-3"},[a("router-link",{attrs:{to:{name:"BlogDetails",params:{id:t.blog.id}}}},[a("div",{staticClass:"m-3 blog auth-font pointer s-bg card text-center text-success border border-success shadow",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.blog.title))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.blog.creatorEmail))])])])])],1)])},N=[],D={props:{blog:{}},name:"blog",data(){return{}},computed:{},methods:{},components:{}},R=D,M=(a("3415"),Object(b["a"])(R,T,N,!1,null,"1e52cd61",null)),A=M.exports,F={name:"home",mounted(){this.$store.dispatch("getResource",{resource:"blogs/",path:"blogs"})},data(){return{}},computed:{blogs(){return this.$store.state.blogs}},methods:{},components:{Blog:A}},I=F,L=Object(b["a"])(I,S,O,!1,null,"2ed6d782",null),H=L.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about container-fluid",attrs:{id:"profile"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 text-center"},[a("div",{staticClass:"m-2 card card-body s-bg primary-font border border-success text-success"},[a("i",{staticClass:"fa fa-cog text-right pointer text-primary",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editToggle=!t.editToggle}}}),t.editToggle?a("div",[a("div",{staticClass:"card-body px-lg-5 pt-0"},[a("form",{staticClass:"md-form",on:{submit:function(e){return e.preventDefault(),t.editProfile(e)}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.profileEdit.name,expression:"profileEdit.name"}],staticClass:"form-control my-2",attrs:{type:"text",id:"materialSaveFormMessage",placeholder:"Name..."},domProps:{value:t.profileEdit.name},on:{input:function(e){e.target.composing||t.$set(t.profileEdit,"name",e.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.profileEdit.picture,expression:"profileEdit.picture"}],staticClass:"form-control my-2",attrs:{type:"url",id:"materialSaveFormMessage",placeholder:"Picture..."},domProps:{value:t.profileEdit.picture},on:{input:function(e){e.target.composing||t.$set(t.profileEdit,"picture",e.target.value)}}}),a("button",{staticClass:"btn btn-success btn-rounded my-1",attrs:{type:"submit"}},[t._v(" Save ")])])])]):t._e(),a("h4",[a("span",{staticClass:"text-primary"},[t._v("Name:")]),t._v(" "+t._s(t.profile.name))]),a("img",{staticClass:"rounded shadow text-center profile-img",attrs:{src:t.profile.picture,alt:"profile-picture"}}),a("p",[a("span",{staticClass:"text-primary"},[t._v("Email:")]),t._v(t._s(t.profile.email))])])]),a("div",{staticClass:"col-6 col-md-2"},[a("div",{staticClass:"m-2 card card-body s-bg primary-font border border-success text-success"},[a("h3",[t._v("Stats:")]),a("p",[a("span",{staticClass:"text-primary"},[t._v("Total Blogs:")]),t._v(" "+t._s(t.profileBlogs.length)+" ")]),a("p",[a("span",{staticClass:"text-primary"},[t._v("Total Comments:")]),t._v(" "+t._s(t.profileComments.length)+" ")])])]),t._m(0)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 text-center"},[a("h1",{staticClass:"text-primary primary-font"},[t._v("Your Comments:")]),a("div",{staticClass:"comments"},t._l(t.profileComments,(function(t){return a("profile-comment",{key:t.id,attrs:{profileComment:t}})})),1)]),a("div",{staticClass:"col-md-2"}),a("div",{staticClass:"col-12 col-md-6 text-center blogs"},[a("h1",{staticClass:"text-primary primary-font"},[t._v("Your Blogs:")]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"comments"},t._l(t.profileBlogs,(function(t){return a("blog",{key:t.id,attrs:{blog:t}})})),1)])])])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 col-md-6 text-center"},[s("img",{staticClass:"m-2 border border-success shadow rounded",staticStyle:{width:"35vw"},attrs:{src:a("3a19"),alt:""}})])}],W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rounded profileComment border border-danger pointer s-bg m-2 p-1",attrs:{id:"profileComment"}},[a("router-link",{attrs:{to:{name:"BlogDetails",params:{id:t.profileComment.blog}}}},[a("div",{staticClass:"text-success"},[a("p",{staticClass:"secondary-font"},[t._v(t._s(t.profileComment.body))])])])],1)},Y=[],J={props:{profileComment:{}},name:"ProfileComment",data(){return{}},computed:{},methods:{},components:{}},X=J,G=(a("9733"),Object(b["a"])(X,W,Y,!1,null,"09efeae8",null)),K=G.exports,Q={name:"Profile",mounted(){this.$store.dispatch("getProfile"),this.$store.dispatch("getResource",{resource:"profile/comments",path:"profileComments"}),this.$store.dispatch("getResource",{resource:"profile/blogs",path:"profileBlogs"})},data(){return{profileEdit:{},editToggle:!1}},computed:{profileComments(){return this.$store.state.profileComments},profileBlogs(){return this.$store.state.profileBlogs},profile(){return this.$store.state.profile}},methods:{editProfile(){swal("Edit has been saved!").then(t=>{this.$store.dispatch("editProfile",{data:this.profileEdit}),this.editToggle=!1,swal("Congrats on editing your Profile!")})}},components:{ProfileComment:K,Blog:A}},V=Q,q=(a("d3b9"),Object(b["a"])(V,z,U,!1,null,"39f6b270",null)),Z=q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-blog container-fluid",attrs:{id:"create-blog"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"m-5 card border-success s-bg shadow"},[t._m(0),a("div",{staticClass:"card-body secondary-font px-lg-5 pt-0"},[a("form",{staticClass:"md-form",on:{submit:function(e){return e.preventDefault(),t.createBlog(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBlog.title,expression:"newBlog.title"}],staticClass:"form-control s-bg border-success text-success",attrs:{type:"text",id:"materialSaveFormName",placeholder:"Title..."},domProps:{value:t.newBlog.title},on:{input:function(e){e.target.composing||t.$set(t.newBlog,"title",e.target.value)}}}),a("label",{staticClass:"text-success",attrs:{for:"title"}},[t._v("Title")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newBlog.body,expression:"newBlog.body"}],staticClass:"form-control text-success s-bg border-success",attrs:{type:"text",id:"materialSaveFormMessage",rows:"3",placeholder:"Blog Body..."},domProps:{value:t.newBlog.body},on:{input:function(e){e.target.composing||t.$set(t.newBlog,"body",e.target.value)}}}),a("label",{staticClass:"text-success",attrs:{for:"body"}},[t._v("Blog Body")]),a("button",{staticClass:"btn btn-primary btn-rounded btn-block z-depth-0 my-4",attrs:{type:"submit"}},[t._v(" Save ")])])])])]),t._m(1)])])},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"card-header text-center text-success py-4 primary-font"},[a("strong",[t._v("Create Blog")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-md-6 text-center"},[s("img",{staticClass:"rounded shandow my-4 border border-success",staticStyle:{width:"30vw"},attrs:{src:a("5cfe"),alt:""}})])}],at={name:"create-blog",mounted(){},data(){return{newBlog:{}}},computed:{profile(){return this.$store.state.profile}},methods:{createBlog(){swal("Congrats on your new Blog!").then(t=>{this.$store.dispatch("create",{data:this.newBlog,path:"blogs"}),swal("Keep on keeping on!")})}},components:{}},st=at,ot=(a("068b"),Object(b["a"])(st,tt,et,!1,null,"56b27f68",null)),rt=ot.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-details container-fluid",attrs:{id:"blog-details"}},[a("div",{staticClass:"row d-flex justify-content-center"},[t._m(0),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"my-3 shadow card s-bg auth-font text-success border border-success"},[t.editToggle?a("div",[a("div",{staticClass:"card-body px-lg-5 pt-0"},[a("form",{staticClass:"md-form",on:{submit:function(e){return e.preventDefault(),t.editBlog(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.blogEdit.title,expression:"blogEdit.title"}],staticClass:"form-control my-2",attrs:{type:"text",id:"materialSaveFormName",placeholder:"Title..."},domProps:{value:t.blogEdit.title},on:{input:function(e){e.target.composing||t.$set(t.blogEdit,"title",e.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blogEdit.body,expression:"blogEdit.body"}],staticClass:"form-control my-2",attrs:{type:"text",id:"materialSaveFormMessage",rows:"3",placeholder:"Blog Body..."},domProps:{value:t.blogEdit.body},on:{input:function(e){e.target.composing||t.$set(t.blogEdit,"body",e.target.value)}}}),a("button",{staticClass:"btn btn-success btn-rounded my-1",attrs:{type:"submit"}},[t._v(" Save ")])])])]):t._e(),a("div",{staticClass:"card-body"},[t.isCreator?a("i",{staticClass:"fa fa-pencil pointer text-primary",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editToggle=!t.editToggle}}}):t._e(),a("h5",{staticClass:"card-title text-center"},[t._v(t._s(t.activeBlog.title))]),a("p",{staticClass:"card-text secondary-font"},[t._v(t._s(t.activeBlog.body))]),a("p",{staticClass:"card-text font-italic text-primary"},[t._v(" -"+t._s(t.activeBlog.creatorEmail)+" ")]),t.isCreator?a("i",{staticClass:"fa fa-trash-o text-primary pointer",attrs:{"aria-hidden":"true"},on:{click:t.deleteById}}):t._e()]),a("div",{staticClass:"card-body border border-success"},t._l(t.comments,(function(t){return a("comment",{key:t._id,attrs:{comment:t}})})),1),a("div",{staticClass:"card-body border border-success flex-wrap inline"},[a("form",{staticClass:"md-form",on:{submit:function(e){return e.preventDefault(),t.createComment(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.body,expression:"newComment.body"}],staticClass:"form-control s-bg secondary-font border border-success text-success",attrs:{type:"text",id:"materialSaveFormName",placeholder:"Add Comment..."},domProps:{value:t.newComment.body},on:{input:function(e){e.target.composing||t.$set(t.newComment,"body",e.target.value)}}})])])])]),t._m(1)])])},nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3"},[s("img",{staticClass:"text-center m-4 shadow border-success rounded",staticStyle:{width:"21vw"},attrs:{src:a("8903"),alt:"detailpic"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3"},[s("img",{staticClass:"text-center m-4 shadow border-success rounded",staticStyle:{width:"20vw"},attrs:{src:a("786e"),alt:""}})])}],ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment",attrs:{id:"comment"}},[a("div",{staticClass:"card m-1 p-1 s-bg"},[a("p",{staticClass:"secondary-font"},[t._v(t._s(t.comment.body))]),a("p",{staticClass:"font-italic text-primary"},[t._v("-"+t._s(t.comment.creatorEmail))])]),t.isCreator?a("i",{staticClass:"mx-2 fa fa-trash-o pointer text-primary",attrs:{"aria-hidden":"true"},on:{click:t.deleteComment}}):t._e(),t.isCreator?a("i",{staticClass:"mx-2 fa fa-pencil pointer text-primary",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editToggle=!t.editToggle}}}):t._e(),t.editToggle?a("form",{staticClass:"md-form",on:{submit:function(e){return e.preventDefault(),t.editComment(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.commentEdit.body,expression:"commentEdit.body"}],staticClass:"form-control",attrs:{type:"text",id:"materialSaveFormName",placeholder:"Comment edit..."},domProps:{value:t.commentEdit.body},on:{input:function(e){e.target.composing||t.$set(t.commentEdit,"body",e.target.value)}}})]):t._e()])},lt=[],dt={props:{comment:{}},name:"comment",data(){return{commentEdit:{},editToggle:!1}},computed:{isCreator(){return this.$store.state.profile.email==this.comment.creatorEmail}},methods:{deleteComment(){swal({title:"Are you sure?",text:"Once deleted, its gone forever...",icon:"warning",buttons:!0,dangerMode:!0}).then(t=>{t?(this.$store.dispatch("deleteById",{resource:"comments/",id:this.comment.id,path:"comments"}),swal("Boom, Comment Delorted!",{icon:"success"})):swal("Wise choice!")})},editComment(){swal("Edit has been saved!").then(t=>{this.$store.dispatch("edit",{resource:"comments/",id:this.comment.id,data:this.commentEdit,path:"blogs/"+this.comment.blog}),swal("Congrats on editing your comment!")})}},components:{}},mt=dt,ut=Object(b["a"])(mt,ct,lt,!1,null,"75a519aa",null),pt=ut.exports,ft={name:"blogDetails",mounted(){this.$store.dispatch("getById",{resource:"blogs/",id:this.$route.params.id,path:"activeBlog"}),this.$store.dispatch("getById",{resource:"blogs/",id:this.$route.params.id+"/comments",path:"comments"})},data(){return{newComment:{blog:this.$route.params.id},blogEdit:{},editToggle:!1}},computed:{activeBlog(){return this.$store.state.activeBlog},isCreator(){return this.$store.state.profile.email==this.activeBlog.creatorEmail},comments(){return this.$store.state.comments}},methods:{deleteById(){swal({title:"Are you sure?",text:"Once deleted, its gone forever...",icon:"warning",buttons:!0,dangerMode:!0}).then(t=>{t?(this.$store.dispatch("deleteById",{resource:"blogs/",id:this.$route.params.id,path:"activeBlog"}),swal("Boom, Blog Delorted!",{icon:"success"})):swal("Wise choice!")})},createComment(){swal("Congrats on your new Comment!").then(t=>{this.$store.dispatch("create",{data:this.newComment,path:"comments"}),swal("Continue forth and Comment your heart out!")})},editBlog(){swal("Edit has been saved!").then(t=>{this.$store.dispatch("edit",{resource:"blogs/",id:this.$route.params.id,data:this.blogEdit,path:"blogs/"+this.$route.params.id}),this.editToggle=!1,swal("Congrats on editing your Blog!")})}},components:{Comment:pt}},gt=ft,bt=(a("ca39"),Object(b["a"])(gt,it,nt,!1,null,"274f7d8b",null)),vt=bt.exports;s["a"].use(k["a"]);const ht=[{path:"/",name:"Home",component:H},{path:"/profile",name:"Profile",component:Z,beforeEnter:c["b"]},{path:"/createblog",name:"CreateBlog",component:rt,beforeEnter:c["b"]},{path:"/blogdetails/:id",name:"BlogDetails",component:vt,beforeEnter:c["b"]}],Ct=new k["a"]({routes:ht});var yt=Ct,wt=a("2f62");s["a"].use(wt["a"]);var xt=new wt["a"].Store({state:{profile:{},blogs:[],activeBlog:{},comments:[],profileComments:[],profileBlogs:[]},mutations:{setProfile(t,e){t.profile=e},setResource(t,e){t[e.resource]=e.data},delete(t,e){t[e.resource]=t[e.resource].filter(t=>t.id!=e.id)}},actions:{async getProfile({commit:t}){try{let e=await m.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getResource({commit:t},e){try{let a=await m.get(e.resource),s=e.path;t("setResource",{data:a.data,resource:s})}catch(a){console.error(a)}},async getById({commit:t},e){try{let a=await m.get(e.resource+e.id),s=e.path;t("setResource",{data:a.data,resource:s})}catch(a){console.error(a)}},async deleteById({commit:t},e){try{await m.delete(e.resource+e.id);let a=e.path;t("setResource",{data:{},resource:a}),yt.push({name:"Home"})}catch(a){console.error(a)}},async create({commit:t},e){try{let a=await m.post(e.path,e.data),s=e.path;t("setResource",{data:a.data,resource:s}),yt.push({name:"Home"})}catch(a){console.error(a)}},async edit({commit:t},e){try{let a=await m.put(e.resource+"/"+e.id,e.data),s=e.resource;yt.push({name:"Home"}),t("setResource",{data:a.data,resource:s})}catch(a){console.error(a)}},async editProfile({commit:t,dispatch:e},a){try{let s=await m.put("profile",a.data);t("setProfile",s.data),e("getprofile")}catch(s){console.error(s)}}}});const _t="codeworksclassroom.auth0.com",$t="pOXw2OGv1LsYi7LEBmDF04RLkXQvldml",Bt="https://codeworksclassroom.com";s["a"].use(c["a"],{domain:_t,clientId:$t,audience:Bt,onRedirectCallback:t=>{yt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:yt,store:xt,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},"5cfe":function(t,e,a){t.exports=a.p+"img/create.c3ab6bf3.jpg"},6444:function(t,e,a){t.exports=a.p+"img/fanart3.20896e41.jpg"},"686b":function(t,e,a){},"6bb7":function(t,e,a){},"70c6":function(t,e,a){t.exports=a.p+"img/fanart1.2997d6f0.jpg"},"760e":function(t,e,a){"use strict";var s=a("6bb7"),o=a.n(s);o.a},"786e":function(t,e,a){t.exports=a.p+"img/detial2.a1f39fd6.jpg"},8903:function(t,e,a){t.exports=a.p+"img/detail1.b532fae5.jpg"},9733:function(t,e,a){"use strict";var s=a("225b"),o=a.n(s);o.a},"9c0c":function(t,e,a){},"9d98":function(t,e,a){},"9e9a":function(t,e,a){},a44d:function(t,e,a){t.exports=a.p+"img/fanart2.88701925.png"},ca39:function(t,e,a){"use strict";var s=a("f9a9"),o=a.n(s);o.a},d043:function(t,e,a){},d3b9:function(t,e,a){"use strict";var s=a("9d98"),o=a.n(s);o.a},f9a9:function(t,e,a){}});
//# sourceMappingURL=app.fb498eb9.js.map