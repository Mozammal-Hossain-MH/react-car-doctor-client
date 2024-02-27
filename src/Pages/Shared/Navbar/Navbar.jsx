import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-scroll';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><Link to="about-us" smooth={true} duration={500}>About Us</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        {
            user && <li><NavLink to={'/bookings'} className={'text-red-500 font-bold'}>My Bookings</NavLink></li>
        }
    </>

    return (
        <div className="navbar bg-[#fff] h-20 mb-10 border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#fff] rounded-box w-52 space-y-1">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl"><img className='w-10' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <button onClick={handleLogout} className="btn btn-outline btn-error">Logout</button>
                        : <NavLink to={'/login'}><button className="btn btn-outline btn-error">Login/Register</button></NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;