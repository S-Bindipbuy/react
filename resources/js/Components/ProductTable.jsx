import { router } from "@inertiajs/react";

const ProductTable = ({ products, deletURL, update}) => {
    const deletepro = (event, id) => {
        event.preventDefault();
        router.post(deletURL, { id: id });
    };
    return (
        <div>
            <div className="overflow">
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
                            <th>Action</th>
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
                                    <td>{data.id}</td>
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
                                    <td>{data.price}</td>
                                    <td>{data.description}</td>
                                    <td>{data.qty}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs" onClick={() => update(data)}>
                                            details
                                        </button>
                                        <button
                                            className="btn btn-ghost btn-xs"
                                            onClick={(event) =>
                                                deletepro(event, data.id)
                                            }
                                        >
                                            delete
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
