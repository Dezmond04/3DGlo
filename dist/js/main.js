(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");setInterval((()=>{let e=(()=>{let e=(new Date("10 may 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining>0?(e.hours<10?t.textContent="0"+e.hours:t.textContent=e.hours,e.minutes<10?n.textContent="0"+e.minutes:n.textContent=e.minutes,e.seconds<10?o.textContent="0"+e.seconds:o.textContent=e.seconds):e.timeRemaining<=0&&(t.textContent="00",n.textContent="00",o.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),o.forEach((e=>e.addEventListener("click",l)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=e.querySelector(".popup-content");let l;t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",(()=>{let e=-100;const t=()=>{screen.width>768&&(o.style.marginTop=e+"%",e+=5,l=requestAnimationFrame(t),e<0?o.style.marginTop=e+"%":(cancelAnimationFrame(l),o.style.marginTop=""))};t()})()}))})),n.addEventListener("click",(()=>{(()=>{let t=0;const n=()=>{screen.width>768&&(o.style.marginTop=t+"%",t-=5,l=requestAnimationFrame(n),t>-100?o.style.marginTop=t+"%":(cancelAnimationFrame(l),e.style.display="none",o.style.marginTop=""))};n()})()}))})(),document.querySelectorAll(".calc-item").forEach((e=>{e.addEventListener("input",(()=>{"text"==e.type&&(e.value=e.value.replace(/\D+/,""))}))})),document.querySelectorAll("input").forEach((e=>{const t=e.id;null!==t.match(/form[0-9]-name/)&&e.addEventListener("input",(()=>{e.value=e.value.replace(/[^А-Яа-я\s\-]/g,"")})),null!==t.match(/form[0-9]-email/)&&e.addEventListener("input",(()=>{e.value=e.value.replace(/[\w\@\~\-\.\!\~\*]/g,"")})),null!==t.match(/form[0-9]-phone/)&&e.addEventListener("input",(()=>{e.value=e.value.replace(/[^0-9\()\-]/g,"")}))}))})();