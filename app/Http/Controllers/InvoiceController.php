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
       dd(request()->all());
       $data = request()->addtocart;
       $user = $request->user;
       foreach ($data as $key => $value) {
            $data[$key] = [
                "user_id" => $user,
                "product_id" => $value['id'],
                "qty" => $value['qty'],
                "price" => $value['price'],
                "created_at" => now(),
                "updated_at" => now(),
            ];
        }
        Invoice::insert($data);
        return redirect()->back('success', 'Checkout successful');
    }

}
