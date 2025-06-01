import { useForm, usePage } from "@inertiajs/react";
import React from "react";


function UserModal() {
    const { errors}  = usePage().props;

    const { data, setData, post } = useForm({
      name: "",
      email: "",
      password: "",
      image: "",

    });

  const submit = (event) => {
    event.preventDefault();
    post("/api/insert/user", {
      onSuccess: () => {
        window.location.reload();
      },
      onError: (errors) => {
        alert(errors.error || "Something went wrong!");
      },
    });

  };

  const input = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setData(name, value);
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
                  {errors.name && (
                        <td>{errors.name}</td>
                    )}
                <tr>
                  <td>Name</td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      className="input input-bordered w-full"
                      onChange={input}
                    />
                  </td>
                    {errors.email && (
                        <td>{errors.email}</td>
                    )}

                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      className="input input-bordered w-full"
                      onChange={input}
                    />
                  </td>
                </tr>
                  {errors.password && (
                        <td>{errors.password}</td>
                    )}
                <tr>
                  <td>Password</td>
                  <td>
                    <input
                      type="password"
                      name="password"
                      className="input input-bordered w-full"
                      onChange={input}
                    />
                  </td>
                </tr>
                  {errors.image && (
                        <td>{errors.image}</td>
                    )}
                <tr>
                  <td>Image URL</td>
                  <td>
                    <input
                      type="text"
                      name="image"
                      className="input input-bordered w-full"
                      onChange={input}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-4 text-right">
              <input type="submit" value="Submit" className="btn btn-primary" />
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
