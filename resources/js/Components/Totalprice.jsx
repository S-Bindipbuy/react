import { useState, useEffect } from "react";

function TotalPrice({ product, updateqty, setUpdateqty }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedTotal = product.reduce((acc, item) => {
      return acc + (item.price || 0) * (item.quantity || 1);
    }, 0);

    setTotalPrice(calculatedTotal);

    // Reset updateqty after recalculating total price
    if (updateqty) {
      setUpdateqty(false);
    }
  }, [product, updateqty]); // Dependency array ensures re-calculation

  return (
    <div className="flex justify-between items-center">
      <span className="text-lg font-semibold">Total Price:</span>
      <span className="text-lg font-semibold">{totalPrice} $</span>
    </div>
  );
}

export default TotalPrice;
