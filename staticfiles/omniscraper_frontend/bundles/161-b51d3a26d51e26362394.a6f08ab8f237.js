(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[161],{1161:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Login:()=>O,default:()=>S});var r=n(7294),o=n(3832),a=n(3901),i=n(7201),l=n(4436),s=n(3700),c=n(6718),u=n(7397),f=n(7812),p=n(282),m=n(5477),d=n(6489),h=n(2267),y=n(67),w=n(8270);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(S,e);var t,n,d,b,O=(d=S,b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(d);if(b){var n=Z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function S(){var e;g(this,S);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return k(C(e=O.call.apply(O,[this].concat(n))),"state",{showPassword:!1}),k(C(e),"handleClickShowPassword",(function(){e.setState({showPassword:!e.state.showPassword})})),k(C(e),"handleMouseDownPassword",(function(e){e.preventDefault()})),e}return t=S,(n=[{key:"componentDidUpdate",value:function(e){e.error!==this.props.error&&(this.setState({error:this.props.error}),console.log("Error on login form",this.props.error))}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.handleChange,d=e.handleSubmit,b=e.username,g=e.password,v=e.loginLoading,E=e.error,P=this.state.showPassword,C=this.handleClickShowPassword,Z=this.handleMouseDownPassword;return r.createElement(o.Z,null,r.createElement("div",{className:t.paper},r.createElement(a.Z,{className:t.avatar},r.createElement(h.Z,null)),r.createElement("h4",{style:{color:"#1a1c20",textTransform:"uppercase",fontFamily:"inherit",letterSpacing:"0.1em"}},"Log In To Omniscraper"),E&&r.createElement("p",null,E),r.createElement("form",{className:t.form,noValidate:!0,onSubmit:d},r.createElement(i.Z,{value:b,onChange:n,variant:"outlined",margin:"normal",fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,inputProps:{style:{fontFamily:"inherit"}},InputLabelProps:{style:{fontFamily:"inherit"}},style:{marginBottom:20}}),r.createElement(l.Z,{variant:"outlined",style:{width:"100%"}},r.createElement(s.Z,{htmlFor:"filled-adornment-password",style:{fontFamily:"inherit"}},"Password"),r.createElement(c.Z,{size:"small",id:"filled-adornment-password",type:P?"text":"password",value:g,onChange:n,label:"Password",name:"password",required:!0,autoComplete:"current-password",endAdornment:r.createElement(u.Z,{position:"end"},r.createElement(f.Z,{"aria-label":"toggle password visibility",onClick:C,onMouseDown:Z,edge:"end"},P?r.createElement(y.Z,null):r.createElement(w.Z,null)))})),r.createElement(p.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,style:{fontFamily:"inherit",fontWeight:600},endIcon:v?r.createElement(m.Z,{size:16,color:"white"}):""},"Log In"))))}}])&&v(t.prototype,n),S}(r.Component);const S=(0,d.Z)((function(e){var t;return{paper:(t={paddingTop:100,margin:"auto",width:"40vw"},k(t,e.breakpoints.down("sm"),{width:"80vw"}),k(t,"display","flex"),k(t,"flexDirection","column"),k(t,"justifyContent","center"),k(t,"alignItems","center"),t),avatar:{margin:e.spacing(2),backgroundColor:"black"},form:{width:"100%",marginTop:e.spacing(1)},textField:{fontFamily:"inherit"},submit:{margin:e.spacing(3,0,2)}}}))(O)}}]);