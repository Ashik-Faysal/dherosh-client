import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // You can use any React Icons you prefer.
import { AiOutlineArrowRight } from "react-icons/ai";

const Accordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 border rounded-md bg-black">
      <button 
        onClick={onClick}
        className="w-full bg-gray-200 p-3 flex items-center justify-between py-4 focus:outline-none"
      >
        <div className="text-left text-2xl font-bold hover:text-orange-800">{question}</div>
        <div className="text-2xl">{isOpen ? <FiMinus /> : <FiPlus />}</div>
      </button>
      {isOpen && <div className="bg-gray-100 p-4">{answer}</div>}
    </div>
  );
};

const AskedQuestion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenIndex(index);
  };

  const accordions = [
    {
      question: "What is ReactJS?",
      answer:
        "ReactJS is an open-source JavaScript library used for building user interfaces or UI components. It's maintained by Facebook and a community of developers. React allows you to create reusable UI components and manage the state of your application efficiently.",
    },
    {
      question: "What is JavaScript?",
      answer:
        "JavaScript is a high-level, dynamic, and versatile programming language. It's primarily used for adding interactivity and dynamic behavior to websites. JavaScript can run in web browsers, making it a fundamental technology for web development.",
    },
    {
      question: "What is the difference between HTML and HTML5?",
      answer:
        "HTML (Hypertext Markup Language) is the standard markup language for creating web pages. HTML5 is the latest version and includes new features like video and audio support, canvas for drawing, local storage, and improved semantic elements for better structuring of web content.",
    },
    {
      question: "What is CSS?",
      answer:
        "CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a web document written in HTML. It defines how elements should be displayed on a web page, including layout, colors, fonts, and spacing.",
    },
  ];

    return (
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 md:h-screen] my-8">
        <div>
          <img
            className="h-screen w-[100vw] object-cover"
            src="https://i.ibb.co/HVQqgJN/side-view-people-wearing-vr-glasses.jpg"
            alt="contact"
            loading="lazy"
          />
        </div>
        <div className="md:py-8 md:pr-8">
          <div className=" mb-4">
            <h5 className="text-xl font-semibold">Frequently Asked</h5>
            <h1
              className="text-4xl font-bold
            "
            >
              Got <span className="text-dharosh font-bold">Questions</span>
            </h1>
          </div>
          {accordions.map((accordion, index) => (
            <Accordion
              key={index}
              question={accordion.question}
              answer={accordion.answer}
              isOpen={openIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
          <div className="w-full bg-gray-200 p-3  items-center justify-between py-4 focus:outline-none">
            <h5 className="text-left text-2xl font-bold hover:text-orange-800 pb-4">
              Have Any Questions Left?
            </h5>
            <div className="grid md:grid-cols-2 bg-gray-100 justify-between items-center">
              <p className=" py-8 px-2">
                Can't find the answer you're looking for? Please chat to our
                friendly team.
              </p>
              <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 w-40 h-10 mx-auto flex items-center justify-between gap-2  px-4 rounded my-4">
                <span>Get in touch</span><AiOutlineArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AskedQuestion;
