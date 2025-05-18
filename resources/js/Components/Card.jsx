function ProductCard({ addcart, name, id, image, price, category }) {
    const card = { id, name, price, image };
    return (
        <div
            className="card bg-base-100 shadow-sm w-full max-w-sm sm:max-w-md md:max-w-lg"
            key={id}
            id={id}
        >
            <figure className="w-full">
                <img
                    src={image}
                    alt="Product"
                    className="w-full h-auto object-cover rounded-md"
                />
            </figure>
            <div className="card-body flex flex-col gap-2">
                <h2 className="card-title text-xl">{name}</h2>
                <h2 className="card-title text-lg text-gray-600">
                    {category.name}
                </h2>
                <h1 className="font-bold text-lg text-[grey]">${price}</h1>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-neutral btn-outline min-w-[80px]
                    w-full max-w-[200px] py-2 px-4 text-sm sm:text-base
                    rounded-md"
                        onClick={() => addcart(card)}
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
