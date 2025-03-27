import { useState } from "react";
import { PlusSquareIcon, MinusSquareIcon, SquareX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { currencyFormat } from '@/formatters';

type CollectionItems = {
  id: number;
} & {
  [key: string]: string | number;
};

type ProductItemProps = {
  product: CollectionItems;
  onChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
};

function ProductItem(props: ProductItemProps) {
  const { product, onChange, onRemove } = props;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (quantity: number) => {
    setQuantity(quantity);
    onChange(product.id.toString(), quantity);
  };

  const addQuantity = () => {
    handleQuantityChange(quantity + 1);
  };

  const removeQuantity = () => {
    if (quantity === 1) {
      onRemove(product.id.toString());
      return;
    };

    handleQuantityChange(quantity - 1);
  };

  return (
    <div className="flex items-center gap-2 p-1 mt-2">
      <div className="flex flex-1 flex-col items-start justify-center gap-2">
        <p>{product.name}</p>
        <p style={{ color: "#a5a8af" }}>UN: {currencyFormat(Number(product.price))}</p>
      </div>
      <div className="max-w-[200px] flex items-center gap-2">
        <PlusSquareIcon onClick={addQuantity} className="cursor-pointer text-[#a5a8af] text-xs max-w-[20px] hover:text-gray-600"/>
        <Input
          value={quantity}
          type="number"
          onChange={(event) => handleQuantityChange(Number(event.target.value))}
          min={1}
          className="max-w-[60px]"
        />
        <MinusSquareIcon onClick={removeQuantity} className="cursor-pointer text-[#a5a8af] text-xs max-w-[20px] hover:text-gray-600"/>
      </div>
    </div>
  );
}

export default ProductItem;
