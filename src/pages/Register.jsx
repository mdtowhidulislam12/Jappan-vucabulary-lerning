import React from 'react';
import { NavLink } from 'react-router-dom';



const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password =e.target.password.value;

    console.log(name, email, photo, password)
}

const Register = () => {
    return (
        <div className='flex items-center justify-center p-5'>
            <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url:https//:" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">

                        </label>
                    </div>
                    <div className="mt-6 form-control">
                        <button className="btn btn-primary">Register</button>
                    </div>

                    <div className='flex items-center justify-between py-4'>
                        <p className='text-green-800'>Already have an accoynt?</p>
                        <NavLink to={'/login'}><button className='text-blue-700 btn btn-ghost'>Log In</button></NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;