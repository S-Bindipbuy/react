import axios from "axios";
import { useState } from "react";

function UserModal() {
    const [errors, seterror] = useState([]);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        image: "",
        themes_id: 1,
    });

    const submit = async (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/insert/user", data)
            .then((response) => {
                alert(response.data.status);
                seterror({});
            })
            .catch((error) => {
                seterror(error.response.data.errors);
                console.error(error);
            });
    };

    const input = (event) => {
        console.log(data);
        const name = event.target.name;
        const value = event.target.value;
        setData((prevdata) => ({ ...prevdata, [name]: value }));
    };

    return (
        <div>
            <input type="checkbox" id="UserModal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">User Form</h3>

                    <form onSubmit={submit}>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
                                            onChange={input}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
                                            onChange={input}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input
                                            type="password"
                                            name="password"
                                            className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
                                            onChange={input}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Image URL</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="image"
                                            className={`input input-bordered w-full ${errors.image ? "input-error" : ""}`}
                                            onChange={input}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="mt-4 text-right">
                            <input
                                value="Submit"
                                type="submit"
                                className="btn btn-outline"
                            />
                        </div>
                    </form>

                    <div className="modal-action">
                        <label htmlFor="UserModal" className="btn">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserModal;
