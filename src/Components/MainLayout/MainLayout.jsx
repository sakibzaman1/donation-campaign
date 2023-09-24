import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <section>
                <NavBar></NavBar>
            </section>
            <section className="max-w-7xl mx-auto min-h-screen my-10">
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;