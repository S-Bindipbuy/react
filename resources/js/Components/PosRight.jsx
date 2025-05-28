import { useState } from "react";
import Card from "./Card";

function POSRight({ addcart, Products, Categories }) {
    const productList = Products ? Products : [];
    const categoryList = Categories ? Categories : [];
    const [category, setCategory] = useState("All");
    const filter = (category) => {
        setCategory(category.target.value);
    };
    return (
        <div className="p-4 w-full overflow-y-scroll">
            <div className="flex mb-3 items-center">
                <h3 className="mr-3">Category</h3>
                <select
                    defaultValue="All"
                    className="select"
                    onChange={(change) => filter(change)}
                >
                    <option key="0" value="All">
                        All
                    </option>
                    {categoryList.map((category) => {
                        return (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div
                className="grid gap-4 w-full"
                style={{
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(200px, max-content))",
                    gridTemplateRows:
                        "repeat(auto-fill, minmax(350px, max-content))",
                }}
            >
                {productList
                    .filter(
                        (Product) =>
                            Product.category.name === category ||
                            category === "All",
                    )
                    .map((Product) => {
                        return (
                            <Card
                                key={Product.id}
                                name={Product.name}
                                id={Product.id}
                                image={Product.image}
                                price={Product.price}
                                category={Product.category}
                                addcart={addcart}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default POSRight;
