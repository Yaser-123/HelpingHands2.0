import React, { useState } from "react";

// Accordion Item Component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md mb-2 w-full bg-blue-100 dark:bg-[#1E293B] dark:text-white">
      <button
        className="flex justify-between items-center w-full p-3 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className=" font-medium sm:text-sm md:text-base lg:text-md text-gray-900  dark:text-white">
          {title}
        </span>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300  dark:bg-slate-600  bg-blue-50 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-2 border-t border-gray-200">
          <p className="text-gray-700 sm:text-sm md:text-base dark:text-white">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

// Accordion Component
const Accordion = ({ items }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
