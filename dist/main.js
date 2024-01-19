(()=>{"use strict";class t{#t=[];addTodo(t){this.#t.push(t)}get inbox(){return this.#t}removeTodo(t){let e;for(let o=0;o<this.#t.length;o++)this.#t[o].title==t&&(e=o);this.#t.splice(e,1)}stringify(){let t=[];for(let e of this.#t)t.push(e.getTodo());return JSON.stringify(t)}showInbox(){for(let t of this.#t)t.showTodo()}}class e{#e;#o;#i;#r;constructor(t,e,o,i){this.#e=t,this.#o=e,this.#i=o,this.#r=i}get title(){return this.#e}get description(){return this.#o}get due(){return this.#i}get priority(){return this.#r}showTodo(){console.log(`\t${this.#e} ${this.#o} ${this.#i} ${this.#r}`)}}class o{#e;#o;constructor(t,e){this.#e=t,this.#o=e}get title(){return this.#e}get description(){return this.#o}getTodo(){return{title:this.#e,description:this.#o}}showTodo(){console.log(`${this.#e} ${this.#o}`)}}class i{#n=[];addProject(t){this.#n.push(t)}get projects(){return this.#n}removeProject(t){let e;for(let o=0;o<this.#n.length;o++)this.#n[o].title==t&&(e=o);this.#n.splice(e,1)}showProjects(){for(let t of this.#n)t.showProject()}}class r{#l={};constructor(t){this.#l.title=t,this.#l.todos=[]}get projectTitle(){return this.#l.title}get project(){return this.#l}addTodo(t){this.#l.todos.push(t)}showProject(){console.log(this.#l.title);for(let t of this.#l.todos)t.showTodo()}}function n(t){localStorage.inbox=t.stringify()}function l(){let t=document.querySelector("#list");for(;t.childNodes.length>0;)t.removeChild(t.firstChild);document.querySelector("#inbox-form")&&document.querySelector("#inbox-form").remove()}function c(t){for(;t.childNodes.length>0;)t.removeChild(t.firstChild)}function d(t){let e=document.querySelector("#list"),o=t.project.todos;for(let t of o){let o=document.createElement("li");o.setAttribute("data",t.title);let i=document.createElement("div");i.textContent=`${t.title} ${t.description} ${t.due} ${t.priority}`,o.appendChild(i),e.appendChild(o)}}function s(t,e){for(let o of t.projects){let t=document.createElement("li");t.addEventListener("click",(()=>{document.querySelector("#inbox-form")&&document.querySelector("#inbox-form").remove(),l(),d(o)}));let i=document.createElement("div");i.textContent=`${o.projectTitle}`,t.appendChild(i),e.appendChild(t)}}function u(t){let e=document.createElement("input");return e.setAttribute("type","checkbox"),e.addEventListener("change",(e=>{t.removeTodo(e.target.parentElement.getAttribute("data")),function(t){t.target.parentElement.remove()}(e),n(t)})),e}let p,a;document.querySelector("#inbox").addEventListener("click",(()=>{let t=document.querySelector("#list");l(),function(t,e){for(let o of t.inbox){let i=document.createElement("li");i.setAttribute("data",o.title);let r=document.createElement("div");r.textContent=`${o.title} ${o.description}`;let n=u(t);i.appendChild(n),i.appendChild(r),e.appendChild(i)}}(p,t),function(t,e){let i=document.createElement("div");i.setAttribute("id","inbox-form");let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","title"),r.setAttribute("id","title"),r.setAttribute("placeholder","Title");let l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","description"),l.setAttribute("id","description"),l.setAttribute("placeholder","Description");let c=document.createElement("button");c.setAttribute("type","button"),c.setAttribute("id","add-todo-button"),c.textContent="Add",c.addEventListener("click",(()=>{!function(t,e){let i=document.querySelector("#title"),r=document.querySelector("#description"),l=document.createElement("li");l.setAttribute("data",i.value);let c=document.createElement("div");c.textContent=`${i.value} ${r.value}`;let d=u(t);l.appendChild(d),l.appendChild(c),e.appendChild(l);let s=new o(i.value,r.value);t.addTodo(s),n(t)}(t,e),document.querySelector("#title").value="",document.querySelector("#description").value=""})),i.appendChild(r),i.appendChild(l),i.appendChild(c),e.parentNode.appendChild(i)}(p,t)})),document.querySelector("#projects").addEventListener("click",(()=>{let t=document.querySelector("#projects-list");t.childNodes.length>0?c(t):(c(t),s(a,t))})),document.querySelector("#add-project").addEventListener("click",(()=>{let t=document.querySelector("#projects-list");c(t),s(a,t),function(t,e){let o=document.createElement("div"),i=document.createElement("input"),n=document.createElement("div");o.setAttribute("id","project-name-container"),i.setAttribute("type","text"),i.setAttribute("id","project-name"),i.setAttribute("placeholder","Project name"),n.setAttribute("id","add-project-button"),n.textContent="Add",n.addEventListener("click",(()=>{t.addProject(new r(i.value)),c(e),s(t,e)})),o.appendChild(i),o.appendChild(n),e.appendChild(o)}(a,t)})),function(){if(0==localStorage.length){console.log("Empty. Loading content...");let t=[],e=[];localStorage.setItem("inbox",JSON.stringify(t)),localStorage.setItem("projects",JSON.stringify(e))}else console.log("Content found.")}(),p=function(){let e=localStorage.getItem("inbox");e=JSON.parse(e);let i=new t;for(let t of e){let e=t.title,r=t.description,n=new o(e,r);i.addTodo(n)}return i}(),a=function(){let t=localStorage.getItem("projects");t=JSON.parse(t);let o=new i;for(let i of t){let t=i.title,n=i.todos,l=new r(t);for(let t of n){let o=t.title,i=t.description,r=t.due,n=t.severity,c=new e(o,i,r,n);l.addTodo(c)}o.addProject(l)}return o}(),a.showProjects()})();