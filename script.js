window.addEventListener('DOMContentLoaded', () => {

  const introOverlay = document.getElementById('intro-overlay');
  const homePage = document.getElementById('home');
  const photoWrapper = document.getElementById('photoWrapper');
  const nameEl = document.getElementById('name');

  /* =========================
     STEP 1 — PHOTO
  ========================= */

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      photoWrapper.classList.add('photo-in');
    });
  });


  /* =========================
     STEP 2 — NAME
  ========================= */

  setTimeout(() => {
    nameEl.classList.add('animate-in');
  }, 820);


  /* =========================
     STEP 3 — HOME REVEAL
  ========================= */

  const SWEEP_END = 820 + 550 + 2300;
  const BUFFER = 380;
  const SLIDE_START = SWEEP_END + BUFFER;


  setTimeout(() => {

    /* Intro moves up */
    introOverlay.classList.add('slide-up');


    /* Home animation starts */
    if (homePage) {

      homePage.setAttribute('aria-hidden', 'false');

      homePage.classList.add('home-visible');

    }


    /* Remove intro after animation */
    introOverlay.addEventListener('transitionend', () => {

      introOverlay.classList.add('gone');

      document.body.classList.remove('intro-active');

    }, { once: true });

  }, SLIDE_START);

});
/* =========================
   ABOUT SCROLL ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const aboutSection = document.querySelector(".about-section");

  if (!aboutSection) return;

  const aboutObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          aboutSection.classList.add("about-visible");

          observer.unobserve(aboutSection);
        }

      });

    },
    {
      threshold: 0.25
    }
  );

  aboutObserver.observe(aboutSection);

});
// =========================
// SERVICES SCROLL ANIMATION
// =========================

const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("service-visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

serviceCards.forEach((card) => {
  serviceObserver.observe(card);
});


// =========================
// CONTACT FORM → WHATSAPP
// =========================

function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const whatsappMessage =
    "Hello Fathimathul Naja,\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Subject: " + subject + "\n" +
    "Message: " + message;

  const whatsappURL =
    "https://wa.me/919746003247?text=" +
    encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank");
}


// =========================
// HAMBURGER / MOBILE NAV
// =========================

(function () {
  const hamburger   = document.getElementById('hamburger');
  const navLinks    = document.getElementById('nav-links');
  const navOverlay  = document.getElementById('nav-overlay');

  if (!hamburger || !navLinks || !navOverlay) return;

  function openMenu() {
    hamburger.classList.add('active');
    navLinks.classList.add('open');
    navOverlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';   // prevent background scroll
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking the overlay
  navOverlay.addEventListener('click', closeMenu);

  // Close when a nav link is tapped (smooth-scroll still works)
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
})();