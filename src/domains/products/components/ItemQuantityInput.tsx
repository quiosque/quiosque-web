import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";

function ItemQuantityInput({ row, table }: unkown) {
  const ref = useRef(null);
  const [localQuantity, setLocalQuantity] = useState(
    row.original.item_quantity
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLocalQuantity(+e.target.value);

    table.options.meta?.updateData(row.original.id, +e.target.value);
    ref?.current?.focus();
  };

  return (
    <div>
      <Input
        type="number"
        disabled={!row.getIsSelected()}
        value={localQuantity}
        onChange={handleChange}
        ref={ref}
      />
    </div>
  );
}

export default ItemQuantityInput;
