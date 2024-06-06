export interface ICartProps {
  cartItems: ICart[];
}

export interface ICart {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}
