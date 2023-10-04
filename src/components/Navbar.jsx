import { Link } from "react-router-dom";
import defaultUserPic from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provisers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/career'}>Career</Link></li>
    </>
    const handelLogOut = () => {
        logOut()
            .then()
            .catch()

    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}

                </ul>
            </div>

            <div className="navbar-end">
                <div className="flex justify-center items-center gap-3">
                    <Link to={'/profile'}>
                        <img className="w-7 rounded-full" src={defaultUserPic} alt="" />
                    </Link>
                    {
                        user ? <button
                            onClick={handelLogOut}
                            className="text-base font-semibold bg-black py-1 px-4">Logout</button>
                            : <Link
                                className="text-base font-semibold bg-black py-1 px-4"
                                to={'/login'}>Login</Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;