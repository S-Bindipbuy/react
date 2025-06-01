import POSLeft from "../Components/PosLeft";
import POSRight from "../Components/PosRight";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
export default function Dashboard() {
    const [addtocart, setadd] = useState([]);

    const modifycart = (cart, qty) => {
        setadd(
            addtocart.map((product) => {
                if (product.id == cart.id) {
                    return { ...product, order: qty };
                } else {
                    return { ...product };
                }
            }),
        );
    };

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
            setadd([...addtocart, { ...card, order: 1 }]);
        }
    };
    const Products = usePage().props.Products || [];
    const Categories = usePage().props.Categories || [];
    return (
        <div className="flex h-svh">
            <POSLeft
                addtocart={addtocart}
                removecart={removecart}
                modifycart={modifycart}
            />
            <POSRight
                addcart={addcart}
                Products={Products}
                Categories={Categories}
            />
        </div>
    );
}
