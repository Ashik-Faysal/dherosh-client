import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
    } else {
      // Simulate sending the message (you can replace this with your actual API call)
      setTimeout(() => {
        toast.success("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
    }
  };
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleFormSubmit(e);
      }
    };


  return (
    <div className="bg-blue-200 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl text-gray-800 font-semibold mb-4">
            Contact Us
          </h1>
          <form
            className="space-y-4"
            onSubmit={handleFormSubmit}
            onKeyDown={handleKeyDown}
          >
            {/* Name input */}
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
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email input */}
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Message input */}
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
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit button (type="submit") */}
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

        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactPage;
