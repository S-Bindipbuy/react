import AddtoCard from "./AddtoCard";
import Totalprice from "./Totalprice";
import { useState, useEffect } from "react";

function POSLeft({ addtocart = [], removecart }) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalPrice = addtocart.reduce((acc, card) => {
            return acc + card.price ;
        }, 0);
        setTotal(totalPrice);

    }, [addtocart]);
    return (
        <>
            <div className="grid-row-2 grid p-[10px] w-full">
                <div className="w-full max-h-[80vh] overflow-y-auto bg-white shadow-md">
                {addtocart.map((card) => {
                    return (
                        <AddtoCard
                            key={card.name}
                            id={card.id}
                            name={card.name}
                            price={card.price}
                            image={card.image}
                            removecart={removecart}
                            setTotal={setTotal}
                            settotal= {setTotal}
                        />
                    );
                })}
                </div>
            <Totalprice Total={total} />
            </div>
        </>
    );
}

export default POSLeft;
