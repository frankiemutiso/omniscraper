(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[219],{1219:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Video:()=>O,default:()=>k});var o=n(282),r=n(8463),c=n(9738),a=n(1907),l=n(951),i=n(2613),u=n(6489),s=n(9669),f=n.n(s),p=n(7294),d=n(6353),m=n(1673),y=n(4704);function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=_(e);if(t){var r=_(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?Z(e):t}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(d,e);var t,n,u,s=E(d);function d(){var e;h(this,d);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return j(Z(e=s.call.apply(s,[this].concat(n))),"state",{error:!1,loading:!1,video:{}}),j(Z(e),"UNSAFE_componentWillMount",(function(){e.loadVideo()})),j(Z(e),"loadVideo",(function(){e.setState({loading:!0},(function(){var t=e.props.match.params.slug,n="https://omniscraper-dev.herokuapp.com/api/".concat(t);f().get(n).then((function(t){e.setState({video:t.data})})).catch((function(t){return e.setState({error:t.message,loading:!1})}))}))})),j(Z(e),"downloadVideo",(function(e){var t=e.url,n=e.slug;f()({url:t,method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data],{type:"video/mp4"})),o=document.createElement("a");o.href=t,o.download="".concat(n,".mp4"),document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(t)}))})),e}return t=d,(n=[{key:"render",value:function(){var e=this.downloadVideo,t=this.state.video,n=this.props.classes;return p.createElement("div",{className:n.root},p.createElement(i.Z,{mdDown:!0},p.createElement(r.Z,{style:{width:640}},p.createElement(c.Z,null,p.createElement(l.Z,{component:"video",height:"360",src:t.url,style:{objectFit:"contain"},controls:!0,disablePictureInPicture:!0,controlsList:"nodownload",onContextMenu:function(e){return e.preventDefault()}})),p.createElement(a.Z,{style:{display:"flex",justifyContent:"space-between"}},p.createElement(o.Z,{size:"small",color:"primary",startIcon:p.createElement(y.Z,null),href:"https://twitter.com/i/status/".concat(t.parent_tweet_id),target:"_blank",rel:"noopener noreferrer"},"Source"),p.createElement(o.Z,{size:"small",color:"primary",variant:"outlined",startIcon:p.createElement(m.Z,null),onClick:function(){return e(t)}},"Download")))),p.createElement(i.Z,{mdUp:!0},p.createElement(r.Z,{style:{width:"100%"}},p.createElement(c.Z,null,p.createElement(l.Z,{component:"video",src:t.url,style:{objectFit:"contain",height:"70vh"},controls:!0,disablePictureInPicture:!0,controlsList:"nodownload",onContextMenu:function(e){return e.preventDefault()}})),p.createElement(a.Z,{style:{display:"flex",justifyContent:"space-between"}},p.createElement(o.Z,{size:"small",color:"primary",style:{color:"#185adb",fontFamily:"inherit"},startIcon:p.createElement(y.Z,null),href:"https://twitter.com/i/status/".concat(t.parent_tweet_id),target:"_blank",rel:"noopener noreferrer"},"Source"),p.createElement(o.Z,{size:"small",color:"primary",variant:"contained",className:n.buttons,style:{fontFamily:"inherit"},startIcon:p.createElement(m.Z,null),onClick:function(){return e(t)}},"Download")))))}}])&&v(t.prototype,n),u&&v(t,u),d}(p.Component);const k=(0,u.Z)((function(e){return{root:{flex:1,paddingTop:100,margin:"auto",width:"85vw",display:"flex",justifyContent:"center"}}}))((0,d.EN)(O))}}]);