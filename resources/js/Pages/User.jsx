import { usePage } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import UserTable from "../Components/User_table";
const User = () => {
    const users = usePage().props?.admins || [];
    return (
        <div>
            <Navbar />
            <UserTable Users={users} />
        </div>
    );
};

export default User;
