import { Link } from "@inertiajs/react";

export default function Sidebar() {
    const navigation = ["Dashboard", "Category", "Product"];
    return (
        <div>
            <ul>
                {navigation.map((navigation) => {
                    return (
                        <Link href={navigation.toLowerCase()}>
                            <li className="hover:bg-cpc-base p-[10px] hover:text-white rounded-sm">
                                {navigation}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}
