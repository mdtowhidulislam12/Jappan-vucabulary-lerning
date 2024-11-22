import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider'; 

const Header = () => {

    const { user } = useContext(AuthContext); 

    return (
        <div>
            {user ? (
                <div>
                    <span className="mr-4 text-lg font-bold text-purple-800">Welcome, {user.displayName || user.email}</span>
                   
                </div>
            ) : (
                <h2 className='text-lg font-bold text-purple-800'>Language learner</h2>
            )}
        </div>
    );
};

export default Header;
