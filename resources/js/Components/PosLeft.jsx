import AddtoCard from "./AddtoCard";
function POSLeft({ addtocart = [], removecart }) {
    return (
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
                    />
                );
            })}
        </div>
    );
}

export default POSLeft;
