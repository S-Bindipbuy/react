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
    public function Checkout(Request $request)
    {

       $data = request()->addtocart;
       $user = $request->user;

       foreach ($data as $key => $value) {
           $data[$key] = [
               "user_id" => $user['id'],
               "product_id" => $value['id'],
               "qty" => $value['order'],
               "price" => $value['price'],
               "total" => $value['total'],
               "created_at" => now(),
               "updated_at" => now(),
            ];
        }
        Invoice::insert($data);
        return redirect()->back();
    }

}
