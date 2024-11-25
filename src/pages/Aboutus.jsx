import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Aboutus = () => {
  const {user,setUser}=useContext(AuthContext)
  return (
    <div className="p-4 rounded-lg md:p-8 bg-gradient-to-b from-gray-100 to-gray-300">
      
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          About Vocabulary Learning
        </h1>
        <p className="mt-4 text-base text-gray-600 md:text-lg">
          Unlock the power of language and take your vocabulary to the next
          level with our app. Whether you're a student, a professional, or
          simply a language enthusiast, our app is designed to make learning
          words engaging, efficient, and fun.
        </p>
      </div>

     
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
       
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">
            📖 Learn New Words
          </h2>
          <p className="mt-4 text-gray-600">
            Discover words along with their meanings, pronunciations, examples,
            and usage tips. Master every word at your own pace.
          </p>
        </div>

       
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">
            🎯 Track Your Progress
          </h2>
          <p className="mt-4 text-gray-600">
            Stay motivated as you keep track of the lessons you’ve completed and
            monitor your improvement.
          </p>
        </div>

       
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">
            🌍 User-Friendly Design
          </h2>
          <p className="mt-4 text-gray-600">
            Experience a sleek and responsive interface optimized for all
            devices, from desktops to smartphones.
          </p>
        </div>

        
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">
            🔐 Secure Profiles
          </h2>
          <p className="mt-4 text-gray-600">
            Log in securely to save your progress and personalize your learning
            experience.
          </p>
        </div>

        
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">
            📚 Tailored Lessons
          </h2>
          <p className="mt-4 text-gray-600">
            Browse lessons by difficulty and topics to focus on the words most
            relevant to you.
          </p>
        </div>

       
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">
            ✨ Continuous Updates
          </h2>
          <p className="mt-4 text-gray-600">
            Enjoy regular updates with new vocabulary and improved features to
            keep your learning fresh and exciting.
          </p>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-base text-gray-600 md:text-lg">
          We believe that learning vocabulary doesn’t have to be boring or
          repetitive. Our app makes the process engaging and accessible for
          everyone.
        </p>
      </div>

      
      <div className="flex justify-center mt-8">
        <Link to={user? '/start-learning':'/login'} className="px-6 py-3 text-sm font-bold text-white transition bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 md:text-base">
          Start Learning Now
        </Link>
      </div>
    </div>
  );
};

export default Aboutus;
