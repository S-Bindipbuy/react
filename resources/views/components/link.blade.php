@props(['active' => false])
<a {{ $attributes -> merge(['class' => 'p-[2px] ' . ($active ? 'text-black' : 'text-white')]) }}>{{ $slot }}</a>
