!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=103)}({0:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},1:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var l=Object.create(a.computed||null);Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}}),a.computed=l}return{esModule:i,exports:o,options:a}}},103:function(e,t,n){"use strict";var r=n(21);r.el="#root",new Vue(r)},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(s(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(s(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:o}}}}function i(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],l=o[2],c=o[3],d={css:a,media:l,sourceMap:c};r[s]?(d.id=e+":"+r[s].parts.length,r[s].parts.push(d)):(d.id=e+":0",n.push(r[s]={id:s,parts:[d]}))}return n}function o(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]'),i=null!=r;if(i&&v)return m;if(h){var s=f++;r=p||(p=o()),t=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=r||o(),t=l.bind(null,r),n=function(){r.parentNode.removeChild(r)};return i||t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function l(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(3),d={},u=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,m=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=i(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var a=o[s],l=d[a.id];l.refs--,n.push(l)}t?(o=i(e,t),r(o)):o=[];for(var s=0;s<n.length;s++){var l=n[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete d[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},21:function(e,t,n){n(37);var r=n(1)(n(24),n(33),null,null);r.options.__file="/Users/ali-130257n/www/weex-app-start-kit/src/components/video-list.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] video-list.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{items:{default:[]}}}},28:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.video-list{\n  position: relative;\n  border-top: 1px solid rgba(0,0,0,.2);\n}\n.video-list-item{\n  padding: 20px;\n  border-bottom: 1px solid rgba(0,0,0,.3);\n}\n.video-item-main{\n  flex-direction: row;\n}\n.video-item-cover{\n  width: 220px;\n  height: 120px;\n}\n.video-item-desc{\n  flex-direction: column;\n  margin-left: 40px;\n}\n.video-upload-info{\n  margin-top: 20px;\n  flex-direction: row;\n}\n.icon-upload {\n  width: 36px;\n  height: 36px;\n}\n.video-upload-date{\n  margin-left: 20px;\n  font-size: 24px;\n  color: #777;\n}\n.video-item-ft{\n  flex-direction: row; \n  margin-top: 20px;\n}\n.video-item-producer{\n  flex: .6;\n  flex-direction: row;\n}\n.producer-avatar {\n  width: 36px;\n  height: 36px;\n}\n.producer-name{\n  margin-left: 20px;\n  font-size: 24px;\n  color: #888;\n}\n.video-item-social{\n  flex: .4;\n  flex-direction: row;\n  align-items: center;\n}\n.social-number{\n  color: #444;\n  font-size: 24px;\n}\n.scial-label{\n  margin-left: 5px;\n  color: #999;\n  font-size: 20px;\n}\n\n",""])},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],l=o[2],c=o[3],d={id:e+":"+i,css:a,media:l,sourceMap:c};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}},33:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-list"},e._l(e.items,function(t){return n("div",{staticClass:"video-list-item"},[n("div",{staticClass:"video-item-main"},[n("image",{staticClass:"video-item-cover",attrs:{src:t.cover}}),e._v(" "),n("div",{staticClass:"video-item-desc"},[n("text",{staticClass:"video-name"},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"video-upload-info"},[n("image",{staticClass:"icon-upload",attrs:{src:"http://img1.vued.vanthink.cn/vued5f365239dd87f0d91e314ab96d40e669.png"}}),e._v(" "),n("text",{staticClass:"video-upload-date"},[e._v(e._s(t.upload_date))])])])]),e._v(" "),n("div",{staticClass:"video-item-ft"},[n("div",{staticClass:"video-item-producer"},[n("image",{staticClass:"producer-avatar",attrs:{src:t.producer.avatar}}),e._v(" "),n("text",{staticClass:"producer-name"},[e._v(e._s(t.producer.username))])]),e._v(" "),n("div",{staticClass:"video-item-social"},[n("text",{staticClass:"social-number"},[e._v(e._s(t.views))]),e._v(" "),n("text",{staticClass:"scial-label"},[e._v("Views")]),e._v(" "),n("text",{staticClass:"social-number",staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.comments))]),e._v(" "),n("text",{staticClass:"scial-label"},[e._v("Comments")])])])])}))},staticRenderFns:[]},e.exports.render._withStripped=!0},37:function(e,t,n){var r=n(28);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("19960314",r,!1)}});