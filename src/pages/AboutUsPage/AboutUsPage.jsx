import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl text-gray-800 font-semibold mb-4">
            About Dherosh
          </h1>
          <p className="text-gray-600 mb-4">
            Dherosh is a leading software company dedicated to delivering
            high-quality solutions for businesses and individuals. With a team
            of expert developers, designers, and consultants, we provide a wide
            range of services to help you succeed in the digital world.
          </p>

          <h2 className="text-2xl text-gray-800 font-semibold mb-2">
            Our Services
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Custom Software Development</li>
            <li>Web and Mobile App Development</li>
            <li>UI/UX Design Services</li>
            <li>Consulting and Support</li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-4">
            Our mission is to empower our clients through innovative software
            solutions and exceptional customer service. We are committed to
            excellence and constantly improving our services to meet your unique
            needs.
          </p>

          <h2 className="text-2xl text-gray-800 font-semibold mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Contact us today to learn more about how Dherosh can assist you in
            achieving success in the digital world. We are eager to hear from
            you and discuss how we can be a valuable partner for your projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
