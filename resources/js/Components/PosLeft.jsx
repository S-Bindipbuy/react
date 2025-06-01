import AddtoCard from "./AddtoCard";
import Totalprice from "./Totalprice";
import { useState, useEffect } from "react";
function POSLeft({ addtocart = [], removecart }) {
    useEffect(() => {

    }, [addtocart]);
    return (
        <>
            <div className="grid-cols-1 p-[10px] w-full overflow-scroll">
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
                        />
                    );
                })}
            </div>
            <Totalprice Total={total} />
        </>
    );
}

export default POSLeft;
