import ProductModal from "../Components/ProductModal";

const Product = () => {
    return (
        <div>
            <label htmlFor="ProductModal" className="btn m-5">
                Add New
            </label>
            <ProductModal URL="/end" />
        </div>
    );
};

export default Product;
