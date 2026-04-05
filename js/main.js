/* ═══════════════════════════════════════════════════════════
   BB FLEETS LLC — main.js
   Mobile nav, scroll effects, form handling.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // ── Mobile nav toggle ──────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking a link (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on outside tap
    document.addEventListener('click', function (e) {
      if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  }

  // ── Nav background on scroll ───────────────────────────
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    lastScroll = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Contact form (mailto fallback) ─────────────────────
  // Builds a well-formatted mailto link so Keith receives
  // structured quote requests without a backend.
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = new FormData(form);
      const name = (data.get('name') || '').trim();
      const company = (data.get('company') || '').trim();
      const email = (data.get('email') || '').trim();
      const phone = (data.get('phone') || '').trim();
      const service = (data.get('service') || '').trim();
      const message = (data.get('message') || '').trim();

      const serviceLabels = {
        vehicle_transport:  'Vehicle Transport',
        fleet_support:      'Fleet Support',
        dedicated_hauling:  'Dedicated Hauling',
        supplies_logistics: 'Supplies & Logistics Runs',
        other:              'Other / Not Sure'
      };

      const subject = 'BB Fleets Quote Request — ' + (serviceLabels[service] || 'General Inquiry');

      const lines = [
        'BB FLEETS — QUOTE REQUEST',
        '──────────────────────────',
        '',
        'Name:     ' + name,
        'Company:  ' + (company || '—'),
        'Email:    ' + email,
        'Phone:    ' + phone,
        'Service:  ' + (serviceLabels[service] || service),
        '',
        'Details:',
        message,
        '',
        '──────────────────────────',
        'Sent from bbfleets.com'
      ];

      const body = lines.join('\n');
      const mailto = 'mailto:keith.burns@bbfleets.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  // ── Console mark (for devs peeking at source) ──────────
  if (window.console && console.log) {
    console.log(
      '%cBB FLEETS LLC',
      'font-family:monospace;font-size:14px;font-weight:700;color:#ff9500;' +
      'background:#0a0c10;padding:6px 12px;border-radius:4px;'
    );
    console.log('MC 1753463 · USDOT 4450013 · bbfleets.com');
  }
})();
