(()=>{"use strict";const e=(t,n)=>{Array.isArray(n)?n.forEach((n=>e(t,n))):((e,t)=>{e.appendChild(t?.nodeType?t:document.createTextNode(t))})(t,n)},t=(t,n)=>{const{children:r}=n;if("function"==typeof t)return t(n,r);const o=document.createElement(t);return Object.entries(n||{}).forEach((([e,t])=>{e.startsWith("on")&&e.toLowerCase()in window?o.addEventListener(e.toLowerCase().substr(2),t):o.setAttribute(e,t)})),e(o,r),o},n=({children:e,onClick:n})=>t("button",{onClick:n,children:e});document.getElementById("root").appendChild(t((()=>t("div",{children:t(n,{onClick:()=>alert(1),children:"Click 1"})})),{}))})();