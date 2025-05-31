import Invoice from "../Components/Invoice";
import { usePage } from "@inertiajs/react";

function Invoicepage(){
    const invoice = usePage().props.Invoice || [];
    console.log(invoice);
    return (
        <div className="overflow-x-auto">
            <Invoice invoice={invoice}/>

        </div>

    );
}
export default Invoicepage;
