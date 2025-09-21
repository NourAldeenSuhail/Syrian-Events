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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// events.js - JavaScript for Events Page

document.addEventListener("DOMContentLoaded", function () {
  // Sample events data
  const eventsData = [
    {
      id: 1,
      title: "مهرجان دمشق الثقافي",
      description:
        "تجربة ثقافية فريدة تجمع بين التراث والحداثة في قلب العاصمة دمشق.",
      date: "2024-10-15",
      location: "دمشق",
      category: "cultural",
      image:
        "https://placehold.co/600x400/e74c3c/ffffff?text=مهرجان+دمشق+الثقافي",
    },
    {
      id: 2,
      title: "معرض حلب للفنون",
      description:
        "استعراض لأعمال الفنانين السوريين المتميزين في قلب مدينة حلب.",
      date: "2024-11-05",
      location: "حلب",
      category: "art",
      image: "https://placehold.co/600x400/9b59b6/ffffff?text=معرض+حلب+الفنون",
    },
    {
      id: 3,
      title: "سوق حمص للمنتجات اليدوية",
      description: "دعم الحرفيين المحليين واكتشاف المنتجات التقليدية الفريدة.",
      date: "2024-11-25",
      location: "حمص",
      category: "handmade",
      image: "https://placehold.co/600x400/2ecc71/ffffff?text=سوق+حمص+اليدوية",
    },
    {
      id: 4,
      title: "ماراثون طرطوس الدولي",
      description: "فعالية رياضية تجوب أجمل شوارع طرطوس على ساحل المتوسط.",
      date: "2024-12-20",
      location: "طرطوس",
      category: "sports",
      image: "https://placehold.co/600x400/3498db/ffffff?text=ماراثون+طرطوس",
    },
    {
      id: 5,
      title: "مهرجان اللاذقية الموسيقي",
      description: "أمسية موسيقية تجمع نخبة من عازفي سوريا على مسرح البحر.",
      date: "2024-12-10",
      location: "اللاذقية",
      category: "music",
      image:
        "https://placehold.co/600x400/f39c12/ffffff?text=مهرجان+اللاذقية+الموسيقي",
    },
    {
      id: 6,
      title: "ندوة حول التراث السوري",
      description:
        "ندوة تناقش أهمية الحفاظ على التراث السوري وسبل تطويره في العصر الحديث.",
      date: "2024-10-12",
      location: "دمشق",
      category: "cultural",
      image: "https://placehold.co/600x400/e74c3c/ffffff?text=ندوة+ثقافية",
    },
    {
      id: 7,
      title: "ورشة الرسم بالحبر",
      description: "ورشة عمل لتعليم تقنيات الرسم بالحبر مع فنانين محترفين.",
      date: "2024-10-18",
      location: "حلب",
      category: "art",
      image: "https://placehold.co/600x400/9b59b6/ffffff?text=ورشة+فنية",
    },
    {
      id: 8,
      title: "سباق الدراجات الهوائية",
      description:
        "سباق للدراجات الهوائية يجوب أجمل المناطق الطبيعية في ريف دمشق.",
      date: "2024-10-25",
      location: "دمشق",
      category: "sports",
      image: "https://placehold.co/600x400/3498db/ffffff?text=فعالية+رياضية",
    },
    {
      id: 9,
      title: "سوق المنتجات الغذائية",
      description:
        "سوق يعرض أشهى المأكولات السورية التقليدية من مختلف المحافظات.",
      date: "2024-11-05",
      location: "حمص",
      category: "handmade",
      image: "https://placehold.co/600x400/2ecc71/ffffff?text=سوق+غذائي",
    },
    {
      id: 10,
      title: "ليلة موسيقية في القلعة",
      description:
        "حفل موسيقي خاص في قلعة حلب يضم فرق موسيقية من مختلف أنحاء سوريا.",
      date: "2024-11-15",
      location: "حلب",
      category: "music",
      image: "https://placehold.co/600x400/f39c12/ffffff?text=حفل+موسيقي",
    },
    {
      id: 11,
      title: "معرض صور سوريا الجمال",
      description:
        "معرض للصور الفوتوغرافية يعرض أجمل المناظر الطبيعية والأثرية في سوريا.",
      date: "2024-11-22",
      location: "اللاذقية",
      category: "art",
      image: "https://placehold.co/600x400/9b59b6/ffffff?text=معرض+صور",
    },
    {
      id: 12,
      title: "ورشة صناعة الفخار",
      description: "تعلم تقنيات صناعة الفخار التقليدي من الحرفيين المحليين.",
      date: "2024-11-30",
      location: "دمشق",
      category: "handmade",
      image: "https://placehold.co/600x400/2ecc71/ffffff?text=ورشة+فخار",
    },
    {
      id: 13,
      title: "بطولة كرة القدم المحلية",
      description: "منافسات كرة القدم بين فرق المحافظات المختلفة.",
      date: "2024-12-05",
      location: "حلب",
      category: "sports",
      image: "https://placehold.co/600x400/3498db/ffffff?text=كرة+قدم",
    },
    {
      id: 14,
      title: "حفل أمسيات شعرية",
      description:
        "أمسية شعرية تجمع نخبة من شعراء سوريا لتقديم قصائد وطنية وإنسانية.",
      date: "2024-12-12",
      location: "اللاذقية",
      category: "cultural",
      image: "https://placehold.co/600x400/e74c3c/ffffff?text=أمسية+شعرية",
    },
    {
      id: 15,
      title: "مهرجان الرقص الشعبي",
      description: "عروض للرقص الشعبي السوري من مختلف المناطق والمحافظات.",
      date: "2024-12-18",
      location: "طرطوس",
      category: "music",
      image: "https://placehold.co/600x400/f39c12/ffffff?text=رقص+شعبي",
    },
    {
      id: 16,
      title: "معرض الخط العربي",
      description: "معرض يضم أجمل أعمال الخط العربي من فنانين سوريين معاصرين.",
      date: "2024-12-22",
      location: "دمشق",
      category: "art",
      image: "https://placehold.co/600x400/9b59b6/ffffff?text=خط+عربي",
    },
    {
      id: 17,
      title: "سوق التراث",
      description:
        "سوق يعرض المنتجات التراثية والتقليدية من مختلف المحافظات السورية.",
      date: "2024-12-28",
      location: "حمص",
      category: "handmade",
      image: "https://placehold.co/600x400/2ecc71/ffffff?text=سوق+تراثي",
    },
    {
      id: 18,
      title: "بطولة الشطرنج الوطنية",
      description: "منافسات الشطرنج بين أفضل اللاعبين في سوريا.",
      date: "2025-01-05",
      location: "حلب",
      category: "sports",
      image: "https://placehold.co/600x400/3498db/ffffff?text=شطرنج",
    },
    {
      id: 19,
      title: "حفل موسيقى كلاسيكية",
      description:
        "أداء لأشهر المقطوعات الموسيقية الكلاسيكية من قبل أوركسترا سورية.",
      date: "2025-01-12",
      location: "دمشق",
      category: "music",
      image: "https://placehold.co/600x400/f39c12/ffffff?text=موسيقى+كلاسيكية",
    },
    {
      id: 20,
      title: "معرض السجاد اليدوي",
      description:
        "عرض لأجمل أنواع السجاد السوري المصنوع يدوياً بتصاميم تقليدية وحديثة.",
      date: "2025-01-20",
      location: "الحسكة",
      category: "handmade",
      image: "https://placehold.co/600x400/2ecc71/ffffff?text=سجاد+يدوي",
    },
  ];

  // Get elements
  const eventsGrid = document.getElementById("eventsGrid");
  const searchInput = document.getElementById("searchInput");
  const sortFilter = document.getElementById("sortFilter"); // Changed from dateFilter to sortFilter
  const categoryFilter = document.getElementById("categoryFilter");
  const locationFilter = document.getElementById("locationFilter");
  const pagination = document.getElementById("pagination");

  // Current page
  let currentPage = 1;
  const eventsPerPage = 6;

  // Initialize the page
  function initPage() {
    // Set up event listeners
    searchInput.addEventListener("input", filterEvents);
    sortFilter.addEventListener("change", filterEvents); // Changed event listener
    categoryFilter.addEventListener("change", filterEvents);
    locationFilter.addEventListener("change", filterEvents);

    // Display events
    displayEvents();
  }

  // Filter events based on search and filters
  function filterEvents() {
    currentPage = 1; // Reset to first page when filtering
    displayEvents();
  }

  // Get filtered and sorted events
  function getFilteredEvents() {
    const searchTerm = searchInput.value.toLowerCase();
    const sortValue = sortFilter.value; // Get sort value (newest or oldest)
    const categoryValue = categoryFilter.value;
    const locationValue = locationFilter.value;

    // First, filter events
    let filteredEvents = eventsData.filter((event) => {
      // Search filter - البحث يعمل عن طريق مطابقة النص المدخل مع عنوان الفعالية
      // يمكنك كتابة جزء من اسم الفعالية وسيتم عرض جميع الفعاليات التي تحتوي على هذا الجزء
      if (searchTerm && !event.title.toLowerCase().includes(searchTerm)) {
        return false;
      }

      // Category filter
      if (categoryValue && event.category !== categoryValue) {
        return false;
      }

      // Location filter
      if (locationValue && event.location !== locationValue) {
        return false;
      }

      return true;
    });

    // Then, sort events
    filteredEvents.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (sortValue === "newest") {
        // الأحدث أولاً (تاريخ أحدث يعني رقم أكبر)
        return dateB - dateA;
      } else {
        // الأقدم أولاً (تاريخ أقدم يعني رقم أصغر)
        return dateA - dateB;
      }
    });

    return filteredEvents;
  }

  // Display events with pagination
  function displayEvents() {
    const filteredEvents = getFilteredEvents();
    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

    // Get events for current page
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const eventsToDisplay = filteredEvents.slice(startIndex, endIndex);

    // Clear events grid
    eventsGrid.innerHTML = "";

    // Display events
    if (eventsToDisplay.length === 0) {
      eventsGrid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h3>لا توجد فعاليات مطابقة لمعايير البحث</h3>
                    <p class="mt-3">جرب تعديل معايير البحث أو التصفية</p>
                </div>
            `;
    } else {
      eventsToDisplay.forEach((event) => {
        const eventCard = createEventCard(event);
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4 mb-4";
        col.appendChild(eventCard);
        eventsGrid.appendChild(col);
      });
    }

    // Display pagination
    displayPagination(totalPages);
  }

  // Create event card element
  function createEventCard(event) {
    const card = document.createElement("div");
    card.className = "event-card";

    // Format date
    const eventDate = new Date(event.date);
    const formattedDate = `${eventDate.toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`;

    // Get category Arabic name
    const categoryArabic = getCategoryArabic(event.category);
    const categoryClass = `tag-${event.category}`;

    card.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-date"><i class="bi bi-calendar-event"></i> ${formattedDate}</div>
                <div class="event-location"><i class="bi bi-geo-alt"></i> ${event.location}</div>
                <p class="event-description">${event.description}</p>
                <div class="event-tags">
                    <span class="event-tag ${categoryClass}">${categoryArabic}</span>
                </div>
                <a href="#" class="btn-details">عرض التفاصيل</a>
            </div>
        `;

    return card;
  }

  // Get Arabic category name
  function getCategoryArabic(category) {
    const categories = {
      cultural: "ثقافي",
      handmade: "يدوي",
      sports: "رياضي",
      music: "موسيقي",
      art: "فني",
    };
    return categories[category] || category;
  }

  // Display pagination
  function displayPagination(totalPages) {
    pagination.innerHTML = "";

    if (totalPages <= 1) {
      return;
    }

    // Previous button
    const prevItem = document.createElement("li");
    prevItem.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
    prevItem.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>`;
    prevItem.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        displayEvents();
      }
    });
    pagination.appendChild(prevItem);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      const pageItem = document.createElement("li");
      pageItem.className = `page-item ${i === currentPage ? "active" : ""}`;
      pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      pageItem.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = i;
        displayEvents();
      });
      pagination.appendChild(pageItem);
    }

    // Next button
    const nextItem = document.createElement("li");
    nextItem.className = `page-item ${
      currentPage === totalPages ? "disabled" : ""
    }`;
    nextItem.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>`;
    nextItem.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        displayEvents();
      }
    });
    pagination.appendChild(nextItem);
  }

  // Initialize the page
  initPage();
});

/////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// details.js - JavaScript for Event Details Page
// event-details.js - JavaScript for Event Details Page

document.addEventListener("DOMContentLoaded", function () {
  // Sample events data (same as events page)
  const eventsData = [
    {
      id: 1,
      title: "مهرجان دمشق الثقافي",
      description:
        "تجربة ثقافية فريدة تجمع بين التراث والحداثة في قلب العاصمة دمشق.",
      date: "2024-10-15",
      location: "دمشق",
      category: "cultural",
      image:
        "https://placehold.co/600x400/e74c3c/ffffff?text=مهرجان+دمشق+الثقافي",
      longDescription:
        "مهرجان دمشق الثقافي هو حدث سنوي يقام في قلب العاصمة السورية دمشق، ويهدف إلى إحياء التراث الثقافي السوري وإبرازه للعالم. يضم المهرجان مجموعة متنوعة من الفعاليات التي تشمل العروض الموسيقية والمسرحية، المعارض الفنية، ورش العمل الحرفية، والأمسيات الشعرية. يشارك في المهرجان فنانون وحرفيون من جميع أنحاء سوريا، مما يخلق تجربة ثقافية غنية ومتنوعة للزوار. يتميز المهرجان بإقامة فعالياته في مواقع تاريخية وأثرية في دمشق، مما يضيف بعداً تاريخياً وجمالياً خاصاً للفعاليات.",
      organizer: "وزارة الثقافة السورية",
      contact: "+963 11 234 5678",
      email: "info@damascusculturalfestival.com",
      website: "www.damascusculturalfestival.com",
      address: "شارعStraight, دمشق القديمة, دمشق",
      ticketPrice: "1000 ل.س للشخص الواحد",
      startTime: "17:00",
      endTime: "23:00",
    },
    {
      id: 2,
      title: "معرض حلب للفنون",
      description:
        "استعراض لأعمال الفنانين السوريين المتميزين في قلب مدينة حلب.",
      date: "2024-11-05",
      location: "حلب",
      category: "art",
      image: "https://placehold.co/600x400/9b59b6/ffffff?text=معرض+حلب+الفنون",
      longDescription:
        "معرض حلب للفنون هو تظاهرة فنية سنوية تقام في مدينة حلب، وتجمع بين الفنانين التشكيليين والنحاتين والفنانين الرقميين من مختلف أنحاء سوريا. يهدف المعرض إلى دعم الحركة الفنية في سوريا وإتاحة الفرصة للفنانين الشباب لعرض أعمالهم أمام الجمهور. يضم المعرض أكثر من 200 عمل فني متنوع بين اللوحات الزيتية، المنحوتات، الأعمال الرقمية، والصور الفوتوغرافية. يتميز المعرض بإقامة ورش عمل فنية يومية يشارك فيها الزوار في إنشاء أعمال فنية تحت إشراف فنانين محترفين.",
      organizer: "نقابة الفنانين التشكيليين في حلب",
      contact: "+963 21 345 6789",
      email: "info@aleppoartexhibition.com",
      website: "www.aleppoartexhibition.com",
      address: "شارع القصر البلدي, حلب",
      ticketPrice: "500 ل.س للشخص الواحد",
      startTime: "10:00",
      endTime: "20:00",
    },
    {
      id: 3,
      title: "سوق حمص للمنتجات اليدوية",
      description: "دعم الحرفيين المحليين واكتشاف المنتجات التقليدية الفريدة.",
      date: "2024-11-25",
      location: "حمص",
      category: "handmade",
      image: "https://placehold.co/600x400/2ecc71/ffffff?text=سوق+حمص+اليدوية",
      longDescription:
        "سوق حمص للمنتجات اليدوية هو سوق أسبوعي يقام في ساحة العاصي في مدينة حمص، ويهدف إلى دعم الحرفيين المحليين وتشجيع السياحة المحلية. يضم السوق أكثر من 50 حرفيًا يعرضون منتجاتهم اليدوية المتنوعة التي تشمل السجاد اليدوي، الفخار، النحاسيات، التطريز، والمنتجات الجلدية. يتميز السوق بإقامة ورش عمل مباشرة يشرح فيها الحرفيون تقنيات صناعتهم ويدربون الزوار على أساسيات هذه الحرف. كما يضم السوق زاوية خاصة للأطفال لتعليمهم الحرف اليدوية بطريقة مبسطة وممتعة.",
      organizer: "جمعية الحرفيين في حمص",
      contact: "+963 31 456 7890",
      email: "info@homscraftmarket.com",
      website: "www.homscraftmarket.com",
      address: "ساحة العاصي, حمص",
      ticketPrice: "دخول مجاني",
      startTime: "09:00",
      endTime: "19:00",
    },
    {
      id: 4,
      title: "ماراثون طرطوس الدولي",
      description: "فعالية رياضية تجوب أجمل شوارع طرطوس على ساحل المتوسط.",
      date: "2024-12-20",
      location: "طرطوس",
      category: "sports",
      image: "https://placehold.co/600x400/3498db/ffffff?text=ماراثون+طرطوس",
      longDescription:
        "ماراثون طرطوس الدولي هو حدث رياضي سنوي يجذب المشاركين من مختلف أنحاء العالم. يقام الماراثون على كورنيش طرطوس المطل على البحر المتوسط، ويقدم مسارًا خلابًا يمر بأهم المعالم السياحية في المدينة. يضم الماراثون عدة فئات تنافسية تشمل الماراثون الكامل (42.195 كم)، نصف الماراثون (21.1 كم)، والماراثون المصغر (5 كم) المخصص للعائلات والأطفال. يتميز الماراثون بتنظيمه الاحترافي وتقديم جوائز قيمة للفائزين، كما يشمل فعاليات جانبية مثل معرض المنتجات الرياضية وورش العمل التدريبية.",
      organizer: "الاتحاد السوري لألعاب القوى",
      contact: "+963 43 567 8901",
      email: "info@tartusmarathon.com",
      website: "www.tartusmarathon.com",
      address: "كورنيش طرطوس, طرطوس",
      ticketPrice: "2000 ل.س للتسجيل",
      startTime: "07:00",
      endTime: "14:00",
    },
    {
      id: 5,
      title: "مهرجان اللاذقية الموسيقي",
      description: "أمسية موسيقية تجمع نخبة من عازفي سوريا على مسرح البحر.",
      date: "2024-12-10",
      location: "اللاذقية",
      category: "music",
      image:
        "https://placehold.co/600x400/f39c12/ffffff?text=مهرجان+اللاذقية+الموسيقي",
      longDescription:
        "مهرجان اللاذقية الموسيقي هو تظاهرة فنية موسيقية تقام سنويًا على مسرح البحر في مدينة اللاذقية. يضم المهرجان فرقًا موسيقية من مختلف أنحاء سوريا، ويشمل أنواعًا متنوعة من الموسيقى من التراثية إلى الحديثة. يتميز المهرجان بإقامة حفلات يومية على مدار أسبوع كامل، كل حفلة تقدم نوعًا موسيقيًا مختلفًا. كما يشمل المهرجان ورش عمل موسيقية لتعليم العزف على الآلات الموسيقية التقليدية، ومعارض للأدوات الموسيقية. يقام المهرجان في أجواء ساحرة على شاطئ البحر، مما يخلق تجربة فريدة للزوار.",
      organizer: "مديرية الثقافة في اللاذقية",
      contact: "+963 41 678 9012",
      email: "info@latakiamusicfestival.com",
      website: "www.latakiamusicfestival.com",
      address: "مسرح البحر, الكورنيش الجنوبي, اللاذقية",
      ticketPrice: "1500 ل.س للشخص الواحد",
      startTime: "19:00",
      endTime: "23:30",
    },
    {
      id: 6,
      title: "ندوة حول التراث السوري",
      description:
        "ندوة تناقش أهمية الحفاظ على التراث السوري وسبل تطويره في العصر الحديث.",
      date: "2024-10-12",
      location: "دمشق",
      category: "cultural",
      image: "https://placehold.co/600x400/e74c3c/ffffff?text=ندوة+ثقافية",
      longDescription:
        "ندوة حول التراث السوري هي فعالية فكرية تهدف إلى مناقشة قضايا التراث السوري وسبل الحفاظ عليه وتطويره في العصر الحديث. تضم الندوة نخبة من الباحثين والخبراء في مجالات التراث المادي وغير المادي، والذين يقدمون أوراقًا بحثية حول مواضيع متنوعة تشمل العمارة التراثية، الحرف اليدوية، الموسيقى والفنون التقليدية، والتراث الغذائي. تتميز الندوة بإقامة جلسات حوارية مفتوحة مع الجمهور، وورش عمل تطبيقية لتعليم تقنيات الحفاظ على التراث. كما تشمل الندوة معرضًا للصور والوثائق التراثية النادرة.",
      organizer: "مركز الدراسات التراثية في سوريا",
      contact: "+963 11 789 0123",
      email: "info@syrianheritagesymposium.com",
      website: "www.syrianheritagesymposium.com",
      address: "مركز المؤتمرات, دمشق",
      ticketPrice: "750 ل.س للشخص الواحد",
      startTime: "10:00",
      endTime: "17:00",
    },
  ];

  // Get elements
  const eventsList = document.getElementById("eventsList");
  const eventDetailModal = new bootstrap.Modal(
    document.getElementById("eventDetailModal")
  );
  const eventDetailContent = document.getElementById("eventDetailContent");

  // Initialize the page
  function initPage() {
    // Display events list
    displayEventsList();
  }

  // Display events list
  function displayEventsList() {
    // Clear events list
    eventsList.innerHTML = "";

    // Display events
    eventsData.forEach((event) => {
      const eventCard = createEventCard(event);
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4 mb-4";
      col.appendChild(eventCard);
      eventsList.appendChild(col);
    });
  }

  // Create event card element
  function createEventCard(event) {
    const card = document.createElement("div");
    card.className = "event-item-card";
    card.setAttribute("data-event-id", event.id);

    // Format date
    const eventDate = new Date(event.date);
    const formattedDate = `${eventDate.toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`;

    // Get category Arabic name
    const categoryArabic = getCategoryArabic(event.category);
    const categoryClass = `tag-${event.category}`;

    card.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="event-item-image">
            <div class="event-item-content">
                <h3 class="event-item-title">${event.title}</h3>
                <div class="event-item-date"><i class="bi bi-calendar-event"></i> ${formattedDate}</div>
                <div class="event-item-location"><i class="bi bi-geo-alt"></i> ${event.location}</div>
                <p class="event-item-description">${event.description}</p>
                <span class="event-item-tag ${categoryClass}">${categoryArabic}</span>
                <button class="event-item-btn view-details-btn" data-event-id="${event.id}">عرض التفاصيل</button>
            </div>
        `;

    // Add click event to card
    card.addEventListener("click", function () {
      const eventId = this.getAttribute("data-event-id");
      showEventDetails(eventId);
    });

    // Add click event to button (prevent event bubbling)
    const viewDetailsBtn = card.querySelector(".view-details-btn");
    viewDetailsBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const eventId = this.getAttribute("data-event-id");
      showEventDetails(eventId);
    });

    return card;
  }

  // Show event details in modal
  function showEventDetails(eventId) {
    const event = eventsData.find((e) => e.id == eventId);
    if (!event) return;

    // Format date
    const eventDate = new Date(event.date);
    const formattedDate = `${eventDate.toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`;

    // Get category Arabic name
    const categoryArabic = getCategoryArabic(event.category);

    // Create event details HTML
    const eventDetailsHTML = `
            <div class="event-detail-header">
                <img src="${event.image}" alt="${event.title}" class="event-detail-image">
                <h2 class="event-detail-title">${event.title}</h2>
                <div class="event-detail-meta">
                    <div class="event-detail-meta-item">
                        <i class="bi bi-calendar-event"></i>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="event-detail-meta-item">
                        <i class="bi bi-geo-alt"></i>
                        <span>${event.location}</span>
                    </div>
                    <div class="event-detail-meta-item">
                        <i class="bi bi-tag"></i>
                        <span>${categoryArabic}</span>
                    </div>
                    <div class="event-detail-meta-item">
                        <i class="bi bi-clock"></i>
                        <span>${event.startTime} - ${event.endTime}</span>
                    </div>
                </div>
            </div>
            
            <div class="event-detail-description">
                ${event.longDescription}
            </div>
            
            <div class="event-detail-additional">
                <h3 class="event-detail-section-title">معلومات إضافية</h3>
                <div class="event-detail-info">
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">المنظم:</div>
                        <div class="event-detail-info-value">${event.organizer}</div>
                    </div>
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">عنوان الفعالية:</div>
                        <div class="event-detail-info-value">${event.address}</div>
                    </div>
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">سعر التذكرة:</div>
                        <div class="event-detail-info-value">${event.ticketPrice}</div>
                    </div>
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">هاتف الاتصال:</div>
                        <div class="event-detail-info-value">${event.contact}</div>
                    </div>
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">البريد الإلكتروني:</div>
                        <div class="event-detail-info-value">${event.email}</div>
                    </div>
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">الموقع الإلكتروني:</div>
                        <div class="event-detail-info-value">${event.website}</div>
                    </div>
                </div>
            </div>
            
            <div class="event-detail-actions">
                <button class="event-detail-action-btn event-detail-primary-btn">
                    <i class="bi bi-ticket"></i> حجز التذاكر
                </button>
                <button class="event-detail-action-btn event-detail-secondary-btn">
                    <i class="bi bi-share"></i> مشاركة الفعالية
                </button>
                <button class="event-detail-action-btn event-detail-secondary-btn" data-bs-dismiss="modal">
                    <i class="bi bi-arrow-left"></i> الرجوع إلى القائمة
                </button>
            </div>
        `;

    // Set event details content
    eventDetailContent.innerHTML = eventDetailsHTML;

    // Show modal
    eventDetailModal.show();

    // Add event listeners to action buttons
    const shareBtn = eventDetailContent.querySelector(
      ".event-detail-secondary-btn:nth-child(2)"
    );
    if (shareBtn) {
      shareBtn.addEventListener("click", function () {
        if (navigator.share) {
          navigator.share({
            title: event.title,
            text: event.description,
            url: window.location.href,
          });
        } else {
          alert("مشاركة الفعالية: " + event.title + "\n" + event.description);
        }
      });
    }
  }

  // Get Arabic category name
  function getCategoryArabic(category) {
    const categories = {
      cultural: "ثقافي",
      handmade: "يدوي",
      sports: "رياضي",
      music: "موسيقي",
      art: "فني",
    };
    return categories[category] || category;
  }

  // Initialize the page
  initPage();
});
