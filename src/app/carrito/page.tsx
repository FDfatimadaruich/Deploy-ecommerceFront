import { Cart } from "@/components/carro/Cart";

export default function page() {
  const cartItems = [];
  return (
    <div className="flex justify-center items-center  ">
      <Cart cartItems={cartItems} />
    </div>
  );
}
