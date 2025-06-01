import Navbar from "../Components/Navbar";
import UserTable from "../Components/User_table";
import { usePage } from "@inertiajs/react";
import UserModal from "../Components/Usermodal";
import Sidebar from "../Components/Sidebar";

function insertUser(event) {
    document.getElementById('UserModal').click();
}
function Dashboard() {
    const users = usePage().props.users || [];
    return (
        <>
            <Navbar/>
            <UserModal/>
            <Sidebar/>
            <button onClick={(event)=>insertUser(event)} className="btn btn-primary my-5 btn-outline ml-5">Insert User</button>
            <UserTable users={users} />
        </>
    );
}
export default Dashboard;
