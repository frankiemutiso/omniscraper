(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[678],{678:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Home:()=>L,default:()=>H});var o=n(7294),a=n(8623),r=n(6083),i=n(7812),l=n(9525),c=n(7201),s=n(6856),u=n(282),f=n(5477),m=n(6653),d=n(343),g=n(6479),p=n(1267),h=n(1749),y=n(8463),v=n(9738),b=n(951),E=n(1907),C=n(2613),T=n(3758),Z=n(773),k=n(67),S=n(8513),O=n(7149),w=n(2810),j=n(3957),x=n(366),D=n(221),N=n(5513),_=n(9669),F=n.n(_),I=n(6298);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function M(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(7954);var Y=o.createElement(O.Z,{fontSize:"small"}),$=o.createElement(w.Z,{fontSize:"small",color:"primary"}),L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(_,e);var t,n,Z,O,w=(Z=_,O=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(Z);if(O){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function _(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_),X(U(t=w.call(this,e)),"loadVideos",(function(){t.setState({loading:!0},(function(){var e=t.state,n=e.offset,o=e.limit,a="https://omniscraper-dev.herokuapp.com/api/videos/?limit=".concat(o,"&offset=").concat(n);F().get(a).then((function(e){var a=e.data.videos,r=e.data.has_more;t.setState({hasMore:r,loading:!1,videos:[].concat(M(t.state.videos),M(a)),offset:n+o})})).catch((function(e){t.setState({error:e.message,loading:!1})}))}))})),X(U(t),"flagVideo",(function(e){var n="".concat(e.slug);t.setState({flagging:!0},(function(){I.b.put(n,{id:e.id,url:e.url,parent_tweet_id:e.parent_tweet_id,slug:e.slug,flagged:!0}).then((function(n){if(200===n.status){var o=t.state.videos.filter((function(t){return t.id!==e.id}));t.setState({flagging:!1,videos:o}),t.handlePromptClose()}})).catch((function(e){t.setState({flagging:!1}),t.handlePromptClose()}))}))})),X(U(t),"handleCreateTag",(function(){var e=t.state,n=e.tagName,o=e.description,a=t.props.loadTags;t.setState({creatingTag:!0},(function(){I.b.post("https://omniscraper-dev.herokuapp.com/api/tags/",{tag_name:n,description:o}).then((function(e){201===e.status&&(t.setState({creatingTag:!1}),t.handleCreateDialogClose(),a())})).catch((function(e){console.log(e),t.setState({creatingTag:!1})}))}))})),X(U(t),"handleMenuClick",(function(e,n){var o=t.props.videoTags;t.handleCheckedTags(o,e),t.setState({mouseX:n.clientX-2,mouseY:n.clientY-4,clickedVideo:e})})),X(U(t),"handleMenuClose",(function(){t.setState({mouseX:null,mouseY:null,clickedVideo:{}})})),X(U(t),"handlePromptOpen",(function(){t.setState({open:!0})})),X(U(t),"handlePromptClose",(function(){t.setState({open:!1}),t.handleMenuClose()})),X(U(t),"handleTagsDialogOpen",(function(){t.setState({tagsDialogOpen:!0})})),X(U(t),"handleTagsDialogClose",(function(){t.setState({tagsDialogOpen:!1}),t.handleMenuClose()})),X(U(t),"handleCreateDialogOpen",(function(){t.setState({createTagDialogOpen:!0})})),X(U(t),"handleCreateDialogClose",(function(){t.setState({createTagDialogOpen:!1,tagName:"",description:""})})),X(U(t),"handleTagChange",(function(e){t.setState(X({},e.target.name,e.target.value))})),X(U(t),"handleSelectedTagsChange",(function(e,n){t.setState({selectedTagsIds:n.map((function(e){return e.id}))})})),X(U(t),"handleEditVideoTags",(function(){var e=t.state,n=e.selectedTagsIds,o=e.clickedVideo,a="https://omniscraper-dev.herokuapp.com/api/".concat(o.slug);t.setState({editingVideoTags:!0},(function(){F().patch(a,{tags:n}).then((function(e){console.log(e.status),t.setState({editingVideoTags:!1}),t.handleTagsDialogClose()})).catch((function(e){console.log(e.message),t.setState({editingVideoTags:!1}),t.handleTagsDialogClose()}))}))})),X(U(t),"handleCheckedTags",(function(e,n){var o=e.filter((function(e){return n.tags.includes(e.id)}));t.setState({checkedTags:o})})),t.state={error:!1,loading:!1,offset:0,limit:12,videos:[],hasMore:!0,loadingTags:!1,open:!1,clickedVideo:{},flagging:!1,mouseX:null,mouseY:null,tagsDialogOpen:!1,createTagDialogOpen:!1,tagName:"",description:"",selectedTagsIds:[],editingVideoTags:!1,checkedTags:[]},window.onscroll=function(){var e=U(t).loadVideos,n=t.state,o=n.error,a=n.loading,r=n.hasMore;o||a||!r||document.documentElement.scrollHeight-document.documentElement.scrollTop===document.documentElement.clientHeight&&e()},t}return t=_,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.loadVideos()}},{key:"render",value:function(){var e=this,t=this.state,n=(t.error,t.videos),Z=t.hasMore,O=t.loading,w=t.open,_=t.clickedVideo,F=t.flagging,I=t.mouseX,P=t.mouseY,M=t.tagsDialogOpen,W=t.createTagDialogOpen,R=t.tagName,A=t.description,z=t.creatingTag,U=t.editingVideoTags,B=t.checkedTags,L=this.props,H=L.classes,q=L.loggedIn,G=L.videoTags,J=this.flagVideo,K=this.handlePromptOpen,Q=this.handlePromptClose,ee=this.handleMenuClick,te=this.handleMenuClose,ne=this.handleTagsDialogOpen,oe=this.handleTagsDialogClose,ae=this.handleCreateDialogOpen,re=this.handleCreateDialogClose,ie=this.handleTagChange,le=this.handleCreateTag,ce=this.handleSelectedTagsChange,se=this.handleEditVideoTags,ue=o.createElement(a.Z,{fullWidth:!0,open:W,onClose:re},o.createElement(r.Z,{className:H.title,style:{flex:1,display:"flex",justifyContent:"space-between"}},"Create a tag",o.createElement(i.Z,{className:H.closeButton,onClick:re},o.createElement(x.Z,null))),o.createElement(l.Z,null,o.createElement(c.Z,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"Tag name",name:"tagName",onChange:ie,value:R}),o.createElement(c.Z,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Description (optional)",multiline:!0,name:"description",onChange:ie,value:A})),o.createElement(s.Z,null,o.createElement(u.Z,{color:"secondary",style:{fontFamily:"inherit",fontWeight:600},onClick:re},"Cancel"),o.createElement(u.Z,{color:"primary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit",fontWeight:600},onClick:le,endIcon:z?o.createElement(f.Z,{size:16,color:"white"}):""},"Save"))),fe=o.createElement(a.Z,{open:M,onClose:oe,fullWidth:!0},o.createElement(r.Z,{className:H.title},"Edit video tags",o.createElement(i.Z,{className:H.closeButton,onClick:oe},o.createElement(x.Z,null))),o.createElement(l.Z,null,o.createElement(D.ZP,{fullWidth:!0,open:M,multiple:!0,onChange:ce,options:G,disableCloseOnSelect:!0,filterSelectedOptions:!0,getOptionLabel:function(e){return e.tag_name},defaultValue:B,renderOption:function(e,t){var n=t.selected;return o.createElement(o.Fragment,null,o.createElement(m.Z,{icon:Y,checkedIcon:$,style:{marginRight:8},checked:n,color:"primary"}),e.tag_name)},style:{width:"100%",height:"52vh"},renderInput:function(e){return o.createElement(c.Z,V({},e,{variant:"outlined",label:"Tags"}))}})),o.createElement(s.Z,null,o.createElement(u.Z,{color:"secondary",style:{fontFamily:"inherit",fontWeight:600},onClick:oe},"Cancel"),o.createElement(u.Z,{color:"primary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit",fontWeight:600},onClick:se,endIcon:U?o.createElement(f.Z,{size:16,color:"white"}):""},"Save")));return o.createElement(o.Fragment,null,o.createElement("div",{className:H.root},o.createElement(d.Z,{keepMounted:!0,open:null!==P,onClose:te,anchorReference:"anchorPosition",anchorPosition:null!==P&&null!==I?{top:P,left:I}:void 0},o.createElement(g.Z,{className:H.menuItemText,onClick:K},"Report"),o.createElement(g.Z,{className:H.menuItemText,onClick:ne},"Edit video tags")),fe,ue,o.createElement(a.Z,{open:w,onClose:Q},o.createElement(r.Z,{className:H.title},"Are you sure you want to report this video?"),o.createElement(s.Z,null,o.createElement(u.Z,{onClick:Q,color:"primary",style:{fontFamily:"inherit"}},"Cancel"),o.createElement(u.Z,{onClick:function(){return J(_)},color:"secondary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit"},endIcon:F?o.createElement(f.Z,{size:16,color:"white"}):""},"Report"))),o.createElement("div",null,G.map((function(t){return o.createElement(p.Z,{component:N.rU,to:"/tags/".concat(t.slug),key:t.tag_name,label:t.tag_name,clickable:!0,color:"primary",variant:null!==e.props.clickedTag&&e.props.clickedTag.id==t.id?"default":"outlined",style:{margin:5},onClick:function(){return e.props.handleClickedTag(t)}})}))),o.createElement(h.Z,{container:!0,spacing:6,style:{marginTop:10}},n.map((function(e){var t;return o.createElement(h.Z,{item:!0,lg:3,md:6,sm:6,xs:12,key:e.id},o.createElement(y.Z,{style:{maxWidth:380}},o.createElement(v.Z,null,o.createElement(b.Z,(X(t={component:N.rU,to:"/".concat(e.slug)},"component","video"),X(t,"height","160"),X(t,"disablePictureInPicture",!0),X(t,"controlsList","nodownload"),X(t,"src",e.url),X(t,"style",{objectFit:"cover"}),X(t,"onContextMenu",(function(e){return e.preventDefault()})),t))),o.createElement(E.Z,{style:{display:"flex",justifyContent:"space-between"}},q&&o.createElement(i.Z,{size:"small",color:"primary",onClick:function(t){return ee(e,t)}},o.createElement(S.Z,null)),o.createElement(u.Z,{component:N.rU,to:"/".concat(e.slug),size:"small",variant:"outlined",color:"primary",startIcon:o.createElement(k.Z,null),className:H.buttons,style:{fontFamily:"inherit",marginLeft:"auto"}},"View"))))}))),q&&o.createElement(o.Fragment,null,o.createElement(C.Z,{mdDown:!0},o.createElement(T.Z,{className:H.fab,color:"primary",variant:"extended",size:"medium",onClick:ae},o.createElement(j.Z,{style:{marginRight:8}}),"Create tag")),o.createElement(C.Z,{mdUp:!0},o.createElement(T.Z,{className:H.fab,color:"primary",onClick:ae},o.createElement(j.Z,null)))),O&&o.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50px",margin:"30px"}},o.createElement(f.Z,{className:H.spinner})),!Z&&o.createElement("div",{style:{textAlign:"center"}},"No more videos")))}}])&&R(t.prototype,n),_}(o.Component);const H=(0,Z.Z)((function(e){return{root:{color:"#185adb",flex:1,marginRight:40,marginLeft:40,paddingTop:100},spinner:{margin:20},buttons:{border:"1px solid #185adb",color:"#185adb",fontFamily:"Montserrat"},title:{"& h2":{fontFamily:"inherit",fontWeight:700}},menuItemText:{fontFamily:"inherit"},fab:{margin:0,left:"auto",top:"auto",position:"fixed",bottom:e.spacing(2),right:e.spacing(2),textTransform:"none"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)}}}))(L)},7954:(e,t,n)=>{var o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,u=c||s||Function("return this")(),f=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return u.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||i.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var o,a,r,i,l,c,s=0,u=!1,f=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,r=a;return o=a=void 0,s=t,i=e.apply(r,n)}function b(e){return s=e,l=setTimeout(C,t),u?v(e):i}function E(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-s>=r}function C(){var e=g();if(E(e))return T(e);l=setTimeout(C,function(e){var n=t-(e-c);return f?d(n,r-(e-s)):n}(e))}function T(e){return l=void 0,y&&o?v(e):(o=a=void 0,i)}function Z(){var e=g(),n=E(e);if(o=arguments,a=this,c=e,n){if(void 0===l)return b(c);if(f)return l=setTimeout(C,t),v(c)}return void 0===l&&(l=setTimeout(C,t)),i}return t=h(t)||0,p(n)&&(u=!!n.leading,r=(f="maxWait"in n)?m(h(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),Z.cancel=function(){void 0!==l&&clearTimeout(l),s=0,o=c=a=l=void 0},Z.flush=function(){return void 0===l?i:T(g())},Z}}}]);