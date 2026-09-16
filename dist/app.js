const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let paused=reduced,slide=0;
const headlines=['SOFTWARE<br>ENGINEER.','FULL-STACK<br>DEVELOPER.','FOUNDER.<br>BUILDER.'];
const loader=document.querySelector('.loader');
let start=performance.now();
function loadFrame(now){let progress=Math.min(100,Math.round((now-start)/15));document.querySelector('#progress').textContent=progress+'%';if(progress<100&&!reduced)requestAnimationFrame(loadFrame);else{document.querySelector('#progress').textContent='100%';setTimeout(()=>loader.classList.add('done'),reduced?0:150);}}
requestAnimationFrame(loadFrame);
if(!reduced)document.documentElement.classList.add('js-motion');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
function updateMotionButton(){document.querySelector('#motion').textContent=paused?'Play motion':'Pause motion';document.querySelector('#motion').setAttribute('aria-pressed',String(paused));}
updateMotionButton();document.querySelector('#motion').addEventListener('click',()=>{paused=!paused;updateMotionButton()});
setInterval(()=>{if(paused||document.hidden)return;const title=document.querySelector('#headline');title.classList.add('changing');setTimeout(()=>{slide=(slide+1)%headlines.length;title.innerHTML=headlines[slide];document.querySelector('#slide-number').textContent=String(slide+1).padStart(2,'0');document.querySelector('.portrait-placeholder').style.setProperty('--turn',[-12,16,0][slide]+'deg');title.classList.remove('changing')},350)},3400);
document.querySelector('.hero').addEventListener('pointermove',e=>{if(paused||e.pointerType==='touch')return;const box=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',((e.clientX-box.left-box.width/2)*.035)+'px');e.currentTarget.style.setProperty('--my',((e.clientY-box.top-box.height/2)*.035)+'px')});
const dialog=document.querySelector('#project-dialog');document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#dialog-title').textContent='Project name '+button.dataset.project;dialog.showModal()}));document.querySelectorAll('.dialog-close,.dialog-dismiss').forEach(b=>b.addEventListener('click',()=>dialog.close()));dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});document.querySelector('#year').textContent=new Date().getFullYear();
