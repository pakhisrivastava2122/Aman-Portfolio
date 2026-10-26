/**
 * AMAN KUMAR SRIVASTAVA - PORTFOLIO LOGIC
 * High-performance vanilla JavaScript interactive engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollProgress();
  initPortfolio();
  initEstimator();
  initFaq();
  initContactForm();
  initCopyButtons();
});

/* ==========================================================================
   1. PORTFOLIO DATA & LIGHTBOX
   ========================================================================== */
const PORTFOLIO_PROJECTS = [
  {
    id: 'lumina-branding',
    title: 'Aurora Noir — Luxury Brand Identity & Stationery',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    image: 'images/project-branding.jpg',
    summary: 'Comprehensive luxury brand identity suite with custom gold-foil embossed typography, stationery system, and packaging.',
    description: 'Designed a sophisticated, boutique brand identity for Aurora Noir. The scope included developing a bespoke monogram logo mark, custom typographic hierarchy, stationery collateral (letterheads, envelopes, wax seal stamp, gift boxes), and high-resolution vector brand guidelines.',
    deliverables: ['Vector Logo Suite (AI, EPS, SVG, PNG)', 'Complete Brand Style Guide PDF', 'Foil-Stamped Business Stationery', 'Product Packaging 3D Mockups'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva Pro']
  },
  {
    id: 'scale-youtube',
    title: 'Scale 10X Academy — High-CTR YouTube Thumbnail Suite',
    category: 'youtube',
    categoryLabel: 'YouTube & Digital',
    image: 'images/project-youtube.jpg',
    summary: 'High-converting YouTube thumbnail design system and channel branding banner engineered for a 42% CTR boost.',
    description: 'Created a high-impact digital thumbnail kit and matching 2560x1440 YouTube channel banner. Incorporates vibrant 3D text styling, high-contrast neon rim lighting, expressive creator portraits, and visual cues tailored to maximize click-through rate across mobile and desktop feeds.',
    deliverables: ['High-CTR 1280x720 Thumbnails', 'Official YouTube Channel Banner', 'Layered PSD & Canva Templates', 'Custom Title Font Styles'],
    tools: ['Adobe Photoshop', 'Canva Pro', 'Lightroom']
  },
  {
    id: 'growth-social',
    title: 'HyperGrowth Studio — Viral Social Media Creatives',
    category: 'social',
    categoryLabel: 'Social Media',
    image: 'images/project-social.jpg',
    summary: 'Strategic Instagram carousel system and story campaign with electric purple and cyan branding for high algorithmic reach.',
    description: 'Designed an engaging 15-part social media kit crafted for marketing agencies and growth creators. Focused on content scannability, bold headline styling, swipe-encouraging micro-hooks, and fully editable Canva components for rapid deployment.',
    deliverables: ['15x Instagram Carousel Templates', '10x Story & Reel Highlight Covers', 'Reusable Canva Master File', 'Custom Icon Pack'],
    tools: ['Canva Pro', 'Figma', 'Adobe Illustrator']
  },
  {
    id: 'modernist-poster',
    title: 'Modernist Symposium — Swiss Typographic Exhibition Poster',
    category: 'print',
    categoryLabel: 'Print & Editorial',
    image: 'images/project-poster.jpg',
    summary: 'International Swiss-style architectural event poster and print collateral featuring isometric 3D geometry.',
    description: 'Developed an editorial poster and exhibition collateral series following the classic Swiss International Typographic Style. Balanced mathematical grid layouts with fluid gradient meshes and tactile paper textures for gallery print quality.',
    deliverables: ['Print-Ready CMYK PDF (300 DPI, 3mm bleed)', 'A1, A2, and A3 Exhibition Formats', 'Digital Social Promotion Flyers', 'Source InDesign/Illustrator Files'],
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop']
  },
  {
    id: 'huxley-cards',
    title: 'Huxley & Co. — Textured Foil Business Stationery',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    image: 'images/project-cards.jpg',
    summary: 'Ultra-luxurious textured cotton business cards with holographic rose-copper foil stamping and minimalist mark.',
    description: 'A tactile, minimalist stationery project for creative directorship. Produced custom spot-UV and foil-stamp vector separations on 600gsm raw-edge cotton stock, elevating brand perception at first touch.',
    deliverables: ['Custom Die-Cut & Foil Separation Vectors', 'Standard & European Card Sizes', 'CMYK + Spot Pantone Values', 'Stationery Presentation Deck'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop']
  },
  {
    id: 'horizons-deck',
    title: 'Future Horizons — Pitch Deck & Company Profile',
    category: 'decks',
    categoryLabel: 'Pitch Decks & Catalogs',
    image: 'images/project-deck.jpg',
    summary: '24-slide high-stakes investor pitch deck and corporate catalog with custom infographics and financial data visualization.',
    description: 'Crafted a persuasive, executive-grade presentation for institutional fundraising. Translated complex market analysis and technical KPIs into clean, visually stunning infographics, charts, and slide decks available in editable PowerPoint and Canva.',
    deliverables: ['24-Slide 16:9 Presentation (PPTX)', 'Interactive PDF with Bookmarks', 'Editable Canva Deck Master', 'Printable Product Catalog Spread'],
    tools: ['Canva Pro', 'Microsoft PowerPoint', 'Adobe Illustrator']
  }
];

let currentModalIndex = 0;

function initPortfolio() {
  const gallery = document.getElementById('portfolio-gallery');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');

  if (!gallery) return;

  // Render Project Cards
  function renderProjects(filter = 'all') {
    gallery.innerHTML = '';
    const filtered = filter === 'all' 
      ? PORTFOLIO_PROJECTS 
      : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);
      card.innerHTML = `
        <div class="project-thumbnail">
          <img src="${project.image}" alt="${project.title}" loading="eager" decoding="async" onerror="if(!this.dataset.retried){this.dataset.retried='1'; this.src='${project.image}?t=' + Date.now();}">
          <span class="project-badge">${project.categoryLabel}</span>
          <div class="project-overlay">
            <span class="overlay-btn">View Details ↗</span>
          </div>
        </div>
        <div class="project-info">
          <h4>${project.title}</h4>
          <p>${project.summary}</p>
          <div class="project-tags">
            ${project.tools.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        const fullIndex = PORTFOLIO_PROJECTS.findIndex(p => p.id === project.id);
        openProjectModal(fullIndex);
      });

      gallery.appendChild(card);
    });
  }

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  // Modal handlers
  if (modal && modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });

    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;
      if (e.key === 'Escape') closeProjectModal();
      if (e.key === 'ArrowRight') navigateModal(1);
      if (e.key === 'ArrowLeft') navigateModal(-1);
    });
  }

  // Initial render
  renderProjects('all');
}

function openProjectModal(index) {
  const modal = document.getElementById('project-modal');
  if (!modal || index < 0 || index >= PORTFOLIO_PROJECTS.length) return;

  currentModalIndex = index;
  const project = PORTFOLIO_PROJECTS[index];

  document.getElementById('modal-img').src = project.image;
  document.getElementById('modal-img').alt = project.title;
  document.getElementById('modal-badge').textContent = project.categoryLabel;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-desc').textContent = project.description;
  
  // Deliverables
  const delivList = document.getElementById('modal-deliverables');
  delivList.innerHTML = project.deliverables.map(d => `<li>• ${d}</li>`).join('');

  // Tools
  const toolsList = document.getElementById('modal-tools');
  toolsList.textContent = project.tools.join(', ');

  // Direct Inquiry WhatsApp CTA
  const modalCta = document.getElementById('modal-cta');
  const encodedMsg = encodeURIComponent(`Hi Aman, I saw your "${project.title}" project on your portfolio and I would like something similar for my business.`);
  modalCta.href = `https://wa.me/917618085023?text=${encodedMsg}`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function navigateModal(direction) {
  let newIndex = currentModalIndex + direction;
  if (newIndex < 0) newIndex = PORTFOLIO_PROJECTS.length - 1;
  if (newIndex >= PORTFOLIO_PROJECTS.length) newIndex = 0;
  openProjectModal(newIndex);
}

/* ==========================================================================
   2. INTERACTIVE ESTIMATOR & PRICING CALCULATOR
   ========================================================================== */
function initEstimator() {
  const serviceChips = document.querySelectorAll('.service-selector .select-chip');
  const speedOptions = document.querySelectorAll('.speed-option');
  const addonChecks = document.querySelectorAll('.addon-checkbox input');
  const amountEl = document.getElementById('estimate-amount');
  const timelineEl = document.getElementById('estimate-timeline');
  const bookBtn = document.getElementById('estimate-book-btn');

  if (!amountEl || !timelineEl || !bookBtn) return;

  const basePrices = {
    'logo': { price: 2999, days: '3-4 Days', name: 'Logo & Brand Identity' },
    'social': { price: 2499, days: '2-3 Days', name: 'Social Media Pack (10 Posts)' },
    'youtube': { price: 1499, days: '1-2 Days', name: 'YouTube Thumbnail & Banner' },
    'print': { price: 1999, days: '2-3 Days', name: 'Print Poster / Flyer / Brochure' },
    'deck': { price: 3499, days: '4-5 Days', name: 'Pitch Deck & Presentation' },
    'custom': { price: 3999, days: '3-5 Days', name: 'Custom Design Package' }
  };

  let selectedService = 'logo';
  let isExpress = false;

  function calculateEstimate() {
    const base = basePrices[selectedService] || basePrices['logo'];
    let total = base.price;
    let timelineText = base.days;

    if (isExpress) {
      total += Math.round(base.price * 0.4);
      timelineText = '⚡ 24-48 Hours Express';
    }

    // Addons
    addonChecks.forEach(cb => {
      if (cb.checked) {
        total += parseInt(cb.value, 10) || 0;
      }
    });

    amountEl.textContent = `₹${total.toLocaleString('en-IN')}`;
    timelineEl.textContent = `Estimated delivery: ${timelineText}`;

    // Update WhatsApp link
    const selectedAddons = Array.from(addonChecks)
      .filter(cb => cb.checked)
      .map(cb => cb.dataset.label)
      .join(', ');

    const waMsg = `Hi Aman! I used the price estimator on your portfolio:\n- Service: ${base.name}\n- Speed: ${isExpress ? 'Express (24-48h)' : 'Standard'}\n${selectedAddons ? '- Add-ons: ' + selectedAddons + '\n' : ''}- Estimated Quote: ₹${total.toLocaleString('en-IN')}\n\nCan we discuss starting this?`;
    bookBtn.href = `https://wa.me/917618085023?text=${encodeURIComponent(waMsg)}`;
  }

  serviceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      serviceChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedService = chip.dataset.service;
      calculateEstimate();
    });
  });

  speedOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      speedOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      isExpress = opt.dataset.speed === 'express';
      calculateEstimate();
    });
  });

  addonChecks.forEach(cb => {
    cb.addEventListener('change', calculateEstimate);
  });

  calculateEstimate();
}

/* ==========================================================================
   3. FAQ ACCORDION
   ========================================================================== */
function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      item.classList.toggle('open', !isOpen);
    });
  });
}

/* ==========================================================================
   4. CONTACT FORM & INSTANT TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const yearEl = document.getElementById('current-year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const service = document.getElementById('form-service')?.value;
    const message = document.getElementById('form-message')?.value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill in all required fields.');
      return;
    }

    // Direct mailto trigger as reliable fallback
    const subject = encodeURIComponent(`${service} Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject Details:\n${message}`);
    const mailtoUrl = `mailto:amankumaar01722@gmail.com?subject=${subject}&body=${body}`;

    showToast('✉️ Opening your email client to send message...');
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  });
}

/* ==========================================================================
   5. COPY TO CLIPBOARD BUTTONS
   ========================================================================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const text = btn.dataset.copy;
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied! ✓';
        showToast(`📋 Copied "${text}" to clipboard!`);
        setTimeout(() => {
          btn.textContent = originalText;
        }, 2000);
      }).catch(() => {
        showToast('Could not copy automatically. Text: ' + text);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-box';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   6. THEME TOGGLE & PERSISTENCE
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Check saved or system preference
  const savedTheme = localStorage.getItem('aman_portfolio_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const active = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', active);
      localStorage.setItem('aman_portfolio_theme', active);
      updateThemeIcon(active);
      showToast(`Switched to ${active} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

/* ==========================================================================
   7. NAVIGATION & SCROLL PROGRESS
   ========================================================================== */
function initNavigation() {
  const navbar = document.querySelector('.site-nav');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Sticky nav shadow
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
  }, { passive: true });
}

function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const percentage = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  }, { passive: true });
}
