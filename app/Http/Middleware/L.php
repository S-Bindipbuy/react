<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class L
{
    public function handle(Request $request, Closure $next): Response
    {
        $LLDD = session()->get("locale");
        if (isset($LLDD)) {
            app()->setLocale($LLDD);
        }
        return $next($request);
    }
}
