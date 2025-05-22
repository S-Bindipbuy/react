import ProductTable from "../Components/ProductTable";
import ProductModal from "../Components/ProductModal";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

const Product = () => {
    const products = usePage().props.products || [];
    const [product, setProduct] = useState({});
    const add = (event) => {
        setProduct({});
    };
    const update = (event) => {
        setProduct(event.target.value);
    };
    return (
        <div>
            <label
                htmlFor="ProductModal"
                className="btn m-5"
                onClick={(event) => add(event)}
            >
                Add New
            </label>
            <ProductTable products={products} />
            <ProductModal URL="/end" />
        </div>
    );
};

export default Product;
