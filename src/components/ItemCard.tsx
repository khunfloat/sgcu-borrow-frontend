"use client";

import Item from "@/model/item";
import { useCart } from "@/utils/cart";
import Image from "next/image";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { addItem, inCart, removeItem } = useCart();

  return (
    <div>
      <Image
        src={item.img_url}
        className="object-cover rounded-tl-lg rounded-tr-lg w-[128px] h-[130px]"
        alt={item.item_name}
        loading="lazy"
        width={128}
        height={130}
        unoptimized
      />
      <div className="bg-white pb-2 pt-1 rounded-bl-lg rounded-br-lg">
        <div className="pl-2 pb-2">
          <p className="text-xs font-semibold text-black">{item.item_name}</p>
          <p className="text-[10px] text-gray-500 text-neutral-600">
            คงเหลือ {item.current_amount}
          </p>
        </div>
        <div className="flex justify-center mx-2">
          {inCart(item.item_id) ? (
            <button
              onClick={() => removeItem(item.item_id)}
              className="bg-red text-white w-full text-sm py-1.5 px-3 rounded-lg"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={() => addItem(item)}
              className="bg-green text-black w-full text-sm py-1.5 px-3 rounded-lg"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
