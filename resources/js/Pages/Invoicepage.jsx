import Invoice from "../Components/Invoice";
import { usePage } from "@inertiajs/react";
import Layout  from "./Layouts/Layout";
import { Children } from "react";

function Invoicepage(){

    const invoice = usePage().props.Invoice || [];
    return (
        <>
        <Layout title="Invoice">

        <div className="overflow-x-auto">
            <Invoice invoice={invoice}/>
        </div>
        </Layout>
        </>

    );
}
export default Invoicepage;
