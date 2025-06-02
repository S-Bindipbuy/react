import Layout from "./Layouts/Layout";
import UserTable from "../Components/User_table";
import { usePage } from "@inertiajs/react";
import UserModal from "../Components/Usermodal";

function Dashboard() {
    const users = usePage().props.users || [];
    return (
        <>
            <Layout title="Users">
            <UserModal />
            <UserTable users={users}  />
            </Layout>

        </>
    );
}
export default Dashboard;
