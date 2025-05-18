@extends('../layouts/pos')

@section('page')
    <h1>Hello There This is Dashboard</h1>
    <div class="flex justify-between">
        <x-dashboardleft></x-dashboardleft>
        <x-dashboardright></x-dashboardright>
    </div>
@endsection
