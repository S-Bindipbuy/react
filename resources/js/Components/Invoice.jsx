

function Invoice({ invoice }){

    return (


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>

        <th>ID</th>
        <th>User</th>
        <th>Products</th>
        <th>Price</th>
        <th>Total</th>
        <th>Qty</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
        {
        invoice.map((data) => {
            return (
                <tr className="bg-base-200">

                <th>{data.id}</th>
                <th>{data.user?.name || "deleted"}</th>
                <th>{data.product?.name || "deleted"}</th>
                <th>{data.price}$</th>
                <th>{data.total}$</th>
                <th>{data.qty}</th>
                <th>{data.created_at}</th>
            </tr>
            )
        })
        }
    </tbody>
  </table>
</div>
    );

}
export default Invoice;
