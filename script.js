/* =========================================
   RK BAKERY – script.js
   All interactive behaviour for the site
   ========================================= */

'use strict';

// ─── DATA ───────────────────────────────────────────────────────────────────

const butterCreamCakes = [
  { id: 'bc1', name: 'Vanilla Cake',      price: 400, weight: '1 kg', image: 'images/Vanilla.png', category: 'Butter Cream' },
  { id: 'bc2', name: 'Chocolate Cake',    price: 450, weight: '1 kg', image: 'images/Chocolate.png', category: 'Butter Cream' },
  { id: 'bc3', name: 'Strawberry Cake',   price: 450, weight: '1 kg', image: 'images/Strawberry.png', category: 'Butter Cream' },
  { id: 'bc4', name: 'Butterscotch Cake', price: 450, weight: '1 kg', image: 'images/Buttercreambs.png', category: 'Butter Cream' },
];

const freshCreamCakes = [
  { id: 'fc1',  name: 'Black Forest Cake',         price: 700,  weight: '1 kg', image: 'images/Bforest.png', category: 'Fresh Cream' },
  { id: 'fc2',  name: 'White Forest Cake',         price: 750,  weight: '1 kg', image: 'images/WF.png', category: 'Fresh Cream' },
  { id: 'fc3',  name: 'Butterscotch Cake',         price: 850,  weight: '1 kg', image: 'images/Butterscotch.png', category: 'Fresh Cream' },
  { id: 'fc4',  name: 'Red Velvet Cake',           price: 850,  weight: '1 kg', image: 'images/Redvelvet.png', category: 'Fresh Cream' },
  { id: 'fc5',  name: 'Black Currant Cake',        price: 800,  weight: '1 kg', image: 'images/Bcurrent.png', category: 'Fresh Cream' },
  { id: 'fc6',  name: 'Strawberry Cake',           price: 800,  weight: '1 kg', image: 'images/Strawberryfresh.png', category: 'Fresh Cream' },
  { id: 'fc7',  name: 'Blueberry Cake',            price: 850,  weight: '1 kg', image: 'images/Bberry.png', category: 'Fresh Cream' },
  { id: 'fc8',  name: 'Red Berry Cake',            price: 850,  weight: '1 kg', image: 'images/redberry.jpeg', category: 'Fresh Cream' },
  { id: 'fc9',  name: 'Rainbow Cake',              price: 850,  weight: '1 kg', image: 'images/Rainbow.png', category: 'Fresh Cream' },
  { id: 'fc10', name: 'Caramel Butterscotch Cake', price: 850,  weight: '1 kg', image: 'images/cabscotch.jpg', category: 'Fresh Cream' },
  { id: 'fc11', name: 'Pistachio Cake',            price: 800,  weight: '1 kg', image: 'images/Pistha.png', category: 'Fresh Cream' },
  { id: 'fc12', name: 'Rasmalai Cake',             price: 1000, weight: '1 kg', image: 'images/Rasmalai.jpg', category: 'Fresh Cream' },
];

const sweets = [
  { id: 's1',  name: 'Laddu',          price: 120, image: 'images/laddu.jpg',         bg: '#FEF9E7' },
  { id: 's2',  name: 'Jangiri',        price: 120, image: 'images/jangiri.jpg',       bg: '#FDF2E9' },
  { id: 's3',  name: 'Palkova',        price: 120, image: 'images/paalkova.jpg',      bg: '#F4F6F7' },
  { id: 's4',  name: 'Milk Halwa',     price: 120, image: 'images/paalhalva.jpg',     bg: '#FEF9E7' },
  { id: 's5',  name: 'Mysore Pak',     price: 120, image: 'images/mysorepak.jpg',     bg: '#FFFDE7' },
  { id: 's6',  name: 'Gulab Jamun',    price: 120, image: 'images/gulab.jpg',         bg: '#FDEDEC' },
  { id: 's7',  name: 'Milk Peda',      price: 120, image: 'images/paalpeda.jpg',      bg: '#FEF5FB' },
  { id: 's8',  name: 'Boondi',         price: 120, image: 'images/boondi.jpg',   bg: '#FDF2E9' },
  { id: 's9',  name: 'Mothi Laddu',    price: 120, image: 'images/modhiladdu.webp',   bg: '#FAD7A0' },
  { id: 's10', name: 'Horlicks Burfi', price: 120, image: 'images/horlicksburfi.webp', bg: '#F5CBA7' },
  { id: 's11', name: 'Badhusa',        price: 120, image: 'images/badusha.webp',      bg: '#FFF2E3' },
  { id: 's12', name: 'Padhisa',        price: 120, image: 'images/padhisa.jpg',       bg: '#F9EBF1' },
];

const reviews = [
  { name: 'Priya Ramesh',   initial: 'P', stars: 5, date: 'May 2025', text: 'The Black Forest cake from RK Bakery was absolutely divine! So fresh, creamy, and perfectly sweet. My son\'s birthday was made extra special.' },
  { name: 'Karthik Rajan',  initial: 'K', stars: 5, date: 'April 2025', text: 'Ordered the Rasmalai Cake for our anniversary — it was breathtaking! The flavors were authentic and delivery was right on time.' },
  { name: 'Meena Sundar',   initial: 'M', stars: 5, date: 'April 2025', text: 'Best Mysore Pak in Madurai, hands down! RK Bakery\'s sweets are exactly like homemade. Will keep ordering!' },
  { name: 'Suresh Kumar',   initial: 'S', stars: 5, date: 'March 2025', text: 'The custom model cake for my daughter\'s graduation was a masterpiece. Everyone at the party was amazed. Thank you RK Bakery!' },
  { name: 'Lakshmi Priya',  initial: 'L', stars: 5, date: 'March 2025', text: 'Rainbow Cake was stunning and tasted incredible! Ordered for a baby shower — got so many compliments. Very professional service.' },
  { name: 'Arun Murugan',   initial: 'A', stars: 4, date: 'Feb 2025',  text: 'Very happy with the Red Velvet Cake. Fresh ingredients, great texture. Packaging was neat. Will definitely order again!' },
];

const galleryItems = [
  { image: 'images/Cake1.jpeg', label: 'Custom Wedding Cake' },
  { image: 'images/Cake2.jpeg', label: 'Red Velvet Slice' },
  { image: 'images/Cake3.jpeg', label: 'Birthday Surprise' },
  { image: 'images/Cake4.jpeg', label: 'Chocolate Heaven' },
  { image: 'images/Cake5.jpeg', label: 'Rainbow Layers' },
  { image: 'images/Cake6.jpeg', label: 'Strawberry Fresh Cream' },
  { image: 'images/Cake7.jpeg', label: 'Cupcake Collection' },
  { image: 'images/Cake8.jpeg', label: 'Black Forest Classic' },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

/**
 * Build WhatsApp URL for a product order
 */
function waLink(item) {
  const msg = encodeURIComponent(`Hello RK Bakery! 🎂\n\nI'd like to order:\n• ${item.name} – ₹${item.price}${item.weight ? ' / ' + item.weight : ''}\n\nPlease confirm availability and delivery details. Thank you!`);
  return `https://wa.me/919843118001?text=${msg}`;
}

/**
 * Sanitise text for HTML injection
 */
function esc(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ─── RENDER FUNCTIONS ─────────────────────────────────────────────────────────

/** Render a single product card (cakes) */
function renderCakeCard(cake) {
  return `
    <article class="product-card reveal" data-name="${cake.name.toLowerCase()}" data-category="${cake.category.toLowerCase()}">
      <div class="product-img" style="${cake.bg ? 'background:' + cake.bg : ''}">
        ${cake.image ? `<img src="${cake.image}" alt="${esc(cake.name)}" loading="lazy" />` : cake.emoji || ''}
        <span class="product-label">${esc(cake.category)}</span>
      </div>
      <div class="product-body">
        <h3 class="product-name">${esc(cake.name)}</h3>
        <p class="product-weight">${cake.weight}</p>
        <div class="product-footer">
          <span class="product-price">₹${cake.price}</span>
          <a href="${waLink(cake)}" target="_blank" class="product-order">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order
          </a>
        </div>
      </div>
    </article>`;
}

/** Render a single sweet card */
function renderSweetCard(sweet) {
  return `
    <article class="sweet-card reveal" data-name="${sweet.name.toLowerCase()}" data-category="sweet">
      <div class="sweet-img">${sweet.image ? `<img src="${sweet.image}" alt="${esc(sweet.name)}" loading="lazy" />` : sweet.emoji}</div>
      <h3 class="sweet-name">${esc(sweet.name)}</h3>
      <p class="sweet-weight">per 250g</p>
      <p class="sweet-price">₹${sweet.price}</p>
      <a href="${waLink(sweet)}" target="_blank" class="sweet-order">Order on WhatsApp</a>
    </article>`;
}

/** Render gallery */
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = galleryItems.map(item => `
    <div class="gallery-item reveal">
      <div class="gallery-thumb">
        <img src="${item.image}" alt="${esc(item.label)}" loading="lazy" />
      </div>
      <div class="gallery-overlay">
        <span class="gallery-label">${esc(item.label)}</span>
      </div>
    </div>`).join('');
}

/** Render reviews */
function renderReviews() {
  const track = document.getElementById('reviewsTrack');
  const dotsEl = document.getElementById('reviewsDots');
  if (!track) return;

  track.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p class="review-text">"${esc(r.text)}"</p>
      <div class="review-author">
        <div class="review-avatar">${r.initial}</div>
        <div>
          <p class="review-name">${esc(r.name)}</p>
          <p class="review-date">${r.date}</p>
        </div>
      </div>
    </div>`).join('');

  // Dots
  if (dotsEl) {
    dotsEl.innerHTML = reviews.map((_, i) =>
      `<button class="dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Review ${i + 1}"></button>`
    ).join('');

    dotsEl.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.dataset.index);
        const cardWidth = track.querySelector('.review-card')?.offsetWidth + 24 || 344;
        track.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
        dotsEl.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });

    // Sync dots on scroll
    track.addEventListener('scroll', () => {
      const cardWidth = track.querySelector('.review-card')?.offsetWidth + 24 || 344;
      const idx = Math.round(track.scrollLeft / cardWidth);
      dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    });
  }
}

// ─── INITIALISE CONTENT ───────────────────────────────────────────────────────

function initContent() {
  const butterGrid = document.getElementById('butterGrid');
  const freshGrid  = document.getElementById('freshGrid');
  const sweetsGrid = document.getElementById('sweetsGrid');

  if (butterGrid) butterGrid.innerHTML = butterCreamCakes.map(renderCakeCard).join('');
  if (freshGrid)  freshGrid.innerHTML  = freshCreamCakes.map(renderCakeCard).join('');
  if (sweetsGrid) sweetsGrid.innerHTML = sweets.map(renderSweetCard).join('');

  renderGallery();
  renderReviews();
}

// ─── SEARCH ───────────────────────────────────────────────────────────────────

function initSearch() {
  const input    = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');
  const noResult = document.getElementById('noResults');
  const termEl   = document.getElementById('searchTerm');

  if (!input) return;

  function doSearch(query) {
    const q = query.trim().toLowerCase();

    // Toggle clear button
    clearBtn.style.display = q ? 'block' : 'none';

    // Show/hide all searchable cards
    const allCards = document.querySelectorAll('.product-card, .sweet-card');
    let visibleCount = 0;

    allCards.forEach(card => {
      const name = card.dataset.name || '';
      const cat  = card.dataset.category || '';
      const match = !q || name.includes(q) || cat.includes(q);
      card.classList.toggle('hidden', !match);
      if (match) visibleCount++;
    });

    // Show/hide category headers based on visible cards in each grid
    ['butterGrid', 'freshGrid'].forEach(gridId => {
      const grid   = document.getElementById(gridId);
      const block  = grid?.closest('.category-block');
      if (!grid || !block) return;
      const hasVisible = [...grid.querySelectorAll('.product-card')].some(c => !c.classList.contains('hidden'));
      block.style.display = hasVisible ? '' : 'none';
    });

    // No results
    if (noResult) {
      noResult.style.display = (!visibleCount && q) ? 'block' : 'none';
      if (termEl) termEl.textContent = query;
    }
  }

  input.addEventListener('input', () => doSearch(input.value));

  clearBtn.addEventListener('click', () => {
    input.value = '';
    doSearch('');
    input.focus();
  });
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile toggle
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks?.classList.toggle('open');
    document.body.style.overflow = navLinks?.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  const links    = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        active?.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Observe existing + future elements (MutationObserver for dynamically added cards)
  function observe() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  observe();

  const mo = new MutationObserver(observe);
  mo.observe(document.body, { childList: true, subtree: true });
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }

  function clearErrors() {
    ['nameError', 'phoneError', 'messageError'].forEach(id => showError(id, ''));
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();

    const name    = form.name.value.trim();
    const phone   = form.phone.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    if (!name) {
      showError('nameError', 'Please enter your name.');
      valid = false;
    }
    if (!phone || !/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
      showError('phoneError', 'Please enter a valid 10-digit mobile number.');
      valid = false;
    }
    if (!message) {
      showError('messageError', 'Please enter a message or order details.');
      valid = false;
    }
    if (!valid) return;

    // Simulate submission: open WhatsApp with details
    const waMsg = encodeURIComponent(
      `Hello RK Bakery! 👋\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`
    );

    // Show success & open WhatsApp
    if (success) { success.style.display = 'block'; }
    form.reset();

    setTimeout(() => {
      window.open(`https://wa.me/919843118001?text=${waMsg}`, '_blank');
    }, 800);

    setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
  });
}

// ─── SMOOTH SCROLL ────────────────────────────────────────────────────────────

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ─── AUTO-SCROLL REVIEWS ─────────────────────────────────────────────────────

function initAutoScroll() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;

  let interval = setInterval(() => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 10) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      const cardWidth = track.querySelector('.review-card')?.offsetWidth + 24 || 344;
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }, 4000);

  // Pause on hover/touch
  track.addEventListener('mouseenter', () => clearInterval(interval));
  track.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      const cardWidth = track.querySelector('.review-card')?.offsetWidth + 24 || 344;
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }, 4000);
  });
}

// ─── BACK TO TOP ──────────────────────────────────────────────────────────────

function initBackToTop() {
  const btn = document.createElement('button');
  btn.innerHTML = '↑';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.style.cssText = `
    position:fixed; bottom:6rem; right:2rem; width:42px; height:42px;
    background:var(--terracotta); color:white; border:none; border-radius:50%;
    font-size:1.2rem; cursor:pointer; z-index:998;
    opacity:0; transform:scale(0.8); transition:all 0.3s ease;
    box-shadow:0 4px 16px rgba(192,86,33,0.4);
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.transform = show ? 'scale(1)' : 'scale(0.8)';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initContent();      // Render all data-driven content first
  initNavbar();
  initSearch();
  initScrollReveal();
  initContactForm();
  initSmoothScroll();
  initAutoScroll();
  initBackToTop();

  // Initial navbar scroll state
  if (window.scrollY > 40) {
    document.getElementById('navbar')?.classList.add('scrolled');
  }

  console.log('🎂 RK Bakery – Website loaded successfully!');
});
