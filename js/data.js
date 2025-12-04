// Portfolio Data Configuration
// Edit data di file ini untuk mengubah konten portfolio

const portfolioData = {
  // Site Info
  site: {
    title: "Fitria Fatimah - Fashion Designer Portfolio",
    brandName: "Fitria Fatimahs",
  },

  // Navigation
  navigation: {
    left: [
      { text: "Home", href: "#home" },
      { text: "About", href: "#about" },
      { text: "Skills", href: "#skill" },
      { text: "Services", href: "#service" },
    ],
    right: [
      { text: "Projects", href: "#project" },
      { text: "Contact", href: "#contact" },
    ],
  },

  // Header/Hero Section
  header: {
    prefix: "I'm",
    name: "Fitria Fatimahs",
    typedText: [
      "Fashion Designer",
      "Fashion Stylist",
      "Creative Director",
      "Fashion Consultant",
      "Design Consultant",
    ],
    cvLink: "",
    musicUrl: "audio/free.mp3", // Path ke file musik Anda (contoh: audio/music.mp3)
    musicTitle: "Background Music", // Judul musik (opsional)
    profileImage: "img/profile.png",
  },

  // About Section
  about: {
    years: 15,
    yearsLabel: "Years",
    experience: "of working experience as a fashion designer",
    description:
      "Passionate fashion designer with expertise in creating innovative and stylish designs. Specialized in contemporary fashion, ready-to-wear collections, and custom designs that reflect individuality and elegance.",
    features: [
      "Custom Design Services",
      "High Quality Materials",
      "On Time Delivery",
    ],
    readMoreLink: "",
    images: ["img/about-1.jpg", "img/about-2.jpg"],
    stats: [
      {
        label: "Happy Clients",
        value: 1234,
        description:
          "Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.",
      },
      {
        label: "Projects Completed",
        value: 1234,
        description:
          "Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.",
      },
    ],
  },

  // Skills Section
  skills: {
    title: "Skills & Experience",
    description:
      "Expertise in fashion design, pattern making, textile selection, and trend forecasting. Specialized in creating unique designs that blend contemporary style with timeless elegance.",
    mySkillsTitle: "My Skills",
    skills: [
      { name: "Fashion Design", percentage: 95, color: "bg-primary" },
      { name: "Pattern Making", percentage: 90, color: "bg-warning" },
      { name: "Textile Selection", percentage: 85, color: "bg-danger" },
      { name: "Trend Forecasting", percentage: 90, color: "bg-danger" },
      { name: "Fashion Illustration", percentage: 95, color: "bg-dark" },
      { name: "Styling", percentage: 88, color: "bg-info" },
    ],
    experience: [
      {
        title: "Senior Fashion Designer",
        period: "2015 - Present",
        company: "Fashion House",
      },
      {
        title: "Fashion Designer",
        period: "2010 - 2015",
        company: "Design Studio",
      },
      {
        title: "Junior Designer",
        period: "2008 - 2010",
        company: "Fashion Brand",
      },
      {
        title: "Design Assistant",
        period: "2005 - 2008",
        company: "Fashion Company",
      },
    ],
    education: [
      {
        title: "Fashion Design Degree",
        period: "2001 - 2005",
        company: "Fashion Institute",
      },
      {
        title: "Textile Design Course",
        period: "2003 - 2004",
        company: "Design Academy",
      },
      {
        title: "Pattern Making Certification",
        period: "2004",
        company: "Fashion School",
      },
      {
        title: "Fashion Styling Workshop",
        period: "2005",
        company: "Style Academy",
      },
    ],
  },

  // Services Section
  services: {
    title: "My Services",
    hireMeLink: "",
    items: [
      {
        icon: "fa fa-cut",
        title: "Custom Fashion Design",
        price: 299,
        description:
          "Personalized fashion design services tailored to your style and preferences. From concept to creation, I bring your vision to life.",
      },
      {
        icon: "fa fa-palette",
        title: "Fashion Styling",
        price: 199,
        description:
          "Professional styling services for events, photoshoots, and personal wardrobe. Create stunning looks that reflect your personality.",
      },
      {
        icon: "fa fa-tshirt",
        title: "Ready-to-Wear Collection",
        price: 149,
        description:
          "Contemporary ready-to-wear collections featuring modern designs with timeless elegance. Perfect for everyday style.",
      },
      {
        icon: "fa fa-gem",
        title: "Fashion Consultation",
        price: 99,
        description:
          "Expert fashion consultation to help you discover your personal style and build a wardrobe that suits your lifestyle.",
      },
    ],
  },

  // Projects Section
  projects: {
    title: "My Projects",
    filters: [
      { text: "All Projects", filter: "*", active: true },
      { text: "Fashion Collection", filter: ".first", active: false },
      { text: "Custom Design", filter: ".second", active: false },
    ],
    items: [
      {
        image: "img/project-1.jpg",
        category: "first",
        lightbox: "img/project-1.jpg",
        link: "",
      },
      {
        image: "img/project-2.jpg",
        category: "second",
        lightbox: "img/project-2.jpg",
        link: "",
      },
      {
        image: "img/project-3.jpg",
        category: "first",
        lightbox: "img/project-3.jpg",
        link: "",
      },
      {
        image: "img/project-4.jpg",
        category: "second",
        lightbox: "img/project-4.jpg",
        link: "",
      },
      {
        image: "img/project-5.jpg",
        category: "first",
        lightbox: "img/project-5.jpg",
        link: "",
      },
      {
        image: "img/project-6.jpg",
        category: "second",
        lightbox: "img/project-6.jpg",
        link: "",
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Let's Work Together",
    sayHelloLink: "",
    office: "123 Street, New York, USA",
    phone: "+012 345 6789",
    email: "info@example.com",
    socialLinks: [
      { icon: "fab fa-twitter", url: "" },
      { icon: "fab fa-facebook-f", url: "" },
      { icon: "fab fa-youtube", url: "" },
      { icon: "fab fa-linkedin-in", url: "" },
    ],
    formNote:
      'The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you\'re done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.',
  },

  // Map Section
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd",
  },

  // Footer Section
  footer: {
    siteName: "Fitria Fatimah",
    siteLink: "#",
    designedBy: "HTML Codex",
    designedByLink: "https://htmlcodex.com",
    distributedBy: "ThemeWagon",
    distributedByLink: "https://themewagon.com",
  },
};
