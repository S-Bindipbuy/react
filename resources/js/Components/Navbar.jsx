import { useState, useEffect } from "react";
import { usePage, router } from "@inertiajs/react";

const Navbar = () => {
    const Page = usePage().props;
    const Setting = Page.auth?.user?.themes || {};
    const select = usePage().props.theme || [];
    const [Theme, setTheme] = useState(Setting.name || "default");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", Theme);
    }, [Theme]);

    const handleThemeChange = (event) => {
        router.post("/ChangeTheme", { themes: event.target.id });
        setTheme(event.target.value);
    };

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
                Theme Changer
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
                onChange={(e) => handleThemeChange(e)}
            >
                <li>
                    {select.map((theme) => {
                        return (
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="btn btn-sm btn-block btn-ghost justify-start"
                                aria-label={theme.name}
                                value={theme.name}
                                key={theme.id}
                                id={theme.id}
                            />
                        );
                    })}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
