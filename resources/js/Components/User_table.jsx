import { router } from "@inertiajs/react";

const UserTable = (users) => {
    const All_User = users.users || [];

    function insertUser() {
        document.getElementById("UserModal").click();
    }

    const user_delete = (event, id) => {
        event.preventDefault();
        router.post("/user_delete", { id });
    };

    return (
        <div>
            <button
                onClick={(event) => insertUser(event)}
                className="btn my-5 ml-5"
            >
                Insert User
            </button>
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {All_User.map((u) => {
                            return (
                                <tr key={u.id}>
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
                                                        src={`storage/${u.image}`}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {u.name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">
                                            {u.email}
                                        </span>
                                    </td>
                                    <td>{u.themes.name}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">
                                            details
                                        </button>
                                        <button
                                            className="btn btn-ghost btn-xs"
                                            onClick={(event) =>
                                                user_delete(event, u.id)
                                            }
                                        >
                                            delete
                                        </button>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
