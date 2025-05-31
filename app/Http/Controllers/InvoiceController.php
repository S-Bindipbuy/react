<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;

class InvoiceController extends Controller
{
    //

    public function Invoice()
    {

        return inertia()->render("Invoicepage",[
            "Invoice"=> Invoice::with(["user", "product"])->get()
        ]);
    }
}
