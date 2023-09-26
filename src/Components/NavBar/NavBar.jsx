import { Link, NavLink } from "react-router-dom"
import { HiMenuAlt1 } from "react-icons/hi";

const NavBar = () => {

    const links = <>

        <li className="text-lg font-semibold"> <NavLink to="/">Home</NavLink></li>
        <li className="text-lg font-semibold"> <NavLink to="/donation">Donation</NavLink></li>
        <li className="text-lg font-semibold"> <NavLink to="/statistics">Statistics</NavLink></li>

    </>

    return (
        <div>
            {/* Navbar */}
            <div className=" bg-transparent">
                <div className="navbar max-w-7xl mx-auto">
                    <div className="w-full flex justify-between lg:w-1/2 lg:justify-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <HiMenuAlt1></HiMenuAlt1>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <div>
                            <Link to="/"><img src="https://i.ibb.co/cJkXDmw/Logo.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className=" menu-horizontal px-1 gap-10">
                            {links}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavBar;