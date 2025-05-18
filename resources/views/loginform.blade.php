login here
<form action="/login" method="POST">
    @csrf
    <input name="email" placeholder="email"/>
    <input name="password" placeholder="password"/>
    <button type="submit">Login</button>
</form>
