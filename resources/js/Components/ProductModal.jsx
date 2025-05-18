import { useForm } from "@inertiajs/react";

const ProductModal = ({ Modal }) => {
    const {data, setData, post} = useForm({
        name: "",
        price: "",
        image: null,
        description: "",
        category_id: null,
        qty: 1,
    });

    return (
        <div>
            <input type="checkbox" id="ProductModal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3>{Modal}</h3>
                    <form onSubmit={(event) => submit(event)}>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Category ID</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="category_id"
                                            className="input input-neutral"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            className="input input-neutral"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="qty"
                                            className="input input-neutral"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="price"
                                            className="input input-neutral"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="submit"
                                            className="input input-neutral"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="ProductModal" className="btn">
                            Close!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
