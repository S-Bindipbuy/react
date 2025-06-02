import Form from "../Components/Form";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-gray-100 to-white">
            <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Admin
                </h1>
                <Form url="Login" />
            </div>
        </div>
    );
};

export default Login;
