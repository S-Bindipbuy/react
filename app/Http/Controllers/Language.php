<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Language extends Controller
{
    public function Navbar()
    {
        $LLDD = session()->get("locale", "en");
        app()->setLocale($LLDD);
        // session()->put("locale", "Hello");
        // dd(session()->get("locale"));
        return __("page");
    }
}
