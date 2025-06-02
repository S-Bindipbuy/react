import Navbar from "../Components/Navbar";
import UserTable from "../Components/User_table";
import { usePage } from "@inertiajs/react";
import UserModal from "../Components/Usermodal";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
    const users = usePage().props.users || [];
    return (
        <>
            <Navbar />
            <UserModal />
            <Sidebar />
            <UserTable users={users} />
        </>
    );
}
export default Dashboard;
