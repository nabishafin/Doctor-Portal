import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

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
    ;

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {links}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-lg  md:texl-xl font-bold" to="/">DOCTORS PORTAL</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button className="btn btn-ghost font-bold" onClick={logout}>Sing-Out</button> : <Link className="btn" to="/login">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;