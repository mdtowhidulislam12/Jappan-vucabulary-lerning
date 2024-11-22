import image from "../../assets/Contact.jpg"

const Contact = () => {
    return (
      <section className="mt-6 rounded-lg md:py-16 bg-blue-50">
        <div className="flex flex-col items-center justify-between max-w-screen-xl px-6 mx-auto md:flex-row">
          {/* Contact Form Section */}
          <div className="w-full mb-8 md:w-1/2 md:mb-0">
            <h2 className="mb-6 text-3xl font-semibold text-gray-800">Contact Us</h2>
            
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
  
          {/* Illustration Section */}
          <div className="w-full p-6 md:w-1/2">
            <img
              src={image} // Replace with your actual image path
              alt="Contact Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  