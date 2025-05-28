import ProductTable from "../Components/ProductTable";
import ProductModal from "../Components/ProductModal";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

const Product = () => {
    const products = usePage().props.Products || [];
    const categories = usePage().props.categories || [];
   
    const [URL, setURL] = useState();
    const [Add, setAdd]= useState(true);



    const [product, setProduct] = useState({});
    const add = (event) => {

        setProduct({});
        setAdd(true);
        setURL("/api/insert");
    };
    const update = (event) => {
        setProduct(event.target.value);
        setAdd(false);
        setURL("/api/update");
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
            <ProductModal URL= {URL} Add = {Add} Categories={categories} />

        </div>
    );
};

export default Product;
