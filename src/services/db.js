/**
 * LocalStorage Mock Database Service for MISSINDIA CMS.
 * Simulates CRUD operations for gallery_images, contact_enquiries, and admin sessions.
 */

// Seed Data for 10 Gallery Slots
const DEFAULT_GALLERY_IMAGES = [
  {
    id: 1,
    title: "Imperial Floral Arch",
    imageUrl: {
      original: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
      medium: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=65"
    },
    slotNumber: 1,
    category: "Weddings",
    altText: "Luxury wedding stage floral design",
    description: "Custom designed wedding reception stage in Coimbatore featuring grand floral archway and ambient uplighting.",
    isActive: true,
    createdAt: new Date("2026-05-15").toISOString(),
    updatedAt: new Date("2026-05-15").toISOString()
  },
  {
    id: 2,
    title: "Grand Tech Summit",
    imageUrl: {
      original: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
      medium: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=65"
    },
    slotNumber: 2,
    category: "Corporate Events",
    altText: "Corporate tech summit conference launch",
    description: "High-tech corporate stage setup integrating professional AV systems, widescreen projections, and sleek podium.",
    isActive: true,
    createdAt: new Date("2026-05-20").toISOString(),
    updatedAt: new Date("2026-05-20").toISOString()
  },
  {
    id: 3,
    title: "Whimsical Cradle Ceremony",
    imageUrl: {
      original: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      medium: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=65"
    },
    slotNumber: 3,
    category: "Baby Showers",
    altText: "Elegant baby shower cradle decoration",
    description: "Soft pastel colored balloon installations and floral arrangements styled for a premium baby shower cradle ceremony.",
    isActive: true,
    createdAt: new Date("2026-05-22").toISOString(),
    updatedAt: new Date("2026-05-22").toISOString()
  },
  {
    id: 4,
    title: "Editorial Golden Hour",
    imageUrl: {
      original: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",
      medium: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=65"
    },
    slotNumber: 4,
    category: "Collaboration & Modelling Shoots",
    altText: "Fashion model portfolio outdoor photography",
    description: "High-fashion editorial model shoot highlighting boutique styling and artistic direction under natural sunlight.",
    isActive: true,
    createdAt: new Date("2026-05-25").toISOString(),
    updatedAt: new Date("2026-05-25").toISOString()
  },
  {
    id: 5,
    title: "Fairy-Lit Canopy Proposal",
    imageUrl: {
      original: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
      medium: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=65"
    },
    slotNumber: 5,
    category: "Surprise Celebrations",
    altText: "Rooftop surprise proposal candlelit decoration",
    description: "Intimate rooftop marriage proposal styled with glowing fairy lights, candles, and custom neon signage.",
    isActive: true,
    createdAt: new Date("2026-05-28").toISOString(),
    updatedAt: new Date("2026-05-28").toISOString()
  },
  {
    id: 6,
    title: "Royal Haldi Vibe",
    imageUrl: {
      original: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      medium: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=65"
    },
    slotNumber: 6,
    category: "Weddings",
    altText: "Traditional South Indian Haldi ceremony setup",
    description: "Vibrant yellow marigold garlands and brass decors curated for a traditional royal Haldi celebration.",
    isActive: true,
    createdAt: new Date("2026-06-01").toISOString(),
    updatedAt: new Date("2026-06-01").toISOString()
  },
  {
    id: 7,
    title: "Arena Stage DJ Set",
    imageUrl: {
      original: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85",
      medium: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=65"
    },
    slotNumber: 7,
    category: "DJ Services",
    altText: "Arena concert sound systems and stage DJ lights",
    description: "High-end sound systems, synchronized intelligent wash lights, and truss arrays configured for a celebrity wedding DJ set.",
    isActive: true,
    createdAt: new Date("2026-06-02").toISOString(),
    updatedAt: new Date("2026-06-02").toISOString()
  },
  {
    id: 8,
    title: "Cold Spark Blast Crew",
    imageUrl: {
      original: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85",
      medium: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=65"
    },
    slotNumber: 8,
    category: "Dance Crew",
    altText: "Elite choreography crew performing with cold sparks",
    description: "Elite performance crew executing a synchronized grand entrance under cold spark pyrotechnic columns.",
    isActive: true,
    createdAt: new Date("2026-06-03").toISOString(),
    updatedAt: new Date("2026-06-03").toISOString()
  },
  {
    id: 9,
    title: "Traditional South Indian Stage",
    imageUrl: {
      original: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=85",
      medium: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=400&q=65"
    },
    slotNumber: 9,
    category: "Puberty Ceremony Events",
    altText: "Puberty ceremony traditional flower stage",
    description: "South Indian traditional floral stage decor crafted with jasmine, roses, and mango leaves for auspicious puberty ceremonies.",
    isActive: true,
    createdAt: new Date("2026-06-04").toISOString(),
    updatedAt: new Date("2026-06-04").toISOString()
  },
  {
    id: 10,
    title: "Sweet Blossom Cradle",
    imageUrl: {
      original: "https://images.unsplash.com/photo-1551218808-94e220e0b49c?auto=format&fit=crop&w=1200&q=85",
      medium: "https://images.unsplash.com/photo-1551218808-94e220e0b49c?auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1551218808-94e220e0b49c?auto=format&fit=crop&w=400&q=65"
    },
    slotNumber: 10,
    category: "Baby Showers",
    altText: "Pastel blossom baby shower cradle",
    description: "Whimsical theme setup utilizing premium white roses and gold accents for a family baby shower celebration.",
    isActive: true,
    createdAt: new Date("2026-06-04").toISOString(),
    updatedAt: new Date("2026-06-04").toISOString()
  }
];

const DEFAULT_ENQUIRIES = [
  {
    id: 1,
    name: "Aishwarya Rajesh",
    email: "aishwarya.r@gmail.com",
    phone: "+91 98765 43210",
    eventType: "Wedding & Engagement",
    message: "Looking for a luxury stage decoration and lighting plan for my wedding in Coimbatore next month. Please send pricing.",
    createdAt: new Date("2026-06-04T10:15:00Z").toISOString()
  },
  {
    id: 2,
    name: "Ramesh Kumar",
    email: "ramesh@tcs.com",
    phone: "+91 99443 32211",
    eventType: "Corporate Events",
    message: "We want to plan a product launch conference for 200 delegates. Need premium AV systems and banquet setup.",
    createdAt: new Date("2026-06-04T15:30:00Z").toISOString()
  }
];

const LOCAL_STORAGE_KEYS = {
  GALLERY: 'missindia_gallery_images',
  ENQUIRIES: 'missindia_contact_enquiries',
  SESSION: 'missindia_admin_session',
  SECTIONS: 'missindia_gallery_sections',
  COVERS: 'missindia_cover_images'
};

// Default active gallery sections
const DEFAULT_GALLERY_SECTIONS = [
  { id: 'weddings', label: 'Weddings', isActive: true },
  { id: 'corporate', label: 'Corporate Events', isActive: true },
  { id: 'baby', label: 'Baby Showers', isActive: true },
  { id: 'puberty', label: 'Puberty Ceremony Events', isActive: true },
  { id: 'collab', label: 'Collaboration & Modelling Shoots', isActive: true },
  { id: 'surprise', label: 'Surprise Celebrations', isActive: true },
  { id: 'dj', label: 'DJ Services', isActive: true },
  { id: 'dance', label: 'Dance Crew', isActive: true }
];

// Default cover images for event pages
const DEFAULT_COVER_IMAGES = [
  { id: 'wedding', label: 'Wedding & Engagement Events', imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85' },
  { id: 'baby', label: 'Baby Shower Events', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85' },
  { id: 'puberty', label: 'Puberty Ceremony Events', imageUrl: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=85' },
  { id: 'collab', label: 'Collaboration & Modelling Shoots', imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=85' },
  { id: 'corporate', label: 'Corporate Events', imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85' },
  { id: 'surprise', label: 'Surprise Events', imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=85' },
  { id: 'dj', label: 'DJ Services', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85' },
  { id: 'dance', label: 'Dance Crew', imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=85' }
];

const getFromStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Database Initialization
export const initDatabase = () => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEYS.GALLERY)) {
    saveToStorage(LOCAL_STORAGE_KEYS.GALLERY, DEFAULT_GALLERY_IMAGES);
  }
  if (!localStorage.getItem(LOCAL_STORAGE_KEYS.ENQUIRIES)) {
    saveToStorage(LOCAL_STORAGE_KEYS.ENQUIRIES, DEFAULT_ENQUIRIES);
  }
  if (!localStorage.getItem(LOCAL_STORAGE_KEYS.SECTIONS)) {
    saveToStorage(LOCAL_STORAGE_KEYS.SECTIONS, DEFAULT_GALLERY_SECTIONS);
  }
  if (!localStorage.getItem(LOCAL_STORAGE_KEYS.COVERS)) {
    saveToStorage(LOCAL_STORAGE_KEYS.COVERS, DEFAULT_COVER_IMAGES);
  }
};

// Auto-run on load
initDatabase();

export const db = {
  // --- Gallery CMS Operations ---
  getGalleryImages: () => {
    initDatabase();
    const images = getFromStorage(LOCAL_STORAGE_KEYS.GALLERY, DEFAULT_GALLERY_IMAGES);
    // Sort so slot numbers are ordered first (1 to 10), then extended images by creation date
    return images.sort((a, b) => {
      if (a.slotNumber !== null && b.slotNumber !== null) {
        return a.slotNumber - b.slotNumber;
      }
      if (a.slotNumber !== null) return -1;
      if (b.slotNumber !== null) return 1;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  },

  saveGalleryImage: (slotNumber, { id, title, category, imageUrl, altText = '', description = '', isActive = true }) => {
    initDatabase();
    const images = db.getGalleryImages();
    
    // Find index by id (if editing) or by slotNumber (if slotNumber is provided and not null)
    let index = -1;
    if (id) {
      index = images.findIndex((img) => img.id === id);
    } else if (slotNumber !== null && slotNumber !== undefined) {
      index = images.findIndex((img) => img.slotNumber === slotNumber);
    }

    const now = new Date().toISOString();
    const updatedImage = {
      id: index !== -1 ? images[index].id : (id || Date.now()),
      title: title || (slotNumber ? `Slot ${slotNumber} Image` : "Portfolio Image"),
      category: category || "Events",
      imageUrl: imageUrl, // Expects { original, medium, thumbnail }
      slotNumber: slotNumber !== undefined ? slotNumber : null,
      altText: altText,
      description: description,
      isActive: isActive,
      createdAt: index !== -1 ? images[index].createdAt : now,
      updatedAt: now
    };

    if (index !== -1) {
      images[index] = updatedImage;
    } else {
      images.push(updatedImage);
    }

    saveToStorage(LOCAL_STORAGE_KEYS.GALLERY, images);
    return updatedImage;
  },

  deleteGalleryImage: (slotNumber, id) => {
    initDatabase();
    let images = db.getGalleryImages();

    if (slotNumber !== null && slotNumber !== undefined) {
      const index = images.findIndex((img) => img.slotNumber === slotNumber);
      if (index !== -1) {
        const now = new Date().toISOString();
        images[index] = {
          id: images[index].id,
          title: "",
          imageUrl: null, // Marks as empty
          slotNumber: slotNumber,
          category: "",
          altText: "",
          description: "",
          isActive: false,
          createdAt: images[index].createdAt,
          updatedAt: now
        };
      }
    } else if (id) {
      // Extended images are deleted completely
      images = images.filter((img) => img.id !== id);
    }
    
    saveToStorage(LOCAL_STORAGE_KEYS.GALLERY, images);
  },

  toggleGalleryImageStatus: (slotNumber, id, isActive) => {
    initDatabase();
    const images = db.getGalleryImages();
    let index = -1;
    if (id) {
      index = images.findIndex((img) => img.id === id);
    } else if (slotNumber !== null && slotNumber !== undefined) {
      index = images.findIndex((img) => img.slotNumber === slotNumber);
    }

    if (index !== -1) {
      images[index].isActive = isActive;
      images[index].updatedAt = new Date().toISOString();
      saveToStorage(LOCAL_STORAGE_KEYS.GALLERY, images);
    }
  },

  swapSlots: (slotNumberA, slotNumberB) => {
    initDatabase();
    const images = db.getGalleryImages();
    const idxA = images.findIndex((img) => img.slotNumber === slotNumberA);
    const idxB = images.findIndex((img) => img.slotNumber === slotNumberB);

    if (idxA !== -1 && idxB !== -1) {
      images[idxA].slotNumber = slotNumberB;
      images[idxB].slotNumber = slotNumberA;

      const now = new Date().toISOString();
      images[idxA].updatedAt = now;
      images[idxB].updatedAt = now;

      saveToStorage(LOCAL_STORAGE_KEYS.GALLERY, images);
    }
  },

  // --- Contact Enquiries Operations ---
  getContactEnquiries: () => {
    initDatabase();
    const enquiries = getFromStorage(LOCAL_STORAGE_KEYS.ENQUIRIES, DEFAULT_ENQUIRIES);
    return enquiries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  addContactEnquiry: (enquiry) => {
    initDatabase();
    const enquiries = db.getContactEnquiries();
    const newEnquiry = {
      id: Date.now(),
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone,
      eventType: enquiry.eventType,
      message: enquiry.message,
      createdAt: new Date().toISOString()
    };
    enquiries.push(newEnquiry);
    saveToStorage(LOCAL_STORAGE_KEYS.ENQUIRIES, enquiries);
    return newEnquiry;
  },

  deleteContactEnquiry: (id) => {
    initDatabase();
    let enquiries = db.getContactEnquiries();
    enquiries = enquiries.filter((enq) => enq.id !== id);
    saveToStorage(LOCAL_STORAGE_KEYS.ENQUIRIES, enquiries);
  },

  // --- Admin Authentication Operations ---
  loginAdmin: (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      const sessionToken = `token_${Date.now()}`;
      sessionStorage.setItem(LOCAL_STORAGE_KEYS.SESSION, sessionToken);
      return { success: true, token: sessionToken };
    }
    return { success: false, error: "Invalid Username or Password" };
  },

  logoutAdmin: () => {
    sessionStorage.removeItem(LOCAL_STORAGE_KEYS.SESSION);
  },

  isAdminLoggedIn: () => {
    return !!sessionStorage.getItem(LOCAL_STORAGE_KEYS.SESSION);
  },

  // --- Database Settings ---
  clearDatabase: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.GALLERY);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ENQUIRIES);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.SECTIONS);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.COVERS);
    initDatabase();
  },

  // --- Gallery Section Visibility ---
  getGallerySections: () => {
    initDatabase();
    return getFromStorage(LOCAL_STORAGE_KEYS.SECTIONS, DEFAULT_GALLERY_SECTIONS);
  },

  toggleGallerySection: (sectionId, isActive) => {
    initDatabase();
    const sections = db.getGallerySections();
    const idx = sections.findIndex(s => s.id === sectionId);
    if (idx !== -1) {
      sections[idx].isActive = isActive;
      saveToStorage(LOCAL_STORAGE_KEYS.SECTIONS, sections);
    }
  },

  // --- Cover Images ---
  getCoverImages: () => {
    initDatabase();
    return getFromStorage(LOCAL_STORAGE_KEYS.COVERS, DEFAULT_COVER_IMAGES);
  },

  saveCoverImage: (coverId, imageUrl) => {
    initDatabase();
    const covers = db.getCoverImages();
    const idx = covers.findIndex(c => c.id === coverId);
    if (idx !== -1) {
      covers[idx].imageUrl = imageUrl;
      saveToStorage(LOCAL_STORAGE_KEYS.COVERS, covers);
    }
  }
};
