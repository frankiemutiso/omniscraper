(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[624],{7624:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Home:()=>H,default:()=>$});var a=n(7294),o=n(282),r=n(8463),l=n(9738),i=n(1907),c=n(951),s=n(1749),u=n(5477),d=n(7812),m=n(8623),g=n(6083),p=n(6856),f=n(343),h=n(6479),y=n(9525),v=n(6653),C=n(7201),E=n(1267),b=n(3758),T=n(2613),Z=n(6489),k=n(3101),S=n(8513),O=n(7149),w=n(2810),D=n(3957),x=n(366),I=n(1353),P=n(5513),V=n(9669),_=n.n(V),N=n(6755),j=n(6353);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function R(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function z(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?B(e):t}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=a.createElement(O.Z,{fontSize:"small"}),q=a.createElement(w.Z,{fontSize:"small",color:"primary"}),H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(V,e);var t,n,Z,O,w=(Z=V,O=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(Z);if(O){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function V(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,V),Y(B(t=w.call(this,e)),"componentDidMount",(function(){t.loadVideos()})),Y(B(t),"loadVideos",(function(){var e=t.props.match.params.slug,n="https://omniscraper-dev.herokuapp.com/api/tags/".concat(e);t.setState({loading:!0},(function(){_().get(n).then((function(e){var n=e.data.videos;t.setState({loading:!1,videos:[].concat(R(t.state.videos),R(n))})})).catch((function(e){t.setState({error:e.message,loading:!1})}))}))})),Y(B(t),"flagVideo",(function(e){var n="".concat(e.slug);t.setState({flagging:!0},(function(){N.b.put(n,{id:e.id,url:e.url,parent_tweet_id:e.parent_tweet_id,slug:e.slug,flagged:!0}).then((function(n){if(200===n.status){var a=t.state.videos.filter((function(t){return t.id!==e.id}));t.setState({flagging:!1,videos:a}),t.handlePromptClose()}})).catch((function(e){t.setState({flagging:!1}),t.handlePromptClose()}))}))})),Y(B(t),"handleCreateTag",(function(){var e=t.state,n=e.tagName,a=e.description;t.setState({creatingTag:!0},(function(){N.b.post("https://omniscraper-dev.herokuapp.com/api/tags/",{tag_name:n,description:a}).then((function(e){201===e.status&&(t.setState({creatingTag:!1}),t.handleCreateDialogClose(),t.props.loadTags())})).catch((function(e){console.log(e),t.setState({creatingTag:!1})}))}))})),Y(B(t),"handleMenuClick",(function(e,n){var a=t.props.videoTags;t.handleCheckedTags(a,e),t.setState({mouseX:n.clientX-2,mouseY:n.clientY-4,clickedVideo:e})})),Y(B(t),"handleMenuClose",(function(){t.setState({mouseX:null,mouseY:null,clickedVideo:{}})})),Y(B(t),"handlePromptOpen",(function(){t.setState({open:!0})})),Y(B(t),"handlePromptClose",(function(){t.setState({open:!1}),t.handleMenuClose()})),Y(B(t),"handleTagsDialogOpen",(function(){t.setState({tagsDialogOpen:!0})})),Y(B(t),"handleTagsDialogClose",(function(){t.setState({tagsDialogOpen:!1}),t.handleMenuClose()})),Y(B(t),"handleCreateDialogOpen",(function(){t.setState({createTagDialogOpen:!0})})),Y(B(t),"handleCreateDialogClose",(function(){t.setState({createTagDialogOpen:!1,tagName:"",description:""})})),Y(B(t),"handleTagChange",(function(e){t.setState(Y({},e.target.name,e.target.value))})),Y(B(t),"handleSelectedTagsChange",(function(e,n){t.setState({selectedTagsIds:n.map((function(e){return e.id}))})})),Y(B(t),"handleEditVideoTags",(function(){var e=t.state,n=e.selectedTagsIds,a=e.clickedVideo,o="https://omniscraper-dev.herokuapp.com/api/".concat(a.slug);t.setState({editingVideoTags:!0},(function(){N.b.patch(o,{tags:n}).then((function(e){console.log(e.status),t.setState({editingVideoTags:!1}),t.handleTagsDialogClose()})).catch((function(e){console.log(e.message),t.setState({editingVideoTags:!1}),t.handleTagsDialogClose()}))}))})),Y(B(t),"handleCheckedTags",(function(e,n){var a=e.filter((function(e){return n.tags.includes(e.id)}));t.setState({checkedTags:a})})),t.state={error:!1,loading:!1,videos:[],loadingTags:!1,open:!1,clickedVideo:{},flagging:!1,mouseX:null,mouseY:null,tagsDialogOpen:!1,createTagDialogOpen:!1,tagName:"",description:"",selectedTagsIds:[],editingVideoTags:!1,slug:t.props.match.params.slug},t}return t=V,(n=[{key:"componentDidUpdate",value:function(e){var t=this;e.match.params.slug!==this.props.match.params.slug&&this.setState({slug:this.props.match.params.slug,videos:[]},(function(){return t.loadVideos()}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,Z=t.loading,O=(t.hasMore,t.videos),w=t.open,V=t.clickedVideo,_=t.flagging,N=t.mouseX,j=t.mouseY,F=t.tagsDialogOpen,R=t.createTagDialogOpen,W=t.tagName,z=t.description,A=t.creatingTag,U=(t.selectedTagsIds,t.editingVideoTags),B=t.checkedTags,X=this.props,Y=X.classes,H=X.loggedIn,$=X.videoTags,G=this.flagVideo,J=this.handlePromptOpen,K=this.handlePromptClose,Q=this.handleMenuClick,ee=this.handleMenuClose,te=this.handleTagsDialogOpen,ne=this.handleTagsDialogClose,ae=this.handleCreateDialogOpen,oe=this.handleCreateDialogClose,re=this.handleTagChange,le=this.handleCreateTag,ie=this.handleSelectedTagsChange,ce=this.handleEditVideoTags,se=(this.handleCheckedTags,a.createElement(m.Z,{fullWidth:!0,open:R,onClose:oe},a.createElement(g.Z,{className:Y.title,style:{flex:1,display:"flex",justifyContent:"space-between"}},"Create a tag",a.createElement(d.Z,{className:Y.closeButton,onClick:oe},a.createElement(x.Z,null))),a.createElement(y.Z,null,a.createElement(C.Z,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"Tag name",name:"tagName",onChange:re,value:W}),a.createElement(C.Z,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Description (optional)",multiline:!0,name:"description",onChange:re,value:z})),a.createElement(p.Z,null,a.createElement(o.Z,{color:"secondary",style:{fontFamily:"inherit",fontWeight:600},onClick:oe},"Cancel"),a.createElement(o.Z,{color:"primary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit",fontWeight:600},onClick:le,endIcon:A?a.createElement(u.Z,{size:16,color:"white"}):""},"Save")))),ue=a.createElement(m.Z,{open:F,onClose:ne,fullWidth:!0},a.createElement(g.Z,{className:Y.title},"Edit video tags",a.createElement(d.Z,{className:Y.closeButton,onClick:ne},a.createElement(x.Z,null))),a.createElement(y.Z,null,a.createElement(I.ZP,{fullWidth:!0,open:F,multiple:!0,onChange:ie,options:$,defaultValue:B,disableCloseOnSelect:!0,filterSelectedOptions:!0,getOptionLabel:function(e){return e.tag_name},renderOption:function(e,t){var n=t.selected;return a.createElement(a.Fragment,null,a.createElement(v.Z,{icon:L,checkedIcon:q,style:{marginRight:8},checked:n,color:"primary"}),e.tag_name)},style:{width:"100%",height:"52vh"},renderInput:function(e){return a.createElement(C.Z,M({},e,{variant:"outlined",label:"Tags"}))}})),a.createElement(p.Z,null,a.createElement(o.Z,{color:"secondary",style:{fontFamily:"inherit",fontWeight:600},onClick:ne},"Cancel"),a.createElement(o.Z,{color:"primary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit",fontWeight:600},onClick:ce,endIcon:U?a.createElement(u.Z,{size:16,color:"white"}):""},"Save")));return a.createElement("div",{className:Y.root},a.createElement(f.Z,{keepMounted:!0,open:null!==j,onClose:ee,anchorReference:"anchorPosition",anchorPosition:null!==j&&null!==N?{top:j,left:N}:void 0},a.createElement(h.Z,{className:Y.menuItemText,onClick:J},"Report"),a.createElement(h.Z,{className:Y.menuItemText,onClick:te},"Edit video tags")),ue,se,a.createElement(m.Z,{open:w,onClose:K},a.createElement(g.Z,{className:Y.title},"Are you sure you want to report this video?"),a.createElement(p.Z,null,a.createElement(o.Z,{onClick:K,color:"primary",style:{fontFamily:"inherit"}},"Cancel"),a.createElement(o.Z,{onClick:function(){return G(V)},color:"secondary",variant:"contained",autoFocus:!0,style:{fontFamily:"inherit"},endIcon:_?a.createElement(u.Z,{size:16,color:"white"}):""},"Report"))),a.createElement("div",null,$.map((function(t){return a.createElement(E.Z,{to:"/tags/".concat(t.slug),component:P.rU,key:t.tag_name,label:t.tag_name,clickable:!0,color:"primary",variant:null!==e.props.clickedTag&&e.props.clickedTag.id==t.id?"default":"outlined",style:{margin:5},onClick:function(){return e.props.handleClickedTag(t)}})}))),a.createElement(s.Z,{container:!0,spacing:6,style:{marginTop:10}},O.map((function(e){return a.createElement(s.Z,{item:!0,lg:3,md:6,sm:6,xs:12,key:e.id},a.createElement(r.Z,{style:{maxWidth:380}},a.createElement(l.Z,{component:P.rU,to:"/".concat(e.slug)},a.createElement(c.Z,{component:"video",height:"160",disablePictureInPicture:!0,controlsList:"nodownload",src:e.url,style:{objectFit:"cover"},onContextMenu:function(e){return e.preventDefault()}})),a.createElement(i.Z,{style:{display:"flex",justifyContent:"space-between"}},H&&a.createElement(d.Z,{size:"small",color:"primary",onClick:function(t){return Q(e,t)}},a.createElement(S.Z,null)),a.createElement(o.Z,{component:P.rU,to:"/".concat(e.slug),size:"small",variant:"outlined",color:"primary",startIcon:a.createElement(k.Z,null),className:Y.buttons,style:{fontFamily:"inherit",marginLeft:"auto"}},"View"))))})),n&&a.createElement("div",null,n)),H&&a.createElement(a.Fragment,null,a.createElement(T.Z,{mdDown:!0},a.createElement(b.Z,{className:Y.fab,color:"primary",variant:"extended",size:"medium",onClick:ae},a.createElement(D.Z,{style:{marginRight:8}}),"Create tag")),a.createElement(T.Z,{mdUp:!0},a.createElement(b.Z,{className:Y.fab,color:"primary",onClick:ae},a.createElement(D.Z,null)))),Z&&a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50px",margin:"30px"}},a.createElement(u.Z,{className:Y.spinner})))}}])&&z(t.prototype,n),V}(a.Component);const $=(0,j.EN)((0,Z.Z)((function(e){return{root:{color:"#185adb",flex:1,marginRight:40,marginLeft:40,paddingTop:100},spinner:{color:"#185adb",margin:20},buttons:{border:"1px solid #185adb",color:"#185adb",fontFamily:"Montserrat"},title:{"& h2":{fontFamily:"inherit",fontWeight:700}},menuItemText:{fontFamily:"inherit"},fab:{margin:0,left:"auto",top:"auto",position:"fixed",bottom:e.spacing(2),right:e.spacing(2),textTransform:"none"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)}}}))(H))}}]);