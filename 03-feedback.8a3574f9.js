!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={},i=e.parcelRequire2afd;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequire2afd=i),i.register("dCfNN",(function(n,r){var o=i("l5bVx"),u="Expected a function",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,p=s||v||Function("return this")(),m=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return p.Date.now()};function x(e,t,n){var r,i,o,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function p(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function m(e){return c=e,f=setTimeout(N,t),d?p(e):a}function x(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=o}function N(){var e=b();if(x(e))return j(e);f=setTimeout(N,function(e){var n=t-(e-l);return s?y(n,o-(e-c)):n}(e))}function j(e){return f=void 0,v&&r?p(e):(r=i=void 0,a)}function w(){var e=b(),n=x(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return m(l);if(s)return f=setTimeout(N,t),p(l)}return void 0===f&&(f=setTimeout(N,t)),a}return t=O(t)||0,h(n)&&(d=!!n.leading,o=(s="maxWait"in n)?g(O(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:j(b())},w}function h(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(h(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=l.test(e);return r||c.test(e)?d(e.slice(2),r?2:8):f.test(e)?NaN:+e}n.exports=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return h(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),x(e,t,{leading:r,maxWait:t,trailing:i})}})),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),throttle=i("dCfNN");var o=document.querySelector(".feedback-form"),u=document.querySelector("input[type='email']"),a=document.querySelector("textarea"),f="feedback-form-state",l=JSON.parse(localStorage.getItem(f))||{};o.addEventListener("input",throttle((function(e){l[e.target.name]=e.target.value,localStorage.setItem(f,JSON.stringify(l))}),500)),o.addEventListener("submit",(function(e){if(e.preventDefault(),!u.value.trim()||!a.value.trim())return alert("Please fill in all the fields!");console.log(l),e.currentTarget.reset(),localStorage.removeItem(f),l={}})),void 0!==l.email&&(u.value=l.email),void 0!==l.message&&(a.value=l.message)}();
//# sourceMappingURL=03-feedback.8a3574f9.js.map
