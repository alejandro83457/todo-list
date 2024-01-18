(()=>{"use strict";class t{#t=[];addTodo(t){this.#t.push(t)}get inbox(){return this.#t}removeTodo(t){let e;for(let i=0;i<this.#t.length;i++)this.#t[i].title==t&&(e=i);this.#t.splice(e,1)}stringify(){let t=[];for(let e of this.#t)t.push(e.getTodo());return JSON.stringify(t)}showInbox(){for(let t of this.#t)t.showTodo()}}class e{#e;#i;constructor(t,e){this.#e=t,this.#i=e}get title(){return this.#e}get description(){return this.#i}getTodo(){return{title:this.#e,description:this.#i}}showTodo(){console.log(`${this.#e} ${this.#i}`)}}function i(t){localStorage.inbox=t.stringify()}function o(t){let e=document.createElement("input");return e.setAttribute("type","checkbox"),e.addEventListener("change",(e=>{t.removeTodo(e.target.parentElement.getAttribute("data")),function(t){t.target.parentElement.remove()}(e),i(t)})),e}let n,l=document.querySelector("#list");document.querySelector("#inbox").addEventListener("click",(()=>{!function(t){for(;t.childNodes.length>0;)t.removeChild(t.firstChild);t.parentNode.removeChild(t.parentNode.lastChild)}(l),function(t,e){for(let i of t.inbox){let n=document.createElement("li");n.setAttribute("data",i.title);let l=document.createElement("div");l.textContent=`${i.title} ${i.description}`;let r=o(t);n.appendChild(r),n.appendChild(l),e.appendChild(n)}}(n,l),function(t,n){let l=document.createElement("div");l.setAttribute("id","inbox-form");let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","title"),r.setAttribute("id","title"),r.setAttribute("placeholder","Title");let d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("name","description"),d.setAttribute("id","description"),d.setAttribute("placeholder","Description");let c=document.createElement("button");c.setAttribute("type","button"),c.setAttribute("id","add-todo-button"),c.textContent="Add",c.addEventListener("click",(()=>{!function(t,n){let l=document.querySelector("#title"),r=document.querySelector("#description"),d=document.createElement("li");d.setAttribute("data",l.value);let c=document.createElement("div");c.textContent=`${l.value} ${r.value}`;let s=o(t);d.appendChild(s),d.appendChild(c),n.appendChild(d);let u=new e(l.value,r.value);t.addTodo(u),i(t)}(t,n),document.querySelector("#title").value="",document.querySelector("#description").value=""})),l.appendChild(r),l.appendChild(d),l.appendChild(c),n.parentNode.appendChild(l)}(n,l)})),function(){if(0==localStorage.length){console.log("Empty. Loading content...");let t=[],e={};localStorage.setItem("inbox",JSON.stringify(t)),localStorage.setItem("projects",JSON.stringify(e))}else console.log("Content found.")}(),n=function(){let i=localStorage.getItem("inbox");i=JSON.parse(i);let o=new t;for(let t of i){let i=t.title,n=t.description,l=new e(i,n);o.addTodo(l)}return o}(),n.showInbox()})();