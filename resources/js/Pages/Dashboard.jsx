import Navbar from "../Components/Navbar";
import UserTable from "../Components/User_table";
import { usePage } from "@inertiajs/react";

function Dashboard() {
    const users = usePage().props.users || [];
    return (
        <>
            <Navbar />
            <UserTable users={users} />
        </>
    );
}
export default Dashboard;
