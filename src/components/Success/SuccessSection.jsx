


const SuccessSection = () => {
    return (
      <section className="py-16 mt-6 text-black rounded-lg bg-slate-200">
        <div className="max-w-screen-xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-semibold text-center">
            Success Stories
          </h2>
          <p className="mb-8 text-lg text-center">
            Our platform has helped thousands of businesses over the years.
            Here are some of our top success stories and great friends and supporters:
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Success Story 1 */}
            <div className="max-w-xs p-6 text-center bg-white rounded-lg shadow-lg">
              <img
                src="path-to-image-1.jpg"
                alt="Barbara Young"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-medium text-gray-800">Barbara Young</h3>
              <p className="mb-4 text-sm text-gray-600">crazy4clips.com</p>
              <p className="mb-4 italic text-gray-800">
                "My decision was correct! Instantestore provides me the perfect web platform with all the technical complexities."
              </p>
            </div>
  
            {/* Success Story 2 */}
            <div className="max-w-xs p-6 text-center bg-white rounded-lg shadow-lg">
              <img
                src="path-to-image-2.jpg"
                alt="Preston Humphries"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-medium text-gray-800">Preston Humphries</h3>
              <p className="mb-4 text-sm text-gray-600">cvcoffee.com</p>
              <p className="mb-4 italic text-gray-800">
                "We have successfully sold over $35 million dollars of products. The best business decision we ever made was going with Instantestore over competitive solutions."
              </p>
            </div>
  
            {/* Success Story 3 */}
            <div className="max-w-xs p-6 text-center bg-white rounded-lg shadow-lg">
              <img
                src="path-to-image-3.jpg"
                alt="Maura Celik"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-medium text-gray-800">Maura Celik</h3>
              <p className="mb-4 text-sm text-gray-600">ezpartyzone.com</p>
              <p className="mb-4 italic text-gray-800">
                "Not Simply a Product or Service, Instantestore is a Business Partnership To Be Cherished..."
              </p>
            </div>
          </div>
  
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block px-6 py-2 text-lg text-white bg-blue-600 rounded-lg"
            >
              SEE MORE
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default SuccessSection;
  