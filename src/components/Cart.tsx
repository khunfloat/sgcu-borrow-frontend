import CartIcon from "#/images/open-box.png";
import { useCart } from "@/utils/cart";
import Image from "next/image";

export default function Cart() {
  const { totalUniqueItems } = useCart();
  return (
    <div className="fixed top-6 right-3 ">
      <div className="flex">
        <div className="bg-white p-3 rounded-full shadow-lg">
          <Image
            src={CartIcon}
            alt="Sdcu logo"
            className="items-center mx-auto rounded-md w-8 h-8 z-40"
          />
        </div>
        <p className="z-50 text-white bg-red-600 h-5 w-5 text-sm text-center bg-red rounded-full -ml-3">
          {totalUniqueItems}
        </p>
      </div>
    </div>
  );
}
