import Form from "../Components/Form";

const Login = () => {
    return (
        <div className="grid justify-center items-center h-screen bg-gradient-to-r from-gray-100 to-white">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Admin
                </h1>
                <Form url="Login" />
            </div>
        </div>
    );
};

export default Login;
