import { Category, Product, Catalog, Testimonial, SiteSettings, GalleryImage } from './types';

// Standardized logo URL used in the app
const LOGO_URL = 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/057f20e57dc2cc9f1ecf03e02b74b039c9eb9008/Assets/Hitech%20logo.svg';

// High-fidelity self-contained SVG for "No Image" placeholder
const NO_IMAGE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f1f5f9;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#grad)"/>
  <rect x="120" y="100" width="160" height="160" rx="40" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <path d="M160 200 L200 160 L240 200 M160 220 L240 220" stroke="#6CAF44" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.6"/>
  <text x="50%" y="305" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="20" font-weight="900" fill="#94a3b8" style="text-transform: uppercase; letter-spacing: 0.1em;">No Image</text>
  <text x="50%" y="330" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="700" fill="#cbd5e1" style="text-transform: uppercase; letter-spacing: 0.2em;">Hi-Tech UPVC Hardwares</text>
</svg>
`;

const NO_IMAGE_URL = `data:image/svg+xml;base64,${btoa(NO_IMAGE_SVG)}`;

export const INITIAL_SETTINGS: SiteSettings = {
  whatsapp: '916382488657',
  email: 'hitechupvc@gmail.com',
  facebook: 'https://www.facebook.com/share/1GeNASNguA/',
  instagram: 'https://www.instagram.com/hitechhardwares?igsh=YXVpNHpyeHp2cHdm',
  headOfficePhone: '+91 81224 76567',
  coimbatorePhone: '+91 63817 78251',
  maduraiPhone: '+91 86674 59835',
  adminPhone: '+91 63824 88657',
  headOfficeAddress: '3/344-6, CHENNIMALAI GOUNDER NAGAR, VANJIPALAYAM, SAMALAPURAM, TIRUPUR',
  coimbatoreAddress: '1584/2A, Sarada Mill Road, Sundarapuram, Coimbatore-641024',
  maduraiAddress: '3/241 A, Chinthamani Main road, Chinna Anuppanadi, Alagapuri, Madurai 625009',
  heroBanners: [
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%201.png',
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%202.png',
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%203.png'
  ],
  aboutText: 'We, Hi-Tech UPVC Hardwares, are a leading ISO 9001:2015 certified uPVC Hardware provider, with a complete range of uPVC Hardware, Tools, & Accessories, that offers integrated innovative solutions in the area of uPVC Hardware products.',
  aboutImage: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/About%20us%20primary.png',
  aboutTextSecondary: "Over the past few years, we have shown tremendous growth towards of range of uPVC products and based on our prestigious client's request, we have started our own manufacturing towards the usage of uPVC and Aluminum Windows & Doors. We are also an authorized distributor for SIEGENIA hardware and WACKER Silicone products.",
  aboutImageSecondary: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/About%20us%20Second.png',
  strengthImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  contactImage: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Contact%20us.png',
  headerLogo: LOGO_URL, 
  footerLogo: LOGO_URL,
  poweredByLogo: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/e6fff671b179d6750fc0bb7b49b4041165679de4/Assets/Group%20107081%201%20(3).svg',
  strengths: [
    { id: '1', iconName: 'Heart', text: 'Generosity in the market.' },
    { id: '2', iconName: 'ShieldCheck', text: 'Ethical business dealings.' },
    { id: '3', iconName: 'Users', text: 'A competent team for delivery.' },
    { id: '4', iconName: 'Globe', text: 'Wide range of network distribution.' },
    { id: '5', iconName: 'BadgePercent', text: 'Most competitive pricing.' },
  ]
};

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'C001', name: 'Drilling Screws MS & SS', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Frame%20Fixing%20Fasteners%20(1).png?raw=true' },
  { id: 'C002', name: 'SS Mesh', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/SS%20Mesh%20(1).png?raw=true' },
  { id: 'C003', name: 'ESPAGS', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20esparg%2022mm%20Back%20set%20(1).png?raw=true' },
  { id: 'C004', name: 'SLIDING Door SETS', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Sliding%20Door%20Set%20-%20D%20Handle%20(1).png?raw=true' },
  { id: 'C005', name: 'CASEMENT Door SETS', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20Door%20Set%20-%20Regular%20(1).png?raw=true' },
  { id: 'C006', name: 'CASEMENT HANDLE', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20Handle%20Spindle%20(1).png?raw=true' },
  { id: 'C006.5', name: 'Plastic Items', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Anti%20lift%20Block.png?raw=true' },
  { id: 'C007', name: 'Sliding Handles', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Popup%20Handle%20WH.png?raw=true' },
  { id: 'C008', name: 'Tools', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Gasket%20Mesh%20Tool.png?raw=true' },
  { id: 'C009', name: 'Gaskets', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Gasket%20Mesh%20Tool%20(1).png?raw=true' },
  { id: 'C0010', name: 'Cylinders', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cylinder%20(1).png?raw=true' },
  { id: 'C0011', name: 'Touch locks', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Touch%20locks%20(1).png?raw=true' },
  { id: 'C0012', name: 'Bathroom Door Lock set', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Bathroom%20Door%20Lock%20(2).png?raw=true' },
  { id: 'C0013', name: 'Friction Stays 202 & 304', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/image%20163.png?raw=true' },
  { id: 'C0014', name: 'Hinges', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Hinges%20(1).png?raw=true' },
  { id: 'C0015', name: 'Mortise Gears', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Mortise%20Door%20Set.png?raw=true' },
  { id: 'C0016', name: 'Machines', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Corner%20Cleaning%20Machine.png?raw=true' },
  { id: 'C0017', name: 'Axis', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Casement%20Striker%20-%209mm%20Axis.png?raw=true' },
  { id: 'C0018', name: 'Sliding Handles (Alt)', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/L-Key%20Handle.png?raw=true' },
  { id: 'C0019', name: 'SPACER ROD', image: NO_IMAGE_URL },
  { id: 'C0020', name: 'SILICONE SEALANTS', image: NO_IMAGE_URL },
  { id: 'C0021', name: 'DOOR STOPPER', image: NO_IMAGE_URL },
  { id: 'C0022', name: 'KEEP', image: NO_IMAGE_URL },
  { id: 'C0023', name: 'CLAMP', image: NO_IMAGE_URL },
  { id: 'C0024', name: 'STEEL', image: NO_IMAGE_URL },
  { id: 'C0025', name: 'WOOL PILE', image: NO_IMAGE_URL },
  { id: 'C0026', name: 'ROLLERS', image: NO_IMAGE_URL },
  { id: 'C0027', name: 'ALUMINIUM TRACK', image: NO_IMAGE_URL }
];

export const INITIAL_PRODUCTS: Product[] = [
  // C001 - Drilling Screws MS & SS
  { id: 'I001', categoryId: 'C001', name: 'Frame Fixing Fasteners', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Frame%20Fixing%20Fasteners%20(1).png?raw=true'], description: 'Frame Fixing Fasteners : 8x60 MM\nFrame Fixing Fasteners : 8x80 MM\nFrame Fixing Fasteners : 8x100 MM' },
  { id: 'I002', categoryId: 'C001', name: 'CSK Self Drilling Screws', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/CSK%20Self%20Drilling%20Screws%20(1).png?raw=true'], description: 'CSK Self Drilling Screws 3.9x13\nCSK Self Drilling Screws 3.9x16\nCSK Self Drilling Screws 3.9x19\nCSK Self Drilling Screws 3.9x25\nCSK Self Drilling Screws 3.9x32\nCSK Self Drilling Screws 3.9x38\nCSK Self Drilling Screws 4.2x50\nCSK Self Drilling Screws 4.2x60\nCSK Self Drilling Screws 4.2x75' },
  { id: 'I003', categoryId: 'C001', name: 'PAN Head Self Drilling Screws', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/PAN%20Head%20Self%20Drilling%20Screws%20(3).png?raw=true'], description: 'PAN Head Self Drilling Screws 4x16\nPAN Head Self Drilling Screws 4x19\nPAN Head Self Drilling Screws 4x25\nPAN Head Self Drilling Screws 4x32\nPAN Head Self Drilling Screws 4x38\nPAN Head Self Drilling Screws 4x50\nPAN Head Self Drilling Screws 4x60\nPAN Head Self Drilling Screws 4x75' },
  { id: 'I004', categoryId: 'C001', name: 'CSK Self Tapping Screws', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/PAN%20Head%20Self%20Drilling%20Screws%20(4).png?raw=true'], description: 'CSK Self Tapping Screws 4x13\nCSK Self Tapping Screws 4x16\nCSK Head Self Tapping Screws 4x19\nCSK Head Self Tapping Screws 4x25\nCSKHead Self Tapping Screws 4x32\nCSK Head Self Tapping Screws 4x38\nCSK Head Self Tapping Screws 4x50\nCSK Head Self Tapping Screws 4x60\nCSKHead Self Tapping Screws 4x75' },

  // C002 - SS Mesh
  { id: 'I005', categoryId: 'C002', name: 'SS BLACK Mesh', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/SS%20Mesh%20(1).png?raw=true'], description: 'SS BLACK Mesh (0.22mm) 3.0x100 (300 SQF)\nSS BLACK Mesh (0.22mm) 4.0x100 (400 SQF)\nSS BLACK Mesh (0.22mm) 5.0x100 (500 SQF)\nSS BLACK Mesh (0.19mm) 3.0x100 (300 SQF)\nSS BLACK Mesh (0.19mm) 4.0x100 (400 SQF)\nSS BLACK Mesh (0.19mm) 5.0x100 (500 SQF)' },
  { id: 'I006', categoryId: 'C002', name: 'Aluminium Mesh', images: ['https://github.com/kavutham99raj-art/hitechupvc/blob/main/Aluminium%20mesh%20(2).png?raw=true'], description: 'Aluminium Mesh 3.0x 100 (300 SQF)\nAluminium Mesh 4.0x100 (400 SQF)\nAluminium Mesh 5.0x100 (500 SQF)' },
  { id: 'I007', categoryId: 'C002', name: 'Nylon Mesh', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Nylon%20Mesh%20(2).png?raw=true'], description: 'Nylon Mesh 3.0x100 (300 SQF)\nNylon Mesh 4.0x100 (400 SQF)\nNylon Mesh 5.0x100 (500 SQF)' },

  // C003 - ESPAGS
  { id: 'I008', categoryId: 'C003', name: 'Casement esparg 22mm Back set', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20esparg%2022mm%20Back%20set%20(1).png?raw=true'], description: '22MM BS CASEMENT ESPAG - 400 MM\n22MM BS CASEMENT ESPAG - 600 MM\n22MM BS CASEMENT ESPAG - 800 MM\n22MM BS CASEMENT ESPAG - 1000 MM\n22MM BS CASEMENT ESPAG - 1200 MM\n22MM BS CASEMENT ESPAG - 1400 MM\n22MM BS CASEMENT ESPAG - 1600 MM\n22MM BS CASEMENT ESPAG - 1800 MM\n22MM BS CASEMENT ESPAG - 2000 MM' },
  { id: 'I009', categoryId: 'C003', name: 'SLIDING ESPAGS 7.5 MM BACK SET', images: [NO_IMAGE_URL], description: '7.5 MM BS SLIDING ESPAG - 400 MM\n7.5 MM BS SLIDING ESPAG - 600 MM\n7.5 MM BS SLIDING ESPAG - 800 MM\n7.5 MM BS SLIDING ESPAG - 1000 MM\n7.5 MM BS SLIDING ESPAG - 1200 MM\n7.5 MM BS SLIDING ESPAG - 1400 MM\n7.5 MM BS SLIDING ESPAG - 1600 MM\n7.5 MM BS SLIDING ESPAG - 1800 MM\n7.5 MM BS SLIDING ESPAG - 2000 MM' },
  { id: 'I010', categoryId: 'C003', name: 'SLIDING ESPAGS 15MM BACK SET', images: [NO_IMAGE_URL], description: '15 MM BS SLIDING ESPAG - 400 MM\n15 MM BS SLIDING ESPAG - 600 MM\n15 MM BS SLIDING ESPAG - 800 MM\n15 MM BS SLIDING ESPAG - 1000 MM\n15 MM BS SLIDING ESPAG - 1200 MM\n15 MM BS SLIDING ESPAG - 1400 MM\n15 MM BS SLIDING ESPAG - 1600 MM\n15 MM BS SLIDING ESPAG - 1800 MM\n15 MM BS SLIDING ESPAG - 2000 MM' },

  // C004 - SLIDING DOOR SETS
  { id: 'I011', categoryId: 'C004', name: 'Sliding Door Set - D Handle', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Sliding%20Door%20Set%20-%20D%20Handle%20(1).png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },

  // C005 - CASEMENT DOOR SETS
  { id: 'I0012', categoryId: 'C005', name: 'Casement Door Set - Regular', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20Door%20Set%20-%20Regular%20(1).png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE' },
  { id: 'I0013', categoryId: 'C005', name: 'Casement Door Set - Multipoint/Euro Type', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Euro%20Type.png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },

  // C006 - CASEMENT HANDLE
  { id: 'I0014', categoryId: 'C006', name: 'Casement Handle Spindle', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20Handle%20Spindle%20(1).png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0015', categoryId: 'C006', name: 'Casement Handle American', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/image%20135.png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0016', categoryId: 'C006', name: 'Cockspur Handle RH & LH', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cockspur%20Handle%20R.png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0017', categoryId: 'C006', name: 'Cockspur Handle PR RH & LH', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cockspur%20Handle%20PR%20R.png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0018', categoryId: 'C006', name: 'DOOR HANDLE', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0019', categoryId: 'C006', name: 'T LOCK', images: [NO_IMAGE_URL], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK ' },
  { id: 'I0020', categoryId: 'C006', name: 'CASEMENT HANDLE PRESS AND KEY', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0021', categoryId: 'C006', name: 'WONDER SINGLE ARM OPERATOR', images: [NO_IMAGE_URL], description: "WONDER OPERATOR SINGLE ARM - 7.5'' LEFT\nWONDER OPERATOR SINGLE ARM -7.5''RIGHT\nWONDER OPERATOR SINGLE ARM - 9.5'' LEFT\nWONDER OPERATOR SINGLE ARM - 9.5'' RIGHT\nWONDER SINGLE ARM OPERATOR-13''RIGHT\nWONDER OPERATOR Y SERIES - 13.7''\nWONDER OPERATOR Y SERIES - 9''" },

  // C006.5 - Plastic Items
  { id: 'I0022', categoryId: 'C006.5', name: 'Fastner Cap STAR TYPE', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Fastner%20Cap%20(2).png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0023', categoryId: 'C006.5', name: 'Drainage cap', images: [NO_IMAGE_URL], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0024', categoryId: 'C006.5', name: 'Window Spacer', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Window%20Spacer.png?raw=true'], description: '' },
  { id: 'I0025', categoryId: 'C006.5', name: 'Door Spacer', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Door%20Spacer.png?raw=true'], description: '' },
  { id: 'I0026', categoryId: 'C006.5', name: 'Fixed Louvers', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Fixed%20Louvers.png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0027', categoryId: 'C006.5', name: 'Bump Stopper', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Bump%20Stopper.png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0028', categoryId: 'C006.5', name: 'Casement wedge', images: [NO_IMAGE_URL], description: 'AVAILABLE BIG AND SMALL' },
  { id: 'I0029', categoryId: 'C006.5', name: 'Anti lift Block', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Anti%20lift%20Block%20(1).png?raw=true'], description: '' },
  { id: 'I0030', categoryId: 'C006.5', name: 'U Packers', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/U%20Packers.png?raw=true'], description: '' },
  { id: 'I0031', categoryId: 'C006.5', name: 'Glass Packer', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Glass%20Packer.png?raw=true'], description: '' },
  { id: 'I0032', categoryId: 'C006.5', name: 'Flat packer', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0033', categoryId: 'C006.5', name: 'Plastic c handle', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0034', categoryId: 'C006.5', name: 'Jump arrester', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0035', categoryId: 'C006.5', name: 'Touch lock cap', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0036', categoryId: 'C006.5', name: 'Mesh Stopper', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Mesh%20Stopper.png?raw=true'], description: '' },
  { id: 'I0037', categoryId: 'C006.5', name: 'Movable louver 3 blades', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0038', categoryId: 'C006.5', name: 'Movable louver 4 blades', images: [NO_IMAGE_URL], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0039', categoryId: 'C006.5', name: 'Movable louver 5 blades', images: [NO_IMAGE_URL], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK' },
  { id: 'I0040', categoryId: 'C006.5', name: 'Movable louver 6 blades', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0041', categoryId: 'C006.5', name: 'MESH PLASTIC HANDLE (SQUARE TYPE)', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0042', categoryId: 'C006.5', name: 'MESH PLASTIC HANDLE (ROUND TYPE)', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0043', categoryId: 'C006.5', name: 'SECURITY CLIP', images: [NO_IMAGE_URL], description: '' },

  // C007 - Sliding Handles
  { id: 'I0044', categoryId: 'C007', name: 'Popup Handle Slim', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Popup%20Handle%20Slim%20(1).png?raw=true'], description: '' },
  { id: 'I0045', categoryId: 'C007', name: 'Popup Handle', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Popup%20Handle%20WH.png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0046', categoryId: 'C007', name: 'SLIDING HANDLE', images: [NO_IMAGE_URL], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK' },
  { id: 'I0047', categoryId: 'C007', name: 'SHORT NECK HANDLE BIG', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0048', categoryId: 'C007', name: 'SLIDING HANDLE WITH KEY', images: [NO_IMAGE_URL], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0049', categoryId: 'C007', name: 'DOUBLE HANDLE WITHOUT KEY', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0050', categoryId: 'C007', name: 'DOUBLE HANDLE WITH ONE SIDE KEY', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0051', categoryId: 'C007', name: 'DOUBLE HANDLE WITH ONE SIDE KEY ONE SIDE KNOB', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0052', categoryId: 'C007', name: 'DOUBLE HANDLE WITH BOTH SIDE KEYS', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0053', categoryId: 'C007', name: 'POP UP HANDLE WITH KEY', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0054', categoryId: 'C007', name: 'DOUBLE HANDLE WITH ONE SIDE KEY - SASH', images: [NO_IMAGE_URL], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK & BROWN' },
  { id: 'I0055', categoryId: 'C007', name: 'DUMMY D HANDLE NOT LOCKABLE', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0056', categoryId: 'C007', name: 'DUMMY D HANDLE WITH MESH PROVISION', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0057', categoryId: 'C007', name: 'CRESENT LOCK', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0058', categoryId: 'C007', name: 'AMERICAN PULLING HANDLE - WHITE', images: [NO_IMAGE_URL], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK' },
  { id: 'I0059', categoryId: 'C007', name: 'DOOR PULLING HANDLE C TYPE', images: [NO_IMAGE_URL], description: '' },

  // C008 - Tools
  { id: 'I0060', categoryId: 'C008', name: 'Gasket Mesh Tool', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Gasket%20Mesh%20Tool.png?raw=true'], description: '' },
  { id: 'I0061', categoryId: 'C008', name: 'Moon Knife', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Moon%20Knife.png?raw=true'], description: '' },
  { id: 'I0062', categoryId: 'C008', name: 'SILICONE GUN PREMIUM', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0063', categoryId: 'C008', name: 'Air Block Gun', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Air%20Block%20Gun.png?raw=true'], description: '' },
  { id: 'I0064', categoryId: 'C008', name: 'Digital Measuring Meter', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Digital%20Measuring%20Meter.png?raw=true'], description: '' },
  { id: 'I0065', categoryId: 'C008', name: 'V Cutter', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/V%20Cutter.png?raw=true'], description: '' },
  { id: 'I0066', categoryId: 'C008', name: 'Angle Cutter', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Angle%20Cutter.png?raw=true'], description: '' },
  { id: 'I0067', categoryId: 'C008', name: 'Thermocouple', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Thermocouple.png?raw=true'], description: '' },
  { id: 'I0068', categoryId: 'C008', name: 'Corner Cleaning Hand Tool', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Corner%20Cleaning%20Hand%20Tool.png?raw=true'], description: '' },
  { id: 'I0069', categoryId: 'C008', name: 'Heating Plate', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Heating%20Plate.png?raw=true'], description: '' },
  { id: 'I0070', categoryId: 'C008', name: 'TEMPLATE', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0071', categoryId: 'C008', name: 'TEFLON SHEET', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0072', categoryId: 'C008', name: 'DRILL BIT', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0073', categoryId: 'C008', name: 'CORNER CLEANING BLADE', images: [NO_IMAGE_URL], description: '' },

  // C009 - Gaskets
  { id: 'I0074', categoryId: 'C009', name: 'Gasket Mesh Tool', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Gasket%20Mesh%20Tool%20(1).png?raw=true'], description: '' },

  // C0010 - Cylinders
  { id: 'I0075', categoryId: 'C0010', name: 'Cylinder', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cylinder%20(1).png?raw=true'], description: '' },

  // C0011 - Touch locks
  { id: 'I0076', categoryId: 'C0011', name: 'Touch Lock', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Touch%20locks%20(1).png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE, BLACK & BROWN' },
  { id: 'I0077', categoryId: 'C0011', name: 'LG Touch Lock', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/LG%20Touch%20Lock.png?raw=true'], description: '' },
  { id: 'I0078', categoryId: 'C0011', name: 'TOUCH LOCK SLIM', images: [NO_IMAGE_URL], description: '' },

  // C0012 - Bathroom Door Lock set
  { id: 'I0079', categoryId: 'C0012', name: 'Bathroom Door Lock', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Bathroom%20Door%20Lock%20(2).png?raw=true'], description: 'SIZES : 25/90 & 35/90\n\nAVAILABLE COLOURS : WHITE & BLACK ' },

  // C0013 - Friction Stays 202 & 304
  { id: 'I0080', categoryId: 'C0013', name: 'Friction Stay 202 & 304', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/image%20163.png?raw=true'], description: 'FRICTION STAY 202 - 8" ( 2MM )\nFRICTION STAY 202 - 10" ( 2MM & 2.5MM )\nFRICTION STAY 202 - 12\'\' ( 2MM & 2.5MM )\nFRICTION STAY 202 - 14\'\' ( 2MM & 2.5MM )\nFRICTION STAY 202 - 16\'\' ( 2.5MM )\nFRICTION STAY 202 - 18\'\' ( 3MM )\nFRICTION STAY 202 - 20\'\' ( 3MM )\nFRICTION STAY 202 - 22\'\' ( 3MM )\n\nFRICTION STAY 304 - 10" ( 2.5MM)\nFRICTION STAY 304 - 12" ( 2.5MM)\nFRICTION STAY 304 - 14" ( 2.5MM)\nFRICTION STAY 304 - 16" ( 2.5MM)\nFRICTION STAY 304 - 18" ( 2.5 MM & 3 MM)\nFRICTION STAY 304 - 20" ( 3 MM)\nFRICTION STAY 304 - 24" ( 3 MM)' },

  // C0014 - Hinges
  { id: 'I0081', categoryId: 'C0014', name: '3D Hinge', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Hinges%20(1).png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE, BLACK & BROWN' },
  { id: 'I0082', categoryId: 'C0014', name: '3D HINGE', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/3D%20Door%20Hinge%20Eco.png?raw=true'], description: '' },
  { id: 'I0083', categoryId: 'C0014', name: '2D Hinge', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/2D%20Hinge.png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE, BLACK & BROWN' },
  { id: 'I0084', categoryId: 'C0014', name: 'Butt Hinge Small - 75mm', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Butt%20Hinge%20Small%20-%2075mm.png?raw=true'], description: '' },
  { id: 'I0085', categoryId: 'C0014', name: 'Butt Hinge Large - 90mm', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Butt%20Hinge%20Large%20-%2090mm.png?raw=true'], description: '' },
  { id: 'I0086', categoryId: 'C0014', name: 'Concealed Hinge Small - 75mm', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Butt%20Hinge%20Small%20-%2075mm.png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE & BLACK ' },
  { id: 'I0087', categoryId: 'C0014', name: 'Concealed Hinge Large - 100mm', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Concealed%20Hinge%20Large%20-%20100mm.png?raw=true'], description: 'AVAILABLE COLOURS :\n\nWHITE & BLACK ' },
  { id: 'I0088', categoryId: 'C0014', name: 'L Hinge', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/L%20Hinge.png?raw=true'], description: '' },
  { id: 'I0089', categoryId: 'C0014', name: 'SHOOT BOLT', images: [NO_IMAGE_URL], description: '' },

  // C0015 - Mortise Gears
  { id: 'I0090', categoryId: 'C0015', name: 'Mortise Door Set', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Mortise%20Door%20Set.png?raw=true'], description: 'SIZES : 25/85 & 35/85\n\nAVAILABLE COLOURS : WHITE, BLACK & BROWN' },

  // C0016 - Machines
  { id: 'I0091', categoryId: 'C0016', name: 'Corner Cleaning Machine', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Corner%20Cleaning%20Machine.png?raw=true'], description: '' },
  { id: 'I0092', categoryId: 'C0016', name: 'Internal Cleaning (Inner) Machine', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Internal%20Cleaning%20(Inner)%20Machine.png?raw=true'], description: '' },
  { id: 'I0093', categoryId: 'C0016', name: 'External Cleaning (Outer) Machine', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/External%20Cleaning%20(Outer)%20Machine.png?raw=true'], description: '' },
  { id: 'I0094', categoryId: 'C0016', name: 'Water Slot Hand Tool 45', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Water%20Slot%20Hand%20Tool%2045.png?raw=true'], description: '' },
  { id: 'I0095', categoryId: 'C0016', name: 'Water Slot Hand Tool 0', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Water%20Slot%20Hand%20Tool%200.png?raw=true'], description: '' },
  { id: 'I0096', categoryId: 'C0016', name: 'Water Slot Hand Tool 90', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Water%20Slot%20Hand%20Tool%2090.png?raw=true'], description: '' },
  { id: 'I0097', categoryId: 'C0016', name: 'Portable Welding Machine', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Portable%20Welding%20Machine.png?raw=true'], description: '' },
  { id: 'I0098', categoryId: 'C0016', name: 'Top & Bottom Cleaning Tool', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Top%20&%20Bottom%20Cleaning%20Tool.png?raw=true'], description: '' },
  { id: 'I0099', categoryId: 'C0016', name: 'Interlock Punching Tool', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Interlock%20Punching%20Tool.png?raw=true'], description: '' },

  // C0017 - Axis
  { id: 'I0100', categoryId: 'C0017', name: 'Casement Striker - 9mm Axis', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Casement%20Striker%20-%209mm%20Axis.png?raw=true'], description: '' },
  { id: 'I0101', categoryId: 'C0017', name: 'Casement Striker - 13mm Axis', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Casement%20Striker%20-%2013mm%20Axis.png?raw=true'], description: '' },
  { id: 'I0102', categoryId: 'C0017', name: 'Casement Striker - 22mm Axis', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Casement%20Striker%20-%2022mm%20Axis.png?raw=true'], description: '' },
  { id: 'I0103', categoryId: 'C0017', name: 'CASEMENT STRIKER 9MM AXIS DOUBLE (NEW)', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0104', categoryId: 'C0017', name: 'SLIDING STRIKER', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0105', categoryId: 'C0017', name: 'SLIDING STRIKER(POWDER COATED)', images: [NO_IMAGE_URL], description: '' },

  // C0018 - Sliding Handles
  { id: 'I0106', categoryId: 'C0018', name: 'L-Key Handle', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/L-Key%20Handle.png?raw=true'], description: '' },
  { id: 'I0107', categoryId: 'C0018', name: 'C Handle', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/C%20Handle.png?raw=true'], description: '' },
  { id: 'I0108', categoryId: 'C0018', name: 'U Handle', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/U%20Handle.png?raw=true'], description: 'AVAILABLE COLOURS\n\n\n BLACK ' },
  { id: 'I0109', categoryId: 'C0018', name: 'U Handle with cap (white)', images: [NO_IMAGE_URL], description: 'AVAILABLE COLOURS\n\n\n BLACK ' },

  // C0019 - SPACER ROD
  { id: 'I0110', categoryId: 'C0019', name: 'SPACER ROD', images: [NO_IMAGE_URL], description: 'SPACER ROD 6MM (400MTR)\nSPACER ROD 8MM (200MTR)\nSPACER ROD 10MM (200MTR)\nSPACER ROD 12MM (200MTR)\nSPACER ROD 15MM(50MTR)\nSPACER ROD 20MM (25MTR)\nSPACER ROD 25MM(25MTR)' },

  // C0020 - SILICONE SEALANTS
  { id: 'I0112', categoryId: 'C0020', name: 'SILICONE SEALANTS', images: [NO_IMAGE_URL], description: 'HITECH SEALANT\nBOSS SILICON 352' },

  // C0021 - DOOR STOPPER
  { id: 'I0113', categoryId: 'C0021', name: 'DOOR STOPPER', images: [NO_IMAGE_URL], description: 'AVAILABLE COLOURS :\n\nWHITE,BLACK,BROWN&SILVER ' },

  // C0022 - KEEP
  { id: 'I0114', categoryId: 'C0022', name: 'MS KEEP', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0115', categoryId: 'C0022', name: 'SS KEEP', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0116', categoryId: 'C0022', name: 'SS KEEP 304', images: [NO_IMAGE_URL], description: '' },

  // C0023 - CLAMP
  { id: 'I0117', categoryId: 'C0023', name: 'MECHANICAL JOINT BIG (POWDER COATED)', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0118', categoryId: 'C0023', name: 'MULLION CLAMP', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0119', categoryId: 'C0023', name: 'L CLAMP BIG POWDER COATED', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0120', categoryId: 'C0023', name: 'L CLAMP SMALL POWDER POWDER COATED', images: [NO_IMAGE_URL], description: '' },

  // C0024 - STEEL
  { id: 'I0121', categoryId: 'C0024', name: 'STEEL (15 x 25 x 15 MM) .8MM', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0122', categoryId: 'C0024', name: 'STEEL (15 X 25 X 15 MM ) 1MM', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0123', categoryId: 'C0024', name: 'SASH STEEL ( 14 X 26 X 30 X 14MM ) 1MM', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0124', categoryId: 'C0024', name: 'DOOR STEEL 50 X 30 X 50MM ) 1MM', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0125', categoryId: 'C0024', name: 'STEEL FIXED FRAME(12X28X12-1MM)', images: [NO_IMAGE_URL], description: '' },
  { id: 'I0126', categoryId: 'C0024', name: 'STEEL SLIDING(34X29X34-1MM)', images: [NO_IMAGE_URL], description: '' },

  // C0025 - WOOL PILE
  { id: 'I0127', categoryId: 'C0025', name: 'WOOL PILE', images: [NO_IMAGE_URL], description: 'WOOL PILE 4.8 x 6\nWOOL PILE 6 x 6\nWOOL PILE 6.8X6' },

  // C0026 - ROLLERS
  { id: 'I0128', categoryId: 'C0026', name: 'ROLLERS', images: [NO_IMAGE_URL], description: '16MM FLAT ROLLER\n16MM GROOVED ROLLER\n12MM BALL BEARING ROLLER\n7.5MM MESH ROLLER NYLON FRAME\n7.5MM MESH ROLLER METAL FRAME\n10MM MESH ROLLER METAL FRAME\n10MM MESH ROLLER NYLON FRAME\nDOUBLE SWING FLAT ROLLER\nDOUBLE SWING GROOV ROLLER\nADJUSTABLE DOOR ROLLER\nADJUSTABLE 4 WHEEL DOOR ROLLER SS304\nADJUSTABLE DOOR ROLLER - BRASS COATED (CH)\nADJUSTABLE DOOR ROLLER - BRASS COATED (TU)' },

  // C0027 - ALUMINIUM TRACK
  { id: 'I0129', categoryId: 'C0027', name: 'ALUMINIUM TRACK', images: [NO_IMAGE_URL], description: 'Aluminium Rail HALLOW\nALUMINIUM RAIL SEMI SOLID\nAluminium Rail Full SOLID' }
];

export const INITIAL_CATALOGS: Catalog[] = [
  { 
    id: 'c1', 
    name: 'Hi-Tech UPVC Hardwares Main Catalog', 
    image: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Catalog%201.png', 
    fileUrl: 'https://drive.google.com/file/d/1HZBuGxOFmFEtDgxxCftNR-UGaHEP_4CH/view?usp=sharing' 
  },
  { 
    id: 'c2', 
    name: 'Lesso UPVC Window & Doors Technical Manual', 
    image: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Catalog%202.png', 
    fileUrl: 'https://drive.google.com/file/d/1NSeKBA34SGDmVCW6b0g039Az-DVwJ2PH/view?usp=sharing' 
  },
  { 
    id: 'c3', 
    name: 'Gemplast Technical Manual', 
    image: 'https://github.com/liffto/hitechupvchardwares-web/blob/main/Assets/Catalog%203.png?raw=true', 
    fileUrl: 'https://drive.google.com/file/d/1AtJ1m-gxEOzkQKIUTEIBxspT63cHARno/view?usp=sharing' 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: 't1', 
    name: 'Project Partner', 
    company: 'Leading Developer', 
    content: 'Hi-Tech UPVC Hardware is our primary supplier. Their items are most reliable and delivery is always on time.', 
    avatar: 'https://i.pravatar.cc/150?u=hitech' 
  }
];

export const INITIAL_GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/1.jpg?raw=true', caption: 'Installation Excellence' },
  { id: 'g2', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/10.jpg?raw=true', caption: 'Project Showcase' },
  { id: 'g3', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/12.jpg?raw=true', caption: 'Hardware Application' },
  { id: 'g4', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/13.jpg?raw=true', caption: 'Window Systems' },
  { id: 'g5', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/14.jpg?raw=true', caption: 'Quality Finishing' },
  { id: 'g6', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/15.jpg?raw=true', caption: 'Modern Designs' },
  { id: 'g7', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/16.jpg?raw=true', caption: 'Durable Hardware' },
  { id: 'g8', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/19.jpg?raw=true', caption: 'Product Display' },
  { id: 'g9', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/2.jpg?raw=true', caption: 'Precision Engineering' },
  { id: 'g10', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/20.jpg?raw=true', caption: 'Technical Integration' },
  { id: 'g11', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/3.jpg?raw=true', caption: 'Residential Project' },
  { id: 'g12', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/5.jpg?raw=true', caption: 'Commercial Solutions' },
  { id: 'g13', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/6.jpg?raw=true', caption: 'Aesthetic Hardware' },
  { id: 'g14', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/7.jpg?raw=true', caption: 'Reliable Systems' },
  { id: 'g15', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/9.jpg?raw=true', caption: 'Installation View' }
];