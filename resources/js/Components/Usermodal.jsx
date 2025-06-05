import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

function UserModal({URL, u, statebutton}) {
    const roles = usePage().props.roles || "";
    const {data, setData, reset, post} = useForm({
        id: u.id || "",
        name: u.name || "",
        email: u.email || "",
        password: u.password || "",
        themes_id: 1,
        image: null,
        role_id: u.roles?.id || 1
    });

    useEffect(() => {

        setData("id", u.id || ""),
        setData("name", u.name || ""),
        setData("email", u.email || ""),
        setData("password", u.password || ""),
        setData("themes_id", 1),
        setData("image", null),
        setData("role_id", u.roles?.id || 1)
    }, [u]);

    const submit = async (event) => {
        event.preventDefault();
        post(URL, data);
        reset();
    };

    const input = (event) => {
        const name = event.target.name;

        if (name === "image") {
            setData((prevData) => ({
                ...prevData,
                image: event.target.files[0],
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: event.target.value,
            }));
        }
    };

    const role = (event) => {
        setData("role_id", event.target.value)
    }

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
                                    <td>Role</td>
                                    <td>
                                        <select name="role" onChange={(map) => role(map)} className="select">
                                            {roles.map((role) => {
                                                return   <option value={role.id} key={role.id}>{role.name}</option>
                                            })}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className="input input-bordered w-full"
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
                                            value={data.email}
                                            className="input input-bordered w-full"
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
                                            value={data.password}
                                            className="input input-bordered w-full"
                                            onChange={input}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Image File</td>
                                    <td>
                                        <input
                                            type="file"
                                            name="image"
                                            className="input file-input file-input-secondary"
                                            onChange={input}
                                            accept="image/*"
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
