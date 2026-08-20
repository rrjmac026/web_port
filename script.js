/* =================== THEME =================== */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function applyTheme(t){
  root.setAttribute('data-theme', t);
  themeToggle.textContent = t === 'light' ? '☀' : '☾';
  localStorage.setItem('portfolio-theme', t);
}
applyTheme(localStorage.getItem('portfolio-theme') || 'dark');
themeToggle.addEventListener('click', () => {
  applyTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
});

/* =================== NAV =================== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
});
document.querySelectorAll('[data-nav]').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
const sections = document.querySelectorAll('section[id], #hero');
function onScroll(){
  const y = window.scrollY + 120;
  let current = 'hero';
  sections.forEach(s => { if (y >= s.offsetTop) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));

  const doc = document.documentElement;
  const pct = (doc.scrollTop) / (doc.scrollHeight - doc.clientHeight) * 100;
  document.getElementById('progressBar').style.width = pct + '%';

  document.getElementById('backTop').classList.toggle('show', window.scrollY > 600);
}
window.addEventListener('scroll', onScroll);
onScroll();
document.getElementById('backTop').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* =================== SCROLL REVEAL =================== */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* =================== ANIMATED STATS =================== */
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count, 10);
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = cur;
    }, 30);
    statObserver.unobserve(el);
  });
}, {threshold:0.5});
document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

/* =================== TERMINAL =================== */
const termBody = document.getElementById('term-body');
const termInput = document.getElementById('term-input');
const termCommands = {
  help: "Available commands: about, projects, skills, contact, clear",
  about: `${personalInfo.name} — ${personalInfo.title}, based in ${personalInfo.location}.`,
  projects: () => `${projects.length} projects loaded — see the <span class="hl">Projects</span> section below.`,
  skills: () => `Stack: ${[...new Set(skills.map(s=>s.name))].slice(0,8).join(' • ')}...`,
  contact: `Reach out at ${personalInfo.email} or via the contact form below.`,
  status: "Open to opportunities.",
  stack: () => [...new Set(skills.filter(s=>s.cat!=='tools').map(s=>s.name))].slice(0,6).join(' • ')
};
function termPrint(html, isOutput){
  const div = document.createElement('div');
  div.className = isOutput ? 'term-out' : 'term-line';
  div.innerHTML = html;
  termBody.appendChild(div);
  termBody.scrollTop = termBody.scrollHeight;
}
function bootTerminal(){
  const lines = [
    ['$ whoami', 'Full-Stack Developer'],
    ['$ stack', 'React • Node.js • Express • Supabase • Laravel • .NET'],
    ['$ projects', projects.length + ' projects loaded'],
    ['$ status', 'Open to opportunities']
  ];
  let i = 0;
  function next(){
    if (i >= lines.length){
      const hint = document.createElement('div');
      hint.className = 'term-hint';
      hint.textContent = "try: help, about, projects, skills, contact";
      termBody.appendChild(hint);
      return;
    }
    termPrint(`<span class="prompt">$</span> <span class="cmd">${lines[i][0].replace('$ ','')}</span>`, false);
    termPrint(lines[i][1], true);
    i++;
    setTimeout(next, 220);
  }
  next();
}
bootTerminal();
termInput.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const raw = termInput.value.trim();
  if (!raw) return;
  termPrint(`<span class="prompt">$</span> <span class="cmd">${raw}</span>`, false);
  const cmd = raw.toLowerCase();
  if (cmd === 'clear'){ termBody.innerHTML = ''; termInput.value=''; return; }
  const handler = termCommands[cmd];
  if (handler){
    termPrint(typeof handler === 'function' ? handler() : handler, true);
  } else {
    termPrint(`command not found: ${raw} — type "help"`, true);
  }
  termInput.value = '';
});

/* =================== SKILLS RENDER =================== */
const skillCats = [['all','All'],['frontend','Frontend'],['backend','Backend'],['database','Database'],['tools','Tools'],['other','Other']];
const skillTabsEl = document.getElementById('skillTabs');
skillCats.forEach(([key,label], idx) => {
  const btn = document.createElement('button');
  btn.className = 'skill-tab' + (idx===0 ? ' active' : '');
  btn.textContent = label;
  btn.dataset.cat = key;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.skill-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderSkills(key);
  });
  skillTabsEl.appendChild(btn);
});
function renderSkills(cat){
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';
  skills.filter(s => cat==='all' || s.cat===cat).forEach(s => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `<div class="skill-top"><div class="skill-icon">${s.name.slice(0,2).toUpperCase()}</div><div><div class="skill-name">${s.name}</div><div class="skill-level">${s.level}</div></div></div><div class="skill-desc">${s.desc}</div>`;
    grid.appendChild(card);
  });
}
renderSkills('all');

/* =================== PROJECTS RENDER + FILTER =================== */
const filterCats = [['all','All'],['fullstack','Full Stack'],['frontend','Frontend'],['backend','Backend'],['realtime','Real-Time'],['database','Database']];
const filterRow = document.getElementById('filterRow');
filterCats.forEach(([key,label], idx) => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn' + (idx===0 ? ' active' : '');
  btn.textContent = label;
  btn.dataset.filter = key;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    filterProjects(key);
  });
  filterRow.appendChild(btn);
});
const projectsGrid = document.getElementById('projectsGrid');
function renderProjects(){
  projectsGrid.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.cats = p.categories.join(',');
    card.innerHTML = `
      <div class="project-img">
        ${p.featured ? '<span class="badge">Featured</span>' : ''}
        <span class="status-badge">${p.status}</span>
        ${p.images && p.images.length
            ? `<img src="${p.images[0]}" alt="${p.title} screenshot" loading="lazy">`
            : `<span class="glyph">[ ${p.title} SCREENSHOT ]</span>`}
        </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <div class="desc">${p.description}</div>
        <div class="tech-row">${p.technologies.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener" onclick="event.stopPropagation()">⌥ GitHub</a>
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" onclick="event.stopPropagation()">↗ Live Demo</a>` : ''}
          <button data-open="${p.id}">▤ Case Study</button>
        </div>
      </div>`;
    card.addEventListener('click', () => openModal(p.id));
    projectsGrid.appendChild(card);
  });
}
function filterProjects(key){
  document.querySelectorAll('.project-card').forEach(card => {
    const cats = card.dataset.cats.split(',');
    card.classList.toggle('hidden', key !== 'all' && !cats.includes(key));
  });
}
renderProjects();

/* =================== PROJECT MODAL =================== */
const overlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
function openModal(id){
  const p = projects.find(x => x.id === id);
  if (!p) return;
  modalContent.innerHTML = `
    <div class="modal-head">
      <div><h3>${p.title}</h3><div class="status">${p.subtitle} · ${p.status}</div></div>
      <button class="modal-close" id="modalCloseBtn" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <div class="gallery">
        ${p.images && p.images.length
            ? `<img src="${p.images[0]}" alt="${p.title} screenshot 1">`
            : `<span class="glyph">[ ${p.title} — NO SCREENSHOTS YET ]</span>`}
        ${p.images && p.images.length > 1 ? `
            <button class="gallery-nav prev" aria-label="Previous screenshot">‹</button>
            <button class="gallery-nav next" aria-label="Next screenshot">›</button>
        ` : ''}
        </div>
        <div class="gallery-dots">
        ${(p.images && p.images.length > 1 ? p.images : []).map((_, i) => `<span class="${i===0?'active':''}"></span>`).join('')}
        </div>
      <div class="modal-section"><h4>Problem</h4><p>${p.problem}</p></div>
      <div class="modal-section"><h4>Solution</h4><p>${p.solution}</p></div>
      <div class="modal-section"><h4>Architecture</h4>
        <div class="arch-flow">${p.arch.map((a,i)=>`<span class="arch-step">${a}</span>${i<p.arch.length-1?'<span class="arch-arrow">→</span>':''}`).join('')}</div>
      </div>
      <div class="modal-section"><h4>Key Features</h4><ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul></div>
      <div class="modal-section"><h4>Challenges</h4><ul>${p.challenges.map(f=>`<li>${f}</li>`).join('')}</ul></div>
      <div class="modal-section"><h4>Solutions</h4><ul>${p.solutionsList.map(f=>`<li>${f}</li>`).join('')}</ul></div>
      <div class="modal-section"><h4>Result</h4><p>${p.result}</p></div>
      <div class="tech-row">${p.technologies.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div>
      <div class="modal-actions">
        <a class="btn btn-primary" href="${p.github}" target="_blank" rel="noopener">⌥ View GitHub</a>
        ${p.demo ? `<a class="btn btn-outline" href="${p.demo}" target="_blank" rel="noopener">↗ Live Demo</a>` : ''}
      </div>
    </div>`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);

  if (p.images && p.images.length > 1){
    let dotIdx = 0;
    const dots = modalContent.querySelectorAll('.gallery-dots span');
    const img = modalContent.querySelector('.gallery img');
    function updateGallery(){
      dots.forEach((d,i)=>d.classList.toggle('active', i===dotIdx));
      img.src = p.images[dotIdx];
      img.alt = `${p.title} screenshot ${dotIdx+1}`;
    }
    modalContent.querySelector('.prev').addEventListener('click', ()=>{ dotIdx = (dotIdx + p.images.length - 1) % p.images.length; updateGallery(); });
    modalContent.querySelector('.next').addEventListener('click', ()=>{ dotIdx = (dotIdx + 1) % p.images.length; updateGallery(); });
  }
}
function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* =================== ENGINEERING CASE STUDY DIAGRAM =================== */
const caseSelect = document.getElementById('caseSelect');
const archDiagram = document.getElementById('archDiagram');
const caseProjects = projects.filter(p => p.featured);
caseProjects.forEach((p, idx) => {
  const btn = document.createElement('button');
  btn.className = 'case-tab' + (idx===0 ? ' active' : '');
  btn.textContent = p.title;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.case-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderArch(p);
  });
  caseSelect.appendChild(btn);
});
function renderArch(p){
  archDiagram.innerHTML = p.arch.map((a,i) => `
    <div class="arch-box"><span class="k">${a}</span></div>
    ${i < p.arch.length-1 ? '<div class="arch-down">↓</div>' : ''}
  `).join('');
}
if (caseProjects.length) renderArch(caseProjects[0]);

/* =================== TIMELINE =================== */
const tl = document.getElementById('timeline');
experience.forEach(e => {
  const item = document.createElement('div');
  item.className = 'tl-item';
  item.innerHTML = `<div class="tl-year">${e.year}</div><div class="tl-role">${e.role}</div><div class="tl-org">${e.org}</div><div class="tl-desc">${e.desc}</div><div class="tech-row">${e.tech.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div>`;
  tl.appendChild(item);
});

/* =================== GITHUB REPOS =================== */
const repoGrid = document.getElementById('repoGrid');
repos.forEach(r => {
  const card = document.createElement('div');
  card.className = 'repo-card';
  card.innerHTML = `
    <div class="repo-name">${r.name}</div>
    <div class="repo-desc">${r.desc}</div>
    <div class="repo-meta">
      <span><span class="lang-dot" style="background:${r.color}"></span>${r.lang}</span>
      <span>★ ${r.stars}</span>
      <span>⑂ ${r.forks}</span>
      <span>${r.updated}</span>
    </div>`;
  repoGrid.appendChild(card);
});

/* =================== CONTACT FORM =================== */
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  const fields = [
    ['cf-name','err-name', v => v.trim().length > 0],
    ['cf-email','err-email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)],
    ['cf-subject','err-subject', v => v.trim().length > 0],
    ['cf-message','err-message', v => v.trim().length >= 10]
  ];
  fields.forEach(([id, errId, test]) => {
    const val = document.getElementById(id).value;
    const ok = test(val);
    document.getElementById(errId).classList.toggle('show', !ok);
    if (!ok) valid = false;
  });
  const successEl = document.getElementById('formSuccess');
  if (valid){
    successEl.classList.add('show');
    form.reset();
    setTimeout(() => successEl.classList.remove('show'), 6000);
  } else {
    successEl.classList.remove('show');
  }
});