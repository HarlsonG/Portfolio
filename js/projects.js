// ============================================
//  PROJECTS PAGE — projects.js
//  Modal: main image → details → more images
// ============================================

// ---- PROJECT DATA ----
// To add images: put paths in the `images` array, e.g. 'assets/agos-1.jpg'
// To add links: add objects like { label: 'View Prototype', url: 'https://...' }

const projectData = {
  agos: {
    title: 'AGOS — Overflow Surveillance System',
    type: 'Capstone · 2025',
    role: 'Lead UI/UX Designer',
    desc: 'High-fidelity LGU admin dashboards and public monitoring screens for a waterway overflow detection system. I annotated 5,000+ images to train a YOLOv8 deep learning model for real-time waterway blockage detection. Designed the entire UI from wireframe to polished prototype — covering the admin panel, public-facing monitoring interface, and alert system flows.',
    tools: ['Figma', 'YOLOv8', 'UX Research', 'MS Office', 'Wireframing', 'Prototyping'],
    mainImage: 'AGOS.png',
    images: [
      'AGOS/AGOS.png',
    ],
    images: [
      'AGOS/ss1.png',
      'AGOS/ss2.png',
      'AGOS/ss3.png',
      'AGOS/ss4.png',
      'AGOS/ss5.png',
      'AGOS/ss6.png',
    ],
    links: [
      { label: 'View AGOS Website', url: 'https://agos-app.vercel.app/' },
      // { label: 'View Documentation', url: '#' },
    ]
  },
  viu: {
    title: 'Viu — Survey & Admin Dashboard',
    type: 'Academic · 2025',
    role: 'Lead Web UI/UX Designer',
    desc: 'Minimalist multi-stage survey forms engineered to reduce completion fatigue through thoughtful micro-interactions and progressive disclosure. Includes a data-dense admin dashboard with responsive widgets, telemetry charts, and exportable reports. Designed with accessibility and clarity as top priorities throughout.',
    tools: ['Figma', 'Dashboard Design', 'UX Strategy', 'Prototyping', 'Wireframing'],
    // mainImage: 'assets/viu-cover.jpg',
    mainImage: 'VIU/VIU.png',
    images: [
      'VIU/ss1.png',
      'VIU/ss2.png',
      'VIU/ss3.png',
      'VIU/ss4.png',
      'VIU/ss5.png',
      'VIU/ss6.png',
      'VIU/ss7.png',
    ],
    links: [
      // { label: 'View Figma Prototype', url: 'https://figma.com/...' },
    ]
  },
  encantado: {
    title: "Encantado — Sang'gres 2D Fighter",
    type: 'GameCon · 2025',
    role: 'Game UI Designer',
    desc: "Philippine mythology-inspired 2D fighting game UI rooted in Filipino folklore and aesthetics. Designed HUD overlays, health/mana bars with animated fill effects, character select screens, and in-game navigation menus. All assets were built for cross-resolution consistency and optimized for fast-paced gameplay readability.",
    tools: ['Game UI', 'Adobe Photoshop', 'Asset Design', 'HUD Design', 'Visual Identity'],
    mainImage: 'Encantado/2.jpg',
    images: [
      'Encantado/1.jpg',
      'Encantado/2.jpg',
      'Encantado/3.jpg',
      'Encantado/4.jpg',
      'Encantado/5.jpg',  
      'Encantado/6.jpg',
      'Encantado/7.jpg',
      'Encantado/8.jpg',
    ],
    links: [
      // { label: 'View Game Demo', url: '#' },
    ]
  }
};

// ---- MODAL LOGIC ----
let currentLightboxImages = [];
let currentLightboxIdx = 0;

function openProject(id) {
  const data = projectData[id];
  if (!data) return;

  // Fill header meta
  document.getElementById('modalType').textContent = data.type;
  document.getElementById('modalRole').textContent = data.role;

  // Fill title + description
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalDesc').textContent = data.desc;

  // Fill tools
  document.getElementById('modalTools').innerHTML =
    data.tools.map(t => `<span>${t}</span>`).join('');

  // Fill links
  const linksEl = document.getElementById('modalLinks');
  if (data.links && data.links.length) {
    linksEl.innerHTML = data.links
      .map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="pmodal-link-btn">↗ ${l.label}</a>`)
      .join('');
  } else {
    linksEl.innerHTML = '';
  }

  // Fill main image (cover)
  const mainWrap = document.getElementById('modalMainImgWrap');
  if (data.mainImage) {
    mainWrap.innerHTML = `<img src="${data.mainImage}" alt="${data.title} cover">`;
  } else {
    mainWrap.innerHTML = `
      <div class="pmodal-img-placeholder">
        <span class="ph-title">${data.title.split('—')[0].trim()}</span>
        <span class="ph-sub">Main image coming soon — add path to mainImage in projects.js</span>
      </div>`;
  }

  // Fill more images grid
  const moreEl = document.getElementById('modalMoreImages');
  if (data.images && data.images.length > 0) {
    currentLightboxImages = data.images;
    moreEl.innerHTML = `
      <div class="pmodal-more-label">More Images (${data.images.length})</div>
      <div class="pmodal-img-grid">
        ${data.images.map((src, i) => `
          <div class="pmodal-img-item" onclick="openLightbox(${i})">
            <img src="${src}" alt="Project image ${i + 1}" loading="lazy">
          </div>
        `).join('')}
      </div>`;
  } else {
    currentLightboxImages = [];
    // Show placeholder slots so the section is always visible
    moreEl.innerHTML = `
      <div class="pmodal-more-label">More Images</div>
      <div class="pmodal-img-grid">
        <div class="pmodal-img-item pmodal-img-ph">
          <div class="pmodal-ph-slot"><span>+</span><small>Add image</small></div>
        </div>
        <div class="pmodal-img-item pmodal-img-ph">
          <div class="pmodal-ph-slot"><span>+</span><small>Add image</small></div>
        </div>
        <div class="pmodal-img-item pmodal-img-ph">
          <div class="pmodal-ph-slot"><span>+</span><small>Add image</small></div>
        </div>
        <div class="pmodal-img-item pmodal-img-ph">
          <div class="pmodal-ph-slot"><span>+</span><small>Add image</small></div>
        </div>
      </div>
      <p class="pmodal-ph-hint">To add images: open <code>js/projects.js</code> → find your project → add paths to the <code>images: []</code> array</p>`;
  }

  // Scroll modal to top
  document.getElementById('pmodalInner').querySelector('.pmodal-scroll').scrollTop = 0;

  // Open modal
  const overlay = document.getElementById('projectModal');
  overlay.style.display = 'flex';
  requestAnimationFrame(() => overlay.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('projectModal');
  overlay.classList.remove('open');
  setTimeout(() => { overlay.style.display = 'none'; }, 320);
  document.body.style.overflow = '';
}

// Click outside modal to close
document.getElementById('projectModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// Escape key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeModal();
  }
  if (e.key === 'ArrowRight') lbNav(1);
  if (e.key === 'ArrowLeft') lbNav(-1);
});

// Click whole card to open modal
document.querySelectorAll('.project-card[data-project]').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('proj-link-btn')) return;
    openProject(card.dataset.project);
  });
});

// ---- LIGHTBOX (zoom-in for more images) ----
function buildLightbox() {
  if (document.getElementById('pmLightbox')) return;
  const lb = document.createElement('div');
  lb.id = 'pmLightbox';
  lb.className = 'pmodal-lightbox';
  lb.innerHTML = `
    <button class="pmodal-lightbox-close" onclick="closeLightbox()">✕</button>
    <button class="pmodal-lightbox-nav lb-prev" onclick="lbNav(-1)">‹</button>
    <img id="lbImg" src="" alt="Zoomed image">
    <button class="pmodal-lightbox-nav lb-next" onclick="lbNav(1)">›</button>
  `;
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });
  document.body.appendChild(lb);
}

function openLightbox(idx) {
  buildLightbox();
  currentLightboxIdx = idx;
  const lb = document.getElementById('pmLightbox');
  document.getElementById('lbImg').src = currentLightboxImages[idx];
  lb.classList.add('open');
}

function closeLightbox() {
  const lb = document.getElementById('pmLightbox');
  if (lb) lb.classList.remove('open');
}

function lbNav(dir) {
  if (!currentLightboxImages.length) return;
  currentLightboxIdx = (currentLightboxIdx + dir + currentLightboxImages.length) % currentLightboxImages.length;
  const img = document.getElementById('lbImg');
  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = currentLightboxImages[currentLightboxIdx];
      img.style.opacity = '1';
    }, 120);
  }
}
