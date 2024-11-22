import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { app } from '../firebase/firebase.init';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const Login = () => {
  const navigate = useNavigate();

  const [errorMessage,setErrormessage]= useState('');

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/; 
    const lengthRegex = /.{6,}/;

    if (!uppercaseRegex.test(password)) {
        return "Password must have at least one uppercase letter.";
    }
    if (!lowercaseRegex.test(password)) {
        return "Password must have at least one lowercase letter.";
    }
    if (!lengthRegex.test(password)) {
        return "Password must be at least 6 characters long.";
    }
    return null; 
};
  
  const {user,setUser} = useContext(AuthContext);

  const handleGoogleSignUp = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);

            navigate('/')
            
        }).catch((error) =>{
            console.error(error.message)
        })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const passwordError = validatePassword(password)

    if(passwordError){
        setErrormessage(passwordError);
        return;
    }
    

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
       
        const user = response.user;
        alert('Login Successful!');
        
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Login error:', error.message); 
        
        alert('Wrong credentials! Please try again.');
      });
  };

  return (
    <div className="flex items-center justify-center p-1">
      <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
        <form onSubmit={handleSubmit} className="p-4 m-0 card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
            
                {errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}
            
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="mt-6 form-control">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          <div className="items-center justify-between py-4 md:flex">
            <p className="text-green-800 ">You don't have any account?</p>
            <NavLink to="/register">
              <button className="w-full mt-4 text-purple-600 btn btn-active md:mt-0">Register Now</button>
            </NavLink>


            
          </div>
          <button className='flex p-1 text-center btn btn-active' onClick={handleGoogleSignUp}><FcGoogle /> SignUp With Google </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
