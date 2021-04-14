(()=>{"use strict";var e={122:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"/* CSS RESET BEGIN */\n* {\n  box-sizing: border-box;\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 8px;\n  font: inherit;\n  vertical-align: baseline;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* CSS RESET END */\n\nbody {\nfont-family: -apple-system, BlinkMacSystemFont,\n “Segoe UI”, “Roboto”, “Oxygen”,\n “Ubuntu”, “Cantarell”, “Fira Sans”,\n “Droid Sans”, “Helvetica Neue”, sans-serif;\n}\n\n.main {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.header {\n  width: 100%;\n  height: 80px;\n  background-color: #aaa;\n}\n\n.side-bar {\n  width: 25%;\n  min-height: 100vh;\n  padding: 2rem;\n  font-size: 1.5rem;\n  background-color: #eee;\n}\n\n.project-tab {\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border-radius: .5rem;\n  background-color: #aaa;\n}\n\n.todo-list-wrapper {\n  flex: 1;\n  \n  min-height: 100vh;\n  padding: 2rem;\n}\n\n.todo-item {\n  display: flex;\n  align-items: baseline;\n  width: 100%;\n  padding: 1rem;\n  border-bottom: 1px solid #aaa;\n  font-size: 1.5rem;\n}\n\n.todo-checkbox {\n  margin: 0;\n  margin-right: 1rem;\n}\n\n.todo-title {\n  flex: 1;\n}\n\n.todo-due-date {\n  margin: 0 1rem;\n  font-size: 1rem;\n}\n\n.todo-actions-wrapper {\n  justify-self: flex-end;\n}\n\n.todo-edit, .todo-delete {\n  font-size: 1rem;\n}\n\n.priority-low {\n  border-left: 8px solid #48f;\n}\n\n.priority-mid {\n  border-left: 8px solid #fc0;\n}\n\n.priority-high {\n  border-left: 8px solid #f60;\n}",""]);const i=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},o=[],r=0;r<e.length;r++){var d=e[r],s=n.base?d[0]+n.base:d[0],c=t[s]||0,l="".concat(s," ").concat(c);t[s]=c+1;var u=a(l),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:h(p,n),references:1}),o.push(l)}return o}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var c,l=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,m=0;function h(e,n){var t,o,r;if(n.singleton){var i=m++;t=f||(f=s(n)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=s(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var s=d(e,n),c=0;c<t.length;c++){var l=a(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(122);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;class r{constructor({name:e}){this.name=e,this.listOfTodos=[]}}const i=(()=>{let e=[{name:"work",listOfTodos:[{title:"linters",description:"check for linter errors",dueDate:"3-4-2021",priority:"low"},{title:"tests",description:"check for test errors",dueDate:"3-4-2021",priority:"high"}]},{name:"personal",listOfTodos:[{title:"readme",description:"update readme on github",dueDate:"2-4-2021",priority:"mid"}]}];return{createProject:n=>{e.push(new r(n))},removeProject:n=>{e.splice(n,1)},updateProject:(e,n)=>{},getProjectList:()=>e}})(),a=i.getProjectList();document.querySelector("main"),document.createElement("div"),console.log(i.getListOfProjects),function(){let e=[{title:"pullto github",description:"upload the latest changes on github",dueDate:"1-4-2021",priority:"high"},{title:"docs",description:"update readme on github",dueDate:"2-4-2021",priority:"mid"},{title:"linters",description:"check for linter errors",dueDate:"3-4-2021",priority:"low"}];const n=document.querySelector("main");n.classList.add("main");const t=document.createElement("div");t.classList.add("header");const o=document.createElement("div");o.classList.add("side-bar");const r=document.createElement("div");r.classList.add("todo-list-wrapper"),n.appendChild(t);const d=()=>{r.innerHTML=""},s=(e,n="")=>{e.forEach(((e,t)=>{r.innerHTML+=`\n      <div class="todo-item priority-${e.priority}" data-index=${t}>\n        <input type="checkbox" class="todo-checkbox">\n        <span class="todo-title">${e.title}</span>\n        <span class="todo-due-date">${e.dueDate}</span>\n        <span class="todo-project">${n}</span>\n        <span class="todo-actions-wrapper">\n          <span class="todo-edit">edit</span>\n          <span class="todo-delete">delete</span>\n        </span>\n      </div>\n      `}))},c=document.createElement("div");c.classList.add("project-tab"),c.textContent="All Todo",c.addEventListener("click",(()=>{d(),s(e),a.forEach((e=>{s(e.listOfTodos,e.name)}))})),o.appendChild(c),a.forEach(((e,n)=>{const t=document.createElement("div");t.setAttribute("data-index",n),t.classList.add("project-tab"),t.textContent=e.name,t.addEventListener("click",(()=>{d(),s(e.listOfTodos)})),o.appendChild(t)}));const l=document.createElement("button");l.classList.add("add-project-btn"),l.textContent="ADD +",l.addEventListener("click",(()=>{(e=>{const n=document.createElement("input"),t=document.createElement("button");t.textContent="save",t.addEventListener("click",(()=>{i.createProject(n.value)})),e.appendChild(n),e.appendChild(t)})(o)})),o.appendChild(l),n.appendChild(o),n.appendChild(r)}()})()})();