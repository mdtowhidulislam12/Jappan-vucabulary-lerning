import React from 'react';
import image from '../../assets/About.jpg'

const About = () => {
    return (
      <section className="flex flex-wrap justify-between p-5 bg-gray-100 rounded-lg md:p-10">
        {/* Left Content */}
        <div className="flex-1 mr-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Dream is Global Language Learning Transformation
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Our mission is to provide accessible and high-quality language
            learning experiences worldwide. With passion and dedication, we aim
            to bridge cultural gaps and help individuals connect through
            language. We believe that everyone should have the opportunity to
            learn a new language in an engaging, effective, and enjoyable way.
          </p>
        </div>
  
        {/* Stats Section */}
        <div className="flex flex-wrap w-full gap-6 mt-8 md:mt-6 md:w-auto">
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-medium text-gray-800">
              5+ Years of Experience
            </h3>
            <p className="mt-2 text-gray-600">
              Helping students achieve their language learning goals.
            </p>
          </div>
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-medium text-gray-800">
              50+ Language Courses
            </h3>
            <p className="mt-2 text-gray-600">
              Wide range of languages to choose from, designed for all levels.
            </p>
          </div>
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-medium text-gray-800">
              100K+ Active Learners
            </h3>
            <p className="mt-2 text-gray-600">
              Join a community of passionate language learners.
            </p>
          </div>
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-medium text-gray-800">
              1M+ Lessons Completed
            </h3>
            <p className="mt-2 text-gray-600">
              Students have already completed millions of lessons worldwide.
            </p>
          </div>
        </div>
  
        {/* Image Section */}
        <div className="w-full mt-8 md:w-1/3 md:mt-6">
          <img
            src={image}
            alt="Language Learning"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </section>
    );
  };
  
  export default About;
  