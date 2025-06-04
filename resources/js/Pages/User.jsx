import { usePage } from "@inertiajs/react";
import UserTable from "../Components/User_table";
import UserModal from "../Components/Usermodal";
import { useState } from "react";
import Layout from "./Layouts/Layout";
const User = () => {
    const users = usePage().props?.users || [];
    const [URL, setURL] = useState();
    return (
        <Layout title="Users">
            <UserModal URL={URL}/>
            <UserTable users={users} setURL={setURL} />
        </Layout>
    );
};
export default User;
