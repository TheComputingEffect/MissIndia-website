import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { db } from '../services/db';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showcaseSlots, setShowcaseSlots] = useState([]);
  const [extendedImages, setExtendedImages] = useState([]);
  const [activeSections, setActiveSections] = useState([]);
  const [lightbox, setLightbox] = useState(null);
  const [allImages, setAllImages] = useState([]);

  // Slideshow state
  const [slideIndex, setSlideIndex] = useState(0);
  const slideTimer = useRef(null);

  const loadData = () => {
    const imgs = db.getGalleryImages();
    const sections = db.getGallerySections();
    setActiveSections(sections);

    const isCategoryActiveLocal = (cat) => {
      const section = sections.find(s => s.label === cat);
      return section ? section.isActive : true;
    };

    // All active images for slideshow
    const active = imgs.filter(img => img.imageUrl && img.imageUrl.medium && img.isActive && isCategoryActiveLocal(img.category));
    setAllImages(active);

    // Separate slots and extended
    const slots = imgs.filter(img => img.slotNumber !== null);
    const extended = imgs.filter(img => img.slotNumber === null && img.isActive);

    const slotsMap = {};
    slots.forEach(slot => { slotsMap[slot.slotNumber] = slot; });
    const populatedSlots = Array.from({ length: 10 }, (_, i) => {
      const slotNum = i + 1;
      return slotsMap[slotNum] || { slotNumber: slotNum, title: '', imageUrl: null, category: '', altText: '', description: '', isActive: false };
    });

    setShowcaseSlots(populatedSlots);
    setExtendedImages(extended);
  };

  useEffect(() => {
    loadData();
    window.addEventListener('focus', loadData);
    return () => window.removeEventListener('focus', loadData);
  }, []);

  // Auto-advance slideshow every 3.5s
  useEffect(() => {
    if (allImages.length < 2) return;
    slideTimer.current = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % allImages.length);
    }, 3500);
    return () => clearInterval(slideTimer.current);
  }, [allImages.length]);

  const goToSlide = (idx) => {
    clearInterval(slideTimer.current);
    setSlideIndex((idx + allImages.length) % allImages.length);
    slideTimer.current = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % allImages.length);
    }, 3500);
  };

  // Build category tabs: always show "All", then only active sections
  const categoryTabs = [
    'All',
    ...activeSections.filter(s => s.isActive).map(s => s.label)
  ];

  // Check if a category section is active
  const isCategoryActive = (cat) => {
    if (cat === 'All') return true;
    const section = activeSections.find(s => s.label === cat);
    return section ? section.isActive : true;
  };

  const renderBlock = (imagesList, blockIndex) => {
    const renderSlotOfBlock = (slotIdx) => {
      const slotNum = slotIdx + 1;
      const item = imagesList[slotIdx];
      if (!item) return null;
      const catActive = isCategoryActive(item.category);
      const hasImage = item.imageUrl && item.imageUrl.medium && item.isActive && catActive &&
        (activeCategory === 'All' || item.category === activeCategory);
      if (!hasImage) return null;

      return (
        <div className={`gallery-slot-${slotNum}`} key={`slot-${blockIndex}-${slotNum}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: slotNum * 0.05 }}
            className="w-full h-[280px] md:h-full relative rounded-3xl overflow-hidden shadow-glass group"
          >
            <div className="w-full h-full cursor-pointer relative" onClick={() => setLightbox(item)}>
              <img
                src={item.imageUrl.medium}
                alt={item.altText || item.title || 'MISS INDIA EVENTS Gallery'}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-accent/40 transition-colors duration-300 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      );
    };

    const hasAnyImages = imagesList.some(item =>
      item && item.imageUrl && item.imageUrl.medium && item.isActive &&
      isCategoryActive(item.category) &&
      (activeCategory === 'All' || item.category === activeCategory)
    );
    if (!hasAnyImages) return null;

    return (
      <div className="gallery-editorial-layout max-w-7xl mx-auto">
        {Array.from({ length: 10 }, (_, i) => renderSlotOfBlock(i))}
      </div>
    );
  };

  const filteredExtendedImages = extendedImages.filter(img => {
    const catActive = isCategoryActive(img.category);
    return catActive && (activeCategory === 'All' || img.category === activeCategory);
  });

  const getExtendedBlocks = () => {
    const blocks = [];
    for (let i = 0; i < filteredExtendedImages.length; i += 10) {
      const chunk = filteredExtendedImages.slice(i, i + 10);
      const paddedChunk = Array.from({ length: 10 }, (_, idx) => chunk[idx] || {
        title: '', imageUrl: null, category: '', altText: '', description: '', isActive: false
      });
      blocks.push(paddedChunk);
    }
    return blocks;
  };

  const extendedBlocks = getExtendedBlocks();

  return (
    <>
      <Helmet>
        <title>Portfolio Gallery | MISS INDIA EVENTS</title>
        <meta name="description" content="Explore our luxury portfolio gallery highlighting premium weddings, baby showers, puberty ceremonies, corporate launches, modeling shoots, and celebrations in Coimbatore." />
        <meta name="keywords" content="Event Gallery, Event Photos, Wedding Stage Decor, Birthday Balloon Decor, Corporate Events Coimbatore, MISS INDIA EVENTS" />
        <meta property="og:title" content="Portfolio Gallery | MISS INDIA EVENTS" />
        <meta property="og:description" content="A visual showcase of bespoke luxury weddings, corporate events, and premium celebrations." />
        <link rel="canonical" href="https://missindiaevents.com/gallery" />
      </Helmet>

      <style>{`
        .gallery-editorial-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .gallery-editorial-layout {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 200px;
          }
          .gallery-slot-1 { grid-column: 1 / 3; grid-row: 1 / 3; }
          .gallery-slot-2 { grid-column: 3 / 5; grid-row: 1 / 2; }
          .gallery-slot-3 { grid-column: 3 / 5; grid-row: 2 / 3; }
          .gallery-slot-4 { grid-column: 1 / 3; grid-row: 3 / 4; }
          .gallery-slot-5 { grid-column: 3 / 5; grid-row: 3 / 5; }
          .gallery-slot-6 { grid-column: 1 / 3; grid-row: 4 / 5; }
          .gallery-slot-7 { grid-column: 1 / 2; grid-row: 5 / 6; }
          .gallery-slot-8 { grid-column: 1 / 2; grid-row: 6 / 7; }
          .gallery-slot-9 { grid-column: 2 / 4; grid-row: 5 / 7; }
          .gallery-slot-10 { grid-column: 4 / 5; grid-row: 5 / 7; }
        }
        @media (min-width: 1024px) {
          .gallery-editorial-layout {
            grid-auto-rows: 240px;
            gap: 28px;
          }
        }
        .slide-fade-enter { opacity: 0; }
        .slide-fade-enter-active { opacity: 1; transition: opacity 1s ease; }
        .slide-fade-exit { opacity: 1; }
        .slide-fade-exit-active { opacity: 0; transition: opacity 1s ease; }
      `}</style>

      <section className="relative min-h-screen pt-0 pb-24 z-10 bg-brand-dark overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px]" />
        </div>

        {/* ══ HERO SLIDESHOW ══ */}
        {allImages.length > 0 && (
          <div className="relative w-full h-[70vh] min-h-[420px] overflow-hidden">
            {/* Slides */}
            <AnimatePresence mode="sync">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img
                  src={allImages[slideIndex]?.imageUrl?.original || allImages[slideIndex]?.imageUrl?.medium}
                  alt={allImages[slideIndex]?.altText || 'Gallery'}
                  className="w-full h-full object-cover object-top"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/30" />
              </motion.div>
            </AnimatePresence>

            {/* Centered Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.3em] font-body mb-4 block"
              >
                Exquisite Craftsmanship
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 uppercase tracking-wider text-glow"
              >
                PORTFOLIO <span className="text-gradient">GALLERY</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-brand-secondary/70 font-body text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
              >
                Witness how we turn dreams into reality. A curated look into our high-end weddings, traditional ceremonies, parties, and corporate galas.
              </motion.p>
            </div>

            {/* Prev / Next arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={() => goToSlide(slideIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-brand-dark/60 border border-white/10 flex items-center justify-center text-white hover:border-brand-accent/50 hover:text-brand-accent transition-all cursor-pointer backdrop-blur-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => goToSlide(slideIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-brand-dark/60 border border-white/10 flex items-center justify-center text-white hover:border-brand-accent/50 hover:text-brand-accent transition-all cursor-pointer backdrop-blur-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Dot indicators */}
            {allImages.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      i === slideIndex
                        ? 'w-6 h-1.5 bg-brand-accent shadow-[0_0_8px_#7FE7E7]'
                        : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="container mx-auto px-6 lg:px-12 relative z-10 mt-12">
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-4xl mx-auto border-t border-b border-white/5 py-4">
            {categoryTabs.map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-body text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-accent text-brand-dark shadow-[0_0_15px_rgba(127,231,231,0.4)]'
                    : 'text-brand-secondary/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Gallery View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-20"
            >
              {/* Showcase Block */}
              {renderBlock(showcaseSlots, 0)}

              {/* Extended Portfolio Blocks */}
              {extendedBlocks.map((blockImages, idx) => (
                <div className="space-y-10 border-t border-white/5 pt-16 max-w-7xl mx-auto" key={`extended-section-${idx}`}>
                  {idx === 0 && (
                    <div className="text-center mb-10">
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider">
                        More From Our <span className="text-gradient">Portfolio</span>
                      </h2>
                      <p className="text-xs text-brand-secondary/50 font-body mt-2">
                        Browse through additional moments of creative event design.
                      </p>
                    </div>
                  )}
                  {renderBlock(blockImages, idx + 1)}
                </div>
              ))}

              {/* Empty state */}
              {!renderBlock(showcaseSlots, 0) && extendedBlocks.length === 0 && (
                <div className="text-center py-24">
                  <p className="text-brand-secondary/40 font-body text-sm uppercase tracking-widest">
                    No images available for this category
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-3xl"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:text-brand-accent transition-colors hover:border-brand-accent/40 shadow-lg"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <div className="relative w-screen h-screen flex flex-col items-center justify-center p-4 md:p-12" onClick={e => e.stopPropagation()}>
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={lightbox.imageUrl?.original || lightbox.imageUrl?.medium || lightbox.imageUrl}
                alt={lightbox.altText || lightbox.title}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
