import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-blue-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl text-gray-800 font-semibold mb-4">
            Contact Us
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Send
              </button>
            </div>
          </form>

          {/* Additional Information About Dherosh */}
          <div className="mt-6 text-gray-600">
            <h2 className="text-lg font-semibold mb-2">About Dherosh</h2>
            <p>
              Dherosh is a forward-thinking technology company specializing in
              custom software solutions, web development, and digital
              innovation. With a team of dedicated professionals, we are
              committed to helping our clients achieve their digital goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
