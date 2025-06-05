import { usePage } from "@inertiajs/react";
import UserTable from "../Components/User_table";
import UserModal from "../Components/Usermodal";
import { useState } from "react";
import Layout from "./Layouts/Layout";
const User = () => {
    const users = usePage().props?.users || [];
    const [URL, setURL] = useState();
    const [u, setu] = useState({});
    const [statebutton, setstatebutton] = useState("insert");
    const changestate1 = (event) => {
        setstatebutton("insert");
        setURL("insert/user")
        setu({});
    }
    const changestate2 = (value) => {
        setstatebutton("update");
        setURL("update/user")
        setu(value);
        document.getElementById("UserModal").click();
    }
    return (
        <Layout title="Users">
            <UserModal u={u} URL={URL}/>
            <UserTable changeState1={changestate1} changeState2={changestate2} users={users} setURL={setURL} />
        </Layout>
    );
};
export default User;
