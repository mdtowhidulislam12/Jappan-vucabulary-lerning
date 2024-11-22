import React, { useContext } from 'react';
import { NavLink, useNavigate,  } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.init';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";



const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();



const Register = () => {

    
const { user,setUser,loading,setLoading} = useContext(AuthContext);

   const navigate = useNavigate();

  
    const handleGoogleSignUp = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{

            const user =result.user;
            setUser(user);
            navigate('/')

        }).catch((error)=>{
            console.error(error.message)
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();  
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        
       
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user =result.user;
            // console.log(user)
            alert('Rgistration Successful!')

            navigate('/')


        }).catch((error)=>{
            alert(error.message)
        })
      
    };


    return (
        <div className='flex items-center justify-center p-1'>
            <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                <form onSubmit={handleRegister} className="p-4 m-0 card-body">
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

                    <div className='items-center justify-between py-4 md:flex '>
                        <p className='text-sm text-green-800'>Already have an accoynt?</p>
                        <NavLink to={'/login'}><button className='w-full mt-4 text-blue-700 btn btn-active'>Log In</button></NavLink>
                    </div>

                    <button className='flex p-1 text-center btn btn-active' onClick={handleGoogleSignUp}> SignUp With Google <FcGoogle/></button>
                </form>

                
            </div>
        </div>
    );
};

export default Register;