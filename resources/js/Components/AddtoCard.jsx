import { useState } from "react";
const AddtoCard = ({ removecart, id, name, price, image }) => {
    const [qty, setqty] = useState(1);
    const add = () => {
        setqty((qty) => qty + 1);
    };
    const remove = () => {
        if (qty > 1) {
            setqty((qty) => qty - 1);
        }
    };
    return (
        <div className="m-4">
            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                    Product
                </li>

                <li className="list-row">
                    <div>
                        <img className="size-10 rounded-box" src={image} />
                    </div>
                    <div>
                        <div>{name}</div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                            {price} $
                        </div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                            {qty}
                        </div>
                    </div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                        Pay: {qty * price} $
                    </div>
                    <button
                        className="btn btn-square btn-ghost"
                        onClick={() => add()}
                    >
                        +
                    </button>
                    <button
                        className="btn btn-square btn-ghost"
                        onClick={() => remove()}
                    >
                        -
                    </button>
                    <button
                        className="btn btn-circle btn-ghost"
                        onClick={() => removecart(id)}
                    >
                        x
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default AddtoCard;
