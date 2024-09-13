import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";


const Navbar = () => {
    const [user,] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const links =
        <>
            <li className="font-bold"><Link to="/">Home</Link></li>
            <li className="font-bold"><Link to="/appointment">Appointment</Link></li>
            <li className="font-bold"><Link to="/doctors">Our-Doctors</Link></li>
            <li className="font-bold"><Link to="/about">About</Link></li>
            {/* <li className="font-bold"><Link to="/reviews">Reviews</Link></li> */}
            {/* <li className="font-bold"><Link to="/contact"> Contact us</Link></li> */}

        </>;


    return (
        <div className="p-0 lg:p-6 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {links}
                    </ul>
                </div>
                <Link className="text-lg font-bold btn btn-ghost md:texl-xl" to="/">DOCTORS PORTAL</Link>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button className="font-bold btn btn-ghost" onClick={logout}>Sing-Out</button> : <Link className="btn" to="/login">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;