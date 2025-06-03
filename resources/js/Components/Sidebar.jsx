import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Sidebar() {
    const [navbar, setnavbar] = useState({});
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/navbar/lang")
            .then((response) => setnavbar(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {Object.entries(navbar).map(([key, value]) => {
                        return (
                            <li key={key}>
                                <Link
                                    href={`/${String(value).toLowerCase()}`}
                                    className="text-lg font-semibold p-5 hover:bg-rose-300 rounded-lg"
                                >
                                    {value}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
