import { useState } from "react";
import { usePage, router } from "@inertiajs/react";

const Form = ({ url }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { errors } = usePage().props;
    function Submit(form) {
        form.preventDefault();
        router.post(url, { email, password });
    }
    return (
        <form onSubmit={(form) => Submit(form)}>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input
                    type="text"
                    name="email"
                    onChange={(Email) => setEmail(Email.target.value)}
                    className="input"
                    placeholder="example@email.com"
                />
                {errors.email && <p className="label">{errors.email}</p>}
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input
                    type="password"
                    name="password"
                    onChange={(Password) => setPassword(Password.target.value)}
                    className="input"
                    placeholder="********"
                />
                {errors.password && <p className="label">{errors.password}</p>}
            </fieldset>
            <button className="btn btn-neutral" type="submit">
                Submit
            </button>
        </form>
    );
};

export default Form;
