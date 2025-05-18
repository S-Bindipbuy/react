import POSLeft from "../Components/PosLeft";
import POSRight from "../Components/PosRight";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
export default function Dashboard() {
    const [addtocart, setadd] = useState([]);
    const removecart = (e) => {
        setadd(
            addtocart.filter((find) => {
                return find.id != e;
            }),
        );
    };
    const addcart = (card) => {
        if (
            !addtocart.some((cart) => {
                return cart.id == card.id;
            })
        ) {
            setadd([...addtocart, card]);
        }
    };
    const Products = usePage().props.Products || [];
    return (
        <div className="flex h-svh">
            <POSLeft addtocart={addtocart} removecart={removecart} />
            <POSRight addcart={addcart} Products={Products} />
        </div>
    );
}
