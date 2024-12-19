import ItemCard from "@/components/ItemCard";
import Item from "@/model/item";

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-44">
      {items.map((item) => (
        <ItemCard key={item.item_id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
