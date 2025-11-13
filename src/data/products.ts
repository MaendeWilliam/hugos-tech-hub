import { Product } from "@/components/ProductCard";

export const products: Product[] = [
  // Laptops & Desktops
  {
    id: "1",
    name: "Dell XPS 15 Laptop",
    description: "15.6\" 4K Display, Intel i7, 16GB RAM, 512GB SSD",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80",
    category: "Laptops & Desktops",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "HP Gaming Desktop",
    description: "Intel i9, RTX 3080, 32GB RAM, 1TB NVMe SSD",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80",
    category: "Laptops & Desktops",
    inStock: true,
  },
  {
    id: "3",
    name: "MacBook Pro 14\"",
    description: "M2 Pro chip, 16GB RAM, 512GB SSD, Liquid Retina XDR",
    price: 2399.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    category: "Laptops & Desktops",
    inStock: true,
    featured: true,
  },
  
  // Mobile Phones & Tablets
  {
    id: "4",
    name: "iPhone 14 Pro",
    description: "256GB, 6.1\" Super Retina XDR, A16 Bionic chip",
    price: 1099.99,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=500&q=80",
    category: "Mobile Phones & Tablets",
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Samsung Galaxy S23",
    description: "128GB, 6.1\" AMOLED, Snapdragon 8 Gen 2",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80",
    category: "Mobile Phones & Tablets",
    inStock: true,
  },
  {
    id: "6",
    name: "iPad Air",
    description: "10.9\" Liquid Retina, M1 chip, 64GB, Wi-Fi",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",
    category: "Mobile Phones & Tablets",
    inStock: true,
  },
  
  // Accessories
  {
    id: "7",
    name: "Logitech MX Master 3",
    description: "Advanced wireless mouse with ultra-fast scrolling",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    category: "Accessories",
    inStock: true,
  },
  {
    id: "8",
    name: "Mechanical Keyboard RGB",
    description: "Cherry MX switches, customizable RGB lighting",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    category: "Accessories",
    inStock: true,
  },
  {
    id: "9",
    name: "USB-C Hub 7-in-1",
    description: "HDMI, USB 3.0, SD/TF card reader, 100W charging",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
    category: "Accessories",
    inStock: true,
  },
  
  // Home & Office Appliances
  {
    id: "10",
    name: "Dyson Air Purifier",
    description: "HEPA filter, removes 99.97% of allergens and pollutants",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",
    category: "Home & Office Appliances",
    inStock: true,
  },
  {
    id: "11",
    name: "Ergonomic Office Chair",
    description: "Lumbar support, adjustable height, breathable mesh",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80",
    category: "Home & Office Appliances",
    inStock: true,
  },
  
  // CCTV & Security Systems
  {
    id: "12",
    name: "4K Security Camera System",
    description: "8 cameras, night vision, motion detection, cloud storage",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&q=80",
    category: "CCTV & Security",
    inStock: true,
    featured: true,
  },
  {
    id: "13",
    name: "Smart Video Doorbell",
    description: "1080p HD, two-way audio, smartphone alerts",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80",
    category: "CCTV & Security",
    inStock: true,
  },
];
