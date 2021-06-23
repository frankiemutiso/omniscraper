/*! For license information please see vendors.react-router.js.LICENSE.txt */
(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[616],{6353:(t,n,e)=>{"use strict";e.d(n,{l_:()=>_,AW:()=>k,F0:()=>b,rs:()=>g,s6:()=>v,LX:()=>M,EN:()=>U});var r=e(3552),o=e(7294),a=(e(5697),e(2122)),i=e(8273),c=e(5429);function s(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var a=n.indexOf("?");return-1!==a&&(e=n.substr(a),n=n.substr(0,a)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t)).state=n:(void 0===(o=(0,a.Z)({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=(0,i.Z)(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}"undefined"==typeof window||!window.document||window.document.createElement;var p=e(4523),u=e(2177),l=e(4779),h=e.n(l),m=(e(663),e(9756)),f=e(8679),d=e.n(f),y=function(t){var n=(0,p.Z)();return n.displayName="Router-History",n}(),v=function(t){var n=(0,p.Z)();return n.displayName="Router",n}(),b=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}(0,r.Z)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return o.createElement(v.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(y.Provider,{children:this.props.children||null,value:this.props.history}))},n}(o.Component);o.Component;var S=function(t){function n(){return t.apply(this,arguments)||this}(0,r.Z)(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(o.Component),C={},E=0;function Z(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(C[t])return C[t];var n=h().compile(t);return E<1e4&&(C[t]=n,E++),n}(t)(n,{pretty:!0})}function _(t){var n=t.computedMatch,e=t.to,r=t.push,i=void 0!==r&&r;return o.createElement(v.Consumer,null,(function(t){t||(0,u.Z)(!1);var r=t.history,p=t.staticContext,l=i?r.push:r.replace,h=s(n?"string"==typeof e?Z(e,n.params):(0,a.Z)({},e,{pathname:Z(e.pathname,n.params)}):e);return p?(l(h),null):o.createElement(S,{onMount:function(){l(h)},onUpdate:function(t,n){var e,r,o=s(n.to);e=o,r=(0,a.Z)({},h,{key:o.key}),e.pathname===r.pathname&&e.search===r.search&&e.hash===r.hash&&e.key===r.key&&(0,c.Z)(e.state,r.state)||l(h)},to:e})}))}var w={},x=0;function M(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,a=void 0!==o&&o,i=e.strict,c=void 0!==i&&i,s=e.sensitive,p=void 0!==s&&s;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=w[e]||(w[e]={});if(r[t])return r[t];var o=[],a={regexp:h()(t,o,n),keys:o};return x<1e4&&(r[t]=a,x++),a}(e,{end:a,strict:c,sensitive:p}),o=r.regexp,i=r.keys,s=o.exec(t);if(!s)return null;var u=s[0],l=s.slice(1),m=t===u;return a&&!m?null:{path:e,url:"/"===e&&""===u?"/":u,isExact:m,params:i.reduce((function(t,n,e){return t[n.name]=l[e],t}),{})}}),null)}var k=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return o.createElement(v.Consumer,null,(function(n){n||(0,u.Z)(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?M(e.pathname,t.props):n.match,i=(0,a.Z)({},n,{location:e,match:r}),c=t.props,s=c.children,p=c.component,l=c.render;return Array.isArray(s)&&0===s.length&&(s=null),o.createElement(v.Provider,{value:i},i.match?s?"function"==typeof s?s(i):s:p?o.createElement(p,i):l?l(i):null:"function"==typeof s?s(i):null)}))},n}(o.Component);o.Component;var g=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return o.createElement(v.Consumer,null,(function(n){n||(0,u.Z)(!1);var e,r,i=t.props.location||n.location;return o.Children.forEach(t.props.children,(function(t){if(null==r&&o.isValidElement(t)){e=t;var c=t.props.path||t.props.from;r=c?M(i.pathname,(0,a.Z)({},t.props,{path:c})):n.match}})),r?o.cloneElement(e,{location:i,computedMatch:r}):null}))},n}(o.Component);function U(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,r=(0,m.Z)(n,["wrappedComponentRef"]);return o.createElement(v.Consumer,null,(function(n){return n||(0,u.Z)(!1),o.createElement(t,(0,a.Z)({},r,n,{ref:e}))}))};return e.displayName=n,e.WrappedComponent=t,d()(e,t)}o.useContext},86:(t,n)=>{"use strict";var e="function"==typeof Symbol&&Symbol.for;e&&Symbol.for("react.element"),e&&Symbol.for("react.portal"),e&&Symbol.for("react.fragment"),e&&Symbol.for("react.strict_mode"),e&&Symbol.for("react.profiler"),e&&Symbol.for("react.provider"),e&&Symbol.for("react.context"),e&&Symbol.for("react.async_mode"),e&&Symbol.for("react.concurrent_mode"),e&&Symbol.for("react.forward_ref"),e&&Symbol.for("react.suspense"),e&&Symbol.for("react.suspense_list"),e&&Symbol.for("react.memo"),e&&Symbol.for("react.lazy"),e&&Symbol.for("react.block"),e&&Symbol.for("react.fundamental"),e&&Symbol.for("react.responder"),e&&Symbol.for("react.scope")},663:(t,n,e)=>{"use strict";e(86)}}]);