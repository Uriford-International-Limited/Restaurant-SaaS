export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export interface Restaurant {
  _id?: string;
  name: string;
  cuisine: string;
  priceLabel: string;
  menu: Dish[];
}
