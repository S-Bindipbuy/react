<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Language extends Controller
{
    public function Navbar(){
         $LLDD = session() -> get('locale');
           app() -> setLocale($LLDD);
           return __('page');


    }

}
