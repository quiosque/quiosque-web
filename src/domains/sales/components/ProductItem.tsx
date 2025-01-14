import React, { useState } from "react";
import { PlusSquareIcon, MinusSquareIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

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
  const { product, onChange } = props;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (quantity: number) => {
    setQuantity(quantity);
    onChange(product.id.toString(), quantity);
  };

  const addQuantity = () => {
    handleQuantityChange(quantity + 1);
  };

  const removeQuantity = () => {
    if(quantity === 0) return;

    handleQuantityChange(quantity - 1);
  };

  return (
    <div className="flex items-center gap-2 p-1 mt-2">
      <p className='flex-1'>{product.name}</p>
      <div className='max-w-[200px] flex items-center gap-2'>

      <PlusSquareIcon onClick={addQuantity} />
      <Input
        value={quantity}
        type="number"
        onChange={(event) => handleQuantityChange(Number(event.target.value))}
        min={1}
        />
      <MinusSquareIcon onClick={removeQuantity} className='text-'/>
        </div>
    </div>
  );
}

export default ProductItem;
