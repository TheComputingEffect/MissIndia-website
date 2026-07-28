import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Image as ImageIcon,
  CalendarDays,
  Sparkles,
  Inbox,
  Settings as SettingsIcon,
  LogOut,
  Upload,
  Trash2,
  ToggleLeft,
  ToggleRight,
  User,
  Shield,
  Clock,
  ArrowLeftRight,
  Database,
  X,
  Plus,
  Eye,
  Edit
} from 'lucide-react';
import { db } from '../services/db';
import { optimizeImage } from '../utils/imageOptimizer';

// Predefined slots metadata for showcase
const SLOT_LAYOUTS = {
  1: { span: 'md:col-span-2 md:row-span-2', label: 'Slot 1: Large Featured' },
  2: { span: 'md:col-span-1 md:row-span-1', label: 'Slot 2: Medium' },
  3: { span: 'md:col-span-1 md:row-span-1', label: 'Slot 3: Medium' },
  4: { span: 'md:col-span-1 md:row-span-1', label: 'Slot 4: Medium' },
  5: { span: 'md:col-span-2 md:row-span-2', label: 'Slot 5: Large Featured' },
  6: { span: 'md:col-span-1 md:row-span-1', label: 'Slot 6: Medium' },
  7: { span: 'md:col-span-1 md:row-span-1', label: 'Slot 7: Medium' },
  8: { span: 'md:col-span-1 md:row-span-1', label: 'Slot 8: Medium' },
  9: { span: 'md:col-span-2 md:row-span-2', label: 'Slot 9: Large Featured' },
  10: { span: 'md:col-span-3 md:row-span-1', label: 'Slot 10: Widescreen' }
};

const CATEGORIES = [
  'Weddings',
  'Corporate Events',
  'Baby Showers',
  'Puberty Ceremony Events',
  'Collaboration & Modelling Shoots',
  'Surprise Celebrations',
  'DJ Services',
  'Dance Crew'
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [gallerySubTab, setGallerySubTab] = useState('slots'); // 'slots', 'extended', 'sections', 'covers'
  const [gallerySlots, setGallerySlots] = useState([]);
  const [extendedImages, setExtendedImages] = useState([]);
  const [gallerySections, setGallerySections] = useState([]);
  const [coverImages, setCoverImages] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  
  // Modal states
  const [editorModalOpen, setEditorModalOpen] = useState(false);
  const [previewModalImage, setPreviewModalImage] = useState(null);
  
  // Form States
  const [currentSlotNum, setCurrentSlotNum] = useState(null); // null if extended
  const [currentItemId, setCurrentItemId] = useState(null); // null if new
  const [editTitle, setEditTitle] = useState('');
  const [editCategory, setEditCategory] = useState('Weddings');
  const [editAltText, setEditAltText] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editIsActive, setEditIsActive] = useState(true);
  const [uploadedImages, setUploadedImages] = useState(null); // { original, medium, thumbnail }
  const [isUploading, setIsUploading] = useState(false);
  const [swapTargetSlot, setSwapTargetSlot] = useState('');
  const [uploadingCoverId, setUploadingCoverId] = useState(null);

  // Drag states
  const [dragOverSlot, setDragOverSlot] = useState(null);
  const [dragOverExtended, setDragOverExtended] = useState(false);

  const [stats, setStats] = useState({ active: 0, inactive: 0, enquiries: 0, storage: '0 KB' });
  const navigate = useNavigate();

  const loadData = () => {
    const images = db.getGalleryImages();
    const allEnquiries = db.getContactEnquiries();

    // Separate Slot Showcase vs Extended Gallery
    const slots = images.filter(img => img.slotNumber !== null);
    const extended = images.filter(img => img.slotNumber === null);

    // Map out 1-10 slots
    const slotsMap = {};
    slots.forEach(slot => {
      slotsMap[slot.slotNumber] = slot;
    });

    const fullSlots = Array.from({ length: 10 }, (_, i) => {
      const slotNum = i + 1;
      return slotsMap[slotNum] || {
        slotNumber: slotNum,
        title: '',
        imageUrl: null,
        category: '',
        altText: '',
        description: '',
        isActive: false
      };
    });

    setGallerySlots(fullSlots);
    setExtendedImages(extended);
    setEnquiries(allEnquiries);
    setGallerySections(db.getGallerySections());
    setCoverImages(db.getCoverImages());

    // Compute stats
    const activeCount = fullSlots.filter(s => s.imageUrl && s.isActive).length;
    const inactiveCount = 10 - activeCount;
    
    // Compute rough storage size
    let totalBytes = 0;
    for (let key in localStorage) {
      if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
        totalBytes += localStorage[key].length * 2;
      }
    }
    const storageKB = (totalBytes / 1024).toFixed(1) + ' KB';

    setStats({
      active: activeCount + extended.filter(img => img.isActive).length,
      inactive: inactiveCount,
      enquiries: allEnquiries.length,
      storage: storageKB
    });
  };

  // Authentication Guard
  useEffect(() => {
    if (!db.isAdminLoggedIn()) {
      navigate('/admin');
    } else {
      const timer = setTimeout(() => {
        loadData();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  const handleLogout = () => {
    db.logoutAdmin();
    navigate('/admin');
  };

  // --- CMS Editor Modal Operations ---
  const handleOpenEditSlot = (slot, preLoadedImages = null) => {
    setCurrentSlotNum(slot.slotNumber);
    setCurrentItemId(slot.id || null);
    setEditTitle(slot.title || '');
    setEditCategory(slot.category || 'Weddings');
    setEditAltText(slot.altText || '');
    setEditDescription(slot.description || '');
    setEditIsActive(slot.isActive ?? true);
    setUploadedImages(preLoadedImages || slot.imageUrl || null);
    setSwapTargetSlot('');
    setEditorModalOpen(true);
  };

  const handleOpenAddExtended = (preLoadedImages = null) => {
    setCurrentSlotNum(null);
    setCurrentItemId(null);
    setEditTitle('');
    setEditCategory('Weddings');
    setEditAltText('');
    setEditDescription('');
    setEditIsActive(true);
    setUploadedImages(preLoadedImages || null);
    setSwapTargetSlot('');
    setEditorModalOpen(true);
  };

  const handleOpenEditExtended = (item) => {
    setCurrentSlotNum(null);
    setCurrentItemId(item.id);
    setEditTitle(item.title || '');
    setEditCategory(item.category || 'Weddings');
    setEditAltText(item.altText || '');
    setEditDescription(item.description || '');
    setEditIsActive(item.isActive ?? true);
    setUploadedImages(item.imageUrl || null);
    setSwapTargetSlot('');
    setEditorModalOpen(true);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const optimized = await optimizeImage(file);
      setUploadedImages(optimized);
      // Auto-fill Title from file name if blank
      if (!editTitle) {
        const titleWithoutExt = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");
        setEditTitle(titleWithoutExt);
      }
    } catch (err) {
      alert('Error optimizing image: ' + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSaveCMSChanges = (e) => {
    e.preventDefault();
    if (!uploadedImages) {
      alert('Please upload an image first.');
      return;
    }

    db.saveGalleryImage(currentSlotNum, {
      id: currentItemId,
      title: editTitle || (currentSlotNum ? `Slot ${currentSlotNum} Image` : "Portfolio Image"),
      category: editCategory,
      imageUrl: uploadedImages,
      altText: editAltText,
      description: editDescription,
      isActive: editIsActive
    });

    setEditorModalOpen(false);
    loadData();
  };

  const handleDeleteSlotImage = (slotNum, id) => {
    const targetName = slotNum ? `Slot ${slotNum}` : 'Extended Portfolio Image';
    if (window.confirm(`Are you sure you want to remove the image from ${targetName}?`)) {
      db.deleteGalleryImage(slotNum, id);
      setEditorModalOpen(false);
      loadData();
    }
  };

  const handleSwapSlots = () => {
    if (currentSlotNum === null || !swapTargetSlot) return;
    db.swapSlots(currentSlotNum, parseInt(swapTargetSlot));
    setEditorModalOpen(false);
    loadData();
  };

  const handleToggleSection = (sectionId, currentStatus) => {
    db.toggleGallerySection(sectionId, !currentStatus);
    loadData();
  };

  const handleCoverFileChange = async (e, coverId) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingCoverId(coverId);
    try {
      const optimized = await optimizeImage(file);
      db.saveCoverImage(coverId, optimized.original || optimized.medium);
      loadData();
    } catch (err) {
      alert('Error uploading cover: ' + err.message);
    } finally {
      setUploadingCoverId(null);
    }
  };

  // --- Drag and Drop Events ---
  const handleDragOver = (e, slotNum) => {
    e.preventDefault();
    setDragOverSlot(slotNum);
  };

  const handleDragLeave = () => {
    setDragOverSlot(null);
  };

  const handleDrop = async (e, slotNum) => {
    e.preventDefault();
    setDragOverSlot(null);
    const file = e.dataTransfer?.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const optimized = await optimizeImage(file);
      const existingSlot = gallerySlots.find(s => s.slotNumber === slotNum);
      handleOpenEditSlot(existingSlot || { slotNumber: slotNum }, optimized);
    } catch (err) {
      alert('Error optimizing image: ' + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleExtendedDragOver = (e) => {
    e.preventDefault();
    setDragOverExtended(true);
  };

  const handleExtendedDragLeave = () => {
    setDragOverExtended(false);
  };

  const handleExtendedDrop = async (e) => {
    e.preventDefault();
    setDragOverExtended(false);
    const file = e.dataTransfer?.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const optimized = await optimizeImage(file);
      handleOpenAddExtended(optimized);
    } catch (err) {
      alert('Error optimizing image: ' + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  // --- Enquiries ---
  const handleDeleteEnquiry = (id) => {
    if (window.confirm('Delete this enquiry record?')) {
      db.deleteContactEnquiry(id);
      loadData();
    }
  };

  // --- Settings ---
  const handleResetDatabase = () => {
    if (window.confirm('WARNING: This will clear all custom uploaded images and custom enquiries, resetting the site back to its default luxury portfolio configuration. Proceed?')) {
      db.clearDatabase();
      loadData();
      alert('Database reset successfully.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Control Center | MISS INDIA EVENTS</title>
      </Helmet>

      <div className="relative min-h-screen bg-brand-dark flex overflow-hidden selection:bg-brand-accent selection:text-brand-dark">
        {/* Sidebar Nav */}
        <aside className="w-80 bg-[#011415] border-r border-white/5 flex flex-col justify-between p-6 z-20 shrink-0">
          <div className="space-y-10">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="text-brand-accent w-5 h-5" />
                <span className="text-brand-accent text-xs font-body tracking-[0.25em] uppercase">
                  CMS Dashboard
                </span>
              </div>
              <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider">
                Control Panel
              </h2>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-body text-sm font-medium transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-brand-primary text-brand-accent shadow-glow border-l-2 border-brand-accent'
                    : 'text-brand-secondary/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <LayoutDashboard size={18} />
                <span>Dashboard Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-body text-sm font-medium transition-all cursor-pointer ${
                  activeTab === 'gallery'
                    ? 'bg-brand-primary text-brand-accent shadow-glow border-l-2 border-brand-accent'
                    : 'text-brand-secondary/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <ImageIcon size={18} />
                <span>Gallery Management</span>
              </button>

              <button
                onClick={() => setActiveTab('events')}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-body text-sm font-medium transition-all cursor-pointer ${
                  activeTab === 'events'
                    ? 'bg-brand-primary text-brand-accent shadow-glow border-l-2 border-brand-accent'
                    : 'text-brand-secondary/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <CalendarDays size={18} />
                <span>Events Management</span>
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-body text-sm font-medium transition-all cursor-pointer ${
                  activeTab === 'services'
                    ? 'bg-brand-primary text-brand-accent shadow-glow border-l-2 border-brand-accent'
                    : 'text-brand-secondary/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles size={18} />
                <span>Services Management</span>
              </button>

              <button
                onClick={() => setActiveTab('enquiries')}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-body text-sm font-medium transition-all cursor-pointer relative ${
                  activeTab === 'enquiries'
                    ? 'bg-brand-primary text-brand-accent shadow-glow border-l-2 border-brand-accent'
                    : 'text-brand-secondary/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Inbox size={18} />
                <span>Contact Enquiries</span>
                {enquiries.length > 0 && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full bg-brand-accent text-brand-dark text-[10px] font-bold">
                    {enquiries.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-body text-sm font-medium transition-all cursor-pointer ${
                  activeTab === 'settings'
                    ? 'bg-brand-primary text-brand-accent shadow-glow border-l-2 border-brand-accent'
                    : 'text-brand-secondary/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <SettingsIcon size={18} />
                <span>Settings</span>
              </button>
            </nav>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-3.5 rounded-xl font-body text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-all cursor-pointer"
          >
            <LogOut size={18} />
            <span>Logout Session</span>
          </button>
        </aside>

        {/* Main Content Pane */}
        <main className="flex-grow min-h-screen overflow-y-auto p-10 relative z-10">
          {/* Header row */}
          <header className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
            <div>
              <h1 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">
                {activeTab === 'overview' && 'Dashboard Overview'}
                {activeTab === 'gallery' && 'Gallery CMS Manager'}
                {activeTab === 'events' && 'Events Module Control'}
                {activeTab === 'services' && 'Services Module Control'}
                {activeTab === 'enquiries' && 'Customer Enquiries Inbox'}
                {activeTab === 'settings' && 'System Config Settings'}
              </h1>
              <p className="text-brand-secondary/40 text-xs font-body uppercase mt-1 tracking-widest">
                MISS INDIA EVENTS Admin Panel
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-brand-primary/20 border border-white/5 px-4 py-2 rounded-xl text-xs font-body text-brand-secondary/80">
              <User size={14} className="text-brand-accent" />
              <span>Logged in as: <strong className="text-white">Admin</strong></span>
            </div>
          </header>

          {/* Panels */}
          <div className="max-w-6xl">
            {/* 1. OVERVIEW PANEL */}
            {activeTab === 'overview' && (
              <div className="space-y-10">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[130px]">
                    <span className="text-brand-secondary/50 font-body text-xs uppercase tracking-wider">Active Slots</span>
                    <h3 className="text-4xl font-heading font-bold text-brand-accent mt-2">{stats.active}</h3>
                    <p className="text-[10px] text-brand-secondary/35 uppercase tracking-widest mt-2">Displaying live</p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[130px]">
                    <span className="text-brand-secondary/50 font-body text-xs uppercase tracking-wider">Empty Slots</span>
                    <h3 className="text-4xl font-heading font-bold text-white mt-2">{stats.inactive}</h3>
                    <p className="text-[10px] text-brand-secondary/35 uppercase tracking-widest mt-2">Placeholders showing</p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[130px]">
                    <span className="text-brand-secondary/50 font-body text-xs uppercase tracking-wider">Contact Enquiries</span>
                    <h3 className="text-4xl font-heading font-bold text-brand-accent mt-2">{stats.enquiries}</h3>
                    <p className="text-[10px] text-brand-secondary/35 uppercase tracking-widest mt-2">Submitted forms</p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[130px]">
                    <span className="text-brand-secondary/50 font-body text-xs uppercase tracking-wider">Storage Usage</span>
                    <h3 className="text-3xl font-heading font-bold text-white mt-2">{stats.storage}</h3>
                    <p className="text-[10px] text-brand-secondary/35 uppercase tracking-widest mt-2">Local browser memory</p>
                  </div>
                </div>

                {/* Storage Health */}
                <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Database className="text-brand-accent w-5 h-5" />
                      <h4 className="text-white font-heading font-bold uppercase tracking-wider">LocalStorage Health</h4>
                    </div>
                    <span className="text-xs text-brand-secondary/40 font-body">Limit: ~5000 KB (5MB)</span>
                  </div>
                  <div className="w-full bg-brand-dark/50 h-3 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="bg-brand-accent h-full shadow-[0_0_10px_#7FE7E7] transition-all duration-500" 
                      style={{ width: `${Math.min(100, (parseFloat(stats.storage) / 5000) * 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-brand-secondary/60 font-body leading-relaxed">
                    Browser LocalStorage is used to maintain your website database and images completely offline. 
                    The in-browser canvas compressor auto-compresses image files (saving them as optimized WebP strings) to guarantee they fit comfortably inside the database limits.
                  </p>
                </div>
                
                {/* Quick actions info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/30 flex items-center justify-center text-brand-accent shrink-0">
                      <ImageIcon size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-heading font-bold uppercase text-sm tracking-wide">CMS Integration active</h4>
                      <p className="text-xs text-brand-secondary/60 font-body leading-normal">
                        Images uploaded to slots 1–10 automatically appear on the site-wide <strong className="text-brand-accent font-normal">/gallery</strong> route. Placeholder cards fill any empty spots automatically.
                      </p>
                    </div>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/30 flex items-center justify-center text-brand-accent shrink-0">
                      <Inbox size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-heading font-bold uppercase text-sm tracking-wide">Enquiries linked</h4>
                      <p className="text-xs text-brand-secondary/60 font-body leading-normal">
                        Submissions from the <strong className="text-brand-accent font-normal">/contact</strong> form are saved dynamically to local storage and pulled directly into the enquiries log for review.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. GALLERY PANEL */}
            {activeTab === 'gallery' && (
              <div className="space-y-8">
                {/* Sub Tab Selection */}
                <div className="flex border-b border-white/5 pb-px">
                  <button
                    onClick={() => setGallerySubTab('slots')}
                    className={`px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider border-b-2 cursor-pointer transition-all ${
                      gallerySubTab === 'slots'
                        ? 'border-brand-accent text-brand-accent'
                        : 'border-transparent text-brand-secondary/40 hover:text-white'
                    }`}
                  >
                    Showcase Slots (10 Positions)
                  </button>
                  <button
                    onClick={() => setGallerySubTab('extended')}
                    className={`px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider border-b-2 cursor-pointer transition-all ${
                      gallerySubTab === 'extended'
                        ? 'border-brand-accent text-brand-accent'
                        : 'border-transparent text-brand-secondary/40 hover:text-white'
                    }`}
                  >
                    Extended Portfolio ({extendedImages.length} Images)
                  </button>
                  <button
                    onClick={() => setGallerySubTab('sections')}
                    className={`px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider border-b-2 cursor-pointer transition-all ${
                      gallerySubTab === 'sections'
                        ? 'border-brand-accent text-brand-accent'
                        : 'border-transparent text-brand-secondary/40 hover:text-white'
                    }`}
                  >
                    Section Visibility
                  </button>
                  <button
                    onClick={() => setGallerySubTab('covers')}
                    className={`px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider border-b-2 cursor-pointer transition-all ${
                      gallerySubTab === 'covers'
                        ? 'border-brand-accent text-brand-accent'
                        : 'border-transparent text-brand-secondary/40 hover:text-white'
                    }`}
                  >
                    Cover Images
                  </button>
                </div>

                {/* Sub Tab 1: PREDEFINED SLOTS */}
                {gallerySubTab === 'slots' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                        High-Impact Showcase Slots
                      </h3>
                      <p className="text-xs text-brand-secondary/50 font-body mt-1">
                        These 10 slots map directly to fixed positions in the primary website portfolio layout. You can drag and drop images directly onto placeholders to initialize them.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {gallerySlots.map((slot) => {
                        const hasImage = slot.imageUrl && slot.imageUrl.thumbnail;
                        const isDragging = dragOverSlot === slot.slotNumber;

                        return (
                          <div
                            key={slot.slotNumber}
                            onDragOver={(e) => handleDragOver(e, slot.slotNumber)}
                            onDragLeave={handleDragLeave}
                            onDrop={(e) => handleDrop(e, slot.slotNumber)}
                            className={`glass-card p-6 rounded-[2rem] border transition-all duration-300 relative flex flex-col justify-between min-h-[220px] ${
                              isDragging
                                ? 'border-brand-accent bg-brand-primary/10 shadow-[0_0_20px_rgba(127,231,231,0.2)]'
                                : 'border-white/5 hover:border-brand-secondary/15'
                            }`}
                          >
                            {/* Slot header */}
                            <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-body font-bold text-brand-accent uppercase tracking-wider">
                                  Slot {slot.slotNumber}
                                </span>
                                <span className="text-[10px] text-brand-secondary/40 font-body">
                                  ({SLOT_LAYOUTS[slot.slotNumber]?.label || 'Medium'})
                                </span>
                              </div>
                              <span className={`w-2 h-2 rounded-full ${hasImage && slot.isActive ? 'bg-brand-accent shadow-[0_0_8px_#7FE7E7]' : 'bg-white/10'}`} />
                            </div>

                            {/* Slot Body */}
                            <div className="flex-grow flex gap-4 items-center">
                              {hasImage ? (
                                <>
                                  <img
                                    src={slot.imageUrl.thumbnail}
                                    alt={slot.altText || slot.title}
                                    className="w-24 h-24 object-cover object-top rounded-2xl border border-white/10 shrink-0 shadow-glass"
                                  />
                                  <div className="space-y-1 select-none">
                                    <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide line-clamp-1">
                                      {slot.title}
                                    </h4>
                                    <p className="text-[10px] text-brand-secondary/60 font-body uppercase tracking-wider">
                                      Category: <strong className="text-white font-medium">{slot.category}</strong>
                                    </p>
                                    <p className="text-[10px] text-brand-secondary/40 font-body line-clamp-2 leading-relaxed">
                                      {slot.description || 'No description provided.'}
                                    </p>
                                  </div>
                                </>
                              ) : (
                                // Dashed upload area inside card
                                <div 
                                  onClick={() => handleOpenEditSlot(slot)}
                                  className="w-full py-6 border border-dashed border-white/10 hover:border-brand-accent/30 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
                                >
                                  <Upload className="w-8 h-8 text-brand-secondary/25 mb-2 group-hover:text-brand-accent/50" />
                                  <h5 className="text-brand-secondary/50 font-heading text-xs font-bold uppercase tracking-wider">
                                    + Upload Image
                                  </h5>
                                  <p className="text-[10px] text-brand-secondary/25 font-body uppercase mt-1 tracking-widest">
                                    Click or Drag Image Here
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* Slot Footer Action buttons */}
                            <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-white/5">
                              {hasImage ? (
                                <>
                                  <button
                                    onClick={() => setPreviewModalImage(slot.imageUrl.original)}
                                    className="px-3 py-1.5 border border-white/10 text-brand-secondary/80 hover:text-white hover:border-white/20 rounded-lg text-[10px] font-body uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-colors"
                                  >
                                    <Eye size={12} />
                                    <span>Preview</span>
                                  </button>
                                  <button
                                    onClick={() => handleOpenEditSlot(slot)}
                                    className="px-3 py-1.5 bg-brand-primary/40 text-brand-accent hover:bg-brand-accent hover:text-brand-dark rounded-lg text-[10px] font-body uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-all"
                                  >
                                    <Edit size={12} />
                                    <span>Replace</span>
                                  </button>
                                  <button
                                    onClick={() => handleDeleteSlotImage(slot.slotNumber, slot.id)}
                                    className="px-3 py-1.5 bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500 hover:text-brand-dark rounded-lg text-[10px] font-body uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-all"
                                  >
                                    <Trash2 size={12} />
                                    <span>Delete</span>
                                  </button>
                                </>
                              ) : (
                                <button
                                  onClick={() => handleOpenEditSlot(slot)}
                                  className="px-4 py-2 bg-brand-accent text-brand-dark hover:bg-white rounded-lg text-[10px] font-body font-bold uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-all"
                                >
                                  <Upload size={12} />
                                  <span>Upload Image</span>
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Sub Tab 2: EXTENDED PORTFOLIO */}
                {gallerySubTab === 'extended' && (
                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                      <div>
                        <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                          Extended Portfolio Collection
                        </h3>
                        <p className="text-xs text-brand-secondary/50 font-body mt-1">
                          Upload additional photography variants to scale your portfolio (50+ images). These can be filtered by category on the main Gallery page.
                        </p>
                      </div>
                      
                      <button
                        onClick={() => handleOpenAddExtended()}
                        className="px-5 py-3 bg-brand-accent text-brand-dark hover:bg-white rounded-xl font-body font-bold uppercase tracking-wider text-xs cursor-pointer flex items-center gap-2 transition-all self-start shrink-0 shadow-glass"
                      >
                        <Plus size={16} />
                        <span>Add Gallery Image</span>
                      </button>
                    </div>

                    {/* Drag-drop block for extended addition */}
                    <div
                      onDragOver={handleExtendedDragOver}
                      onDragLeave={handleExtendedDragLeave}
                      onDrop={handleExtendedDrop}
                      className={`py-10 border border-dashed rounded-3xl text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                        dragOverExtended 
                          ? 'border-brand-accent bg-brand-primary/10 shadow-[0_0_20px_rgba(127,231,231,0.2)]'
                          : 'border-white/5 bg-[#011617]/20 hover:border-white/10'
                      }`}
                      onClick={() => handleOpenAddExtended()}
                    >
                      <Upload className="w-10 h-10 text-brand-secondary/20 mb-3" />
                      <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide">
                        Click or Drag Files Here to Add
                      </h4>
                      <p className="text-[10px] text-brand-secondary/35 font-body uppercase mt-1 tracking-widest">
                        Supports JPEG, PNG, WEBP files
                      </p>
                    </div>

                    {/* Extended list */}
                    {extendedImages.length === 0 ? (
                      <div className="glass-card p-12 text-center rounded-3xl border border-white/5 flex flex-col items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-brand-secondary/15 mb-4" />
                        <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-1">
                          No Extended Images
                        </h4>
                        <p className="text-xs text-brand-secondary/40 font-body uppercase tracking-wider">
                          Use the button above to upload.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {extendedImages.map((item) => (
                          <div
                            key={item.id}
                            className="glass-card p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between min-h-[260px]"
                          >
                            <div>
                              {/* Preview frame */}
                              <div className="relative h-40 rounded-xl overflow-hidden border border-white/10 mb-4 bg-brand-dark/50">
                                <img
                                  src={item.imageUrl.medium}
                                  alt={item.altText || item.title}
                                  className="w-full h-full object-cover object-top"
                                />
                                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-brand-dark/80 border border-brand-accent/20 text-brand-accent text-[9px] font-body uppercase tracking-wider">
                                  {item.category}
                                </span>
                              </div>

                              <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide truncate">
                                {item.title}
                              </h4>
                              <p className="text-[10px] text-brand-secondary/40 font-body mt-1 truncate">
                                {item.altText ? `Alt: ${item.altText}` : 'No Alt Text'}
                              </p>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-white/5">
                              <button
                                onClick={() => setPreviewModalImage(item.imageUrl.original)}
                                className="p-2 border border-white/10 text-brand-secondary/70 hover:text-white hover:border-white/20 rounded-lg text-xs cursor-pointer transition-colors"
                                title="Preview Image"
                              >
                                <Eye size={14} />
                              </button>
                              <button
                                onClick={() => handleOpenEditExtended(item)}
                                className="p-2 bg-brand-primary/40 text-brand-accent hover:bg-brand-accent hover:text-brand-dark rounded-lg text-xs cursor-pointer transition-colors"
                                title="Edit Details"
                              >
                                <Edit size={14} />
                              </button>
                              <button
                                onClick={() => handleDeleteSlotImage(null, item.id)}
                                className="p-2 bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500 hover:text-brand-dark rounded-lg text-xs cursor-pointer transition-colors"
                                title="Delete Image"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Sub Tab 3: SECTIONS VISIBILITY */}
                {gallerySubTab === 'sections' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                        Category Section Visibility
                      </h3>
                      <p className="text-xs text-brand-secondary/50 font-body mt-1">
                        Deactivating a section will hide its filter tab and all associated photos from the public gallery page.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {gallerySections.map((sec) => (
                        <div key={sec.id} className="glass-card p-5 rounded-2xl border border-white/5 flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide">
                              {sec.label}
                            </h4>
                            <p className="text-[10px] font-body uppercase mt-0.5 tracking-widest text-brand-secondary/40">
                              Status: <span className={sec.isActive ? "text-brand-accent" : "text-brand-secondary/60"}>{sec.isActive ? 'Active' : 'Disabled'}</span>
                            </p>
                          </div>
                          <button
                            onClick={() => handleToggleSection(sec.id, sec.isActive)}
                            className="text-brand-accent hover:opacity-85 transition-opacity cursor-pointer"
                          >
                            {sec.isActive ? <ToggleRight size={32} /> : <ToggleLeft className="text-white/25" size={32} />}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sub Tab 4: COVER IMAGES */}
                {gallerySubTab === 'covers' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                        Cover Image Management
                      </h3>
                      <p className="text-xs text-brand-secondary/50 font-body mt-1">
                        Change the hero background images for each of the main event pages on the website.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {coverImages.map((cover) => (
                        <div key={cover.id} className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[260px]">
                          <div>
                            <div className="relative h-40 rounded-xl overflow-hidden border border-white/10 mb-4 bg-brand-dark/50">
                              <img
                                src={cover.imageUrl}
                                alt={cover.label}
                                className="w-full h-full object-cover object-top"
                              />
                              {uploadingCoverId === cover.id && (
                                <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm flex flex-col items-center justify-center">
                                  <div className="w-5 h-5 border-2 border-brand-accent border-t-transparent rounded-full animate-spin mb-2" />
                                  <span className="text-[10px] font-body text-brand-accent uppercase tracking-widest">Optimizing...</span>
                                </div>
                              )}
                            </div>
                            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide truncate">
                              {cover.label}
                            </h4>
                          </div>
                          <div className="flex justify-end mt-4 pt-3 border-t border-white/5">
                            <label className="px-4 py-2 bg-brand-primary/40 text-brand-accent hover:bg-brand-accent hover:text-brand-dark rounded-xl text-[10px] font-body font-semibold uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 border border-transparent hover:border-brand-accent">
                              <Upload size={12} />
                              <span>Change Cover</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleCoverFileChange(e, cover.id)}
                                className="hidden"
                                disabled={uploadingCoverId !== null}
                              />
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 3. EVENTS PANEL */}
            {activeTab === 'events' && (
              <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-6">
                <div className="flex items-center gap-3">
                  <CalendarDays className="text-brand-accent" />
                  <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                    Website Events Sections
                  </h3>
                </div>
                
                <p className="text-xs text-brand-secondary/60 font-body leading-relaxed max-w-2xl">
                  These represent the key event categories shown across our service lists and landing blocks. These sections are hardcoded into the structural architecture of the site, but can be customized or scaled dynamically in future releases.
                </p>

                <div className="border border-white/5 rounded-2xl overflow-hidden bg-brand-dark/50">
                  <table className="w-full text-left font-body text-xs">
                    <thead className="bg-brand-primary/20 text-brand-secondary/80 border-b border-white/5 uppercase tracking-wider font-semibold">
                      <tr>
                        <th className="p-4">Event Section Name</th>
                        <th className="p-4">Default Category</th>
                        <th className="p-4">Routing Path</th>
                        <th className="p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-brand-secondary/90">
                      <tr>
                        <td className="p-4 font-semibold text-white">Wedding & Engagement Events</td>
                        <td className="p-4">Weddings</td>
                        <td className="p-4 text-brand-accent/70">/wedding-engagement-events</td>
                        <td className="p-4 text-brand-accent">Active</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-white">Baby Shower Events</td>
                        <td className="p-4">Baby Showers</td>
                        <td className="p-4 text-brand-accent/70">/baby-shower-events</td>
                        <td className="p-4 text-brand-accent">Active</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-white">Puberty Ceremony Events</td>
                        <td className="p-4">Puberty Ceremony Events</td>
                        <td className="p-4 text-brand-accent/70">/puberty-ceremony-events</td>
                        <td className="p-4 text-brand-accent">Active</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-white">Collaboration & Modelling Shoots</td>
                        <td className="p-4">Collaboration & Modelling Shoots</td>
                        <td className="p-4 text-brand-accent/70">/collaboration-modelling-shoots</td>
                        <td className="p-4 text-brand-accent">Active</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-white">Corporate Events & Galas</td>
                        <td className="p-4">Corporate Events</td>
                        <td className="p-4 text-brand-accent/70">/corporate-events</td>
                        <td className="p-4 text-brand-accent">Active</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-white">Surprise Events for Loved Ones</td>
                        <td className="p-4">Surprise Celebrations</td>
                        <td className="p-4 text-brand-accent/70">/surprise-events-for-loved-ones</td>
                        <td className="p-4 text-brand-accent">Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 4. SERVICES PANEL */}
            {activeTab === 'services' && (
              <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-brand-accent" />
                  <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                    Website Services Modules
                  </h3>
                </div>

                <p className="text-xs text-brand-secondary/60 font-body leading-relaxed max-w-2xl">
                  These represent the supplemental premium talent and technology services booked alongside major event styling projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-brand-dark/50 border border-white/5 rounded-2xl flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/20 border border-white/5 flex items-center justify-center text-brand-accent">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide">Premium DJ Services</h4>
                      <p className="text-[11px] text-brand-secondary/50 font-body mt-1 leading-normal">
                        Audiovisual sound configurations, customized playlists, and crowd management entertainment.
                      </p>
                      <span className="inline-block mt-3 text-[10px] bg-brand-primary/40 text-brand-accent px-2 py-0.5 rounded-full font-body font-semibold uppercase">
                        Route: /events/dj-services
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-brand-dark/50 border border-white/5 rounded-2xl flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/20 border border-white/5 flex items-center justify-center text-brand-accent">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide">Dance Crew & Pyrotechnics</h4>
                      <p className="text-[11px] text-brand-secondary/50 font-body mt-1 leading-normal">
                        Professional stage performers, cold spark bursts, heavy fog, and production blast effects.
                      </p>
                      <span className="inline-block mt-3 text-[10px] bg-brand-primary/40 text-brand-accent px-2 py-0.5 rounded-full font-body font-semibold uppercase">
                        Route: /events/dance-crew
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. ENQUIRIES PANEL */}
            {activeTab === 'enquiries' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                    Customer Enquiry Inbox
                  </h3>
                  <span className="text-xs text-brand-secondary/50 font-body">
                    {enquiries.length} Messages total
                  </span>
                </div>

                {enquiries.length === 0 ? (
                  <div className="glass-card p-12 rounded-3xl border border-white/5 text-center flex flex-col items-center justify-center">
                    <Inbox className="w-12 h-12 text-brand-secondary/15 mb-4" />
                    <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-1">
                      No Enquiries Yet
                    </h4>
                    <p className="text-xs text-brand-secondary/40 font-body uppercase tracking-wider">
                      Inbox is empty
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {enquiries.map((enq) => (
                      <motion.div
                        key={enq.id}
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card p-6 rounded-2xl border border-white/5 space-y-4 hover:border-brand-accent/20 transition-colors"
                      >
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-white/5 pb-4">
                          <div>
                            <h4 className="text-white font-heading font-bold uppercase tracking-wide text-sm">
                              {enq.name}
                            </h4>
                            <p className="text-brand-secondary/50 font-body text-xs mt-0.5">
                              {enq.email} | {enq.phone}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <span className="px-2.5 py-1 rounded-full bg-brand-primary/45 border border-brand-accent/20 text-brand-accent text-[10px] font-body font-semibold uppercase">
                              {enq.eventType}
                            </span>
                            <span className="text-[10px] text-brand-secondary/35 font-body flex items-center gap-1.5">
                              <Clock size={12} />
                              {new Date(enq.createdAt).toLocaleDateString()} {new Date(enq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        </div>

                        {/* Message content */}
                        <p className="text-brand-secondary/80 font-body text-xs leading-relaxed whitespace-pre-line bg-brand-dark/20 p-4 rounded-xl border border-white/5">
                          {enq.message}
                        </p>

                        {/* Actions */}
                        <div className="flex justify-end">
                          <button
                            onClick={() => handleDeleteEnquiry(enq.id)}
                            className="flex items-center gap-2 text-xs text-red-400 hover:text-red-300 font-body font-medium transition-colors cursor-pointer"
                          >
                            <Trash2 size={14} />
                            <span>Delete Record</span>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 6. SETTINGS PANEL */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-6">
                  <div className="flex items-center gap-3">
                    <Database className="text-brand-accent" />
                    <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                      Database Maintenance
                    </h3>
                  </div>

                  <p className="text-xs text-brand-secondary/60 font-body leading-relaxed max-w-2xl">
                    Use these maintenance commands to reset the site-wide mock database tables to their default seeded state. This will erase all your custom uploaded images.
                  </p>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleResetDatabase}
                      className="px-6 py-3.5 bg-red-500/10 border border-red-500/30 hover:bg-red-500 text-white hover:text-brand-dark rounded-xl font-body font-semibold uppercase tracking-wider text-xs transition-all duration-300 cursor-pointer flex items-center gap-2"
                    >
                      <Trash2 size={14} />
                      <span>Reset To Seed Data</span>
                    </button>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="text-brand-accent" />
                    <h4 className="text-white font-heading font-bold uppercase tracking-wider text-sm">
                      Security Credentials
                    </h4>
                  </div>
                  <p className="text-xs text-brand-secondary/60 font-body leading-relaxed">
                    Authentication is active at the session level. The default administrative login username is <strong className="text-white">admin</strong> and password is <strong className="text-white">admin123</strong>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Editor Modal Overlay */}
      <AnimatePresence>
        {editorModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-dark border border-white/10 rounded-[2.5rem] w-full max-w-lg p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wider">
                    {currentSlotNum ? `Edit Slot ${currentSlotNum}` : (currentItemId ? 'Edit Image' : 'Add Image')}
                  </h3>
                  <p className="text-[10px] text-brand-secondary/40 font-body uppercase mt-0.5 tracking-widest">
                    {currentSlotNum ? (SLOT_LAYOUTS[currentSlotNum]?.label || 'Medium Slot') : 'Extended Portfolio'}
                  </p>
                </div>
                <button
                  onClick={() => setEditorModalOpen(false)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-secondary hover:text-brand-accent hover:border-brand-accent/40 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Editor Forms split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Image upload box */}
                <div className="space-y-3">
                  <span className="text-[10px] font-body font-semibold text-brand-secondary/70 uppercase tracking-wider">
                    Upload Image
                  </span>
                  
                  {/* Drag-Drop Box */}
                  <div className="relative border border-dashed border-white/10 hover:border-brand-accent/30 rounded-2xl h-[190px] overflow-hidden flex flex-col items-center justify-center bg-brand-dark/30 group">
                    {uploadedImages && uploadedImages.thumbnail ? (
                      <>
                        <img
                          src={uploadedImages.thumbnail}
                          alt="preview"
                           className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <label className="px-4 py-2 bg-brand-accent text-brand-dark text-[10px] font-body font-semibold uppercase tracking-wider rounded-lg cursor-pointer hover:bg-white transition-colors">
                            Change File
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-brand-primary/20 border border-white/5 flex items-center justify-center text-brand-secondary/40 mb-2">
                          {isUploading ? (
                            <div className="w-4 h-4 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Upload size={18} />
                          )}
                        </div>
                        <span className="text-[10px] font-body text-brand-secondary/40 px-2 text-center">
                          {isUploading ? 'Compressing WebP...' : 'Drag file or click'}
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </>
                    )}
                  </div>
                </div>

                {/* Form fields */}
                <form onSubmit={handleSaveCMSChanges} className="space-y-4">
                  {/* Title */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-body font-semibold text-brand-secondary/70 uppercase tracking-wider">
                      Image Title
                    </label>
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="e.g. Dream Stage"
                      required
                      className="bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-body focus:outline-none focus:border-brand-accent transition-colors placeholder-brand-secondary/25"
                    />
                  </div>

                  {/* Category */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-body font-semibold text-brand-secondary/70 uppercase tracking-wider">
                      Category
                    </label>
                    <select
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      className="bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-body focus:outline-none focus:border-brand-accent transition-colors"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Alt Text */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-body font-semibold text-brand-secondary/70 uppercase tracking-wider">
                      Alt Text (SEO)
                    </label>
                    <input
                      type="text"
                      value={editAltText}
                      onChange={(e) => setEditAltText(e.target.value)}
                      placeholder="e.g. Wedding flowers backdrop"
                      className="bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-body focus:outline-none focus:border-brand-accent transition-colors placeholder-brand-secondary/25"
                    />
                  </div>
                </form>
              </div>

              {/* Description full width */}
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-body font-semibold text-brand-secondary/70 uppercase tracking-wider">
                  Description
                </label>
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Describe this portfolio highlights..."
                  rows={2}
                  className="bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-body focus:outline-none focus:border-brand-accent transition-colors placeholder-brand-secondary/25 resize-none"
                />
              </div>

              {/* Status Toggle & Save row */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-6 justify-between items-center">
                {/* Swap positioning (Only for Predefined Showcase Slots) */}
                {currentSlotNum ? (
                  <div className="flex flex-col space-y-1">
                    <span className="text-[9px] font-body font-semibold text-brand-secondary/40 uppercase tracking-wider">
                      Swap with slot
                    </span>
                    <div className="flex items-center gap-2">
                      <select
                        value={swapTargetSlot}
                        onChange={(e) => setSwapTargetSlot(e.target.value)}
                        className="bg-brand-dark/50 border border-white/10 rounded-lg px-2.5 py-1.5 text-white text-[10px] font-body focus:outline-none focus:border-brand-accent transition-colors"
                      >
                        <option value="">Select</option>
                        {Array.from({ length: 10 }, (_, i) => i + 1)
                          .filter((n) => n !== currentSlotNum)
                          .map((num) => (
                            <option key={num} value={num}>
                              Slot {num}
                            </option>
                          ))}
                      </select>
                      <button
                        type="button"
                        onClick={handleSwapSlots}
                        disabled={!swapTargetSlot}
                        className="p-2 bg-brand-primary/30 border border-white/5 rounded-lg text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        title="Swap Slots"
                      >
                        <ArrowLeftRight size={12} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-1" /> // empty spacer
                )}

                {/* Save/Delete buttons */}
                <div className="flex items-center gap-3">
                  {/* Status Toggle */}
                  <div className="flex items-center gap-2 mr-2">
                    <span className="text-[10px] font-body font-semibold text-brand-secondary/40 uppercase tracking-wider">
                      Active
                    </span>
                    <button
                      type="button"
                      onClick={() => setEditIsActive(!editIsActive)}
                      className="text-brand-accent hover:opacity-85 transition-opacity"
                    >
                      {editIsActive ? <ToggleRight size={28} /> : <ToggleLeft className="text-white/25" size={28} />}
                    </button>
                  </div>

                  {uploadedImages && (
                    <button
                      type="button"
                      onClick={() => handleDeleteSlotImage(currentSlotNum, currentItemId)}
                      className="px-4 py-2 bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500 hover:text-brand-dark rounded-xl font-body font-semibold uppercase tracking-wider text-[10px] transition-all cursor-pointer"
                    >
                      Delete
                    </button>
                  )}
                  
                  <button
                    onClick={handleSaveCMSChanges}
                    className="px-6 py-2.5 bg-brand-accent text-brand-dark hover:bg-white rounded-xl font-body font-bold uppercase tracking-wider text-[10px] transition-all cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox / Preview Modal Overlay */}
      <AnimatePresence>
        {previewModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setPreviewModalImage(null)}
          >
            <button
              onClick={() => setPreviewModalImage(null)}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-brand-dark/80 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary hover:text-brand-accent hover:border-brand-accent/40 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="relative max-w-4xl max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={previewModalImage}
                alt="CMS original preview"
                className="max-w-full max-h-[80vh] rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] object-contain border border-white/5"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminDashboard;
