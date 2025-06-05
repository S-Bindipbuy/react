import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";


function Layout({children,title}) {
    return (
        <>
            <Navbar />

            <Sidebar />
            { title && <h1 className="text-center font-semibold text-[2rem] my-4">{title}</h1> }

            {children}
        </>
    );
}
export default Layout;
