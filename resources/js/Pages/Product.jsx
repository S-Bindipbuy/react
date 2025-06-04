import ProductTable from "../Components/ProductTable";
import ProductModal from "../Components/ProductModal";
import { useState } from "react";
import { usePage } from "@inertiajs/react";
import Layout from "./Layouts/Layout";

const Product = () => {
    const products = usePage().props.Products || [];
    const categories = usePage().props.categories || [];

    const [URL, setURL] = useState();
    const [Add, setAdd] = useState(true);

    const [product, setProduct] = useState({});
    const deletURL = "/delete/product";
    const add = (event) => {
        setProduct({});
        setAdd(true);
        setURL("/insert/product");
    };
    const update = (data) => {
        setProduct(data);
        setAdd(false);
        setURL("/update/product");
        setProduct(data);

        document.getElementById("ProductModal").checked = true;
    };
    return (
        <Layout title="Products">
            <div>
                <label
                    htmlFor="ProductModal"
                    className="btn m-5"
                    onClick={(event) => add(event)}
                >
                    Add New
                </label>
                <ProductTable products={products} update={update} deletURL={deletURL} />
                <ProductModal URL={URL} Add={Add} Categories={categories} Product={product}  />
            </div>
        </Layout>
    );
};

export default Product;
