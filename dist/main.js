(()=>{"use strict";class e{constructor(e){this.name=e,this.id=null,this.draggable=!0}addCardCloseBlock(){const e=document.createElement("div");return e.classList.add("card-close-block"),e.innerHTML='<i class="fas fa-lg fa-times"></i>',e}createNewCard(e,t,s){const a=document.createElement("li");a.classList.add("list-item"),a.draggable=!0,a.innerHTML=`<p>${e.name}</p>`,t.appendChild(a);const i=this.addCardCloseBlock();a.addEventListener("mouseover",(()=>{a.insertAdjacentElement("afterbegin",i),i.addEventListener("click",(()=>{s.splice(e.id,1),t.removeChild(a)}))})),a.addEventListener("mouseleave",(()=>{a.removeChild(i)}))}}const t=new class{createForm(){const e=document.createElement("form");return e.classList.add("add-card"),e.innerHTML=' <textarea name="card-title" class="card-title-field" rows = "5" placeholder="Enter a title for this card..."></textarea>\n              <div class="input-container">\n                  <div class="input-block">\n                      <input type="submit" value="Add Card" class="input-add-card">\n                      <div class="close-btn">\n                          <i class="fas fa-lg fa-times"></i>\n                      </div>\n                  </div>\n                  <div class="menu-block">\n                      <i class="fas fa-lg fa-ellipsis-h"></i>\n                  </div>\n              </div>',e}closeForm(e,t,s){e.querySelector(".close-btn").addEventListener("click",(()=>{e.reset(),s.removeChild(e),t.classList.remove("hidden")}))}afterSubmit(e,t,s){e.reset(),s.removeChild(e),t.classList.remove("hidden")}addCardTitle(e){return e.querySelector(".card-title-field").value}},s=document.querySelectorAll(".add-card-container"),a=document.querySelectorAll(".list"),i=[];[...s].forEach((s=>{s.addEventListener("click",(()=>{const n=s.closest(".list-container"),r=n.querySelector(".list");s.classList.remove("list-item"),s.classList.add("hidden");const d=t.createForm();n.appendChild(d),t.closeForm(d,s,n),d.addEventListener("submit",(l=>{l.preventDefault(),function(t,s){const a=new e(t);i.push(a),i.forEach(((e,t)=>{e.id=t})),a.createNewCard(a,s,i)}(t.addCardTitle(d),r),t.afterSubmit(d,s,n);var c,o;c=document.querySelectorAll(".list-item"),o=a,[...c].forEach((e=>{e.addEventListener("dragstart",(e=>{e.target.classList.add("selected")})),e.addEventListener("dragend",(e=>{e.target.classList.remove("selected")})),[...o].forEach((e=>{e.addEventListener("dragover",(t=>{t.preventDefault();const s=document.querySelector(".selected"),a=t.target;if(s===a||!a.classList.contains("list-item"))return;const i=function(e,t){const s=t.getBoundingClientRect();return e<s.y+s.height/2?t:t.nextElementSibling}(t.clientY,a);(!i||s!==i.previousElementSibling&&s!==i)&&e.insertBefore(s,i)}))}))}))}))}))}))})();