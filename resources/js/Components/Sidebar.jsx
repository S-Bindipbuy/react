import { Link } from "@inertiajs/react";

export default function Sidebar() {
    const navigation = ["Dashboard", "Category", "Product","Invoice"];
    return (
       <div className="drawer">

      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

         <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
         {navigation.map((item, index) => (
            <li key={index}>
              <Link href={`/${item.toLowerCase()}`} className="text-lg font-semibold">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>

    );
}
