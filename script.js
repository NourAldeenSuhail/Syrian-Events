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
                <a href="details.html" class="btn-details">عرض التفاصيل</a>
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

// event-details.js - JavaScript for Event Details Page

document.addEventListener("DOMContentLoaded", function () {
  // Sample events data (20 events)
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
    {
      id: 7,
      title: "ورشة الرسم بالحبر",
      description: "ورشة عمل لتعليم تقنيات الرسم بالحبر مع فنانين محترفين.",
      date: "2024-10-18",
      location: "حلب",
      category: "art",
      image: "https://placehold.co/600x400/9b59b6/ffffff?text=ورشة+فنية",
      longDescription:
        "ورشة الرسم بالحبر هي فرصة فريدة لتعلم تقنيات الرسم الحديثة باستخدام الحبر. تقام الورشة في مركز الفنون في حلب وتستمر لمدة ثلاثة أيام، ويشرف عليها فنانون محترفون من سوريا والعالم العربي. تشمل الورشة محاضرات نظرية وتطبيقات عملية، حيث يتعلم المشاركون أساسيات الرسم بالحبر، تقنيات التظليل، وأنواع الأقلام والورق المناسبة. يتميز البرنامج بتخصيص وقت كافٍ لكل مشارك لممارسة المهارات التي تعلمها تحت إشراف المدربين. في نهاية الورشة، يتم عرض أعمال المشاركين في معرض خاص.",
      organizer: "مركز الفنون في حلب",
      contact: "+963 21 890 1234",
      email: "info@inkdrawingworkshop.com",
      website: "www.inkdrawingworkshop.com",
      address: "مركز الفنون, حلب",
      ticketPrice: "3000 ل.س للشخص الواحد",
      startTime: "14:00",
      endTime: "18:00",
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
      longDescription:
        "سباق الدراجات الهوائية هو حدث رياضي ممتع يقام في ريف دمشق، ويستهدف عشاق رياضة الدراجات من جميع الأعمار. يمتد مسار السباق لمسافة 30 كم عبر أجمل المناطق الطبيعية في ريف دمشق، بما في ذلك الغابات والتلال والقرى التقليدية. يشمل السباق فئات مختلفة للمحترفين والهواة، مع جوائز قيمة للفائزين. يتميز الحدث بوجود محطات توقف على طول المسار توفر الماء والوجبات الخفيفة للدراجين، كما يتوفر فريق طبي كامل لضمان سلامة المشاركين. يقام السباق تحت إشراف الاتحاد السوري لرياضة الدراجات.",
      organizer: "نادي الدراجات الهوائية في دمشق",
      contact: "+963 11 901 2345",
      email: "info@damascusbikerace.com",
      website: "www.damascusbikerace.com",
      address: "بداية السباق: قرية دمر, ريف دمشق",
      ticketPrice: "1500 ل.س للشخص الواحد",
      startTime: "08:00",
      endTime: "13:00",
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
      longDescription:
        "سوق المنتجات الغذائية هو مهرجان سنوي يقام في مدينة حمص، ويهدف إلى تعريف الزوار بأفضل المنتجات الغذائية التقليدية من مختلف المحافظات السورية. يضم السوق أكثر من 60 عارضًا يقدمون منتجات متنوعة تشمل المخللات، المربيات، الحلويات، الأجبان، والزيوت الطبيعية. يتميز السوق بإقامة ورش عمل مباشرة لتعليم الزوار كيفية صنع بعض المنتجات الغذائية التقليدية، كما يشمل مسابقات تذوق للمنتجات المختلفة. يقام السوق في أجواء احتفالية مع عروض موسيقية وفقرات ترفيهية للعائلات.",
      organizer: "جمعية الطهاة في حمص",
      contact: "+963 31 012 3456",
      email: "info@foodmarket-homs.com",
      website: "www.foodmarket-homs.com",
      address: "الساحة الرئيسية, حمص",
      ticketPrice: "دخول مجاني",
      startTime: "10:00",
      endTime: "21:00",
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
      longDescription:
        "ليلة موسيقية في القلعة هي حدث فني مميز يقام داخل قلعة حلب الأثرية، ويجمع بين الموسيقى والتراث في أجواء ساحرة لا تُنسى. يضم الحفل فرقًا موسيقية من مختلف أنحاء سوريا، تقدم مزيجًا من الموسيقى التراثية والحديثة. يتميز الحدث بإضاءة خاصة للقلعة تبرز جمالها المعماري، كما يشمل عروضًا للرقص الشعبي السوري. يقام الحفل في الهواء الطلق داخل باحة القلعة، مع توفير مقاعد مريحة للزوار. يعتبر هذا الحدث فرصة فريدة للاستمتاع بالموسيقى في واحدة من أجمل المواقع الأثرية في العالم.",
      organizer: "مديرية الثقافة في حلب",
      contact: "+963 21 123 4567",
      email: "info@castleconcert-aleppo.com",
      website: "www.castleconcert-aleppo.com",
      address: "قلعة حلب, حلب",
      ticketPrice: "2000 ل.س للشخص الواحد",
      startTime: "19:30",
      endTime: "23:00",
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
      longDescription:
        "معرض صور سوريا الجمال هو تظاهرة فنية تهدف إلى إبراز جمال سوريا من خلال عدسة المصورين السوريين. يضم المعرض أكثر من 150 صورة فوتوغرافية التقطت في مختلف أنحاء سوريا، من الجبال إلى السهول، ومن السواحل إلى الصحاري، ومن المواقع الأثرية إلى المدن الحديثة. يشارك في المعرض نخبة من المصورين المحترفين والهواة من جميع المحافظات السورية. يتميز المعرض بإقامة ورش عمل في التصوير الفوتوغرافي يقدمها مصورون محترفون، كما يشمل مسابقة لأفضل صورة يتم اختيارها من قبل لجنة تحكيم متخصصة.",
      organizer: "نادي التصوير الفوتوغرافي في اللاذقية",
      contact: "+963 41 234 5678",
      email: "info@syriabeautyphotography.com",
      website: "www.syriabeautyphotography.com",
      address: "المتحف الوطني, اللاذقية",
      ticketPrice: "500 ل.س للشخص الواحد",
      startTime: "09:00",
      endTime: "19:00",
    },
    {
      id: 12,
      title: "ورشة صناعة الفخار",
      description: "تعلم تقنيات صناعة الفخار التقليدي من الحرفيين المحليين.",
      date: "2024-11-30",
      location: "دمشق",
      category: "handmade",
      image: "https://placehold.co/600x400/2ecc71/ffffff?text=ورشة+فخار",
      longDescription:
        "ورشة صناعة الفخار هي فرصة فريدة لتعلم هذه الحرفة التقليدية العريقة من أيدي خبراء سوريين. تقام الورشة في حي الفخار في دمشق، وتستمر لمدة يومين، حيث يتعلم المشاركون أساسيات صناعة الفخار من تحضير الطين إلى التشكيل والحرق والتزجيج. يتميز البرنامج بتقسيم المشاركين إلى مجموعات صغيرة لضمان حصول كل مشارك على الاهتمام الكافي من المدربين. في نهاية الورشة، يحصل كل مشارك على القطعة التي صنعها كتذكار. تهدف الورشة إلى الحفاظ على هذه الحرفة التقليدية ونقلها للأجيال الجديدة.",
      organizer: "جمعية الحرف اليدوية في دمشق",
      contact: "+963 11 345 6789",
      email: "info@potteryworkshop-damascus.com",
      website: "www.potteryworkshop-damascus.com",
      address: "حي الفخار, دمشق",
      ticketPrice: "2500 ل.س للشخص الواحد",
      startTime: "10:00",
      endTime: "16:00",
    },
    {
      id: 13,
      title: "بطولة كرة القدم المحلية",
      description: "منافسات كرة القدم بين فرق المحافظات المختلفة.",
      date: "2024-12-05",
      location: "حلب",
      category: "sports",
      image: "https://placehold.co/600x400/3498db/ffffff?text=كرة+قدم",
      longDescription:
        "بطولة كرة القدم المحلية هي حدث رياضي كبير يجمع بين فرق كرة القدم من مختلف المحافظات السورية. تقام البطولة على مدار أسبوع كامل في ملعب حلب الدولي، وتضم 16 فريقًا يتنافسون على كأس البطولة. تتميز البطولة بنظام خروج المغلوب، مع إقامة مباراتين يوميًا في أجواء احتفالية حماسية. يحضر البطولة آلاف المشجعين من جميع أنحاء سوريا، مما يخلق جوًا من الحماس والتنافس الشريف. تشمل البطولة أيضًا فعاليات جانبية مثل معرض المنتجات الرياضية وورش عمل تدريبية للأطفال.",
      organizer: "الاتحاد السوري لكرة القدم",
      contact: "+963 21 456 7890",
      email: "info@localsoccerchampionship.com",
      website: "www.localsoccerchampionship.com",
      address: "ملعب حلب الدولي, حلب",
      ticketPrice: "1000 ل.س للشخص الواحد",
      startTime: "15:00",
      endTime: "22:00",
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
      longDescription:
        "حفل أمسيات شعرية هو تظاهرة ثقافية تقام في المسرح الروماني في اللاذقية، وتجمع بين نخبة من شعراء سوريا البارزين. يمتد الحفل على مدار ثلاثة أيام، حيث يقدم كل شاعر قصائده في جو من الأناقة والرقي. تشمل الأمسيات الشعرية قصائد في الحب، الوطن، الطبيعة، والقضايا الإنسانية، مع مراعاة التنوع في الأساليب الشعرية من العمودي إلى التفعيلة إلى النثر. يتميز الحدث بإقامة جلسات نقاشية بين الشعراء والجمهور، كما يشمل معرضًا للكتب الشعرية. يعتبر هذا الحدث فرصة فريدة لعشاق الشعر للاستمتاع بأجمل القصائد في واحدة من أجمل المواقع الأثرية في سوريا.",
      organizer: "اتحاد الكتاب العرب في اللاذقية",
      contact: "+963 41 567 8901",
      email: "info@poetryevenings-latakia.com",
      website: "www.poetryevenings-latakia.com",
      address: "المسرح الروماني, اللاذقية",
      ticketPrice: "800 ل.س للشخص الواحد",
      startTime: "18:00",
      endTime: "22:00",
    },
    {
      id: 15,
      title: "مهرجان الرقص الشعبي",
      description: "عروض للرقص الشعبي السوري من مختلف المناطق والمحافظات.",
      date: "2024-12-18",
      location: "طرطوس",
      category: "music",
      image: "https://placehold.co/600x400/f39c12/ffffff?text=رقص+شعبي",
      longDescription:
        "مهرجان الرقص الشعبي هو تظاهرة فنية تهدف إلى إبراز تنوع التراث الرقصي السوري من مختلف المناطق والمحافظات. يقام المهرجان على مدار يومين في المسرح المكشوف في طرطوس، ويضم فرقًا فلكلورية من جميع أنحاء سوريا. تقدم كل فرقة عروضها الخاصة التي تعكس تراث منطقتها، من الدبكة الشمالية إلى الرقصات الشرقية والجنوبية. يتميز المهرجان بإقامة ورش عمل لتعليم أساسيات الرقص الشعبي السوري، كما يشمل مسابقة لأفضل فرقة فلكلورية. يقام المهرجان في أجواء احتفالية مع إضاءة خاصة وديكورات تقليدية تضفي جوًا من البهجة والفرح.",
      organizer: "مديرية الثقافة في طرطوس",
      contact: "+963 43 678 9012",
      email: "info@folkloredancefestival-tartus.com",
      website: "www.folkloredancefestival-tartus.com",
      address: "المسرح المكشوف, طرطوس",
      ticketPrice: "1200 ل.س للشخص الواحد",
      startTime: "17:00",
      endTime: "23:00",
    },
    {
      id: 16,
      title: "معرض الخط العربي",
      description: "معرض يضم أجمل أعمال الخط العربي من فنانين سوريين معاصرين.",
      date: "2024-12-22",
      location: "دمشق",
      category: "art",
      image: "https://placehold.co/600x400/9b59b6/ffffff?text=خط+عربي",
      longDescription:
        "معرض الخط العربي هو تظاهرة فنية تهدف إلى إبراز جمال فن الخط العربي من خلال أعمال فنانين سوريين معاصرين. يضم المعرض أكثر من 100 لوحة خطية تتنوع بين أنواع الخطوط العربية المختلفة من الكوفي إلى النسخ إلى الثلث إلى الديواني. يشارك في المعرض نخبة من خطاطي سوريا البارزين، كما يشمل أعمالًا لفنانين شباب واعد. يتميز المعرض بإقامة ورش عمل مباشرة في فن الخط العربي يقدمها خطاطون محترفون، حيث يمكن للزوار تعلم أساسيات الخط العربي وتجربة الكتابة بأنفسهم. يعتبر هذا المعرض فرصة فريدة لعشاق الفن الإسلامي للاستمتاع بأجمل الأعمال الخطية في قلب دمشق.",
      organizer: "جمعية الخطاطين في سوريا",
      contact: "+963 11 789 0123",
      email: "info@arabiccalligraphyexhibition.com",
      website: "www.arabiccalligraphyexhibition.com",
      address: "دار الأسد للثقافة والفنون, دمشق",
      ticketPrice: "600 ل.س للشخص الواحد",
      startTime: "09:00",
      endTime: "19:00",
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
      longDescription:
        "سوق التراث هو مهرجان سنوي يقام في مدينة حمص، ويهدف إلى إحياء التراث السوري من خلال عرض المنتجات التقليدية من مختلف المحافظات. يضم السوق أكثر من 80 عارضًا يقدمون منتجات متنوعة تشمل الملابس التراثية، الأدوات المنزلية التقليدية، الألعاب الشعبية، والحرف اليدوية. يتميز السوق بإقامة عروض حية للحرف التقليدية مثل النسيج على المنسج اليدوي، التطريز، وصناعة النحاسيات. كما يشمل السوق فقرات ترفيهية للعائلات مثل عروض الدمى والحكواتي. يقام السوق في أجواء احتفالية مع موسيقى تراثية وأكلات شعبية.",
      organizer: "جمعية التراث السوري في حمص",
      contact: "+963 31 890 1234",
      email: "info@heritagemarket-homs.com",
      website: "www.heritagemarket-homs.com",
      address: "ساحة العاصي, حمص",
      ticketPrice: "دخول مجاني",
      startTime: "10:00",
      endTime: "22:00",
    },
    {
      id: 18,
      title: "بطولة الشطرنج الوطنية",
      description: "منافسات الشطرنج بين أفضل اللاعبين في سوريا.",
      date: "2025-01-05",
      location: "حلب",
      category: "sports",
      image: "https://placehold.co/600x400/3498db/ffffff?text=شطرنج",
      longDescription:
        "بطولة الشطرنج الوطنية هي حدث رياضي ذهني يجمع بين أفضل لاعبي الشطرنج في سوريا من مختلف الأعمار. تقام البطولة على مدار خمسة أيام في فندق بارون في حلب، وتضم 64 لاعبًا يتنافسون في نظام خروج المغلوب. تتميز البطولة بوجود حكام دوليين وإشراف الاتحاد السوري للشطرنج، مع توفير بث حي للمباريات على الإنترنت. يشمل البرنامج فعاليات جانبية مثل محاضرات في استراتيجيات الشطرنج وورش عمل لتعليم أساسيات اللعبة للأطفال. تعتبر البطولة فرصة لعشاق الشطرنج لمشاهدة أفضل اللاعبين في سوريا وهم يتنافسون في أجواء احترافية.",
      organizer: "الاتحاد السوري للشطرنج",
      contact: "+963 21 901 2345",
      email: "info@nationschesschampionship.com",
      website: "www.nationschesschampionship.com",
      address: "فندق بارون, حلب",
      ticketPrice: "700 ل.س للشخص الواحد",
      startTime: "10:00",
      endTime: "18:00",
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
      longDescription:
        "حفل موسيقى كلاسيكية هو تظاهرة فنية راقية تقام في دار الأوبرا في دمشق، وتقدمها الأوركسترا السيمفونية السورية. يضم الحفل أداءً لأشهر المقطوعات الموسيقية الكلاسيكية لمؤلفين عالميين مثل بيتهوفن، موزارت، وتشايكوفسكي، بالإضافة إلى مقطوعات لمؤلفين سوريين. يتميز الحفل بمشاركة فنانين ضيوف من أوروبا، مما يضفي طابعًا دوليًا على الحدث. يقام الحفل في قاعة الأوبرا الفاخرة بدمشق، مع إضاءة خاصة وديكورات أنيقة تضفي جوًا من الرقي والفخامة. يعتبر هذا الحدث فرصة فريدة لعشاق الموسيقى الكلاسيكية للاستمتاع بأجمل المقطوعات في واحدة من أجمل قاعات الأوبرا في المنطقة.",
      organizer: "الأوركسترا السيمفونية السورية",
      contact: "+963 11 012 3456",
      email: "info@classicalmusicconcert-damascus.com",
      website: "www.classicalmusicconcert-damascus.com",
      address: "دار الأوبرا, دمشق",
      ticketPrice: "2500 ل.س للشخص الواحد",
      startTime: "20:00",
      endTime: "23:00",
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
      longDescription:
        "معرض السجاد اليدوي هو تظاهرة فنية وحرفية تقام في مدينة الحسكة، وتهدف إلى إبراز جمال السجاد السوري المصنوع يدويًا. يضم المعرض أكثر من 200 قطعة سجاد من مختلف مناطق سوريا، من السجاد الحلبي المعروف بألوانه الزاهية إلى السجاد الدمشقي بأناقته وفخامته. يشارك في المعرض نخبة من الحرفيين السوريين الذين يعرضون تقنيات صناعة السجاد اليدوي أمام الزوار. يتميز المعرض بإقامة ورش عمل لتعليم أساسيات صناعة السجاد، كما يشمل مسابقة لأجمل قطعة سجاد يتم اختيارها من قبل لجنة تحكيم متخصصة. يعتبر هذا المعرض فرصة فريدة لعشاق الفنون التراثية لاقتناء قطع فريدة من السجاد السوري الأصيل.",
      organizer: "جمعية صناع السجاد في الحسكة",
      contact: "+963 53 123 4567",
      email: "info@handmadecarpetexhibition-hasakah.com",
      website: "www.handmadecarpetexhibition-hasakah.com",
      address: "مركز المعارض, الحسكة",
      ticketPrice: "دخول مجاني",
      startTime: "09:00",
      endTime: "20:00",
    },
  ];

  // Get elements
  const eventsList = document.getElementById("eventsList");
  const eventDetailModal = new bootstrap.Modal(
    document.getElementById("eventDetailModal")
  );
  const eventDetailContent = document.getElementById("eventDetailContent");
  const relatedEventsGrid = document.getElementById("relatedEventsGrid");

  // Initialize the page
  function initPage() {
    // Display events list
    displayEventsList();

    // Display default related events (first 4 events)
    displayDefaultRelatedEvents();
  }

  // Display events list
  function displayEventsList() {
    // Clear events list
    eventsList.innerHTML = "";

    // Display events
    eventsData.forEach((event) => {
      const eventItem = createEventListItem(event);
      eventsList.appendChild(eventItem);
    });
  }

  // Display default related events
  function displayDefaultRelatedEvents() {
    if (!relatedEventsGrid) return;

    // Clear related events grid
    relatedEventsGrid.innerHTML = "";

    // Get first 4 events as default related events
    const defaultRelatedEvents = eventsData.slice(0, 4);

    // Display related events
    defaultRelatedEvents.forEach((event) => {
      const relatedEventCard = createRelatedEventCard(event);
      relatedEventsGrid.appendChild(relatedEventCard);
    });
  }

  // Create event list item element
  function createEventListItem(event) {
    const listItem = document.createElement("div");
    listItem.className = "event-list-item";
    listItem.setAttribute("data-event-id", event.id);

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

    listItem.innerHTML = `
            <div class="event-list-item-content">
                <img src="${event.image}" alt="${event.title}" class="event-list-item-image">
                <div class="event-list-item-info">
                    <h3 class="event-list-item-title">${event.title}</h3>
                    <div class="event-list-item-meta">
                        <div class="event-list-item-date"><i class="bi bi-calendar-event"></i> ${formattedDate}</div>
                        <div class="event-list-item-location"><i class="bi bi-geo-alt"></i> ${event.location}</div>
                        <div class="event-list-item-category ${categoryClass}">${categoryArabic}</div>
                    </div>
                    <p class="event-list-item-description">${event.description}</p>
                </div>
                <div class="event-list-item-arrow">
                    <i class="bi bi-arrow-left"></i>
                </div>
            </div>
        `;

    // Add click event to list item
    listItem.addEventListener("click", function () {
      const eventId = this.getAttribute("data-event-id");
      showEventDetails(eventId);
    });

    return listItem;
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

    // Show related events
    showRelatedEvents(eventId);

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

  // Show related events based on current event
  function showRelatedEvents(currentEventId) {
    const currentEvent = eventsData.find((e) => e.id == currentEventId);
    if (!currentEvent) return;

    const relatedEventsGrid = document.getElementById("relatedEventsGrid");
    if (!relatedEventsGrid) return;

    // Clear related events grid
    relatedEventsGrid.innerHTML = "";

    // Get related events (same category, different location, or same location, different category)
    let relatedEvents = eventsData.filter((event) => {
      return (
        event.id != currentEventId &&
        (event.category === currentEvent.category ||
          event.location === currentEvent.location)
      );
    });

    // If we don't have enough related events, add some random ones
    if (relatedEvents.length < 4) {
      const remainingEvents = eventsData.filter(
        (event) =>
          event.id != currentEventId &&
          !relatedEvents.some((re) => re.id === event.id)
      );

      // Shuffle remaining events
      for (let i = remainingEvents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingEvents[i], remainingEvents[j]] = [
          remainingEvents[j],
          remainingEvents[i],
        ];
      }

      // Add up to 4 more events
      const needed = 4 - relatedEvents.length;
      relatedEvents = relatedEvents.concat(remainingEvents.slice(0, needed));
    }

    // Limit to 4 events
    relatedEvents = relatedEvents.slice(0, 4);

    // Display related events
    relatedEvents.forEach((event) => {
      const relatedEventCard = createRelatedEventCard(event);
      relatedEventsGrid.appendChild(relatedEventCard);
    });
  }

  // Create related event card element
  function createRelatedEventCard(event) {
    const card = document.createElement("div");
    card.className = "related-event-card";
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
            <img src="${event.image}" alt="${event.title}" class="related-event-image">
            <span class="related-event-tag ${categoryClass}">${categoryArabic}</span>
            <div class="related-event-content">
                <h3 class="related-event-title">${event.title}</h3>
                <div class="related-event-date"><i class="bi bi-calendar-event"></i> ${formattedDate}</div>
                <div class="related-event-location"><i class="bi bi-geo-alt"></i> ${event.location}</div>
                <p class="related-event-description">${event.description}</p>
                <button class="related-event-btn view-related-details-btn" data-event-id="${event.id}">عرض التفاصيل</button>
            </div>
        `;

    // Add click event to card
    card.addEventListener("click", function () {
      const eventId = this.getAttribute("data-event-id");
      showEventDetails(eventId);
    });

    // Add click event to button (prevent event bubbling)
    const viewDetailsBtn = card.querySelector(".view-related-details-btn");
    viewDetailsBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const eventId = this.getAttribute("data-event-id");
      showEventDetails(eventId);
    });

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

  // Initialize the page
  initPage();
});

////////////////////////////////////////////////////////////////////////////////  /
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// about-guide.js - JavaScript for About Guide Page

document.addEventListener("DOMContentLoaded", function () {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "المؤسس والمدير التنفيذي",
      bio: "خبير في إدارة الفعاليات الثقافية مع أكثر من 15 عاماً من الخبرة في تنظيم المهرجانات والفعاليات الكبرى في سوريا.",
      image: "https://placehold.co/600x600/e74c3c/ffffff?text=أحمد",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "ليلى حسن",
      role: "مديرة المحتوى",
      bio: "صحفية وكاتبة متخصصة في الثقافة والفنون، مسؤولة عن تطوير المحتوى وضمان جودة المعلومات المقدمة على المنصة.",
      image: "https://placehold.co/600x600/3498db/ffffff?text=ليلى",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "محمود علي",
      role: "مدير التكنولوجيا",
      bio: "مهندس برمجيات متخصص في تطوير المنصات الرقمية، مسؤول عن الجانب التقني للمنصة وتطوير ميزاتها الجديدة.",
      image: "https://placehold.co/600x600/2ecc71/ffffff?text=محمود",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "سارة إبراهيم",
      role: "مديرة التسويق",
      bio: "خبيرة تسويق رقمي مع خبرة في الترويج للفعاليات الثقافية والفنية، مسؤولة عن استراتيجيات التسويق والعلاقات العامة.",
      image: "https://placehold.co/600x600/f39c12/ffffff?text=سارة",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 5,
      name: "عمر خالد",
      role: "مدير الشراكات",
      bio: "متخصص في بناء الشراكات الاستراتيجية مع المؤسسات الثقافية والفنية، مسؤول عن توسيع شبكة شركاء المنصة.",
      image: "https://placehold.co/600x600/9b59b6/ffffff?text=عمر",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  // Get elements
  const teamGrid = document.getElementById("teamGrid");

  // Initialize the page
  function initPage() {
    // Display team members
    displayTeamMembers();

    // Animate elements when they come into view
    animateOnScroll();
  }

  // Display team members
  function displayTeamMembers() {
    // Clear team grid
    teamGrid.innerHTML = "";

    // Display team members
    teamMembers.forEach((member) => {
      const teamMember = createTeamMemberCard(member);
      teamGrid.appendChild(teamMember);
    });
  }

  // Create team member card element
  function createTeamMemberCard(member) {
    const card = document.createElement("div");
    card.className = "team-member";
    card.setAttribute("data-member-id", member.id);

    card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="team-member-image">
            <div class="team-member-overlay">
                <h3 class="team-member-name">${member.name}</h3>
                <div class="team-member-role">${member.role}</div>
                <p class="team-member-bio">${member.bio}</p>
                <div class="team-member-social">
                    <a href="${member.social.facebook}" class="team-member-social-link"><i class="bi bi-facebook"></i></a>
                    <a href="${member.social.twitter}" class="team-member-social-link"><i class="bi bi-twitter"></i></a>
                    <a href="${member.social.linkedin}" class="team-member-social-link"><i class="bi bi-linkedin"></i></a>
                    <a href="${member.social.instagram}" class="team-member-social-link"><i class="bi bi-instagram"></i></a>
                </div>
            </div>
        `;

    return card;
  }

  // Animate elements when they come into view
  function animateOnScroll() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe mission cards
    const missionCards = document.querySelectorAll(".mission-card");
    missionCards.forEach((card) => {
      observer.observe(card);
    });

    // Observe value cards
    const valueCards = document.querySelectorAll(".value-card");
    valueCards.forEach((card) => {
      observer.observe(card);
    });

    // Observe team members
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach((member) => {
      observer.observe(member);
    });

    // Observe policy cards
    const policyCards = document.querySelectorAll(
      ".policy-card, .general-policy-card"
    );
    policyCards.forEach((card) => {
      observer.observe(card);
    });
  }

  // Initialize the page
  initPage();
});

////////////////////////////////////////////////////////////////////////////////  /
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// contact.js - JavaScript for Contact Page
// contact.js - JavaScript for Contact Page

document.addEventListener("DOMContentLoaded", function () {
  // Sample events data for ticket booking validation
  const validEvents = [
    "مهرجان دمشق الثقافي",
    "معرض حلب للفنون",
    "سوق حمص للمنتجات اليدوية",
    "ماراثون طرطوس الدولي",
    "مهرجان اللاذقية الموسيقي",
    "ندوة حول التراث السوري",
    "ورشة الرسم بالحبر",
    "سباق الدراجات الهوائية",
    "سوق المنتجات الغذائية",
    "ليلة موسيقية في القلعة",
    "معرض صور سوريا الجمال",
    "ورشة صناعة الفخار",
    "بطولة كرة القدم المحلية",
    "حفل أمسيات شعرية",
    "مهرجان الرقص الشعبي",
    "معرض الخط العربي",
    "سوق التراث",
    "بطولة الشطرنج الوطنية",
    "حفل موسيقى كلاسيكية",
    "معرض السجاد اليدوي",
  ];

  // Get form elements
  const contactForm = document.getElementById("contactForm");
  const ticketForm = document.getElementById("ticketForm");
  const eventNameInput = document.getElementById("eventName");

  // Initialize the page
  function initPage() {
    // Add event listeners to forms
    if (contactForm) {
      contactForm.addEventListener("submit", handleContactFormSubmit);
    }

    if (ticketForm) {
      ticketForm.addEventListener("submit", handleTicketFormSubmit);
    }

    // Add input validation for event name
    if (eventNameInput) {
      eventNameInput.addEventListener("input", validateEventName);
    }
  }

  // Handle contact form submission
  function handleContactFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form
    if (!name || !email || !subject || !message) {
      showAlert("يرجى ملء جميع الحقول المطلوبة", "danger", contactForm);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("يرجى إدخال بريد إلكتروني صحيح", "danger", contactForm);
      return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML =
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري الإرسال...';

    // Simulate form submission with setTimeout
    setTimeout(() => {
      // Reset button state
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;

      // Show success message
      showAlert(
        "تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت ممكن.",
        "success",
        contactForm
      );

      // Reset form after success
      contactForm.reset();

      // Remove validation classes
      document
        .getElementById("name")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("email")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("subject")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("message")
        .classList.remove("is-valid", "is-invalid");
    }, 1500);
  }

  // Handle ticket form submission
  function handleTicketFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const eventName = document.getElementById("eventName").value.trim();
    const ticketName = document.getElementById("ticketName").value.trim();
    const ticketEmail = document.getElementById("ticketEmail").value.trim();
    const ticketCount = document.getElementById("ticketCount").value;

    // Validate form
    if (!eventName || !ticketName || !ticketEmail || !ticketCount) {
      showAlert("يرجى ملء جميع الحقول المطلوبة", "danger", ticketForm);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(ticketEmail)) {
      showAlert("يرجى إدخال بريد إلكتروني صحيح", "danger", ticketForm);
      return;
    }

    // Validate event name
    if (!validEvents.includes(eventName)) {
      showAlert(
        "الفعالية المحددة غير موجودة. يرجى اختيار فعالية من القائمة.",
        "danger",
        ticketForm
      );
      return;
    }

    // Validate ticket count
    if (ticketCount < 1 || ticketCount > 10) {
      showAlert("عدد التذاكر يجب أن يكون بين 1 و 10", "danger", ticketForm);
      return;
    }

    // Show loading state
    const submitButton = ticketForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML =
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري الحجز...';

    // Simulate ticket booking with setTimeout
    setTimeout(() => {
      // Reset button state
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;

      // Show success message
      showAlert(
        `تم حجز ${ticketCount} تذكرة لفعالية "${eventName}" بنجاح! سيتم إرسال التفاصيل إلى بريدك الإلكتروني.`,
        "success",
        ticketForm
      );

      // Reset form after success
      ticketForm.reset();

      // Remove validation classes
      document
        .getElementById("eventName")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("ticketName")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("ticketEmail")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("ticketCount")
        .classList.remove("is-valid", "is-invalid");
    }, 1500);
  }

  // Validate event name as user types
  function validateEventName() {
    const eventName = eventNameInput.value.trim();

    // Clear any previous validation
    eventNameInput.classList.remove("is-valid", "is-invalid");

    if (eventName === "") {
      return;
    }

    // Check if event name exists in valid events
    if (validEvents.includes(eventName)) {
      eventNameInput.classList.add("is-valid");
    } else {
      eventNameInput.classList.add("is-invalid");
    }
  }

  // Show alert message
  function showAlert(message, type, formElement) {
    // Remove any existing alerts
    const existingAlerts = formElement.querySelectorAll(".alert");
    existingAlerts.forEach((alert) => alert.remove());

    // Create alert element
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = "alert";
    alertDiv.innerHTML = `
            <div class="d-flex align-items-center">
                ${
                  type === "success"
                    ? '<i class="bi bi-check-circle-fill me-2"></i>'
                    : '<i class="bi bi-exclamation-triangle-fill me-2"></i>'
                }
                <div>${message}</div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

    // Insert alert after the form header or at the beginning of the form
    const formHeader = formElement.querySelector(".section-header");
    if (formHeader) {
      formHeader.parentNode.insertBefore(alertDiv, formHeader.nextSibling);
    } else {
      formElement.insertBefore(alertDiv, formElement.firstChild);
    }

    // Auto-dismiss after 5 seconds for success messages
    if (type === "success") {
      setTimeout(() => {
        const bsAlert = new bootstrap.Alert(alertDiv);
        bsAlert.close();
      }, 5000);
    }
  }

  // Initialize the page
  initPage();
});
