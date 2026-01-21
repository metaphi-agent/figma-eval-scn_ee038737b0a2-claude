export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  image: string;
}

export interface StyleCategory {
  name: string;
  image: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  verified: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    image: "/products/tshirt-black.png"
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: "-20%",
    rating: 3.5,
    image: "/products/jeans-blue.png"
  },
  {
    id: 3,
    title: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: "/products/shirt-checkered.png"
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: "-30%",
    rating: 4.5,
    image: "/products/tshirt-orange.png"
  }
];

export const topSellingProducts: Product[] = [
  {
    id: 5,
    title: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discount: "-20%",
    rating: 5.0,
    image: "/products/shirt-striped.png"
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    image: "/products/tshirt-graphic.png"
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    image: "/products/shorts-bermuda.png"
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    image: "/products/jeans-faded.png"
  }
];

export const styleCategories: StyleCategory[] = [
  {
    name: "Casual",
    image: "/styles/casual.png"
  },
  {
    name: "Formal",
    image: "/styles/formal.png"
  },
  {
    name: "Party",
    image: "/styles/party.png"
  },
  {
    name: "Gym",
    image: "/styles/gym.png"
  }
];

export const stats: Stat[] = [
  {
    number: "200+",
    label: "International Brands"
  },
  {
    number: "2,000+",
    label: "High-Quality Products"
  },
  {
    number: "30,000+",
    label: "Happy Customers"
  }
];

export const brands: string[] = [
  "VERSACE",
  "ZARA",
  "GUCCI",
  "PRADA",
  "Calvin Klein"
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    verified: true
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    verified: true
  }
];