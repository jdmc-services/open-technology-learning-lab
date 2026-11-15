
'use strict';
const $=id=>document.getElementById(id);
const STORE='technology-foundations-v1';
let data=null, progress={}, active=[], pos=0, sessionRight=0, sessionAnswered=0, sessionTotal=0;
function readProgress(){try{const p=JSON.parse(localStorage.getItem(STORE)||'{}');return p&&typeof p==='object'?p:{}}catch{return {}}}
function save(){try{localStorage.setItem(STORE,JSON.stringify(progress))}catch{}}
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n}
function show(view){document.querySelectorAll('.view').forEach(n=>n.classList.toggle('active',n.id===view));document.querySelectorAll('.tab').forEach(n=>n.classList.toggle('active',n.dataset.view===view));if(view==='progress')renderProgress();window.scrollTo({top:0,behavior:'smooth'})}
function renderLessons(){
 const target=$('module-list');
 data.modules.forEach((m,i)=>{
  const details=el('details','module');const summary=el('summary','',`${String(i+1).padStart(2,'0')} · ${m.title} (${m.lessons.length} lessons)`);details.append(summary);
  m.lessons.forEach(l=>{
   const article=el('article','lesson');article.append(el('h3','',l.title),el('div','eyelabel','Understand'),el('p','',l.explanation));
   const app=el('div','application');app.append(el('div','eyelabel','Real-world application'),el('p','',l.example));article.append(app);
   const distinction=el('div','distinction');distinction.append(el('div','eyelabel','Key distinction'),el('p','',l.distinction));article.append(distinction);details.append(article);
  });target.append(details);
  const option=el('option','',`${i+1}. ${m.title}`);option.value=String(i);$('topic').append(option);
 });
}
function startPractice(){
 const topic=$('topic').value,mode=$('mode').value;
 active=data.questions.filter(q=>(topic==='all'||q.module===Number(topic))&&(mode!=='missed'||progress[q.id]?.correct===false));
 // Deterministic per-session random shuffle; original IDs remain stable for progress.
 active=active.map(q=>({q,sort:Math.random()})).sort((a,b)=>a.sort-b.sort).map(x=>x.q);
 pos=0;sessionRight=0;sessionAnswered=0;sessionTotal=active.length;
 renderQuestion();
}
function renderQuestion(){
 const root=$('quiz');root.replaceChildren();
 if(!active.length){const card=el('div','card');card.append(el('h3','','No matching questions'),el('p','','Choose another topic or practice all questions.'));root.append(card);return}
 if(pos>=active.length){
  const card=el('div','card');card.append(el('h3','','Practice session complete'),el('p','',`You answered ${sessionRight} of ${sessionTotal} correctly (${Math.round(100*sessionRight/sessionTotal)}%).`),el('p','','Review your mastery dashboard, revisit weaker modules, and retry missed questions.'));
  const btn=el('button','primary','View my mastery');btn.addEventListener('click',()=>show('progress'));card.append(btn);root.append(card);return;
 }
 const q=active[pos],card=el('div','card');
 card.append(el('div','muted',`Question ${pos+1} of ${active.length} · ${data.modules[q.module].title}`),el('h3','question-title',q.question));
 const form=el('form');form.setAttribute('aria-label','Practice question');
 const shuffled=q.options.map((label,original)=>({label,original})).map(x=>({...x,r:Math.random()})).sort((a,b)=>a.r-b.r);
 shuffled.forEach((o,i)=>{
  const lab=el('label','option'),input=document.createElement('input');input.type='radio';input.name='answer';input.value=String(o.original);input.required=true;
  lab.append(input,el('span','',`${String.fromCharCode(65+i)}. ${o.label}`));form.append(lab);
 });
 const feedback=el('div');feedback.setAttribute('aria-live','polite');
 const submit=el('button','primary','Check answer');submit.type='submit';
 form.append(submit,feedback);
 form.addEventListener('submit',e=>{
  e.preventDefault();if(form.dataset.done)return;
  const selected=form.querySelector('input[name=answer]:checked');if(!selected)return;
  const picked=Number(selected.value),right=picked===q.answer;
  form.dataset.done='yes';sessionAnswered++;if(right)sessionRight++;
  const old=progress[q.id]||{attempts:0};
  progress[q.id]={correct:right,attempts:(old.attempts||0)+1,updated:new Date().toISOString()};save();
  form.querySelectorAll('input').forEach(input=>input.disabled=true);
  submit.remove();
  feedback.className=`feedback ${right?'correct':'wrong'}`;
  feedback.append(el('strong','',right?'Correct — good reasoning.':'Not quite — review the distinction.'));
  if(!right)feedback.append(el('p','',`The best response is: ${q.options[q.answer]}.`));
  feedback.append(el('p','',q.explanation),el('p','',`Key distinction: ${q.distinction}`));
  const next=el('button','primary',pos+1===active.length?'Finish practice':'Next question');next.type='button';next.addEventListener('click',()=>{pos++;renderQuestion()});feedback.append(next);
 });
 card.append(form);root.append(card);
}
function renderProgress(){
 const root=$('dashboard');root.replaceChildren();
 const total=data.questions.length,attempted=data.questions.filter(q=>progress[q.id]).length,correct=data.questions.filter(q=>progress[q.id]?.correct===true).length;
 const stats=el('div','statgrid');
 [[`${attempted}/${total}`,'Questions attempted'],[`${correct}/${attempted||0}`,'Latest attempts correct'],[`${attempted?Math.round(100*correct/attempted):0}%`,'Latest-attempt accuracy']].forEach(([v,l])=>{const card=el('div','stat');card.append(el('strong','',v),el('span','',l));stats.append(card)});
 root.append(stats,el('h3','','Mastery by module'));
 data.modules.forEach((m,i)=>{
  const items=data.questions.filter(q=>q.module===i),done=items.filter(q=>progress[q.id]),good=done.filter(q=>progress[q.id].correct);
  const card=el('div','card');card.append(el('strong','',m.title),el('div','muted',`${good.length} correct · ${done.length} attempted · ${items.length} available`));
  const bar=el('div','bar'),fill=el('span');fill.style.width=`${100*good.length/items.length}%`;bar.append(fill);card.append(bar);
  if(done.length&&good.length<done.length){card.append(el('p','muted','Recommended: review the lessons and retry missed questions.'))}
  root.append(card);
 });
}
function renderPlan(){
 const plan=[
 ['Computing systems','Explain processing, memory, and storage.'],
 ['Devices and connections','Match interfaces to real-world needs.'],
 ['Digital data and logic','Practice binary, data sizes, and Boolean rules.'],
 ['Software and operating systems','Compare applications, OSs, drivers, and virtualization.'],
 ['Networks and connectivity','Sketch a small LAN and diagnose delay.'],
 ['Web and cloud technology','Explain Web versus Internet and cloud models.'],
 ['Retrieval review','Without notes, teach back modules 1–6.'],
 ['Databases and information','Describe tables, keys, and basic SQL.'],
 ['Cybersecurity and privacy','Evaluate suspicious messages and access controls.'],
 ['Backup and troubleshooting','Walk through recovery and diagnostic steps.'],
 ['Emerging technology','Compare VR, AR, AI, and automation.'],
 ['Practice assessment','Attempt all original questions without notes.'],
 ['Targeted review','Retry missed questions and explain the reasoning.'],
 ['Light review','Review distinctions, then rest before assessment.']
 ];
 const grid=el('div','schedule');plan.forEach(([name,desc],i)=>{const d=el('article','day');d.append(el('h3','',`Day ${i+1} · ${name}`),el('p','',desc));grid.append(d)});$('schedule').append(grid);
}
function exportProgress(){
 const payload={resource:'Technology Foundations Learning Lab',exportedAt:new Date().toISOString(),progress};
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='technology-foundations-progress.json';a.click();URL.revokeObjectURL(url);
}
async function init(){
 try{
  const response=await fetch('content.json',{cache:'no-store'});if(!response.ok)throw Error(`HTTP ${response.status}`);
  data=await response.json();progress=readProgress();renderLessons();renderPlan();renderProgress();
  document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>show(b.dataset.view)));
  $('start').addEventListener('click',startPractice);
  $('export').addEventListener('click',exportProgress);
  $('reset').addEventListener('click',()=>{if(confirm('Clear all practice progress saved in this browser?')){progress={};save();renderProgress();$('quiz').replaceChildren();}});
 }catch(err){
  const alert=el('div','notice','Unable to load the study content. Open this site through GitHub Pages or a local web server, rather than double-clicking the HTML file.');$('main').prepend(alert);
  console.error(err);
 }
}
document.addEventListener('DOMContentLoaded',init);
