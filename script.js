document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth"
          });
      });
  });

  // Contact form submission
  const contactForm = document.querySelector("#contact form");
  contactForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      alert(`Thank you, ${name}! Your message has been sent. I'll get back to you at ${email}.`);
      contactForm.reset();
  });

  // Particle animation
  particlesJS("particleCanvas", {
      particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#EC4899" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: false },
          move: { enable: true, speed: 2, direction: "none", random: true, straight: false }
      },
      interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
          modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
  });

  // Parallax effect for home section
  const homeSection = document.getElementById("home");
  window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      homeSection.style.backgroundPositionY = `${-scrollPosition * 0.3}px`;
  });

  // Enhanced hover effects for project cards
  const projectCards = document.querySelectorAll("#portfolio .shadow-2xl");
  projectCards.forEach(card => {
      card.addEventListener("mouseenter", () => {
          card.classList.add("shadow-3xl", "-rotate-y-10");
      });
      card.addEventListener("mouseleave", () => {
          card.classList.remove("shadow-3xl", "-rotate-y-10");
      });
  });
});