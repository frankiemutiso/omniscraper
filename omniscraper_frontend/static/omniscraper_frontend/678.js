(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[678],{678:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Home:()=>X,default:()=>$});var o=n(7294),a=n(8623),i=n(6083),l=n(7812),r=n(9525),c=n(7201),s=n(6856),u=n(282),f=n(5477),d=n(6653),m=n(343),g=n(6479),p=n(1267),h=n(1749),y=n(8463),v=n(9738),E=n(951),b=n(1907),C=n(2613),T=n(3758),Z=n(773),k=n(67),S=n(8513),O=n(7149),w=n(2810),x=n(3957),j=n(366),D=n(221),P=n(5513),N=n(9669),I=n.n(N),_=n(6298);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?z(e):t}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(7954);var B=o.createElement(O.Z,{fontSize:"small"}),U=o.createElement(w.Z,{fontSize:"small",color:"primary"}),X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(N,e);var t,n,Z,O,w=(Z=N,O=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(Z);if(O){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function N(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,N),L(z(t=w.call(this,e)),"handleScrollPosition",(function(){t.setState({scrollPosition:window.pageYOffset})})),L(z(t),"handleInfiniteScroll",(function(){var e=t.props,n=e.error,o=e.loading,a=e.hasMore,i=e.loadVideos,l=document.documentElement,r=l.scrollHeight,c=l.scrollTop,s=l.clientHeight;n||o||!a||r-100-c===s&&i()})),L(z(t),"flagVideo",(function(e){var n="".concat(e.slug);t.setState({flagging:!0},(function(){_.b.put(n,{id:e.id,url:e.url,parent_tweet_id:e.parent_tweet_id,slug:e.slug,flagged:!0}).then((function(n){if(200===n.status){var o=t.state.videos.filter((function(t){return t.id!==e.id}));t.setState({flagging:!1,videos:o}),t.handlePromptClose()}})).catch((function(e){t.setState({flagging:!1}),t.handlePromptClose()}))}))})),L(z(t),"handleCreateTag",(function(){var e=t.state,n=e.tagName,o=e.description,a=t.props.loadTags;t.setState({creatingTag:!0},(function(){_.b.post("https://omniscraper-dev.herokuapp.com/api/tags/",{tag_name:n,description:o}).then((function(e){201===e.status&&(t.setState({creatingTag:!1}),t.handleCreateDialogClose(),a())})).catch((function(e){console.log(e),t.setState({creatingTag:!1})}))}))})),L(z(t),"handleMenuClick",(function(e,n){var o=t.props.videoTags;t.handleCheckedTags(o,e),t.setState({mouseX:n.clientX-2,mouseY:n.clientY-4,clickedVideo:e})})),L(z(t),"handleMenuClose",(function(){t.setState({mouseX:null,mouseY:null,clickedVideo:{}})})),L(z(t),"handlePromptOpen",(function(){t.setState({open:!0})})),L(z(t),"handlePromptClose",(function(){t.setState({open:!1}),t.handleMenuClose()})),L(z(t),"handleTagsDialogOpen",(function(){t.setState({tagsDialogOpen:!0})})),L(z(t),"handleTagsDialogClose",(function(){t.setState({tagsDialogOpen:!1}),t.handleMenuClose()})),L(z(t),"handleCreateDialogOpen",(function(){t.setState({createTagDialogOpen:!0})})),L(z(t),"handleCreateDialogClose",(function(){t.setState({createTagDialogOpen:!1,tagName:"",description:""})})),L(z(t),"handleTagChange",(function(e){t.setState(L({},e.target.name,e.target.value))})),L(z(t),"handleSelectedTagsChange",(function(e,n){t.setState({selectedTagsIds:n.map((function(e){return e.id}))})})),L(z(t),"handleEditVideoTags",(function(){var e=t.state,n=e.selectedTagsIds,o=e.clickedVideo,a="https://omniscraper-dev.herokuapp.com/api/".concat(o.slug);t.setState({editingVideoTags:!0},(function(){I().patch(a,{tags:n}).then((function(e){console.log(e.status),t.setState({editingVideoTags:!1}),t.handleTagsDialogClose()})).catch((function(e){console.log(e.message),t.setState({editingVideoTags:!1}),t.handleTagsDialogClose()}))}))})),L(z(t),"handleCheckedTags",(function(e,n){var o=e.filter((function(e){return n.tags.includes(e.id)}));t.setState({checkedTags:o})})),t.state={loadingTags:!1,open:!1,clickedVideo:{},flagging:!1,mouseX:null,mouseY:null,tagsDialogOpen:!1,createTagDialogOpen:!1,tagName:"",description:"",selectedTagsIds:[],editingVideoTags:!1,checkedTags:[],scrollPosition:0,prevY:0},t.loadingRef=o.createRef(),t}return t=N,(n=[{key:"componentDidMount",value:function(){window.scrollTo(0,this.state.scrollPosition),window.addEventListener("scroll",this.handleInfiniteScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleInfiniteScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.open,Z=t.clickedVideo,O=t.flagging,w=t.mouseX,N=t.mouseY,I=t.tagsDialogOpen,_=t.createTagDialogOpen,F=t.tagName,M=t.description,R=t.creatingTag,W=t.editingVideoTags,z=t.checkedTags,Y=this.props,L=Y.classes,X=Y.loggedIn,$=Y.videoTags,H=(Y.error,Y.loading),A=Y.hasMore,q=Y.videos,G=this.flagVideo,J=this.handlePromptOpen,K=this.handlePromptClose,Q=this.handleMenuClick,ee=this.handleMenuClose,te=this.handleTagsDialogOpen,ne=this.handleTagsDialogClose,oe=this.handleCreateDialogOpen,ae=this.handleCreateDialogClose,ie=this.handleTagChange,le=this.handleCreateTag,re=this.handleSelectedTagsChange,ce=this.handleEditVideoTags,se=this.handleScrollPosition,ue=o.createElement(a.Z,{fullWidth:!0,open:_,onClose:ae},o.createElement(i.Z,{className:L.title,style:{flex:1,display:"flex",justifyContent:"space-between"}},"Create a tag",o.createElement(l.Z,{className:L.closeButton,onClick:ae},o.createElement(j.Z,null))),o.createElement(r.Z,null,o.createElement(c.Z,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"Tag name",name:"tagName",onChange:ie,value:F}),o.createElement(c.Z,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Description (optional)",multiline:!0,name:"description",onChange:ie,value:M})),o.createElement(s.Z,null,o.createElement(u.Z,{color:"secondary",style:{fontFamily:"inherit",fontWeight:600},onClick:ae},"Cancel"),o.createElement(u.Z,{color:"primary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit",fontWeight:600},onClick:le,endIcon:R?o.createElement(f.Z,{size:16,color:"white"}):""},"Save"))),fe=o.createElement(a.Z,{open:I,onClose:ne,fullWidth:!0},o.createElement(i.Z,{className:L.title},"Edit video tags",o.createElement(l.Z,{className:L.closeButton,onClick:ne},o.createElement(j.Z,null))),o.createElement(r.Z,null,o.createElement(D.ZP,{fullWidth:!0,open:I,multiple:!0,onChange:re,options:$,disableCloseOnSelect:!0,filterSelectedOptions:!0,getOptionLabel:function(e){return e.tag_name},defaultValue:z,renderOption:function(e,t){var n=t.selected;return o.createElement(o.Fragment,null,o.createElement(d.Z,{icon:B,checkedIcon:U,style:{marginRight:8},checked:n,color:"primary"}),e.tag_name)},style:{width:"100%",height:"52vh"},renderInput:function(e){return o.createElement(c.Z,V({},e,{variant:"outlined",label:"Tags"}))}})),o.createElement(s.Z,null,o.createElement(u.Z,{color:"secondary",style:{fontFamily:"inherit",fontWeight:600},onClick:ne},"Cancel"),o.createElement(u.Z,{color:"primary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit",fontWeight:600},onClick:ce,endIcon:W?o.createElement(f.Z,{size:16,color:"white"}):""},"Save")));return o.createElement(o.Fragment,null,o.createElement("div",{className:L.root,onScroll:this.handleInfiniteScroll},o.createElement(m.Z,{keepMounted:!0,open:null!==N,onClose:ee,anchorReference:"anchorPosition",anchorPosition:null!==N&&null!==w?{top:N,left:w}:void 0},o.createElement(g.Z,{className:L.menuItemText,onClick:J},"Report"),o.createElement(g.Z,{className:L.menuItemText,onClick:te},"Edit video tags")),fe,ue,o.createElement(a.Z,{open:n,onClose:K},o.createElement(i.Z,{className:L.title},"Are you sure you want to report this video?"),o.createElement(s.Z,null,o.createElement(u.Z,{onClick:K,color:"primary",style:{fontFamily:"inherit"}},"Cancel"),o.createElement(u.Z,{onClick:function(){return G(Z)},color:"secondary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit"},endIcon:O?o.createElement(f.Z,{size:16,color:"white"}):""},"Report"))),o.createElement("div",null,$.map((function(t){return o.createElement(p.Z,{component:P.rU,to:"/tags/".concat(t.slug),key:t.tag_name,label:t.tag_name,clickable:!0,color:"primary",variant:null!==e.props.clickedTag&&e.props.clickedTag.id==t.id?"default":"outlined",style:{margin:5},onClick:function(){return e.props.handleClickedTag(t)}})}))),o.createElement(h.Z,{container:!0,spacing:6,style:{marginTop:10}},q.map((function(e){return o.createElement(h.Z,{item:!0,lg:3,md:6,sm:6,xs:12,key:e.id},o.createElement(y.Z,{style:{maxWidth:380}},o.createElement(v.Z,{component:P.rU,to:"/".concat(e.slug)},o.createElement(E.Z,{component:"video",height:"160",disablePictureInPicture:!0,controlsList:"nodownload",src:e.url,style:{objectFit:"cover"},onContextMenu:function(e){return e.preventDefault()}})),o.createElement(b.Z,{style:{display:"flex",justifyContent:"space-between"}},X&&o.createElement(l.Z,{size:"small",color:"primary",onClick:function(t){return Q(e,t)}},o.createElement(S.Z,null)),o.createElement(u.Z,{component:P.rU,to:"/".concat(e.slug),size:"small",variant:"outlined",color:"primary",startIcon:o.createElement(k.Z,null),className:L.buttons,style:{fontFamily:"inherit",marginLeft:"auto"},onClick:se},"View"))))}))),X&&o.createElement(o.Fragment,null,o.createElement(C.Z,{mdDown:!0},o.createElement(T.Z,{className:L.fab,color:"primary",variant:"extended",size:"medium",onClick:oe},o.createElement(x.Z,{style:{marginRight:8}}),"Create tag")),o.createElement(C.Z,{mdUp:!0},o.createElement(T.Z,{className:L.fab,color:"primary",onClick:oe},o.createElement(x.Z,null)))),H&&o.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50px",margin:"30px"}},o.createElement(f.Z,{className:L.spinner})),!A&&o.createElement("div",{style:{textAlign:"center"}},"No more videos")))}}])&&M(t.prototype,n),N}(o.Component);const $=(0,Z.Z)((function(e){return{root:{color:"#185adb",flex:1,marginRight:40,marginLeft:40,paddingTop:100},spinner:{margin:20},buttons:{border:"1px solid #185adb",color:"#185adb",fontFamily:"Montserrat"},title:{"& h2":{fontFamily:"inherit",fontWeight:700}},menuItemText:{fontFamily:"inherit"},fab:{margin:0,left:"auto",top:"auto",position:"fixed",bottom:e.spacing(2),right:e.spacing(2),textTransform:"none"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)}}}))(X)},7954:(e,t,n)=>{var o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,r=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,u=c||s||Function("return this")(),f=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return u.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||l.test(e)?r(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var o,a,i,l,r,c,s=0,u=!1,f=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,i=a;return o=a=void 0,s=t,l=e.apply(i,n)}function E(e){return s=e,r=setTimeout(C,t),u?v(e):l}function b(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-s>=i}function C(){var e=g();if(b(e))return T(e);r=setTimeout(C,function(e){var n=t-(e-c);return f?m(n,i-(e-s)):n}(e))}function T(e){return r=void 0,y&&o?v(e):(o=a=void 0,l)}function Z(){var e=g(),n=b(e);if(o=arguments,a=this,c=e,n){if(void 0===r)return E(c);if(f)return r=setTimeout(C,t),v(c)}return void 0===r&&(r=setTimeout(C,t)),l}return t=h(t)||0,p(n)&&(u=!!n.leading,i=(f="maxWait"in n)?d(h(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),Z.cancel=function(){void 0!==r&&clearTimeout(r),s=0,o=c=a=r=void 0},Z.flush=function(){return void 0===r?l:T(g())},Z}}}]);