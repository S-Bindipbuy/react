import Category_tb from "../Components/Category_tb";
import Category_modal from "../Components/Category_modal";
import Layout from "./Layouts/Layout";
import {useState} from "react";
import {router} from "@inertiajs/react";

function Category(){
    const [URL, setURL] = useState();
    const [category, setCategory] = useState({});
    const deleteCat = (event, id) => {
        event.preventDefault();
        router.post("/delete/cat", id);
    }
    const updateCat = (cat) => {
        document.getElementById("Category_modal").click();
        setURL("/update/cat");
        setCategory(cat);
    }
    const insertCat = () => {
        document.getElementById("Category_modal").click();
        setURL("/insert/cat");
        setCategory({});
    }

    return(
        <Layout title="Category">
           <Category_modal URL={URL} category={category} />
           <Category_tb category = {category} updateCat={updateCat} insertCat = {insertCat} deleteCat={deleteCat}/>
        </Layout>
    );
}
export default Category;
