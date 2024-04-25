export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: Number;
  id: Number;
  images: Array<string>;
  price: Number;
  rating: Number;
  stock: Number;
  thumbnail: string;
  title: string;
}

export interface FilterSideBarProps {
  updateProducts: (products: Product[]) => void;
  updateCategories: (categories: string[]) => void;
}

export interface DashboardChartsProps {
  products: Product[];
  categories: string[];
}
