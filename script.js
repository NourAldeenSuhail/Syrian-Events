// script.js
// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const icon = darkModeToggle ? darkModeToggle.querySelector("i") : null;

  // Check for saved user preference
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    if (icon) {
      icon.classList.remove("bi-moon");
      icon.classList.add("bi-sun");
    }
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        if (icon) {
          icon.classList.remove("bi-moon");
          icon.classList.add("bi-sun");
        }
        localStorage.setItem("darkMode", "enabled");
      } else {
        if (icon) {
          icon.classList.remove("bi-sun");
          icon.classList.add("bi-moon");
        }
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  const heroContent = document.getElementById("heroContent");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      if (navbar) navbar.classList.add("scrolled");
      if (heroContent) heroContent.classList.add("scrolled");
    } else {
      if (navbar) navbar.classList.remove("scrolled");
      if (heroContent) heroContent.classList.remove("scrolled");
    }

    // Animate event cards when they come into view
    const eventCards = document.querySelectorAll(".event-card");
    const featureCards = document.querySelectorAll(".feature-card");

    eventCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 100) {
        card.classList.add("visible");
      }
    });

    featureCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 100) {
        card.classList.add("visible");
      }
    });
  });

  // Initialize Bootstrap Carousel
  const carouselElement = document.getElementById("featuredEventsCarousel");
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      ride: "carousel",
    });
  }

  // Categories Filter
  const categoryBtns = document.querySelectorAll(".category-btn");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");
      console.log(`Filtering by category: ${category}`);
    });
  });

  // Initialize animations on page load
  const sectionTitles = document.querySelectorAll(".section-title");
  sectionTitles.forEach((title, index) => {
    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 300 * index);
  });

  // Trigger scroll event to animate cards that are initially in view
  window.dispatchEvent(new Event("scroll"));
});
