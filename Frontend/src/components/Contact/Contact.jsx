import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-6 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl border border-gray-200 shadow-lg rounded-lg">
        <div className="max-w-2xl mx-auto text-center mt-10">
          <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
            Contact Us
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-lg leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 px-4 text-center">
            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4">
              <FaPhoneAlt className="w-8 h-8 mx-auto text-orange-600" />
              <p className="mt-4 text-lg font-medium text-gray-900">
                +1-555-123-4567
              </p>
              <p className="mt-1 text-lg font-medium text-gray-900">
                +1-555-987-6543
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4">
              <FaEnvelope className="w-8 h-8 mx-auto text-orange-600" />
              <p className="mt-4 text-lg font-medium text-gray-900">
                support@example.com
              </p>
              <p className="mt-1 text-lg font-medium text-gray-900">
                info@example.com
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4">
              <FaMapMarkerAlt className="w-8 h-8 mx-auto text-orange-600" />
              <p className="mt-4 text-lg font-medium leading-relaxed text-gray-900">
                1234 Sunset Blvd, Springfield, USA
              </p>
            </div>
          </div>

          <div className="mt-10 mb-10 bg-white rounded-xl shadow-md">
            <div className="px-4 py-6 sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-4xl font-semibold text-center text-gray-900">
                  Send us a message
                </h3>
                <hr className="mt-1 w-3/4" />
              </div>

              <form action="#" method="POST" className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-900"
                    >
                      Your name
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-900"
                    >
                      Phone number
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        className="w-full px-3 py-2 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-gray-900"
                    >
                      Company name
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        id="company"
                        placeholder="Enter your company name"
                        className="w-full px-3 py-2 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-1 relative">
                      <textarea
                        id="message"
                        placeholder="Write your message here"
                        className="w-full px-3 py-2 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2 ">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 mt-2 text-base font-semibold text-white bg-orange-500 rounded-md transition duration-300 hover:opacity-80 shadow-lg  "
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
