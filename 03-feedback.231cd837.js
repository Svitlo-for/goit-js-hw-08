!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(x,t),d?y(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function x(){var e=b();if(O(e))return h(e);f=setTimeout(x,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?y(e):(r=i=void 0,a)}function w(){var e=b(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(x,t),y(c)}return void 0===f&&(f=setTimeout(x,t)),a}return t=S(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:h(b())},w}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};!function(){var e=JSON.parse(x);if(!e)return;j.input.value=e.email||"",j.textarea.value=e.message||""}();var O="feedback-form-state";j.form.addEventListener("submit",(function(e){if(e.preventDefault(),x){var t=JSON.parse(x);console.log(t)}localStorage.removeItem(O),j.form.reset()})),j.form.addEventListener("input",e(t)((function(){var e={email:j.input.value,message:j.textarea.value};localStorage.setItem(O,JSON.stringify(e))}),500));var x=localStorage.getItem(O)}();
//# sourceMappingURL=03-feedback.231cd837.js.map
