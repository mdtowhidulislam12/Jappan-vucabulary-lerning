import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import { AuthContext } from '../provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);

    const handaleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                alert("User LogOut Succesfully!")
            }).catch((error) => {
                console.error(error.message);
            })
    }

    return (
        <div className="navbar bg-base-200 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        
                        <li><NavLink to={'/about-us'}>about-us</NavLink></li>

                        {user && <>

                            <li><NavLink to={'/start-learning'}>start-learning</NavLink></li>
                            <li><NavLink to={'/tutorials'}>tutorials</NavLink></li>
                            <li><NavLink to={'/profile'}>My Profile</NavLink></li>
                            <li><NavLink to={'/contact'}>Contact</NavLink></li>

                        </>}
                    </ul>
                </div>
                <NavLink className="">
                    <img className='w-40 rounded-lg ' src={logo} alt="Logo" />
                </NavLink>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    
                    <li><NavLink to={'/about-us'}>about-us</NavLink></li>

                    {user && <>

                        <li><NavLink to={'/start-learning'}>start-learning</NavLink></li>
                        <li><NavLink to={'/tutorials'}>tutorials</NavLink></li>
                        <li><NavLink to={'/profile'}>My Profile</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>

                    </>}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div>
                        <NavLink onClick={handaleLogOut} to="" className="btn btn-active">Log Out</NavLink>
                    </div>
                ) : (
                    <NavLink to="/login" className="btn btn-primary">Log in</NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
