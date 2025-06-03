import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

const ProductModal = ({ Modal, Product, URL, Add, Categories }) => {
    const { data, setData, post, reset } = useForm({

        name: Product?.name || "",
        id: Product?.id || "",
        price: Product?.price || "",
        image: "",
        description: Product?.description || "",
        category_id: Product?.catgory_id || 1,
        qty: Product?.qty || 1,
    });
   useEffect(() => {
    setData({
        id: Product?.id || "",
        name: Product?.name || "",
        price: Product?.price || "",
        image: "",
        description: Product?.description || "",
        category_id: Product?.category_id || 1,
        qty: Product?.qty || 1,
    });
}, [Product]);


     const input = (event) => {
        const name = event.target.name;
        if (name === "image") {
            setData("image", event.target.files[0]); // Store file in state
        } else {
            setData(name, event.target.value);
        }
    };

    const submit = (event) => {
        event.preventDefault();

        // Create FormData object
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        post(URL, {
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }, // Required for file uploads
            onSuccess: () => {alert("Upload successful!"); reset();}, // Reset form on success
            onError: (errors) => alert(errors.error || "Something went wrong!"),
        });
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
                                {!Add && (
                                    <tr>
                                        <td>Category ID</td>
                                        <td>
                                            <input
                                                value={data.id}
                                                type="text"
                                                name="id"
                                                className="input input-neutral"
                                                onChange={(event) =>
                                                    input(event)
                                                }
                                            />
                                        </td>
                                    </tr>
                                )}
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input
                                             value={data.name}
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
                                            {Categories.map((Category) => {
                                                return (
                                                    <option value={Category.id}>
                                                        {Category.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td>
                                        <input
                                            value={data.qty}
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
                                            value={data.price}
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

                                            type="file"
                                            name="image"
                                            className={`input input-bordered w-full  file-input file-input-secondary`}
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
