(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[678],{678:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Home:()=>X,default:()=>H});var o=n(7294),a=n(8623),l=n(6083),i=n(7812),r=n(9525),c=n(7201),s=n(6856),u=n(282),d=n(5477),m=n(6653),g=n(343),f=n(6479),p=n(1267),h=n(1749),y=n(8463),E=n(9738),C=n(951),v=n(1907),b=n(2613),T=n(3758),Z=n(6489),k=n(3101),S=n(8513),O=n(7149),w=n(2810),P=n(3957),D=n(366),x=n(1353),I=n(5513),_=n(9669),N=n.n(_),F=n(6298);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?z(e):t}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=o.createElement(O.Z,{fontSize:"small"}),U=o.createElement(w.Z,{fontSize:"small",color:"primary"}),X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(_,e);var t,n,Z,O,w=(Z=_,O=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(Z);if(O){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function _(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_),L(z(t=w.call(this,e)),"handleScrollPosition",(function(){t.setState({scrollPosition:window.pageYOffset})})),L(z(t),"handleInfiniteScroll",(function(){var e=t.props,n=e.error,o=e.loading,a=e.hasMore,l=e.loadVideos,i=document.documentElement,r=i.scrollHeight,c=i.scrollTop,s=i.clientHeight;n||o||!a||c>=r-s-200&&l()})),L(z(t),"flagVideo",(function(e){var n="".concat(e.slug);t.setState({flagging:!0},(function(){F.b.put(n,{id:e.id,url:e.url,parent_tweet_id:e.parent_tweet_id,slug:e.slug,flagged:!0}).then((function(n){if(200===n.status){var o=t.state.videos.filter((function(t){return t.id!==e.id}));t.setState({flagging:!1,videos:o}),t.handlePromptClose()}})).catch((function(e){t.setState({flagging:!1}),t.handlePromptClose()}))}))})),L(z(t),"handleCreateTag",(function(){var e=t.state,n=e.tagName,o=e.description,a=t.props.loadTags;t.setState({creatingTag:!0},(function(){F.b.post("https://omniscraper-dev.herokuapp.com/api/tags/",{tag_name:n,description:o}).then((function(e){201===e.status&&(t.setState({creatingTag:!1}),t.handleCreateDialogClose(),a())})).catch((function(e){console.log(e),t.setState({creatingTag:!1})}))}))})),L(z(t),"handleMenuClick",(function(e,n){var o=t.props.videoTags;t.handleCheckedTags(o,e),t.setState({mouseX:n.clientX-2,mouseY:n.clientY-4,clickedVideo:e})})),L(z(t),"handleMenuClose",(function(){t.setState({mouseX:null,mouseY:null,clickedVideo:{}})})),L(z(t),"handlePromptOpen",(function(){t.setState({open:!0})})),L(z(t),"handlePromptClose",(function(){t.setState({open:!1}),t.handleMenuClose()})),L(z(t),"handleTagsDialogOpen",(function(){t.setState({tagsDialogOpen:!0})})),L(z(t),"handleTagsDialogClose",(function(){t.setState({tagsDialogOpen:!1}),t.handleMenuClose()})),L(z(t),"handleCreateDialogOpen",(function(){t.setState({createTagDialogOpen:!0})})),L(z(t),"handleCreateDialogClose",(function(){t.setState({createTagDialogOpen:!1,tagName:"",description:""})})),L(z(t),"handleTagChange",(function(e){t.setState(L({},e.target.name,e.target.value))})),L(z(t),"handleSelectedTagsChange",(function(e,n){t.setState({selectedTagsIds:n.map((function(e){return e.id}))})})),L(z(t),"handleEditVideoTags",(function(){var e=t.state,n=e.selectedTagsIds,o=e.clickedVideo,a="https://omniscraper-dev.herokuapp.com/api/".concat(o.slug);t.setState({editingVideoTags:!0},(function(){N().patch(a,{tags:n}).then((function(e){console.log(e.status),t.setState({editingVideoTags:!1}),t.handleTagsDialogClose()})).catch((function(e){console.log(e.message),t.setState({editingVideoTags:!1}),t.handleTagsDialogClose()}))}))})),L(z(t),"handleCheckedTags",(function(e,n){var o=e.filter((function(e){return n.tags.includes(e.id)}));t.setState({checkedTags:o})})),t.state={loadingTags:!1,open:!1,clickedVideo:{},flagging:!1,mouseX:null,mouseY:null,tagsDialogOpen:!1,createTagDialogOpen:!1,tagName:"",description:"",selectedTagsIds:[],editingVideoTags:!1,checkedTags:[],scrollPosition:0,prevY:0},t.loadingRef=o.createRef(),t}return t=_,(n=[{key:"componentDidMount",value:function(){window.scrollTo(0,this.state.scrollPosition),window.addEventListener("scroll",this.handleInfiniteScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleInfiniteScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.open,Z=t.clickedVideo,O=t.flagging,w=t.mouseX,_=t.mouseY,N=t.tagsDialogOpen,F=t.createTagDialogOpen,V=t.tagName,R=t.description,M=t.creatingTag,W=t.editingVideoTags,z=t.checkedTags,Y=this.props,L=Y.classes,X=Y.loggedIn,H=Y.videoTags,A=(Y.error,Y.loading),q=Y.hasMore,G=Y.videos,J=this.flagVideo,K=this.handlePromptOpen,Q=this.handlePromptClose,$=this.handleMenuClick,ee=this.handleMenuClose,te=this.handleTagsDialogOpen,ne=this.handleTagsDialogClose,oe=this.handleCreateDialogOpen,ae=this.handleCreateDialogClose,le=this.handleTagChange,ie=this.handleCreateTag,re=this.handleSelectedTagsChange,ce=this.handleEditVideoTags,se=this.handleScrollPosition,ue=o.createElement(a.Z,{fullWidth:!0,open:F,onClose:ae},o.createElement(l.Z,{className:L.title,style:{flex:1,display:"flex",justifyContent:"space-between"}},"Create a tag",o.createElement(i.Z,{className:L.closeButton,onClick:ae},o.createElement(D.Z,null))),o.createElement(r.Z,null,o.createElement(c.Z,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"Tag name",name:"tagName",onChange:le,value:V}),o.createElement(c.Z,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Description (optional)",multiline:!0,name:"description",onChange:le,value:R})),o.createElement(s.Z,null,o.createElement(u.Z,{color:"secondary",style:{fontFamily:"inherit",fontWeight:600},onClick:ae},"Cancel"),o.createElement(u.Z,{color:"primary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit",fontWeight:600},onClick:ie,endIcon:M?o.createElement(d.Z,{size:16,color:"white"}):""},"Save"))),de=o.createElement(a.Z,{open:N,onClose:ne,fullWidth:!0},o.createElement(l.Z,{className:L.title},"Edit video tags",o.createElement(i.Z,{className:L.closeButton,onClick:ne},o.createElement(D.Z,null))),o.createElement(r.Z,null,o.createElement(x.ZP,{fullWidth:!0,open:N,multiple:!0,onChange:re,options:H,disableCloseOnSelect:!0,filterSelectedOptions:!0,getOptionLabel:function(e){return e.tag_name},defaultValue:z,renderOption:function(e,t){var n=t.selected;return o.createElement(o.Fragment,null,o.createElement(m.Z,{icon:B,checkedIcon:U,style:{marginRight:8},checked:n,color:"primary"}),e.tag_name)},style:{width:"100%",height:"52vh"},renderInput:function(e){return o.createElement(c.Z,j({},e,{variant:"outlined",label:"Tags"}))}})),o.createElement(s.Z,null,o.createElement(u.Z,{color:"secondary",style:{fontFamily:"inherit",fontWeight:600},onClick:ne},"Cancel"),o.createElement(u.Z,{color:"primary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit",fontWeight:600},onClick:ce,endIcon:W?o.createElement(d.Z,{size:16,color:"white"}):""},"Save")));return o.createElement(o.Fragment,null,o.createElement("div",{className:L.root,onScroll:this.handleInfiniteScroll},o.createElement(g.Z,{keepMounted:!0,open:null!==_,onClose:ee,anchorReference:"anchorPosition",anchorPosition:null!==_&&null!==w?{top:_,left:w}:void 0},o.createElement(f.Z,{className:L.menuItemText,onClick:K},"Report"),o.createElement(f.Z,{className:L.menuItemText,onClick:te},"Edit video tags")),de,ue,o.createElement(a.Z,{open:n,onClose:Q},o.createElement(l.Z,{className:L.title},"Are you sure you want to report this video?"),o.createElement(s.Z,null,o.createElement(u.Z,{onClick:Q,color:"primary",style:{fontFamily:"inherit"}},"Cancel"),o.createElement(u.Z,{onClick:function(){return J(Z)},color:"secondary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit"},endIcon:O?o.createElement(d.Z,{size:16,color:"white"}):""},"Report"))),o.createElement("div",null,H.map((function(t){return o.createElement(p.Z,{component:I.rU,to:"/tags/".concat(t.slug),key:t.tag_name,label:t.tag_name,clickable:!0,color:"primary",variant:null!==e.props.clickedTag&&e.props.clickedTag.id==t.id?"default":"outlined",style:{margin:5},onClick:function(){return e.props.handleClickedTag(t)}})}))),o.createElement(h.Z,{container:!0,spacing:6,style:{marginTop:10}},G.map((function(e){return o.createElement(h.Z,{item:!0,lg:3,md:6,sm:6,xs:12,key:e.id},o.createElement(y.Z,{style:{maxWidth:380}},o.createElement(E.Z,{component:I.rU,to:"/".concat(e.slug)},o.createElement(C.Z,{component:"video",height:"160",disablePictureInPicture:!0,controlsList:"nodownload",src:e.url,style:{objectFit:"cover"},onContextMenu:function(e){return e.preventDefault()}})),o.createElement(v.Z,{style:{display:"flex",justifyContent:"space-between"}},X&&o.createElement(i.Z,{size:"small",color:"primary",onClick:function(t){return $(e,t)}},o.createElement(S.Z,null)),o.createElement(u.Z,{component:I.rU,to:"/".concat(e.slug),size:"small",variant:"outlined",color:"primary",startIcon:o.createElement(k.Z,null),className:L.buttons,style:{fontFamily:"inherit",marginLeft:"auto"},onClick:se},"View"))))}))),X&&o.createElement(o.Fragment,null,o.createElement(b.Z,{mdDown:!0},o.createElement(T.Z,{className:L.fab,color:"primary",variant:"extended",size:"medium",onClick:oe},o.createElement(P.Z,{style:{marginRight:8}}),"Create tag")),o.createElement(b.Z,{mdUp:!0},o.createElement(T.Z,{className:L.fab,color:"primary",onClick:oe},o.createElement(P.Z,null)))),A&&o.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50px",margin:"30px"}},o.createElement(d.Z,{className:L.spinner})),!q&&o.createElement("div",{style:{textAlign:"center"}},"No more videos")))}}])&&R(t.prototype,n),_}(o.Component);const H=(0,Z.Z)((function(e){return{root:{color:"#185adb",flex:1,marginRight:40,marginLeft:40,paddingTop:100},spinner:{margin:20},buttons:{border:"1px solid #185adb",color:"#185adb",fontFamily:"Montserrat"},title:{"& h2":{fontFamily:"inherit",fontWeight:700}},menuItemText:{fontFamily:"inherit"},fab:{margin:0,left:"auto",top:"auto",position:"fixed",bottom:e.spacing(2),right:e.spacing(2),textTransform:"none"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)}}}))(X)}}]);