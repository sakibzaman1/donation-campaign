import { NavLink } from "react-router-dom"
import { HiMenuAlt1 } from "react-icons/hi";

const NavBar = () => {

    const links = <>

        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/donation">Donation</NavLink></li>
        <li> <NavLink to="/statistics">Statistics</NavLink></li>

    </>

    return (
        <div>
            {/* Navbar */}
            <div className=" bg-transparent">
                <div className="navbar max-w-7xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <HiMenuAlt1></HiMenuAlt1>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <img src="https://i.ibb.co/cJkXDmw/Logo.png" alt="" />
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-6">
                            {links}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavBar;