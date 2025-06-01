import { useForm } from "@inertiajs/react";

const ProductModal = ({ Modal, Product, URL, Add, Categories }) => {
    const { data, setData, post } = useForm({
        name: Product?.name || "",
        price: Product?.price || "",
        image: "",
        description: Product?.description || "",
        category_id: Product?.catgory_id || 1,
        qty: Product?.qty || 1,


    });
    const input = (event) => {
        const name = event.target.name;
        const abc = event.target.value;
        setData(name, abc);

    };

    const submit = (event) => {
        event.preventDefault();
        post(URL, {  onSuccess: () => {
            window.location.reload();
        },
            onError: (errors) => {
                alert(errors.error || "Something went wrong!");
            }
        });
        document.getElementById("ProductModal").click();
    };

    return (
        <div>
            <input type="checkbox" id="ProductModal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3>{Modal}</h3>
                    <form onSubmit={(event) => submit(event)}>
                        <table className="table">
                            <tbody>
                                {
                                    !Add && ( <tr>
                                        <td>Category ID</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="category_id"
                                                className="input input-neutral"
                                                onChange={(event) => input(event)}
                                            />
                                        </td>
                                    </tr>)
                                }
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            className="input input-neutral"
                                            onChange={(event) => input(event)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Category</td>
                                    <td>
                                        <select
                                            type="text"
                                            name="category_id"
                                            defaultValue={Categories[0].id}
                                            className="input input-neutral"
                                            onChange={(event) => input(event)}
                                        >
                                            {
                                                Categories.map(Category=>{
                                                    return <option value={Category.id}>
                                                        {Category.name}
                                                    </option>
                                                })
                                            }
                                            </select>


                                    </td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="qty"
                                            className="input input-neutral"
                                            onChange={(event) => input(event)}
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
                                            onChange={(event) => input(event)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>
                                        <textarea
                                            name="description"
                                            className="textarea"
                                            onChange={(event) => input(event)}
                                            value={data.description}
                                        ></textarea>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Image</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="image"
                                            className="input input-neutral"
                                            onChange={(event) => input(event)}
                                        />
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <input
                                            type="submit"
                                            className="input input-neutral"
                                            onChange={(event) => input(event)}
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
