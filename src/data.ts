import { ServiceItem, PackageItem, PortfolioItem, TestimonialItem, FAQItem, BlogArticle, QuoteFeature } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    titleId: 'Pembuatan Website',
    description: 'Custom, high-performance websites built using React, Next.js, and modern tech stacks.',
    descriptionId: 'Website kustom berperforma tinggi menggunakan React, Next.js, dan teknologi modern.',
    longDescription: 'Our signature development service. We design and build ultra-fast, modern, and high-performance websites customized for Bali and Nusa Penida businesses. From custom booking integrations to beautiful responsive grids, we handle the full life cycle of your online hub.',
    longDescriptionId: 'Layanan utama kami. Kami merancang dan membangun website ultra cepat, modern, dan berperforma tinggi yang disesuaikan untuk bisnis di Bali dan Nusa Penida. Mulai dari integrasi sistem booking kustom hingga grid responsif yang menawan, kami menangani siklus lengkap platform online Anda.',
    iconName: 'Code',
    features: ['Custom React/Next.js Codebase', 'Ultra-fast loading (95+ Lighthouse)', 'SEO-semantic markup', 'WhatsApp & Social Integration', 'Self-editing admin dashboard'],
    featuresId: ['Codebase React/Next.js Kustom', 'Loading Ultra Cepat (Lighthouse 95+)', 'Markup Semantic SEO', 'Integrasi WhatsApp & Sosial Media', 'Dashboard Admin yang Mudah Diedit']
  },
  {
    id: 'landing-page',
    title: 'Landing Pages',
    titleId: 'Landing Page',
    description: 'High-converting single pages crafted to turn local and international visitors into active leads.',
    descriptionId: 'Halaman tunggal berkonversi tinggi yang dirancang untuk mengubah pengunjung menjadi pelanggan aktif.',
    longDescription: 'Turn advertisements and search traffic into paying customers. Ideal for day tour operators, motor rental packages, snorkeling trips, or seasonal villa promotions. Engineered with strong psychological triggers, perfect spacing, and seamless CTAs.',
    longDescriptionId: 'Ubah iklan dan traffic pencarian menjadi pelanggan setia. Sangat cocok untuk operator tour harian, paket sewa motor, trip snorkeling, atau promosi villa musiman. Dirancang dengan pemicu psikologis yang kuat, jarak ideal, dan tombol aksi (CTA) yang mulus.',
    iconName: 'Layout',
    features: ['Optimized lead-capture forms', 'Responsive mobile layout', 'Speed optimized under 1 second', 'Analytics & Facebook Pixel setup', 'A/B tested conversion flows'],
    featuresId: ['Formulir Capture Lead yang Optimal', 'Layout Mobile Responsif', 'Kecepatan di bawah 1 detik', 'Setup Analisis & Pixel Facebook', 'Alur Konversi yang Teruji A/B']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    titleId: 'Desain UI/UX',
    description: 'Futuristic, custom interface designs with rich layouts and glassmorphic micro-interactions.',
    descriptionId: 'Desain antarmuka kustom yang futuristik dengan tata letak kaya dan mikro-interaksi glassmorphic.',
    longDescription: 'Stand out from competitors with custom visual branding. We craft interfaces that reflect the natural beauty of Nusa Penida with high-tech SaaS elements, blending serene tropical elements with elegant glass panels, custom typography, and clean grids.',
    longDescriptionId: 'Tampil menonjol dari kompetitor dengan branding visual kustom. Kami merancang antarmuka yang mencerminkan keindahan alam Nusa Penida dipadukan dengan elemen teknologi tinggi, memadukan nuansa tropis yang tenang dengan panel kaca elegan, tipografi kustom, dan grid bersih.',
    iconName: 'Figma',
    features: ['Custom Figma design files', 'Interactive clickable prototypes', 'User journey mapping & research', 'Mobile-first responsive grids', 'Stripe & Apple style ergonomics'],
    featuresId: ['File Desain Figma Kustom', 'Prototipe Klik-Aktif Interaktif', 'Riset & Pemetaan Perjalanan Pengguna', 'Grid Responsif Mobile-First', 'Ergonomi Gaya Stripe & Apple']
  },
  {
    id: 'hosting',
    title: 'Premium Hosting',
    titleId: 'Hosting Premium',
    description: 'Blazing-fast cloud servers with global CDN, daily backups, and free SSL certificates.',
    descriptionId: 'Server cloud super cepat dengan CDN global, backup harian, dan sertifikat SSL gratis.',
    longDescription: 'Reliable digital infrastructure is crucial. We host your systems on ultra-fast, scale-to-zero server instances with edge network caching. Your website loads instantly for tourists in Europe, America, Australia, or locally in Indonesia.',
    longDescriptionId: 'Infrastruktur digital yang andal sangatlah penting. Kami meng-host sistem Anda pada instance server cloud ultra cepat dengan caching jaringan edge. Website Anda dapat diakses secara instan oleh turis dari Eropa, Amerika, Australia, hingga lokal di Indonesia.',
    iconName: 'Cloud',
    features: ['99.9% guaranteed uptime', 'Cloudflare CDN edge integration', 'Free SSL / HTTPS encryption', 'Automated daily cloud backups', 'DDoS protection & daily firewalls'],
    featuresId: ['Jaminan Uptime 99.9%', 'Integrasi Edge CDN Cloudflare', 'Enkripsi SSL / HTTPS Gratis', 'Backup Cloud Harian Otomatis', 'Perlindungan DDoS & Firewall Harian']
  },
  {
    id: 'domain',
    title: 'Domain Registration',
    titleId: 'Pendaftaran Domain',
    description: 'Secure registration for international (.com, .net) and local Indonesian (.co.id, .id) domains.',
    descriptionId: 'Pendaftaran aman untuk domain internasional (.com, .net) dan lokal Indonesia (.co.id, .id).',
    longDescription: 'Your brand name starts with a great domain. We assist with instant registration, secure DNS routing, SPF/DKIM records configuration, and setting up professional Google Workspace business email addresses (e.g. hello@yourvilla.com).',
    longDescriptionId: 'Nama brand Anda dimulai dari domain yang tepat. Kami membantu pendaftaran instan, perutean DNS yang aman, konfigurasi SPF/DKIM, dan penyusunan email bisnis profesional Google Workspace (misal: hello@yourvilla.com).',
    iconName: 'Globe',
    features: ['Instant DNS updates & routing', 'Local (.id, .web.id) registration', 'International (.com, .org) domains', 'WHOIS domain privacy guard', 'Google Workspace setup assistance'],
    featuresId: ['Update & Perutean DNS Instan', 'Pendaftaran Domain Lokal (.id, .co.id)', 'Domain Internasional (.com, .org)', 'Proteksi Privasi Domain WHOIS', 'Bantuan Setup Google Workspace']
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    titleId: 'Layanan SEO',
    description: 'Drive high-intent direct bookings and organic Google search traffic straight to your website.',
    descriptionId: 'Dapatkan booking langsung dan traffic pencarian organik Google langsung ke website Anda.',
    longDescription: 'Stop paying hefty 15-20% commissions to OTAs. We optimize your website with comprehensive local SEO strategies, ensuring tourists searching for "best villa in Nusa Penida" or "Nusa Penida motorbike rental" find you first.',
    longDescriptionId: 'Berhenti membayar komisi besar 15-20% ke OTA. Kami mengoptimasi website Anda dengan strategi SEO lokal komprehensif, memastikan turis yang mencari "best villa in Nusa Penida" atau "sewa motor Nusa Penida" menemukan bisnis Anda terlebih dahulu.',
    iconName: 'Search',
    features: ['Keyword research for travel & tours', 'On-page meta & schema markup', 'Google Business Profile optimization', 'Local link-building in Bali', 'Monthly search performance report'],
    featuresId: ['Riset Kata Kunci Wisata & Tour', 'Meta & Schema Markup On-Page', 'Optimasi Google Business Profile', 'Membangun Backlink Lokal di Bali', 'Laporan Kinerja Bulanan']
  }
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'pkg-starter',
    name: 'Starter',
    nameId: 'Starter',
    price: 'Rp1.499.000',
    priceNumeric: 1499000,
    period: 'One-Time',
    periodId: 'Sekali Bayar',
    description: 'Perfect for local UMKM, small homestays, or specific tour activities looking for a rapid, beautiful launch.',
    descriptionId: 'Sangat cocok untuk UMKM lokal, homestay kecil, atau aktivitas tour spesifik yang membutuhkan peluncuran cepat dan elegan.',
    features: [
      'Stunning 1-Page Landing Page',
      '100% Responsive Mobile Design',
      'Direct WhatsApp Chat Integration',
      'Modern Interactive Contact Form',
      'Free SSL Certificate Setup',
      'Basic On-Page SEO Keywords',
      '1 Design Revision Round',
      'Social Media Link Integration'
    ],
    featuresId: [
      'Landing Page 1 Halaman Menawan',
      'Desain Mobile 100% Responsif',
      'Integrasi Chat WhatsApp Langsung',
      'Form Kontak Interaktif Modern',
      'Setup Sertifikat SSL Gratis',
      'Kata Kunci SEO On-Page Dasar',
      '1 Sesi Revisi Desain',
      'Integrasi Link Sosial Media'
    ],
    notIncluded: [
      'CMS / Admin Dashboard',
      'Unlimited Revisions',
      'Free Domain Name',
      'Dynamic Booking System'
    ],
    notIncludedId: [
      'CMS / Dashboard Admin',
      'Revisions Tanpa Batas',
      'Nama Domain Gratis',
      'Sistem Booking Dinamis'
    ],
    isPopular: false,
    buttonText: 'Get Started',
    buttonTextId: 'Pilih Starter'
  },
  {
    id: 'pkg-business',
    name: 'Business',
    nameId: 'Business',
    price: 'Rp4.999.000',
    priceNumeric: 4999000,
    period: 'One-Time',
    periodId: 'Sekali Bayar',
    description: 'The complete digital foundation for villas, boutique resorts, car/motor rentals, and professional businesses.',
    descriptionId: 'Fondasi digital lengkap untuk villa, resort butik, rental mobil/motor, dan bisnis profesional.',
    features: [
      'Premium Multi-Page Company Profile',
      'Easy-to-use CMS (Edit blogs/rooms)',
      'Highly Polished Premium UI Design',
      'Comprehensive Admin Dashboard',
      'Advanced SEO Target Strategy',
      'Google Analytics 4 & Search Console',
      'Free .COM or .ID Domain (1 Year)',
      'Free High-Speed Hosting (1 Year)',
      'Unlimited Revisions during design',
      'Interactive Maps & Inquiry Forms'
    ],
    featuresId: [
      'Profil Perusahaan Multi-Halaman Premium',
      'CMS yang Mudah Digunakan (Edit blog/kamar)',
      'Desain UI Premium Sangat Halus',
      'Dashboard Admin Komprehensif',
      'Strategi Target SEO Tingkat Lanjut',
      'Google Analytics 4 & Search Console',
      'Domain .COM atau .ID Gratis (1 Tahun)',
      'Hosting Kecepatan Tinggi Gratis (1 Tahun)',
      'Revisi Tanpa Batas selama fase desain',
      'Peta Interaktif & Formulir Pertanyaan'
    ],
    isPopular: true,
    badge: 'Most Popular',
    badgeId: 'Paling Populer',
    buttonText: 'Launch Project',
    buttonTextId: 'Mulai Proyek',
    gradient: 'linear-gradient(135deg, #0C1446, #2B5C92, #3B82F6)'
  },
  {
    id: 'pkg-enterprise',
    name: 'Enterprise',
    nameId: 'Enterprise',
    price: 'Custom Price',
    priceNumeric: 0,
    period: 'Scale-up',
    periodId: 'Sesuai Kebutuhan',
    description: 'Custom, high-end web applications with deep database models, user authentication, and booking engines.',
    descriptionId: 'Aplikasi web kustom kelas atas dengan model database mendalam, autentikasi pengguna, dan sistem booking.',
    features: [
      'Fully Custom React / Next.js Web App',
      'Live Online Booking System',
      'Secure User Authentication & Profiles',
      'Robust SQL / Firestore Database Integration',
      'External API integrations (Weather, Flights)',
      'Enterprise Cloud Hosting & Autoscaling',
      'Priority 24/7 Support Channel',
      'Ongoing Security & Core Maintenance',
      'Custom Payment Gateway Integration',
      'Advanced Multi-Language Support'
    ],
    featuresId: [
      'Aplikasi Web React / Next.js Kustom Penuh',
      'Sistem Pemesanan Online Langsung',
      'Autentikasi & Profil Pengguna yang Aman',
      'Integrasi Database SQL / Firestore Tangguh',
      'Integrasi API Eksternal (Cuaca, Penerbangan)',
      'Hosting Cloud Enterprise & Autoscale',
      'Saluran Dukungan Prioritas 24/7',
      'Keamanan Berkelanjutan & Pemeliharaan Inti',
      'Integrasi Payment Gateway Kustom',
      'Dukungan Multi-Bahasa Tingkat Lanjut'
    ],
    isPopular: false,
    buttonText: 'Consult Our Architect',
    buttonTextId: 'Hubungi Arsitek Kami'
  }
];

export const CALCULATOR_FEATURES: QuoteFeature[] = [
  { id: 'feat-base-lp', name: 'Base Landing Page', nameId: 'Base Landing Page', description: 'Premium single-page setup', descriptionId: 'Konfigurasi halaman tunggal premium', price: 1499000, category: 'pages' },
  { id: 'feat-base-cp', name: 'Base Company Profile (Multi-page)', nameId: 'Profil Perusahaan (Multi-Halaman)', description: 'Up to 5 professional pages', descriptionId: 'Hingga 5 halaman profesional', price: 4499000, category: 'pages' },
  { id: 'feat-base-app', name: 'Base Custom Web Application', nameId: 'Aplikasi Web Kustom Utama', description: 'Advanced responsive dashboard', descriptionId: 'Dashboard responsif canggih', price: 9999000, category: 'pages' },
  
  { id: 'feat-cms', name: 'CMS & Admin Panel', nameId: 'CMS & Panel Admin', description: 'Ability to update content, photos, and blogs yourself', descriptionId: 'Kemudahan mengedit konten, foto, dan blog sendiri', price: 1500000, category: 'features' },
  { id: 'feat-booking', name: 'Room/Vehicle Booking Engine', nameId: 'Sistem Booking Kamar/Kendaraan', description: 'Calendar, availability, and guest form engine', descriptionId: 'Mesin kalender, ketersediaan, dan formulir tamu', price: 2500000, category: 'features' },
  { id: 'feat-payment', name: 'Payment Gateway Integration', nameId: 'Integrasi Payment Gateway', description: 'Accept credit card, QRIS, bank transfers directly', descriptionId: 'Terima kartu kredit, QRIS, transfer bank langsung', price: 3000000, category: 'features' },
  { id: 'feat-multilang', name: 'Multi-Language Support (ID / EN)', nameId: 'Dukungan Multi-Bahasa (ID / EN)', description: 'Professional manual translations with easy switcher', descriptionId: 'Penerjemahan manual profesional dengan switcher mudah', price: 1200000, category: 'features' },
  { id: 'feat-seo-adv', name: 'Advanced Local SEO Pack', nameId: 'Paket SEO Lokal Tingkat Lanjut', description: 'Competitor tracking and content strategy mapping', descriptionId: 'Pelacakan kompetitor dan pemetaan strategi konten', price: 1000000, category: 'features' },
  
  { id: 'feat-host-basic', name: 'High-Speed Cloud Hosting', nameId: 'Hosting Cloud Kecepatan Tinggi', description: '1 Year premium fast edge server storage', descriptionId: 'Penyimpanan server edge cepat premium 1 Tahun', price: 900000, category: 'hosting' },
  { id: 'feat-domain-com', name: 'Free Domain Register (.COM / .ID)', nameId: 'Registrasi Domain Gratis (.COM / .ID)', description: '1 Year domain registration', descriptionId: 'Registrasi nama domain gratis selama 1 Tahun', price: 250000, category: 'hosting' },
  
  { id: 'feat-maint-basic', name: 'Priority Monthly Maintenance', nameId: 'Pemeliharaan Bulanan Prioritas', description: 'Monthly security audits, speed boosts, and backups', descriptionId: 'Audit keamanan bulanan, peningkatan kecepatan, & backup', price: 500000, category: 'support' },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-villa',
    title: 'Penida Sunset Cliffside Villa',
    category: 'Villa',
    categoryLabel: 'Villa & Resort',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
    description: 'Premium website for a luxury cliffside villa in Nusa Penida with direct booking integration and stunning imagery.',
    clientName: 'Penida Sunset Villa Group',
    location: 'Nusa Penida, Bali',
    features: ['Direct Booking API', 'Visual Gallery', 'SEO Bali Rank #1', 'Speed Optimized'],
    url: 'https://example.com/sunset-villa'
  },
  {
    id: 'port-hotel',
    title: 'Crystal Bay Boutique Resort',
    category: 'Hotel',
    categoryLabel: 'Hotel & Resort',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop',
    description: 'A multi-page high-conversion portal for a premium hotel near Crystal Bay with room selection and interactive map.',
    clientName: 'Crystal Bay Resort Ltd',
    location: 'Saketi, Nusa Penida',
    features: ['CMS Room Editor', 'Google Maps Api', 'WhatsApp Inquiry', 'Analytics Setup'],
    url: 'https://example.com/crystal-bay'
  },
  {
    id: 'port-restaurant',
    title: 'The Edge Beachfront Grill',
    category: 'Restaurant',
    categoryLabel: 'Café & Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    description: 'Digital menu, reservation system, and local SEO optimized page for a beachfront restaurant in Ped, Nusa Penida.',
    clientName: 'The Edge Bistro',
    location: 'Ped, Nusa Penida',
    features: ['Interactive PDF/Web Menu', 'Table Booking Form', 'TripAdvisor Link', 'Local SEO'],
    url: 'https://example.com/edge-beach'
  },
  {
    id: 'port-rental',
    title: 'Penida Ride Motorbike Rental',
    category: 'Rental',
    categoryLabel: 'Rentals',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
    description: 'High-speed motorbike & car booking landing page with calendar selectors and instant WhatsApp confirmation.',
    clientName: 'Penida Ride',
    location: 'Toyapakeh Harbor, Nusa Penida',
    features: ['Instant Bike Selector', 'No-Deposit Checkout', 'Automatic WA message', '100% Mobile UI'],
    url: 'https://example.com/penida-ride'
  },
  {
    id: 'port-tour',
    title: ' Broken Beach Private Tours',
    category: 'Tour',
    categoryLabel: 'Tour & Travel',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    description: 'High conversion tour landing page focusing on dynamic travel itineraries and photo galleries of Diamond Beach.',
    clientName: 'Broken Beach Travel',
    location: 'Nusa Penida, Bali',
    features: ['Instant Book Button', 'Review Slider', 'Responsive Package Grid', 'High Speed'],
    url: 'https://example.com/broken-beach-tours'
  },
  {
    id: 'port-dive',
    title: 'Manta Point Divers Penida',
    category: 'Dive Center',
    categoryLabel: 'Diving & Tours',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    description: 'An immersive diving platform with booking courses, gear logs, and PADI-certified trainer profiles.',
    clientName: 'Manta Point Dive Team',
    location: 'Toyapakeh, Nusa Penida',
    features: ['Course Booking System', 'Water Conditions Feed', 'Trainer CMS Profile', 'Multilingual'],
    url: 'https://example.com/manta-divers'
  },
  {
    id: 'port-umkm',
    title: 'Sari Tenun Nusa Penida',
    category: 'UMKM',
    categoryLabel: 'UMKM & Retail',
    image: 'https://images.unsplash.com/photo-1608745851899-0d5cd0123cc8?q=80&w=800&auto=format&fit=crop',
    description: 'A beautiful local craft shop selling handwoven traditional Nusa Penida songket fabric with catalog and inquiry.',
    clientName: 'Koperasi Tenun Sari',
    location: 'Kutampi, Nusa Penida',
    features: ['Product Catalog', 'Weaving Process Blog', 'Direct WhatsApp Sales', 'SEO Bali'],
    url: 'https://example.com/sari-tenun'
  },
  {
    id: 'port-comprof',
    title: 'Nusa Paradise Speedboat Operator',
    category: 'Company Profile',
    categoryLabel: 'Corporate',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop',
    description: 'Fast boat ticket operator connecting Sanur to Nusa Penida with schedule charts and real-time boat status indicators.',
    clientName: 'Nusa Paradise Boat Ltd',
    location: 'Sanur & Toyapakeh',
    features: ['Real-Time Schedule Matrix', 'Agent Portal', 'PDF Ticket Generator', 'SEO Indonesia'],
    url: 'https://example.com/nusa-paradise'
  },
  {
    id: 'port-landing',
    title: 'Kelingking Secret Point Escape',
    category: 'Landing Page',
    categoryLabel: 'Landing Pages',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    description: 'A modern, high-converting lead capture page designed to secure private helicopter and photo tour bookings.',
    clientName: 'Kelingking Escapes',
    location: 'Bunga Mekar, Nusa Penida',
    features: ['Stripe-Style Form', '3D Drone Tour embed', 'Exclusive CTA', 'Framer Animations'],
    url: 'https://example.com/kelingking-escape'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Wayan Sudiarta',
    role: 'Owner',
    roleId: 'Pemilik',
    businessName: 'Penida Sunset Cliffside Villa',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    content: 'Sebelum menggunakan website dari BaleHost, kami hanya bergantung pada booking.com yang memotong komisi 15%. Sekarang, 40% pemesanan kami masuk langsung lewat WhatsApp website, menghemat jutaan rupiah tiap bulannya! Desainnya juga sangat berkelas.',
    contentEn: 'Before using website from BaleHost, we relied solely on booking.com which cuts a 15% commission. Now, 40% of our bookings come directly through our website via WhatsApp, saving us millions of rupiah every month! The design is also very premium.',
    location: 'Nusa Penida, Bali',
    locationId: 'Nusa Penida, Bali'
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Operational Director',
    roleId: 'Direktur Operasional',
    businessName: 'Manta Dive Explorers',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    content: 'Sangat luar biasa. Tim membangun aplikasi web pemesanan responsif premium yang menangani registrasi perjalanan menyelam harian kami dengan lancar. Wisatawan dari Jerman dan Australia terus memuji betapa indah dan profesionalnya website kami.',
    contentEn: 'Absolutely incredible work. The team built a premium responsive booking web app that handles our daily diving trip registration seamlessly. Tourists from Germany and Australia constantly comment on how beautiful and professional our website is.',
    location: 'Toyapakeh, Nusa Penida',
    locationId: 'Toyapakeh, Nusa Penida'
  },
  {
    id: 'test-3',
    name: 'Made Astawa',
    role: 'Founder',
    roleId: 'Pendiri',
    businessName: 'Penida Motorbike Rent & Tour',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    content: 'Jasa pembuatan website BaleHost sangat direkomendasikan. Kami memesan paket landing page untuk sewa motor. Baru 1 bulan tayang, performa SEO kami langsung naik di halaman pertama Google untuk keyword "motor rental Nusa Penida". Pesanan terus mengalir.',
    contentEn: 'BaleHost website building services are highly recommended. We ordered a landing page package for motorcycle rental. Just 1 month live, our SEO performance shot directly to Google front page for keyword "motor rental Nusa Penida". Orders keep flowing.',
    location: 'Nusa Penida',
    locationId: 'Nusa Penida'
  },
  {
    id: 'test-4',
    name: 'Ketut Suci',
    role: 'Manager',
    roleId: 'Manajer',
    businessName: 'Warung Beachfront Sunset',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    content: 'Website menu digital kami sangat cepat! Pengunjung di pantai tinggal scan QR dan langsung bisa melihat menu makanan yang beranimasi mewah. Terima kasih BaleHost, tim developer lokal yang sangat berdedikasi dan ramah 24 jam.',
    contentEn: 'Our digital menu website is blazing fast! Beachfront guests just scan the QR code and instantly view a gorgeously animated food menu. Thank you BaleHost, a very dedicated and friendly 24/7 local developer team.',
    location: 'Ped, Nusa Penida',
    locationId: 'Ped, Nusa Penida'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does website development take?',
    questionId: 'Berapa lama proses pembuatan website?',
    answer: 'It depends on the complexity of your project. A single-page landing page (Starter Package) typically takes 3 to 7 working days. A complete Multi-page Company Profile with CMS (Business Package) takes 10 to 21 working days, while highly custom Web Applications (Enterprise Package) take 4 to 8 weeks including design prototyping and testing.',
    answerId: 'Tergantung pada kompleksitas proyek Anda. Landing page satu halaman (Paket Starter) biasanya memakan waktu 3 hingga 7 hari kerja. Profil Perusahaan multi-halaman lengkap dengan CMS (Paket Bisnis) membutuhkan waktu 10 hingga 21 hari kerja, sementara Aplikasi Web kustom (Paket Enterprise) membutuhkan waktu 4 hingga 8 minggu termasuk pembuatan prototipe desain dan pengujian.'
  },
  {
    id: 'faq-2',
    question: 'Do you provide hosting and a domain name?',
    questionId: 'Apakah Anda menyediakan hosting dan nama domain?',
    answer: 'Yes! Both our Business and Enterprise packages include high-speed, secure SSD cloud hosting and registration for popular domains like .com, .id, or .net free for the first year. We handle all DNS records and Cloudflare CDN routing for blazing-fast speed.',
    answerId: 'Ya! Paket Bisnis dan Enterprise kami sudah termasuk cloud hosting SSD berkecepatan tinggi dan pendaftaran domain populer seperti .com, .id, atau .net secara gratis untuk tahun pertama. Kami menangani semua rekaman DNS dan perutean Cloudflare CDN untuk kecepatan yang sangat cepat.'
  },
  {
    id: 'faq-3',
    question: 'Is domain registration included in all packages?',
    questionId: 'Apakah pendaftaran domain sudah termasuk di semua paket?',
    answer: 'Domain registration is included for free in our Business package for 1 year. For our Starter package, you can add domain registration as a minor add-on, or provide your own, and we will configure and connect it for free.',
    answerId: 'Pendaftaran domain gratis selama 1 tahun sudah termasuk dalam Paket Bisnis kami. Untuk Paket Starter, Anda bisa menambahkan pendaftaran domain sebagai add-on minor, atau menggunakan domain Anda sendiri dan kami akan mengonfigurasinya secara gratis.'
  },
  {
    id: 'faq-4',
    question: 'Can you redesign our existing old website?',
    questionId: 'Apakah Anda bisa mendesain ulang website lama kami yang sudah ada?',
    answer: 'Absolutely! We specialize in modernizing old websites. We will migrate your current content and structure, design a beautiful, modern user interface, optimize the speed score to 95+, and implement advanced local SEO practices so you do not lose your search engine rankings.',
    answerId: 'Tentu saja! Kami berpengalaman dalam memodernisasi website lama. Kami akan memigrasikan konten dan struktur Anda saat ini, merancang UI yang indah dan modern, mengoptimalkan skor kecepatan hingga 95+, dan menerapkan praktik SEO lokal tingkat lanjut agar Anda tidak kehilangan peringkat pencarian Google Anda.'
  },
  {
    id: 'faq-5',
    question: 'Can I request revisions during the project?',
    questionId: 'Apakah saya bisa meminta revisi selama proyek berlangsung?',
    answer: 'Yes, client satisfaction is our priority. In our Business and Enterprise packages, you get unlimited layout and color revisions during the UI/UX design phase in Figma before coding begins. Our Starter package includes 1 round of revisions to keep delivery fast.',
    answerId: 'Ya, kepuasan klien adalah prioritas kami. Di Paket Bisnis dan Enterprise, Anda mendapatkan revisi tata letak dan warna tanpa batas selama fase desain UI/UX di Figma sebelum pengodean dimulai. Paket Starter kami mencakup 1 putaran revisi untuk menjaga pengiriman tetap cepat.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide search engine optimization (SEO)?',
    questionId: 'Apakah Anda menyediakan optimasi mesin pencari (SEO)?',
    answer: 'Yes, all our websites are structured using clean, semantic HTML with schema-org JSON-LD structured data. Basic on-page SEO (meta titles, descriptions, image alt texts) is standard. We also offer advanced local SEO packages to make sure your business ranks first for tourists searching for accommodation or services in Nusa Penida.',
    answerId: 'Ya, semua website kami disusun menggunakan HTML semantik yang bersih dengan data terstruktur JSON-LD dari schema.org. SEO on-page dasar (meta title, deskripsi, teks alt gambar) sudah menjadi standar. Kami juga menawarkan paket SEO lokal tingkat lanjut untuk memastikan bisnis Anda berada di peringkat pertama bagi wisatawan yang mencari akomodasi atau layanan di Nusa Penida.'
  }
];

export const DEVELOPMENT_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    titleId: 'Konsultasi',
    subtitle: 'Business Strategy & Planning',
    subtitleId: 'Strategi & Perencanaan Bisnis',
    description: 'We discuss your business objectives, target audience, local competitors, and required features (e.g., booking, WhatsApp buttons, payment gates). We define the scope and timeline.',
    descriptionId: 'Kami mendiskusikan tujuan bisnis Anda, audiens target, kompetitor lokal, dan fitur-fitur yang diperlukan (seperti sistem booking, tombol WhatsApp, payment gateway). Kami menentukan cakupan dan linimasa.'
  },
  {
    step: '02',
    title: 'UI/UX Design',
    titleId: 'Desain UI/UX',
    subtitle: 'Figma Interactive Prototyping',
    subtitleId: 'Prototipe Figma Interaktif',
    description: 'We draft a custom-tailored visual design highlighting glassmorphism cards and modern typography. You receive a clickable prototype link to review and request layout revisions.',
    descriptionId: 'Kami merancang desain visual kustom dengan menonjolkan kartu glassmorphic dan tipografi modern. Anda mendapatkan tautan prototipe interaktif untuk meninjau dan merevisi tata letak.'
  },
  {
    step: '03',
    title: 'Development',
    titleId: 'Pengembangan',
    subtitle: 'Blazing Fast React & Next.js Coding',
    subtitleId: 'Pemrograman React & Next.js Cepat',
    description: 'Our developers translate the approved design into pristine, SEO-optimized React components. We integrate database layers, contact notifications, and speed configurations.',
    descriptionId: 'Developer kami menerjemahkan desain yang disetujui menjadi komponen React yang bersih dan teroptimasi SEO. Kami mengintegrasikan lapisan database, notifikasi kontak, dan konfigurasi kecepatan.'
  },
  {
    step: '04',
    title: 'Launch',
    titleId: 'Peluncuran',
    subtitle: 'CDN Deployment & SEO Indexing',
    subtitleId: 'Penerapan CDN & Pengindeksan SEO',
    description: 'We deploy your website to secure fast edge cloud hosting, connect your domain, set up SSL, configure Google Analytics, and submit your site schema map directly to Google Search.',
    descriptionId: 'Kami meluncurkan website Anda di hosting cloud edge cepat yang aman, menghubungkan domain Anda, mengeset SSL, mengonfigurasi Google Analytics, dan mendaftarkan peta skema situs Anda langsung ke Google Search.'
  }
];

export const BLOG_DATA: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'Why Every Villa in Nusa Penida Needs a Professional Website',
    titleId: 'Mengapa Setiap Vila di Nusa Penida Membutuhkan Website Profesional',
    slug: 'why-every-villa-needs-website',
    category: 'Website',
    readingTime: '5 min read',
    author: {
      name: 'Putu Sugianta',
      role: 'Lead Web Architect',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'
    },
    publishDate: 'June 28, 2026',
    summary: 'Relying purely on Airbnb or Booking.com cuts your profits by 15-20%. Learn how a premium direct-booking website builds trust and scales your business in Bali.',
    summaryId: 'Hanya mengandalkan Airbnb atau Booking.com memotong keuntungan Anda sebesar 15-20%. Pelajari bagaimana website direct-booking premium membangun kepercayaan dan skala bisnis Anda di Bali.',
    tags: ['Villa Website', 'Direct Booking', 'Nusa Penida Tourism', 'Digital Agency'],
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop',
    content: `
# Why Every Villa in Nusa Penida Needs a Professional Website

Nusa Penida has experienced a spectacular boom in tourism over the last few years. From Broken Beach to Kelingking Secret Point, tourists are flocking to find accommodation. Most villa owners start by listing their properties on third-party Online Travel Agencies (OTAs) such as Airbnb, Agoda, and Booking.com. 

While these platforms are excellent for early visibility, they come with a major catch: **high commissions ranging from 15% to 20% on every single reservation.**

Here is why owning a dedicated, professional website is the single best investment you can make for your luxury villa or homestay in Nusa Penida today.

---

### 1. Zero-Commission Direct Bookings
When tourists book directly through your website, you keep **100% of the revenue**. By integrating a simple, secure WhatsApp booking system or an online calendar like Midtrans, guest payments bypass the OTA fees completely. If your villa brings in Rp50.000.000 a month, OTA commission takes up to Rp10.000.000. Over a year, a professional website (which costs less than Rp5.000.000 once) saves you Rp120.000.000!

### 2. Stand Out with Premium Brand Identity
On Airbnb, your gorgeous infinity pool is listed next to hundreds of other properties in a generic list. You cannot customize the background, layout, or typography. 
A professional website designed by **BaleHost** provides a fully custom **glassmorphic** interface that reflects the actual luxury status of your property. Premium layouts, smooth image galleries, and elegant local typography instantly convey trust.

### 3. Build Long-Term Customer Loyalty
When a guest books via booking.com, they are Booking.com's customer, not yours. Booking.com hides their real email addresses, preventing you from marketing special low-season packages or direct return discounts. With your own website, you own your customer database and can build automated relations.

### 4. Direct WhatsApp Integration for Quick Inquiries
Indonesian and Asian travelers, as well as many international tourists, prefer instant human communication. An integrated WhatsApp floating button lets visitors ask about scooter rentals, snorkeling guides, or dinner packages in real-time, securing reservations before they wander off to a competitor's page.

---

### Conclusion
A professional website is not an expense—it is a powerful income-generating business asset. Stop letting commission models eat away at your hard-earned resort revenue. Partner with **BaleHost Nusa Penida** to build your custom high-conversion villa hub today.
    `
  },
  {
    id: 'blog-2',
    title: 'How SEO Can Increase Direct Booking for Hotels',
    titleId: 'Bagaimana SEO Dapat Meningkatkan Pemesanan Langsung untuk Hotel',
    slug: 'seo-increase-direct-booking-hotels',
    category: 'SEO',
    readingTime: '6 min read',
    author: {
      name: 'Wayan Ardana',
      role: 'SEO Strategist',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop'
    },
    publishDate: 'June 25, 2026',
    summary: 'Discover how on-page SEO, local schemas, and Google Business Optimization can place your hotel at the top of travel queries, driving automatic commission-free sales.',
    summaryId: 'Temukan bagaimana SEO on-page, skema lokal, dan Optimasi Google Bisnis dapat menempatkan hotel Anda di puncak pencarian travel, mendorong penjualan otomatis bebas komisi.',
    tags: ['Hotel SEO', 'Google Maps', 'Direct Booking', 'Travel Bali'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    content: `
# How SEO Can Increase Direct Booking for Hotels in Bali

Search Engine Optimization (SEO) is the art and science of ensuring your hotel's website appears at the top of Google searches when prospective tourists are planning their holiday. For hotels in highly competitive regions like Nusa Penida and Ubud, SEO is the key to escaping the OTA dependency trap.

Let us break down how localized search indexing drives direct, high-value bookings.

---

### Understanding the Travel Search Intent
Before booking a hotel, the modern traveler performs several search queries on Google:
1. **Informational:** *"Best area to stay in Nusa Penida"* or *"Is Nusa Penida safe for families?"*
2. **Commercial:** *"Top beachfront hotels Nusa Penida"* or *"Best eco resort Bali"*
3. **Transactional:** *"Book Crystal Bay resort"* or *"Hotel near Diamond Beach"*

If your website only targets transactional queries (your own brand name), you miss out on 90% of tourists who are still deciding where to stay. By writing informative guides and optimizing your pages, you capture potential guests early.

### Actionable Hotel SEO Strategies

#### 1. Implement Local Schema Markup
Schema markup is structured code placed on your website to tell Google exactly what your business is. Adding the **Hotel Schema** or **LocalBusiness Schema** ensures search engines show your ratings, price range, precise geographical coordinates, and direct reservation links directly on search result snippets.

#### 2. Claim & Dominate Your Google Business Profile
Your Google Maps listing is a goldmine. Ensure:
- Your business name is precise (e.g. *Crystal Bay Resort Nusa Penida*)
- You have high-resolution photos of rooms, ocean views, and food
- You actively gather positive reviews (especially from international tourists mentioning keywords like "clean room", "snorkeling tour", "friendly staff")

#### 3. Optimize for Mobile Performance
Over **82% of travel searches** and hotel bookings are completed on smartphones. If your website takes longer than 3 seconds to load or has buttons that are hard to tap, Google will penalize your rankings. At **BaleHost**, we build all our websites to be mobile-first and blazing fast with Lighthouse scores exceeding 95.

### The Financial Impact of Hotel SEO
A successful SEO campaign driving just **10 extra rooms** booked directly through your website per month instead of OTAs translates to hundreds of dollars in saved commissions. Over a single season, your organic SEO investment completely pays for itself.
    `
  },
  {
    id: 'blog-3',
    title: 'Website vs Instagram for Local Businesses in Bali',
    titleId: 'Website vs Instagram untuk Bisnis Lokal di Bali',
    slug: 'website-vs-instagram-local-businesses',
    category: 'Business',
    readingTime: '4 min read',
    author: {
      name: 'Kadek Dwi',
      role: 'Digital Branding Coach',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop'
    },
    publishDate: 'June 20, 2026',
    summary: 'Instagram is amazing for social visibility, but is it enough to run your entire business? We compare conversion rates, ownership, and search longevity.',
    summaryId: 'Instagram sangat luar biasa untuk visibilitas sosial, tetapi apakah cukup untuk menjalankan seluruh bisnis Anda? Kami membandingkan tingkat konversi, kepemilikan, dan umur panjang pencarian.',
    tags: ['Social Media', 'Business Website', 'Branding Bali', 'Conversion Rate'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    content: `
# Website vs Instagram for Local Businesses in Bali

We hear it all the time from local restaurants, tour guides, and souvenir shops in Nusa Penida: *"I already have an active Instagram page with 5,000 followers, why do I need to spend money on a website?"*

It is a valid question. Instagram is free, highly visual, and highly popular. However, treating a social media app as your primary business hub is a dangerous strategy. Let us compare **Instagram** and a **Dedicated Professional Website** across crucial business factors.

---

### 1. Ownership and Security (The "Landlord" Problem)
When you build your business solely on Instagram, you are building on rented land. If Instagram changes its algorithm tomorrow, your organic post reach could drop to 1%. Even worse, if your account is mistakenly hacked, reported, or suspended, your entire business pipeline disappears overnight.
With a **custom website** hosted by **BaleHost**, you own 100% of your digital home. No algorithm can hide your content, and your data is protected by secure cloud backups.

### 2. Search Life Cycle (Seconds vs. Years)
- **Instagram post lifespan:** **24 to 48 hours**. After two days, your post is pushed down the feed and practically invisible.
- **Website content lifespan:** **Indefinite**. A well-written guide about "How to rent a motorbike at Toyapakeh Harbor" published on your website can rank #1 on Google and bring you new clients every single day for years.

### 3. Booking and Checkout Friction
On Instagram, a customer has to click your bio link, send a Direct Message (DM), wait for your reply, ask for prices, send bank transfer screenshots, and wait for confirmation. This process is slow. 
On your own website, a visitor sees real-time availability, selects their date, enters their details, and receives an instant confirmation. Less friction always leads to **higher conversion rates**.

| Feature | Instagram Page | Professional Website |
| :--- | :---: | :---: |
| **Setup Cost** | Free | Small Initial Investment |
| **Data Ownership** | Meta (0%) | You (100%) |
| **Search Engine Rank**| Extremely Low | High (SEO-Optimized) |
| **Booking Automation**| Manual via DM | 100% Automatic |
| **Analytics & Tracking**| Basic Insights | Complete (GA4, Pixel) |

### How to Combine Both for Maximum Success
We do not recommend abandoning social media. Instagram is incredible for **top-of-funnel awareness**—sharing beautiful photos of Manta Rays and Penida sunsets. However, the ultimate goal should always be to **direct social media traffic to your high-converting website** where the actual transaction takes place smoothly.
    `
  },
  {
    id: 'blog-4',
    title: 'Top Web Design Trends 2026',
    slug: 'top-web-design-trends-22026',
    category: 'UI UX',
    readingTime: '4 min read',
    author: {
      name: 'Putu Sugianta',
      role: 'Lead Web Architect',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'
    },
    publishDate: 'June 15, 2026',
    summary: 'Glassmorphism, high-contrast grids, micro-interactions, and dark mode luxury. Read about the visual cues that establish online trust in 2026.',
    tags: ['UI UX', 'Web Design', 'Vercel Style', 'Figma Design'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    content: `
# Top Web Design Trends to Dominate 2026

Web design has shifted from crowded animations and flat colors towards sleek, high-end interfaces that prioritize micro-interactions, responsive grids, and visual depth. In 2026, leading tech companies like Stripe, Vercel, Apple, and Linear have defined a new gold standard of aesthetics.

Here are the key design trends that we implement at **BaleHost** to make your local Bali business look like an international tech pioneer.

---

### 1. Refined Glassmorphism & Frost Panels
Using translucent panels with soft borders ('backdrop-filter: blur()') creates a layered, spatial interface that feels tangible and modern. Combined with subtle gradients glowing from behind, glassmorphism card layouts draw the user's attention exactly where it belongs without cluttering the viewport.

### 2. High-Contrast Monochromatic Grids
Structured layout grids with light, subtle lines (reminiscent of architectural drafts) provide a clean skeleton for websites. It makes complex information (like tour packages, pricing options, and rental charts) highly scannable and structured.

### 3. Tactile Micro-Interactions
Static buttons are a thing of the past. In 2026, buttons must feel tactile—gently glowing on hover, lifting slightly off the canvas, or expanding to reveal details on tap. Using high-performance library modules like **Framer Motion**, we implement these micro-interactions without sacrificing loading speeds.

### 4. Intentional Typographic Sizing
Web design has moved away from distracting stock illustrations towards bold, beautiful typography as the main design element. Paired with generous whitespace, large and confident headers like **Plus Jakarta Sans** make an immediate statement of high-end quality.
    `
  },
  {
    id: 'blog-5',
    title: 'How AI is Changing Website Development',
    slug: 'how-ai-changing-website-development',
    category: 'AI',
    readingTime: '5 min read',
    author: {
      name: 'Putu Sugianta',
      role: 'Lead Web Architect',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'
    },
    publishDate: 'June 10, 2026',
    summary: 'Artificial Intelligence is revolutionizing code generation, asset optimization, and personalized search capabilities. Learn how we utilize AI for premium results.',
    tags: ['AI Tech', 'Web Development', 'Gemini AI', 'NextJS'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop',
    content: `
# How AI is Revolutionizing Web Development & local Bali SaaS

Artificial Intelligence is no longer just a futuristic concept—it is actively shaping how websites are designed, developed, and optimized. From code automation to predictive search engine rankings, AI helps digital agencies build superior products at unprecedented speeds.

Let us explore how **BaleHost** integrates AI workflows to deliver exceptional value to our clients in Bali and Nusa Penida.

---

### 1. Intelligent Code Optimization and Refactoring
AI models like Google Gemini allow our developers to analyze complex React and TypeScript components instantly, pointing out minor performance bottlenecks, unused modules, or responsive CSS anomalies before release. This guarantees that your website compiles flawlessly and loads at maximum edge network speeds.

### 2. Smart Localization & Multi-Language Support
For tourism businesses in Nusa Penida, welcoming guests from France, China, Australia, and Brazil is daily business. AI translation APIs enable us to generate highly accurate, context-aware translations for your room descriptions and booking guidelines, avoiding rigid, broken translations of the past.

### 3. Advanced Semantic Search Engine Optimization (SEO)
Google and search engines now rely on AI-driven search models (like Gemini-powered Search Generative Experience). Traditional "keyword stuffing" is dead. Websites must now be optimized for conversational, conceptual questions. We use advanced semantic modeling to structure your website schemas, ensuring your content satisfies AI search bots and human queries alike.
    `
  },
  {
    id: 'blog-6',
    title: 'Choosing the Right Hosting for Your Business',
    slug: 'choosing-right-hosting-your-business',
    category: 'Hosting',
    readingTime: '4 min read',
    author: {
      name: 'Wayan Ardana',
      role: 'SEO Strategist',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop'
    },
    publishDate: 'June 05, 2026',
    summary: 'Cloud vs Shared Hosting. Discover why cheap hosting could be costing you thousands of visitors and how edge networks secure your global traffic.',
    tags: ['Web Hosting', 'Cloudflare', 'Page Speed', 'Security'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop',
    content: `
# Choosing the Right Hosting for Your Business

Many business owners buy the cheapest shared hosting plan they find, thinking *"as long as the website is online, hosting doesn't matter."* This is a massive mistake that directly hurts business revenue, search engine rankings, and security.

Let us unpack why your choice of web hosting is a cornerstone of your digital success, and how modern cloud-edge networks compare to cheap shared plans.

---

### The Danger of Cheap Shared Hosting
In a traditional shared hosting setup, your website shares a single physical server with thousands of other sites. If one of those websites receives a massive traffic spike or gets infected with malware, **your website will slow down to a crawl or crash completely**. Furthermore, shared servers have slow CPUs, leading to high Time-To-First-Byte (TTFB), which Google penalizes.

### The Modern Standard: Cloud Hosting with Global Edge CDNs
At **BaleHost**, we completely avoid outdated shared hosting. We deploy all our clients' websites on modern, scale-to-zero serverless hosting networks (like Vercel, Netlify, or Cloud Run) paired with **Cloudflare CDN**.

- **Global Edge Caching:** Copies of your website are stored in hundreds of secure data centers around the world. When a tourist in Melbourne clicks your resort link, the site loads from a server in Melbourne—not from a slow server in Jakarta. This guarantees page load times under 1 second.
- **Dynamic Autoscaling:** If your scooter tour page goes viral or you launch a massive holiday ad campaign, our cloud hosting automatically scales up processing power to handle thousands of simultaneous visitors without breaking a sweat.
- **Enterprise-Grade Firewalls:** Free SSL certificates, daily automated cloud snapshots, and active DDoS protection shields keep your business safe from hackers.
    `
  },
  {
    id: 'blog-7',
    title: 'How Local SEO Helps Businesses in Nusa Penida',
    slug: 'how-local-seo-helps-nusa-penida',
    category: 'SEO',
    readingTime: '5 min read',
    author: {
      name: 'Wayan Ardana',
      role: 'SEO Strategist',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop'
    },
    publishDate: 'May 28, 2026',
    summary: 'A deep dive into local search intent. Learn how ranking on keywords like "Jasa Pembuatan Website Nusa Penida" or "Sewa Motor Nusa Penida" drives automatic leads.',
    tags: ['Local SEO', 'Nusa Penida', 'Bali Marketing', 'Google Maps'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
    content: `
# How Local SEO Helps Businesses in Nusa Penida

Nusa Penida has its own unique economic ecosystem. Unlike big metropolitan cities, tourism here is highly localized. Tourists arrive at Toyapakeh, Kutampi, or Buyuk Harbor and immediately search their phones for things to do, scooters to rent, places to eat, and villas to stay.

This hyper-local search intent is where **Local SEO** becomes your ultimate sales machine.

---

### What is Local SEO?
Local SEO is the process of optimizing your online presence to attract customers from relevant local searches. These searches take place on Google Search and Google Maps. When someone types *"boat rental near me"* or *"best restaurant in Ped Nusa Penida"*, Google uses location services to suggest the closest and most trusted options.

### The Pillars of Nusa Penida Local SEO

#### 1. Geo-Targeted On-Page Content
Your website content must explicitly mention localized landmarks, beaches, and harbors. For instance, if you run a snorkeling center, your pages shouldn't just target "Bali snorkeling." Instead, optimize for:
- *"Snorkeling tour Manta Point Nusa Penida"*
- *"Snorkeling gear rental Toyapakeh Harbor"*
- *"Best snorkeling package Toyapakeh"*

#### 2. Local Business Structured Data
By embedding JSON-LD schemas identifying your business type, precise coordinate mapping, currency accepted, and business hours, you allow Google to cleanly present your business info in specialized Search panels (like the local 3-pack).

#### 3. Building Local Citations and Backlinks
Google trusts websites that are referenced by other trusted local sources. Getting your business listed in local Bali travel directories, tourism blogs, and news sites signals to search algorithms that you are an established, authentic local operator. At **BaleHost**, we manage local citation building to boost your search authority.
    `
  },
  {
    id: 'blog-8',
    title: 'The Benefits of Responsive Websites',
    slug: 'the-benefits-of-responsive-websites',
    category: 'Website',
    readingTime: '3 min read',
    author: {
      name: 'Putu Sugianta',
      role: 'Lead Web Architect',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'
    },
    publishDate: 'May 18, 2026',
    summary: 'Over 85% of tourists explore Bali using mobile phones. If your website is not optimized for touch screens, you are losing valuable leads.',
    tags: ['Responsive Design', 'Mobile Optimization', 'UI UX', 'Touch Target'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    content: `
# The Benefits of Responsive Websites for Tourism

Walk down any street in Nusa Penida, and you will see tourists clutching their smartphones. They are navigating Google Maps, checking menus, looking up snorkeling operators, and booking villas while sitting on a motorbike or enjoying a café.

If your business website is not **fully responsive** (meaning it adapts seamlessly to any screen size—from a small iPhone screen to a massive high-resolution desktop), you are throwing away valuable customers.

---

### Why Responsive Design is Non-Negotiable Today

#### 1. Over 85% of Local Traffic is Mobile
In tourist areas like Nusa Penida, mobile traffic represents the overwhelming majority of visitors. If a user clicks your website and has to pinch-to-zoom to read text or struggle to click tiny buttons, they will hit the "back" button in frustration. This is called a "bounce," and it signals to Google that your site is poor, hurting your rankings.

#### 2. Mobile-First Indexing by Google
Google now ranks websites based on their mobile version, not their desktop version. If your desktop site looks amazing but your mobile site is broken or loads slowly, Google will drop your search rankings globally.

#### 3. Single URL, Effortless Management
Some business owners build two separate sites: one for desktop and one for mobile. This is highly inefficient and creates duplicate content issues. A modern responsive layout designed with **Tailwind CSS** uses a single URL, automatically adjusting all margins, images, and text sizes dynamically.
    `
  },
  {
    id: 'blog-9',
    title: 'Website Maintenance Checklist for Business Owners',
    slug: 'website-maintenance-checklist',
    category: 'Hosting',
    readingTime: '4 min read',
    author: {
      name: 'Kadek Dwi',
      role: 'Digital Branding Coach',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop'
    },
    publishDate: 'May 10, 2026',
    summary: 'A practical, easy-to-follow list of security audits, speed boosts, and content updates to keep your corporate hub running smoothly in 2026.',
    tags: ['Maintenance', 'Security', 'Web Performance', 'Admin Tips'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    content: `
# Website Maintenance Checklist for Bali Business Owners

Launching your website is just the first step. To ensure it continues to drive direct bookings, load quickly, and stay safe from cyber attacks, regular maintenance is required. 

Here is a practical, easy-to-follow website maintenance checklist that we recommend every business owner checks monthly.

---

### Monthly Maintenance Action Items

#### 1. Security Audits & Core Updates
- Check that your SSL certificate is valid and showing the secure lock icon.
- Ensure all backend packages and database adapters are updated to avoid security exploits.
- Change administrative passwords periodically, and use Multi-Factor Authentication.

#### 2. Test Booking & Contact Form Deliverability
- Fill out your own booking forms and submit inquiries.
- Verify that emails and WhatsApp notifications land instantly.
- Ensure auto-responders are greeting customers with updated holiday prices.

#### 3. Monitor Website Loading Speed
- Use Google PageSpeed Insights once a month to check performance.
- Compress any newly uploaded room photos or tour event banners (always use WebP format).
- Check edge server response times and cache hit ratios on Cloudflare.

#### 4. Audit Broken Links & Maps Routing
- Check that all social media profile links (Instagram, Facebook, TikTok) are active.
- Verify that your embedded Google Maps pin points precisely to your reception desk.
    `
  },
  {
    id: 'blog-10',
    title: 'How to Create a High Converting Landing Page',
    slug: 'create-high-converting-landing-page',
    category: 'Digital Marketing',
    readingTime: '5 min read',
    author: {
      name: 'Kadek Dwi',
      role: 'Digital Branding Coach',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop'
    },
    publishDate: 'May 02, 2026',
    summary: 'What turns a casual page viewer into a paying booking? We unpack hero headline psychology, clean forms, and social trust signals.',
    tags: ['Landing Page', 'Conversion Rate', 'UI UX', 'Marketing Tips'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    content: `
# How to Create a High-Converting Landing Page for local Tourism

A landing page has one, and only one, objective: **convert a visiting tourist into a lead or a sale.** 

Unlike general multi-page websites, a high-converting landing page is completely stripped of distracting navigation links, blogs, and general historical texts. It guides the visitor down a single, hyper-focused path to conversion.

Here is the exact psychological anatomy of a high-converting landing page built by **BaleHost**.

---

### 1. The Hero Headline (What is in it for me?)
You have exactly **3 seconds** to capture a visitor's interest when they land on your page. Your headline must be bold, literal, and immediate.
- **Bad Headline:** *"Welcome to our local tour business in Nusa Penida."* (Vague, boring)
- **High-Converting Headline:** *"Explore Nusa Penida: Private Day Tours with Local Drivers & Snorkeling."* (Clear, immediate, benefit-focused)

### 2. Single, Clear Call-To-Action (CTA)
Do not confuse visitors with multiple goals. If your goal is to get WhatsApp bookings, make the primary button **"Book on WhatsApp"** and place it in multiple high-visibility sections. Keep secondary buttons minimal.

### 3. High-Contrast Social Proof (Trust Signals)
Tourists are naturally skeptical of sending downpayments to local operators they just found on Google. Build instant trust by placing:
- Real client faces with 5-star badges.
- Short reviews detailing successful tours or clean stays.
- Badges representing certifications (PADI, local business licenses).

### 4. Flawless Touch Targets on Mobile
Since 90% of tour bookings happen on mobile, booking forms must be highly ergonomic. Use larger form inputs, spacious tap buttons, and drop-down selectors to avoid requiring manual typing on bumpy speedboats or motorbikes.
    `
  }
];
