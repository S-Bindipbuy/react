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
        <Layout title="Products">
            <div>
                <label
                    htmlFor="ProductModal"
                    className="btn m-5"
                    onClick={(event) => add(event)}
                >
                    Add New
                </label>
                <ProductTable products={products} URL="api/delete/user" />
                <ProductModal URL={URL} Add={Add} Categories={categories} />
            </div>
        </Layout>
    );
};

export default Product;
