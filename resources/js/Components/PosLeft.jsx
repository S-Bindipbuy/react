import { useState } from "react";
import AddtoCard from "./AddtoCard";
import Totalprice from "./Totalprice";
function POSLeft({ addtocart = [], removecart }) {
    const [updateqty, setUpdateqty] = useState(false);
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
                        setUpdateqty={setUpdateqty}
                        removecart={removecart}
                    />
                );
            })}

        </div>
        <Totalprice product = {addtocart} setUpdateqty={setUpdateqty}/>
        </>

    );
}

export default POSLeft;
