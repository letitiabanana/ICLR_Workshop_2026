// Edit this list to change people, affiliations, links, or local headshot filenames.
// Add photos under assets/ and set photo: 'assets/filename.jpg'.
const speakers = [
  {name:'Ali Farhadi', affiliation:'University of Washington / Microsoft', url:'https://homes.cs.washington.edu/~ali/'},
  {name:'Angela Yao', affiliation:'National University of Singapore', url:'https://www.comp.nus.edu.sg/~ayao/'},
  {name:'Lorenzo Torresani', affiliation:'Northeastern University', url:'https://ltorresa.github.io/home.html'},
  {name:'Pengchuan Zhang', affiliation:'OpenAI', url:'https://pzzhang.github.io/pzzhang/'},
  {name:'Ivan Laptev', affiliation:'MBZUAI / INRIA Paris', url:'https://www.di.ens.fr/~laptev/'}
];
const organizers = [
  {name:'Pritam Sarkar', affiliation:'University of British Columbia / Vector Institute', url:'https://pritamsarkar.com'},
  {name:'Shraman Pramanick', affiliation:'Adobe Research', url:'https://shramanpramanick.github.io/'},
  {name:'Sanjoy Chowdhury', affiliation:'Apple Research', url:'https://schowdhury671.github.io/'},
  {name:'Xiaoqian Shen', affiliation:'KAUST', url:'https://xiaoqian-shen.github.io/'},
  {name:'Jiayun Luo', affiliation:'University of British Columbia', url:'https://sites.google.com/view/jiayunluo/jiayun-luo-letitia'},
  {name:'Deepti Ghadiyaram', affiliation:'Boston University', url:'https://deeptigp.github.io/'},
  {name:'Anurag Arnab', affiliation:'Google DeepMind', url:'https://anuragarnab.github.io/'},
  {name:'Leonid Sigal', affiliation:'University of British Columbia / Vector Institute', url:'https://www.cs.ubc.ca/~lsigal/'}
];
function makeCard(p){const card=document.createElement('article');card.className='person';const portrait=document.createElement('div');portrait.className='portrait';if(p.photo){const img=document.createElement('img');img.src=p.photo;img.alt=`Portrait of ${p.name}`;img.loading='lazy';img.onerror=()=>{img.remove();portrait.textContent=p.name.split(' ').map(x=>x[0]).slice(0,2).join('')};portrait.appendChild(img)}else{const initials=document.createElement('span');initials.className='initials';initials.textContent=p.name.split(' ').map(x=>x[0]).slice(0,2).join('');portrait.appendChild(initials)}const body=document.createElement('div');body.className='person-body';const h=document.createElement('h3');h.textContent=p.name;const affiliation=document.createElement('p');affiliation.className='affiliation';affiliation.textContent=p.affiliation;const link=document.createElement('a');link.className='person-link';link.href=p.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Personal website ↗';body.append(h,affiliation,link);card.append(portrait,body);return card}
document.getElementById('speaker-grid').append(...speakers.map(makeCard));document.getElementById('organizer-grid').append(...organizers.map(makeCard));document.getElementById('year').textContent=new Date().getFullYear();
