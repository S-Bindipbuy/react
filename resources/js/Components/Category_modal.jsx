import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

const Category_modal = ({ URL, category }) => {
    const { data, setData, post, reset } = useForm({
        id: category?.id || "",
        name: category?.name || "",
    });

    useEffect(() => {
        setData({
            id: category?.id || "",
            name: category?.name || "",
        });
    }, [category]);

     const input = (event) => {
         setData(event.target.name, event.target.value);
    };

    const submit = (event) => {
        event.preventDefault();
        post(URL, {
            data: data,
            onSuccess: () => {
                alert("Upload successful!");
                reset();
                document.getElementById("Category_modal").checked = false;
            },
            onError: (errors) => alert(errors.error || "Something went wrong!"),
        });
    };

    return (
        <div>
            <input type="checkbox" id="Category_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    {/* <h3>{Modal}</h3> */}
                    <form onSubmit={(event) => submit(event)}>
                        <table className="table">
                            <tbody>
                                <tr hidden>
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
                                    <td>
                                        <input
                                            type="submit"
                                            value="Save"
                                            className="input input-neutral cursor-pointer"
                                            onChange={(event) => input(event)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="Category_modal" className="btn">
                            Close!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category_modal;
