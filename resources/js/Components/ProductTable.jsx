const ProductTable = ({ products }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((data) => {
                            return (
                                <tr>
                                    <th>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                            />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={data.image}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {data.name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{data.category.name}</td>
                                    <td>{data.description}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">
                                            details
                                        </button>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                    {/* foot */}
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
