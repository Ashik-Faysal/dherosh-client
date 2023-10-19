import React, { useState } from "react";

const services = [
  {
    name: "Web Development",
    description: "Building interactive websites and web applications.",
  },
  {
    name: "Mobile App Development",
    description: "Creating mobile applications for iOS and Android.",
  },
  {
    name: "Cloud Computing",
    description: "Leveraging cloud services for scalability and flexibility.",
  },
  {
    name: "Cybersecurity",
    description: "Protecting digital assets and data from threats.",
  },
  {
    name: "Data Analytics",
    description: "Extracting insights from data for informed decision-making.",
  },
  {
    name: "UI/UX Design",
    description: "Designing user-friendly and visually appealing interfaces.",
  },
  {
    name: "Software Testing",
    description: "Ensuring quality and reliability through testing.",
  },
  {
    name: "IT Consulting",
    description: "Providing expert advice and guidance for IT solutions.",
  },
  {
    name: "Network Administration",
    description: "Managing and optimizing network infrastructure.",
  },
  {
    name: "E-commerce Solutions",
    description: "Creating online stores and payment gateways.",
  },
  {
    name: "Database Management",
    description: "Storing and retrieving data efficiently.",
  },
  {
    name: "Artificial Intelligence",
    description: "Implementing AI algorithms and machine learning.",
  },
  {
    name: "IoT Solutions",
    description: "Connecting devices for data and control.",
  },
  {
    name: "Digital Marketing",
    description: "Promoting products and services online.",
  },
  {
    name: "Virtual Reality (VR)",
    description: "Developing immersive virtual experiences.",
  },
  {
    name: "Augmented Reality (AR)",
    description: "Integrating digital content into the real world.",
  },
  {
    name: "Blockchain Development",
    description: "Creating secure and transparent digital ledgers.",
  },
  {
    name: "Software as a Service (SaaS)",
    description: "Delivering software via the cloud.",
  },
  {
    name: "Content Management Systems (CMS)",
    description: "Managing and publishing digital content.",
  },
  {
    name: "IT Support and Maintenance",
    description: "Providing ongoing technical support.",
  },
  {
    name: "Cloud Infrastructure",
    description: "Setting up scalable cloud environments for businesses.",
  },
  {
    name: "Machine Learning Solutions",
    description: "Developing AI models for predictions and analysis.",
  },
  {
    name: "DevOps Services",
    description:
      "Integrating development and operations for faster and reliable releases.",
  },
  {
    name: "IT Security Consulting",
    description: "Assessing and enhancing IT security measures.",
  },
  {
    name: "Big Data Analytics",
    description: "Processing and interpreting vast datasets.",
  },
  {
    name: "Blockchain Integration",
    description: "Incorporating blockchain technology for secure transactions.",
  },
  {
    name: "Mobile App UI/UX Design",
    description: "Creating user-friendly mobile app interfaces.",
  },
  {
    name: "Software Quality Assurance",
    description: "Ensuring software reliability through testing.",
  },
  {
    name: "Network Security",
    description: "Protecting networks from unauthorized access and threats.",
  },
  {
    name: "ERP System Implementation",
    description: "Implementing enterprise resource planning solutions.",
  },
  {
    name: "Digital Transformation",
    description: "Modernizing businesses through digital technologies.",
  },
  {
    name: "Data Visualization",
    description: "Presenting data in graphical and interactive formats.",
  },
  {
    name: "Content Marketing Strategy",
    description: "Creating content plans for online marketing.",
  },
  {
    name: "Mobile Game Development",
    description: "Designing and developing mobile games.",
  },
  {
    name: "API Integration Services",
    description: "Integrating applications and services via APIs.",
  },
  {
    name: "IT Infrastructure Optimization",
    description: "Improving the efficiency of IT systems.",
  },
  {
    name: "Robotic Process Automation",
    description: "Automating repetitive tasks with software bots.",
  },
  {
    name: "IT Compliance Consulting",
    description: "Ensuring regulatory compliance in IT operations.",
  },
  {
    name: "Cloud Migration Services",
    description: "Moving legacy systems to the cloud.",
  },
  {
    name: "User Training and Support",
    description: "Providing training and support for IT users.",
  },
  {
    name: "IoT Security",
    description: "Securing Internet of Things devices and networks.",
  },
  {
    name: "Digital Product Strategy",
    description: "Defining strategies for digital product development.",
  },
  {
    name: "Augmented Reality Apps",
    description: "Creating apps with AR features for various industries.",
  },
  {
    name: "Digital Accessibility Consulting",
    description: "Ensuring digital content is accessible to all users.",
  },
  {
    name: "Healthcare IT Solutions",
    description: "IT services tailored for healthcare providers.",
  },
  {
    name: "Legal Tech Solutions",
    description: "Technology solutions for the legal industry.",
  },
  {
    name: "Supply Chain Optimization",
    description: "Streamlining supply chain operations with technology.",
  },
  {
    name: "Data Privacy Compliance",
    description: "Adhering to data protection regulations and standards.",
  },
  {
    name: "Artificial Intelligence Consulting",
    description: "Expert guidance on AI implementation.",
  },
  {
    name: "Geospatial Data Analysis",
    description: "Analyzing location-based data for insights.",
  },
  {
    name: "Cloud Data Migration",
    description: "Moving data to cloud storage and databases.",
  },
  {
    name: "E-learning Solutions",
    description: "Developing online learning platforms and content.",
  },
  {
    name: "IT Disaster Recovery",
    description: "Planning and executing recovery from IT disasters.",
  },
  {
    name: "Digital Transformation Strategy",
    description: "Strategies for digital business transformation.",
  },
  {
    name: "Video Game Development",
    description: "Creating interactive video games for various platforms.",
  },
  {
    name: "Data Warehousing Services",
    description: "Storing and managing large datasets for analysis.",
  },
  {
    name: "Biometric Security Solutions",
    description: "Using biometric data for enhanced security.",
  },
  {
    name: "Telemedicine Solutions",
    description: "Enabling remote healthcare services through technology.",
  },
  {
    name: "AI-powered Chatbots",
    description: "Developing chatbots with AI capabilities.",
  },
  {
    name: "Blockchain for Supply Chain",
    description: "Tracking and securing supply chain data with blockchain.",
  },
];

const ServicesPage = () => {
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastService = currentPage * itemsPerPage;
  const indexOfFirstService = indexOfLastService - itemsPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  return (
    <div className="bg-gradient-to-b from-blue-400 to-purple-600 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center text-white font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {service.name}
              </h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold">Learn More</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentServices.length < itemsPerPage}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
