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
  },
  sakupin: {
    title: 'Sakupin_Mo — Digital Tabletop Game',
    type: 'Academic · 2025',
    role: 'UI/UX Designer',
    desc: 'A digitized version of an original tabletop board game developed as a midterm final project for Game Development. I designed the complete game UI from scratch — including all game screens, HUD elements, menus, and overall visual identity to bring the physical board game experience into a digital format.',
    tools: ['Canva', 'Unity', 'UI Design', 'Game UI'],
    mainImage: 'Sakupin_Mo/ss3.jpg',
    images: [
      'Sakupin_Mo/ss1.jpg',
      'Sakupin_Mo/ss2.jpg',
      'Sakupin_Mo/ss3.jpg',
      'Sakupin_Mo/ss4.jpg',
      'Sakupin_Mo/ss5.jpg',
      'Sakupin_Mo/ss6.jpg',
      'Sakupin_Mo/ss7.jpg',
      'Sakupin_Mo/ss8.jpg',
    ],
    links: []
  },
  vits: {
    title: 'VITS — Organization Website',
    type: 'Academic · 2025',
    role: 'UI/UX Designer',
    desc: 'Designed the official website for VITS (Valenzuela Information Technology Society), our university IT organization. The site covers member onboarding, events calendar, merchandise store, university officials directory, and officer profiles — all built with a cohesive blue and orange visual identity.',
    tools: ['Figma', 'Canva', 'Python', 'UI Design'],
    mainImage: 'VITS/ss1.jpg',
    images: [
      'VITS/ss1.jpg',
      'VITS/ss2.jpg',
      'VITS/ss3.jpg',
      'VITS/ss4.jpg',
      'VITS/ss5.jpg',
      'VITS/ss6.jpg',
      'VITS/ss7.jpg',
      'VITS/ss8.jpg',
      'VITS/ss9.jpg',
      'VITS/ss10.jpg',
    ],
    links: []
  },
  wisteria: {
    title: 'Wisteria Café — Online Cafe System',
    type: 'Academic · 2024',
    role: 'UI/UX Designer',
    desc: 'Designed the complete UI for an online cafe ordering system developed for our Object-Oriented Programming subject. The system features a landing page, login and registration screens, and a full menu browsing experience covering coffee and refreshments — all styled with a warm, whimsical Wisteria Café visual identity.',
    tools: ['Canva', 'VS Code', 'UI Design'],
    mainImage: 'Wisteria/ss1.jpg',
    images: [
      'Wisteria/ss1.jpg',
      'Wisteria/ss2.jpg',
      'Wisteria/ss3.jpg',
      'Wisteria/ss4.jpg',
      'Wisteria/ss5.jpg',
      'Wisteria/ss6.jpg',
      'Wisteria/ss7.jpg',
      'Wisteria/ss8.jpg',
    ],
    links: []
  },
  rizal: {
    title: 'Rizal Path to Heroism — Infographic Poster',
    type: 'Academic · 2024',
    role: 'Graphic Designer',
    desc: 'An infographic poster tracing José Rizal\'s journey from UST to his final voyage, created for our Life and Works of Rizal subject. Designed in a scrapbook-style layout with vintage textures, compass motifs, and historical imagery to visually narrate the key milestones of Rizal\'s life.',
    tools: ['Canva', 'Graphic Design', 'Infographic'],
    mainImage: 'Rizal/ss1.jpg',
    images: [
      'Rizal/ss1.jpg',
      'Rizal/ss2.jpg',
    ],
    links: []
  },
  ethics: {
    title: 'Unity in Diversity — Ethics Poster',
    type: 'Academic · 2023',
    role: 'Graphic Designer',
    desc: 'A poster promoting unity, peace, and diversity created for our Ethics with Peace Education subject. Designed with a vibrant world illustration and a message encouraging inclusivity, love, and global harmony across all forms of diversity.',
    tools: ['Canva', 'Graphic Design', 'Poster'],
    mainImage: 'Ethics/ss1.jpg',
    images: ['Ethics/ss1.jpg', 'Ethics/ss2.jpg'],
    links: []
  },
  ecosia: {
    title: 'Search Smarter, Plant Greener — ECOSIA',
    type: 'Academic · 2024',
    role: 'Graphic Designer',
    desc: 'An infographic poster created for Environmental Science advocating for Ecosia — a search engine that plants trees with every search. Highlights the platform\'s sustainability tips, transparent impact reports, and its contribution to global reforestation with over 150 million trees planted.',
    tools: ['Canva', 'Graphic Design', 'Infographic'],
    mainImage: 'Ecosia/ss1.jpg',
    images: ['Ecosia/ss1.jpg', 'Ecosia/ss2.jpg', 'Ecosia/ss3.jpg'],
    links: []
  },
  taiga: {
    title: 'Taiga Biome — Environmental Science Poster',
    type: 'Academic · 2023',
    role: 'Graphic Designer',
    desc: 'An infographic poster about the Taiga biome created for Environmental Science. Covers the biome\'s importance as the world\'s largest terrestrial biome, its problems such as illegal hunting and climate change, proposed solutions, and key conifers and wildlife like the Moose.',
    tools: ['Canva', 'Graphic Design', 'Infographic'],
    mainImage: 'Taiga/ss1.jpg',
    images: [
      'Taiga/ss1.jpg',
      'Taiga/ss2.jpg',
    ],
    links: []
  },
  motion: {
    title: 'Motion Graphics — Multimedia Systems',
    type: 'Academic · 2024',
    role: 'Motion Graphics Designer',
    desc: 'Designed storyboard frames and motion graphic assets for our Multimedia Systems subject. The project features a politically-themed animated short with scene compositions, character animations, kinetic typography, and visual storytelling — covering themes of infrastructure, elections, and civic awareness.',
    tools: ['Canva', 'Figma', 'Adobe Illustrator', 'Motion Graphics'],
    mainImage: 'WALDO/ss3.png',
    images: [
      'WALDO/ss1.png',
      'WALDO/ss2.png',
      'WALDO/ss3.png',
      'WALDO/ss4.png',
      'WALDO/ss5.png',
      'WALDO/ss6.png',
      'WALDO/ss7.png',
      'WALDO/ss9.png',
    ],
    links: []
  },
  perfume: {
    title: 'La Halimuyak — Perfume Branding',
    type: 'Academic · 2024',
    role: 'Graphic Designer',
    desc: 'Created a complete branding package for La Halimuyak, a fictional perfume line inspired by the rich cultural heritage of the Philippines. The project includes logo design, packaging mockups, and promotional materials.',
    tools: ['Canva', 'Adobe Photoshop', 'Graphic Design', 'Branding'],
    mainImage: 'Perfume/1.png',
    images: [
      'Perfume/1.png',
      'Perfume/2.png',
      'Perfume/3.jpg',
      'Perfume/4.jpg',
    ],
    links: []
  },
  dieline: {
    title: 'La Halimuyak — Packaging Dieline',
    type: 'Academic · 2024',
    role: 'Graphic Designer',
    desc: 'Designed technical packaging dielines and print-ready product layouts for our Multimedia Systems subject. The project features a multi-variant luxury fragrance line with precise box templates, custom wave patterns, icon systems, and cohesive branding assets — covering themes of product design, corporate branding, and scent differentiation.',
    tools: ['Canva', 'Adobe Photoshop', 'Graphic Design', 'Branding', 'Packaging Design'],
    mainImage: 'Dieline/1.jpg',
    images: [
      'Dieline/1.jpg',
      'Dieline/2.jpg',
      'Dieline/3.jpg',
      'Dieline/4.jpg',
      'Dieline/5.jpg',
      'Dieline/6.jpg',
    ],
    links: []
  },
  brandboard: {
    title: 'La Halimuyak — Brand Board',
    type: 'Academic · 2024',
    role: 'Graphic Designer',
    desc: 'Designed a comprehensive brand board and visual identity system for our Multimedia Systems subject. The project features the brand guidelines for a luxury fragrance line with typography selection, a curated color palette, logo variants, and a cohesive mood board — covering themes of brand styling, aesthetic identity, and visual consistency.',
    tools: ['Canva', 'Adobe Photoshop', 'Graphic Design', 'Branding', 'Packaging Design'],
    mainImage: 'Brand_Board.jpg',
    images: [
      'Brand_Board.jpg',
    ],
    links: []
  },
  productposter: {
    title: 'Product Poster — Visual Branding & Ad Design',
    type: 'Academic · 2024',
    role: 'Graphic Designer',
    desc: 'A high-fidelity product advertisement poster created as a final output for Multimedia Systems. Designed using Adobe Photoshop — featuring professional product staging on a 3D platform, tropical background compositing, and clean typographic branding to simulate a real-world commercial advertisement.',
    tools: ['Adobe Photoshop', 'Graphic Design', 'Branding'],
    mainImage: 'Product_Poster.jpg',
    images: [
      'Product_Poster.jpg',
    ],
    links: []
  },
  freelance: {
    title: 'MNHS Backdrop & Book Cover Design',
    type: 'Commission · 2024',
    role: 'Graphic Designer',
    desc: 'Designed the official stage backdrop and graduation book cover for Malinta National High School 8th Commencement Exercises. The project features a cohesive event branding layout with custom elegant drapery elements, structured typography, and institutional emblems — covering themes of academic milestone, institutional celebration, and event design.',
    tools: ['Figma', 'Canva'],
    mainImage: 'MNHS/1.png',
    images: [
      'MNHS/1.png',
      'MNHS/2.png',
      'MNHS/3.png',
    ],
    links: []
  },
  banner: {
    title: 'ENCANTADO — GameCon Banner',
    type: 'Academic · 2026',
    role: 'Graphic Designer',
    desc: 'Designed a promotional showcase banner for our Game Development exhibition at GameCon. The project features character profiles, gameplay mechanics breakdown, control schemes, and stylized fantasy typography — covering themes of game marketing, user interface concepts, and visual hierarchy.',
    tools: ['Canva'],
    mainImage: 'ENCANTADO.jpg',
    images: [
      'ENCANTADO.jpg'
    ],
    links: []
  },
  academic: {
    title: 'BSIT Academic Achievers Design',
    type: 'Academic (Voluntary) · 2024',
    role: 'Publication Material Designer',
    desc: 'Designed a series of congratulatory publication materials for class academic achievers on a voluntary basis. The project features custom digital ID badge mockups, Y2K-inspired aesthetics, personalized quotes, and vibrant typography layout — covering themes of student recognition, social media pubmats, and community appreciation.',
    tools: ['Canva'],
    mainImage: 'PUBMAT/1.jpg',
    images: [
      'PUBMAT/1.jpg',
      'PUBMAT/2.jpg',
      'PUBMAT/3.jpg',
      'PUBMAT/4.jpg',
      'PUBMAT/5.jpg',
    ],
    links: []
  },
  profile: {
    title: 'Artist Profile',
    type: 'Academic · 2025',
    role: 'Graphic Designer',
    desc: 'Designed a stylized personal artist profile poster for our Multimedia Systems subject. The layout features a magazine-style interview concept combined with social media UI mockups, textured typography overlays, and a curated corporate-casual theme — covering themes of personal branding, self-identity, and digital layout composition.',
    tools: ['Canva', 'Adobe Photoshop'],
    mainImage: 'Profile_Harlson.jpg',
    images: [
      'Profile_Harlson.jpg',
    ],
    links: []
  },
  networking: {
    title: '5-Story Core Network & Physical Workspace Layout Blueprint',
    type: 'Academic · 2025',
    role: 'Network Infrastructure Designer / Blueprint Layout Artist',
    desc: 'Designed comprehensive physical floor plans and workspace layout blueprints for our Networking subject. The project features structural office mapping, furniture distribution, functional area scaling, and full multi-floor organizational architecture — covering themes of enterprise network planning, spatial optimization, and institutional infrastructure design.',
    tools: ['Microsoft Visio'],
    mainImage: 'Networking/6.jpg',
    images: [
      'Networking/1.jpg',
      'Networking/2.jpg',
      'Networking/3.jpg',
      'Networking/4.jpg',
      'Networking/5.jpg',
      'Networking/6.jpg',
    ],
    links: []
  },
  powerpoint: {
    title: 'Interactive PowerPoint - Character Selection Menu',
    type: 'Academic · 2024',
    role: 'Presentation Designer / Interactive UI Layout Artist',
    desc: 'Designed an interactive, game-inspired presentation layout for our Introduction to Computing subject. The project features a fully functional "Sailor Moon Crystal" character selection screen complete with clickable roster badges, individual stat cards, dynamic interface transitions, and custom anime-themed graphics — covering themes of user experience (UX) prototyping, interactive presentation design, and advanced layout hyperlinking.',
    tools: ['Microsoft Powerpoint'],
    mainImage: 'Sailor_Moon2/11.jpg',
    images: [
      'Sailor_Moon2/12.jpg',
      'Sailor_Moon2/13.jpg',
      'Sailor_Moon2/14.jpg',
      'Sailor_Moon2/15.jpg',
      'Sailor_Moon2/16.jpg',
      'Sailor_Moon2/17.jpg',
      'Sailor_Moon2/18.jpg',
      'Sailor_Moon2/19.jpg',
      'Sailor_Moon2/20.jpg',
      'Sailor_Moon2/21.jpg',
      'Sailor_Moon2/22.jpg',
      'Sailor_Moon2/23.jpg',
    ],
    links: []
  },
  interactive: {
    title: 'Interactive PowerPoint - Character Profile Screens',
    type: 'Academic · 2024',
    role: 'Presentation Designer / UI Content Layout Artist',
    desc: 'Designed the individual character profile and stat screens for our Introduction to Computing interactive PowerPoint project. The layout features tailored background graphics for each character, bold repeating kinetic typography, elemental symbols, and integrated navigation buttons for a seamless return-to-menu user flow — covering themes of interface content design, thematic color theory, and digital asset layout.',
    tools: ['Microsoft Powerpoint'],
    mainImage: 'Sailor_Moon1/1.jpg',
    images: [
      'Sailor_Moon1/1.jpg',
      'Sailor_Moon1/2.jpg',
      'Sailor_Moon1/3.jpg',
      'Sailor_Moon1/4.jpg',
      'Sailor_Moon1/5.jpg',
      'Sailor_Moon1/6.jpg',
      'Sailor_Moon1/7.jpg',
      'Sailor_Moon1/8.jpg',
      'Sailor_Moon1/9.jpg',
      'Sailor_Moon1/10.jpg',
    ],
    links: []
  },
  personal: {
    title: 'Personal Website Interface Design / Splash Screen',
    type: 'Academic · 2023',
    role: 'UI Designer / Frontend Layout Artist',
    desc: 'Designed a personal portfolio website interface and splash screen layout for our Human-Computer Interaction (HCI) subject. The project features clean grid structures, social media icon integrations, a corporate-creative layout, and bold typography hierarchy — covering themes of user interface (UI) design, digital identity layouts, and prototyping basics.',
    tools: ['Canva'],
    mainImage: 'HCI.jpg',
    images: [
      'HCI.jpg',
      'HCI2.jpg',
    ],
    links: []
  },
  paperz: {
    title: 'Paperz, Please! (Winx Edition) - Interactive Game UI',
    type: 'Academic · 2023',
    role: 'Lead UI/UX Designer',
    desc: 'Led the visual direction and user interface design for an upgraded fan-game sequel developed in Java. The project features custom dialogue boxes, character card modules, functional rulebook pop-ups, dynamic score counter panels, and a cohesive Winx-themed pixel aesthetic — covering themes of game user interface (GUI) design, thematic asset creation, and interactive user experience mapping.',
    tools: ['Canva', 'Apache NetBeans', 'Java'],
    mainImage: 'paperzplease/1.jpg',
    images: [
      'paperzplease/1.jpg',
      'paperzplease/2.jpg',
      'paperzplease/3.jpg',
      'paperzplease/4.jpg',
      'paperzplease/5.jpg',
      'paperzplease/6.jpg',
      'paperzplease/7.jpg',
      'paperzplease/8.jpg',
    ],
    links: []
  },






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
