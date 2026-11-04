/**
 * NATIONAL SERVICE SCHEME (NSS) - MNIT JAIPUR
 * Main Interactive Application Script
 * Motto: "NOT ME, BUT YOU"
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ========================================================================
  // 1. Data Store for Activities & Events
  // ========================================================================
  const activitiesData = {
    'act-1': {
      title: 'Mega Campus Cleanliness & Plogging Drive',
      category: 'Cleanliness Drives',
      date: 'Weekly Campaign (Saturdays)',
      venue: 'MNIT Campus & JLN Marg Environs',
      impact: '150+ kgs waste segregated & recycled',
      volunteers: '220+ Volunteers Participated',
      image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/cleanliness.svg',
      description: 'Under the banner of Swachh Bharat Abhiyan and Swachhta Hi Seva, NSS MNIT volunteers organize structured weekly cleanliness drives. Teams collect non-biodegradable waste, promote source segregation, clean hostel surroundings, and conduct door-to-door awareness for shopkeepers and local vendors on plastic reduction.',
      highlights: [
        'Segregation of dry, wet, and plastic waste in coordination with Jaipur Municipal Corporation',
        'Distribution of jute bags to local fruit vendors on JLN Marg',
        'Cleanliness audit and beautification of campus green spaces'
      ]
    },
    'act-2': {
      title: 'Van Mahotsav & Campus Tree Census',
      category: 'Plantation Drives',
      date: 'Bi-Monthly Seasonal Drive',
      venue: 'Prabha Bhawan Lawn & Herbal Garden',
      impact: '1,200+ Indigenous saplings planted',
      volunteers: '300+ Student Volunteers',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/plantation.svg',
      description: 'In accordance with the Mission LiFE objectives, the NSS unit conducted an extensive mass plantation drive. Volunteers planted drought-resistant indigenous trees such as Neem, Peepal, and Khejri. Each tree was assigned a digital QR code tag and an adopter volunteer for dedicated watering and maintenance.',
      highlights: [
        'Plantation of 1,200+ saplings across the sports complex and residential quarters',
        'Creation of a medicinal herbal garden near the dispensary',
        'Geo-tagging and tree health tracking system initiated by student volunteers'
      ]
    },
    'act-3': {
      title: 'Annual Blood Donation Mega Camp',
      category: 'Blood Donation Camps',
      date: 'Annual Flagship Camp',
      venue: 'Student Activity Centre (SAC)',
      impact: '750+ Units of blood collected in single day',
      volunteers: '800+ Donors & Volunteers',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/blood-donation.svg',
      description: 'Recognized as one of the largest single-day collegiate blood donation drives in Rajasthan, organized in collaboration with SMS Hospital Blood Bank and Red Cross Society. Comprehensive medical checkups, hemoglobin tests, and refreshments were provided to every donor.',
      highlights: [
        'Dedicated donor counselling and immediate rare blood group donor registry creation',
        'Zero-waste management during the entire 8-hour drive',
        'Special certificate of appreciation and memento awarded to all donors'
      ]
    },
    'act-4': {
      title: 'Project Prerna: Evening Classes for Children',
      category: 'Educational Outreach',
      date: 'Ongoing (Monday to Friday)',
      venue: 'VLTC Tutorial Classrooms',
      impact: '180+ Underprivileged children taught daily',
      volunteers: '60+ Regular Volunteer Teachers',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/education.svg',
      description: 'Project Prerna is an exemplary student-run educational initiative providing free holistic coaching, moral science, digital literacy, and basic mathematics to children of construction workers, campus housekeeping staff, and nearby slums.',
      highlights: [
        'Structured syllabus covering STEM, Hindi, English, and Arts',
        'Annual stationery, notebook, and school bag distribution drive',
        'Weekly co-curricular workshops including yoga, painting, and public speaking'
      ]
    },
    'act-5': {
      title: 'Gram Utthan: Adopted Village Transformation',
      category: 'Community Service',
      date: 'Quarterly Field Immersions',
      venue: 'Adopted Villages near Jaipur Rural',
      impact: '4 Villages surveyed & supported',
      volunteers: '110+ Field Volunteers',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/community.svg',
      description: 'Under the Unnat Bharat and NSS collaborative mandate, volunteers regularly visit adopted villages to conduct socio-economic surveys, promote water conservation through rainwater recharging, and demonstrate solar energy alternatives.',
      highlights: [
        'Free eye and dental checkup camp in coordination with medical teams',
        'Demonstration of smokeless chulhas and organic vermicomposting pits',
        'Digital literacy camp teaching digital payments and government welfare schemes'
      ]
    },
    'act-6': {
      title: 'Mission LiFE: Energy & Plastic-Free Campaign',
      category: 'Awareness Campaigns',
      date: 'Fortnightly Campaign',
      venue: 'Hostels, Departments & Canteens',
      impact: '40% reduction in single-use cutlery in canteens',
      volunteers: '140+ Volunteers',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/sustainability.svg',
      description: 'An aggressive lifestyle-for-environment advocacy program aiming to make the MNIT Jaipur campus a model zero-single-use-plastic zone. Interactive street plays (Nukkad Natak), energy-saving stickers, and cycle-to-work challenges were organized.',
      highlights: [
        'Street plays (Nukkad Natak) performed at Annapurna Canteen and SAC steps',
        'Night hostel power-saving audit saving over 15% standby electricity',
        'Installation of bird feeders and clay water pots across campus trees'
      ]
    },
    'act-7': {
      title: 'National Road Safety Awareness Rally',
      category: 'Awareness Campaigns',
      date: 'Road Safety Week',
      venue: 'JLN Marg & Malviya Nagar Traffic Circles',
      impact: '2,500+ Commuters sensitized',
      volunteers: '180+ Volunteers with Jaipur Police',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/community.svg',
      description: 'Collaborating with Jaipur Traffic Police, volunteers presented flowers and safety brochures to motorists following traffic guidelines, while conducting live demonstrations on emergency CPR and golden-hour accident assistance.',
      highlights: [
        'Human chain formation along JLN Marg displaying road safety slogans',
        'Free helmet distribution to pillion riders and cyclists',
        'Interactive quiz and pledge counter set up at Gaurav Tower junction'
      ]
    },
    'act-8': {
      title: 'Cloth & Winter Warmth Donation Drive',
      category: 'Community Service',
      date: 'Annual Winter Initiative',
      venue: 'Hostels Collection Desks & Slum Clusters',
      impact: '3,200+ Blankets and warm clothes distributed',
      volunteers: '95+ Sorting & Distribution Volunteers',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/community.svg',
      description: 'Every winter, NSS MNIT activates donation boxes across all hostels, faculty residences, and administrative offices. Student volunteers wash, sort, sanitize, and pack clothes by size and age group before delivering them to homeless shelters and rural clusters in freezing temperatures.',
      highlights: [
        'Door-to-door voluntary collection from MNIT faculty and staff quarters',
        'Strict hygiene inspection and segregation of winter wear',
        'Night distribution drive for pavement dwellers near railway stations and hospitals'
      ]
    }
  };

  const eventsData = {
    'ev-1': {
      title: 'Annual Mega Blood Donation Camp 2026',
      status: 'Upcoming',
      date: 'November 14, 2026',
      time: '09:00 AM - 05:00 PM',
      venue: 'Student Activity Centre (SAC), MNIT Jaipur',
      category: 'Health & Voluntary Aid',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/event-poster-1.svg',
      description: 'The premier annual humanitarian event of MNIT Jaipur. Partnering with SMS Hospital Blood Bank and Rotary Blood Bank, this camp offers an opportunity to donate blood and register as stem cell and platelet donors.',
      schedule: [
        '08:30 AM: Inauguration by Honorable Director, MNIT Jaipur',
        '09:00 AM - 01:00 PM: General Donor Screening & Morning Batch Donations',
        '01:00 PM - 02:00 PM: Refreshments & Donor Appreciation Session',
        '02:00 PM - 05:00 PM: Evening Batch Donations & Token Distribution'
      ],
      coordinator: 'Dr. Faculty Coordinator, NSS MNIT Jaipur (Ph: +91 141 2529078)'
    },
    'ev-2': {
      title: 'Swachhta Hi Seva: Mega Plogging Challenge',
      status: 'Upcoming',
      date: 'November 22, 2026',
      time: '07:00 AM - 11:00 AM',
      venue: 'MNIT Main Gate to Malviya Nagar Flyover',
      category: 'Cleanliness Drive',
      image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/event-poster-2.svg',
      description: 'Combine fitness with community service! Plogging brings together jogging and trash pickup. Participants will be provided eco-friendly gloves, jute collection bags, and certificates upon completion.',
      schedule: [
        '06:45 AM: Reporting at Main Gate Flag Post',
        '07:00 AM: Swachhta Pledge and Warmup Session',
        '07:30 AM: Zone-wise Plogging and Plastic Segregation',
        '10:30 AM: Weighing of Collected Recyclables & High-Tea'
      ],
      coordinator: 'Student Core Team Lead (Cleanliness Wing)'
    },
    'ev-3': {
      title: 'National Youth Day: Leadership & Social Innovation',
      status: 'Upcoming',
      date: 'January 12, 2027',
      time: '10:00 AM - 04:00 PM',
      venue: 'Radhakrishnan Auditorium, MNIT Jaipur',
      category: 'Symposium & Cultural',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/about-nss.svg',
      description: 'Commemorating the birth anniversary of Swami Vivekananda, featuring guest lectures by eminent social reformers, a state-level debate on youth in nation-building, and felicitation of outstanding NSS volunteers.',
      schedule: [
        '10:00 AM: Lamp Lighting & Floral Tributes to Swami Vivekananda',
        '10:45 AM: Keynote Address by Distinguished Guest Speaker',
        '01:30 PM: Inter-College Debate Competition: "Youth & Sustainable India"',
        '03:30 PM: NSS Annual Volunteer Excellence Awards Presentation'
      ],
      coordinator: 'NSS Program Officer & Cultural Affairs Team'
    },
    'ev-4': {
      title: 'Fit India Cyclothon & Green Campus Rally',
      status: 'Past',
      date: 'September 24, 2026',
      time: '06:30 AM - 09:30 AM',
      venue: 'Campus Ring Road, MNIT Jaipur',
      category: 'Health & Fitness',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/sustainability.svg',
      description: 'On NSS Foundation Day (September 24), more than 350 faculty, staff, and students pedaled 15 kilometers across the campus perimeter to promote non-motorized transport and cardiovascular fitness.',
      schedule: [
        'Flag-off by Dean of Student Welfare',
        '15km campus ring ride with safety escort marshals',
        'Fruit and electrolyte distribution at SAC terminus'
      ],
      coordinator: 'Sports & Wellness Wing, NSS MNIT'
    },
    'ev-5': {
      title: 'Prerna Science Exhibition for School Children',
      status: 'Past',
      date: 'August 15, 2026',
      time: '10:30 AM - 03:00 PM',
      venue: 'VLTC Atrium, MNIT Jaipur',
      category: 'Educational Outreach',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/education.svg',
      description: 'Over 120 children enrolled in Project Prerna displayed hands-on science working models built using recycled materials under the mentorship of B.Tech students.',
      schedule: [
        'Model demonstration of hydraulic lifts, solar cookers, and periscopes',
        'Interactive magic of chemistry experiments by faculty mentors',
        'Prize distribution and distribution of geometry kits'
      ],
      coordinator: 'Project Prerna Student Leads'
    },
    'ev-6': {
      title: 'Jal Shakti & Rainwater Harvesting Awareness',
      status: 'Past',
      date: 'July 10, 2026',
      time: '09:00 AM - 01:00 PM',
      venue: 'Civil Engineering Department & Slum Clusters',
      category: 'Water Conservation',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      fallbackImg: 'assets/images/sustainability.svg',
      description: 'Workshops demonstrating low-cost rooftop rainwater harvesting models, prevention of water leakage, and revival of traditional stepwells (Baoris) in Rajasthan.',
      schedule: [
        'Expert keynote on Rajasthan ground water recharge techniques',
        'Physical inspection of campus rooftop catchment systems',
        'Community flyer distribution in nearby residential societies'
      ],
      coordinator: 'Environmental Cell, NSS MNIT'
    }
  };

  // Gallery items metadata for Lightbox
  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1200&q=80',
      fallback: 'assets/images/cleanliness.svg',
      title: 'Swachh Bharat Cleanliness Drive',
      category: 'Cleanliness',
      caption: 'Student volunteers clearing non-biodegradable waste around MNIT campus perimeter.'
    },
    {
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
      fallback: 'assets/images/plantation.svg',
      title: 'Plantation of Indigenous Trees',
      category: 'Plantation',
      caption: 'Volunteers nurturing young saplings during the Van Mahotsav celebration.'
    },
    {
      src: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80',
      fallback: 'assets/images/blood-donation.svg',
      title: 'Annual Blood Donation Camp',
      category: 'Blood Donation',
      caption: 'SAC hall filled with enthusiastic student and faculty blood donors.'
    },
    {
      src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
      fallback: 'assets/images/education.svg',
      title: 'Project Prerna Evening Classroom',
      category: 'Education',
      caption: 'Interactive mathematics and science tutoring for children from nearby rural clusters.'
    },
    {
      src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      fallback: 'assets/images/community.svg',
      title: 'Road Safety Awareness Rally',
      category: 'Awareness',
      caption: 'Spreading life-saving road etiquette alongside Jaipur Traffic Police officers.'
    },
    {
      src: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
      fallback: 'assets/images/sustainability.svg',
      title: 'Mission LiFE Street Theatre',
      category: 'Awareness',
      caption: 'Engaging Nukkad Natak highlighting single-use plastic eradication at canteen lawns.'
    },
    {
      src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
      fallback: 'assets/images/community.svg',
      title: 'Rural Village Health Camp',
      category: 'Community',
      caption: 'Facilitating medical diagnostics and hygiene kits in adopted villages.'
    },
    {
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
      fallback: 'assets/images/community.svg',
      title: 'Winter Warmth Clothes Distribution',
      category: 'Community',
      caption: 'Delivering collected warm blankets to shelter homes across Jaipur.'
    },
    {
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
      fallback: 'assets/images/about-nss.svg',
      title: 'NSS Orientation & Volunteer Pledge',
      category: 'Celebration',
      caption: 'Fresh batch of volunteers taking the sacred NSS pledge "NOT ME, BUT YOU".'
    }
  ];

  // ========================================================================
  // 2. Navigation Bar: Sticky & Active Section Highlighting
  // ========================================================================
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const backToTopBtn = document.querySelector('.back-to-top');

  // Sticky Navbar State
  const handleScrollNavbar = () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScrollNavbar, { passive: true });
  handleScrollNavbar(); // Initial check

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      const isExpanded = mobileToggle.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      }
    });
  }

  // Active Section Highlighting (ScrollSpy)
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // Back-to-Top Button Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========================================================================
  // 3. Scroll Reveal Animations
  // ========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));

  // ========================================================================
  // 4. Animated Statistics Counters
  // ========================================================================
  const counterElements = document.querySelectorAll('.counter-number');
  let countersAnimated = false;

  const animateCounters = () => {
    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function: easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeProgress * target);

        counter.textContent = currentCount.toLocaleString() + '+';

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target.toLocaleString() + '+';
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const counterSection = document.getElementById('impact');
  if (counterSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
        }
      });
    }, { threshold: 0.25 });

    counterObserver.observe(counterSection);
  }

  // ========================================================================
  // 5. Activity Category Filtering
  // ========================================================================
  const activityFilterBtns = document.querySelectorAll('.activity-filter-btn');
  const activityCards = document.querySelectorAll('.activity-card');

  activityFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activityFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      activityCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // ========================================================================
  // 6. Events Tab Switching (Upcoming vs Past)
  // ========================================================================
  const eventTabBtns = document.querySelectorAll('.event-tab-btn');
  const eventCards = document.querySelectorAll('.event-card');

  eventTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      eventTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetStatus = btn.getAttribute('data-tab');

      eventCards.forEach(card => {
        const status = card.getAttribute('data-status');
        if (status === targetStatus) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // ========================================================================
  // 7. Team Tab Filtering (Faculty vs Students vs Executive)
  // ========================================================================
  const teamTabBtns = document.querySelectorAll('.team-tab-btn');
  const teamCards = document.querySelectorAll('.team-card');

  teamTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      teamTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const teamCategory = btn.getAttribute('data-team');

      teamCards.forEach(card => {
        const cardTeam = card.getAttribute('data-team');
        if (teamCategory === 'all' || cardTeam === teamCategory) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // ========================================================================
  // 8. Gallery Filtering & Lightbox
  // ========================================================================
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItemsEls = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentGalleryIndex = 0;
  let activeGalleryIndices = galleryItems.map((_, i) => i);

  // Gallery Filters
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      activeGalleryIndices = [];

      galleryItemsEls.forEach((item, idx) => {
        const cat = item.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          item.style.display = 'block';
          activeGalleryIndices.push(idx);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  const showLightboxImage = (index) => {
    if (activeGalleryIndices.length === 0) return;
    currentGalleryIndex = index;
    const realItemIndex = activeGalleryIndices[currentGalleryIndex];
    const data = galleryItems[realItemIndex];

    if (!data) return;

    lightboxImg.src = data.src;
    lightboxImg.onerror = function() {
      this.onerror = null;
      this.src = data.fallback;
    };
    lightboxCaption.textContent = data.title + ' — ' + data.caption;
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${activeGalleryIndices.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  const prevLightbox = () => {
    if (activeGalleryIndices.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + activeGalleryIndices.length) % activeGalleryIndices.length;
    showLightboxImage(currentGalleryIndex);
  };

  const nextLightbox = () => {
    if (activeGalleryIndices.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % activeGalleryIndices.length;
    showLightboxImage(currentGalleryIndex);
  };

  galleryItemsEls.forEach((el, index) => {
    el.addEventListener('click', () => {
      const activeIdx = activeGalleryIndices.indexOf(index);
      if (activeIdx !== -1) {
        showLightboxImage(activeIdx);
      } else {
        showLightboxImage(0);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // ========================================================================
  // 9. Modals (Activity Details & Event Details)
  // ========================================================================
  const universalModal = document.getElementById('details-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-img');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalMetaBox = document.getElementById('modal-meta-box');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlightsTitle = document.getElementById('modal-highlights-title');
  const modalHighlightsList = document.getElementById('modal-highlights-list');

  const openActivityModal = (id) => {
    const data = activitiesData[id];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.onerror = function() {
      this.onerror = null;
      this.src = data.fallbackImg;
    };
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;

    modalMetaBox.innerHTML = `
      <div class="modal-meta-item"><i class="fa-regular fa-calendar-check"></i> ${data.date}</div>
      <div class="modal-meta-item"><i class="fa-solid fa-location-dot"></i> ${data.venue}</div>
      <div class="modal-meta-item"><i class="fa-solid fa-users"></i> ${data.volunteers}</div>
      <div class="modal-meta-item"><i class="fa-solid fa-chart-line"></i> ${data.impact}</div>
    `;

    modalDesc.textContent = data.description;
    modalHighlightsTitle.textContent = 'Key Initiatives & Outcomes';
    modalHighlightsList.innerHTML = data.highlights
      .map(item => `<li><i class="fa-solid fa-circle-check"></i> <span>${item}</span></li>`)
      .join('');

    universalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const openEventModal = (id) => {
    const data = eventsData[id];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.onerror = function() {
      this.onerror = null;
      this.src = data.fallbackImg;
    };
    modalCategory.textContent = `${data.status} Event • ${data.category}`;
    modalTitle.textContent = data.title;

    modalMetaBox.innerHTML = `
      <div class="modal-meta-item"><i class="fa-regular fa-calendar"></i> ${data.date}</div>
      <div class="modal-meta-item"><i class="fa-regular fa-clock"></i> ${data.time}</div>
      <div class="modal-meta-item"><i class="fa-solid fa-location-dot"></i> ${data.venue}</div>
      <div class="modal-meta-item"><i class="fa-solid fa-user-tie"></i> ${data.coordinator}</div>
    `;

    modalDesc.textContent = data.description;
    modalHighlightsTitle.textContent = 'Program Schedule & Information';
    modalHighlightsList.innerHTML = data.schedule
      .map(item => `<li><i class="fa-solid fa-circle-arrow-right"></i> <span>${item}</span></li>`)
      .join('');

    universalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (universalModal) universalModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (universalModal) {
    universalModal.addEventListener('click', (e) => {
      if (e.target === universalModal) closeModal();
    });
  }

  // Activity Details Buttons Listener
  document.querySelectorAll('.view-activity-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      openActivityModal(id);
    });
  });

  // Event Details Buttons Listener
  document.querySelectorAll('.view-event-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      openEventModal(id);
    });
  });

  // Global Keyboard Listener (Escape to close modals / arrow keys for lightbox)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeModal();
    } else if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    }
  });

  // ========================================================================
  // 10. Contact & Volunteer Form Submission (mailto Handler & Toast)
  // ========================================================================
  const contactForm = document.getElementById('nss-contact-form');
  const toastNotification = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  const showToast = (message, duration = 4000) => {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotification.classList.add('active');
    setTimeout(() => {
      toastNotification.classList.remove('active');
    }, duration);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const phone = document.getElementById('contact-phone').value.trim();
      const subjectCategory = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields (Name, Email, Message).');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address (e.g. name@domain.com).');
        return;
      }

      if (phone && !/^[0-9+\-\s()]{7,20}$/.test(phone)) {
        showToast('Please enter a valid mobile number or leave it blank.');
        return;
      }

      // Prepare mailto URI
      const mailtoSubject = encodeURIComponent(`[NSS MNIT Inquiry - ${subjectCategory}] from ${name}`);
      const mailtoBody = encodeURIComponent(
        `Dear NSS MNIT Jaipur Team,\n\n` +
        `Sender Details:\n` +
        `-------------------------\n` +
        `Full Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'Not provided'}\n` +
        `Interest Category: ${subjectCategory}\n\n` +
        `Message:\n` +
        `${message}\n\n` +
        `Sent via NSS MNIT Official Website.`
      );

      const mailtoUrl = `mailto:nss@mnit.ac.in?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Open mailto link
      window.location.href = mailtoUrl;

      showToast('Thank you! Opening your email app. If it does not launch, please email nss@mnit.ac.in directly.');
      contactForm.reset();
    });
  }

  // Smooth scroll for anchor links with dynamic navbar offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 72;
        const targetY = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
        if (history.pushState) {
          history.pushState(null, '', targetId);
        }
      }
    });
  });

});
