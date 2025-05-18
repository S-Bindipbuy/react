<nav class="bg-cpc-blue fixed right-0 p-[2px] rounded-lg my-[2px] mx-[2px]">
    <x-link href="/" :active="request() -> is('/')">{{ __("page.home"); }}</x-link>
    <x-link href="about" :active="request() -> is('about')">{{ __("page.about"); }}</x-link>
    <x-link href="another" :active="request() -> is('another')">{{ __("page.another"); }}</x-link>
</nav>
