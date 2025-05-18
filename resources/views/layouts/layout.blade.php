<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
        @vite('resources/css/app.css')
    </head>
    <body>
        <x-navbar/>
        <select onchange="change(this)">
            <option value="en" {{ (app() -> getLocale() == 'en') ? "selected" : "" }}>English</option>
            <option value="kh" {{ (app() -> getLocale() == 'kh') ? "selected" : "" }}>Khmer</option>
        </select>
        @yield('page')
    </body>
    <script>
        function change(lang) {
            window.location.href = "/lang/" + lang.value;
        }
    </script>
</html>
