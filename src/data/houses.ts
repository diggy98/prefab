export interface HouseType {
  name: string;
  imageUrl: string;
  squareFeet: number;
  squareMeters: number;
  price: number;
  type: string;
  category: string; // New field for house type categories
  description?: string;
  additionalImages?: string[];
}

export const houseData: HouseType[] = [
  // Smart Houses
  {
    name: "SMART S-18",
    imageUrl: "/S-18-1.jpg",
    squareFeet: 1292,
    squareMeters: 120,
    price: 320000,
    type: "BUNGALOWS",
    category: "SMART",
    description: "Intelligent home automation and energy efficiency with compact design",
    additionalImages: ["/S-18-1.jpg", "/126.jpg"]
  },
  {
    name: "SMART S-126",
    imageUrl: "/126.jpg",
    squareFeet: 1356,
    squareMeters: 126,
    price: 335000,
    type: "BUNGALOWS",
    category: "SMART",
    description: "Advanced smart home technology integration with modern aesthetics",
    additionalImages: ["/126.jpg", "/S-18-1.jpg"]
  },
  
  // Skandy-Nordy Houses
  {
    name: "SKANDY-NORDY SN-42",
    imageUrl: "/Копія-Nordy-42-3D-1.jpg",
    squareFeet: 1507,
    squareMeters: 140,
    price: 295000,
    type: "BUNGALOWS",
    category: "SKANDY-NORDY",
    description: "Scandinavian-Nordic inspired minimalist design with natural materials",
    additionalImages: ["/Копія-Nordy-42-3D-1.jpg", "/Nordy-65-3D-2.jpg", "/Копія-Skandy-120-3D-1.jpg"]
  },
  {
    name: "SKANDY-NORDY SN-65",
    imageUrl: "/Nordy-65-3D-2.jpg",
    squareFeet: 1830,
    squareMeters: 170,
    price: 340000,
    type: "1.5-STOREY",
    category: "SKANDY-NORDY",
    description: "Nordic elegance with sustainable materials and contemporary comfort",
    additionalImages: ["/Nordy-65-3D-2.jpg", "/Копія-Skandy-120-3D-1.jpg", "/Копія-Nordy-42-3D-1.jpg"]
  },
  {
    name: "SKANDY-NORDY SN-120",
    imageUrl: "/Skandy 120 front-1 2.png",
    squareFeet: 2200,
    squareMeters: 204,
    price: 395000,
    type: "2-STOREY",
    category: "SKANDY-NORDY",
    description: "Scandinavian design with enhanced features and luxury finishes in a natural forest setting",
    additionalImages: ["/Skandy 120 front-1 2.png", "/Skandy 120 front-1 Medium.png", "/Nordy-65-3D-2.jpg"]
  },
  
  // Modern-B Houses
  {
    name: "MODERN-B MB-80",
    imageUrl: "/prefab_homes_modern_b_80_front_perspective.jpg",
    squareFeet: 1700,
    squareMeters: 158,
    price: 340000,
    type: "1.5-STOREY",
    category: "MODERN-B",
    description: "Contemporary architecture with bold design elements and striking facades",
    additionalImages: ["/prefab_homes_modern_b_80_front_perspective.jpg"]
  },
  
  // Modern Houses
  {
    name: "MODERN M-65",
    imageUrl: "/2p.jpg",
    squareFeet: 1900,
    squareMeters: 176,
    price: 315000,
    type: "2-STOREY",
    category: "MODERN",
    description: "Sleek modern design with cutting-edge features and contemporary aesthetics",
    additionalImages: ["/2p.jpg", "/render1.jpg"]
  },
  {
    name: "MODERN M-85",
    imageUrl: "/render1.jpg",
    squareFeet: 2100,
    squareMeters: 195,
    price: 385000,
    type: "2-STOREY",
    category: "MODERN",
    description: "Premium modern home with sophisticated design and luxury finishes",
    additionalImages: ["/render1.jpg", "/2p.jpg"]
  },
  
  // Modular Houses
  {
    name: "MODULAR MOD-40",
    imageUrl: "/Глеваха_1.jpg",
    squareFeet: 1400,
    squareMeters: 130,
    price: 275000,
    type: "BUNGALOWS",
    category: "MODULAR",
    description: "Flexible modular construction with contemporary design and adaptable layouts",
    additionalImages: ["/Глеваха_1.jpg", "/photo_2022-10-03-12.44.26.jpeg", "/IMG_0015.jpg"]
  },
  {
    name: "MODULAR MOD-55",
    imageUrl: "/photo_2022-10-03-12.44.26.jpeg",
    squareFeet: 1615,
    squareMeters: 150,
    price: 295000,
    type: "BUNGALOWS",
    category: "MODULAR",
    description: "Advanced modular system with premium materials and flexible configurations",
    additionalImages: ["/photo_2022-10-03-12.44.26.jpeg", "/Глеваха_1.jpg", "/IMG_0015.jpg"]
  },
  {
    name: "MODULAR MOD-70",
    imageUrl: "/IMG_0015.jpg",
    squareFeet: 1830,
    squareMeters: 170,
    price: 325000,
    type: "1.5-STOREY",
    category: "MODULAR",
    description: "Spacious modular home with expandable design and modern amenities",
    additionalImages: ["/IMG_0015.jpg", "/Глеваха_1.jpg", "/photo_2022-10-03-12.44.26.jpeg"]
  }
];

// Helper function to get houses by category
export const getHousesByCategory = (category: string) => {
  if (category === 'ALL') return houseData;
  return houseData.filter(house => house.category === category);
};

// Get unique categories
export const getCategories = () => {
  const categories = ['ALL', ...new Set(houseData.map(house => house.category))];
  return categories;
};