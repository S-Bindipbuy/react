function TotalPrice({ Total, checkout }) {

  return (
    <div className="">
        <div>
            <button className="btn rounded-[10px] hover:bg-rose-200" onClick={checkout}>Check Out</button>
        </div>
    <div className="flex justify-between items-center">
      <span className="text-lg font-semibold">Total Price:</span>
      <span className="text-lg font-semibold">{Total.toFixed(2)} $</span>
    </div>
    </div>
  );
}

export default TotalPrice;
