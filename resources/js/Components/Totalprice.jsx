function TotalPrice({ Total }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-lg font-semibold">Total Price:</span>
      <span className="text-lg font-semibold">{Total} $</span>
    </div>
  );
}

export default TotalPrice;
