import React from "react";
import { usePage } from "@inertiajs/react";

function Navbar() {
  const props = usePage().props;
  const user = props.auth.user;

  return (
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">

            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">

            <img src="ktty.png" alt="" width={50} />
            </label>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="profile" src={`storage/users/${user.image}`} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a href="/user/logout">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>



      </div>


  );
}

export default Navbar;
