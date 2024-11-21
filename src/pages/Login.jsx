import React from 'react';
import { NavLink } from 'react-router-dom';



const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password)
}

const Login = () => {
    return (
        <div className='flex items-center justify-center p-5'>
            <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="mt-6 form-control">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className='flex items-center justify-between py-4'>
                        <p className='text-green-800'>You dont have any accoynt?</p>
                        <NavLink to={'/register'}><button className='text-purple-600 btn btn-ghost'>Register Now</button></NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;