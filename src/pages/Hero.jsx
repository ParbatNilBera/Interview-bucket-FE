import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaRedo,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiRotateCcw } from "react-icons/fi";

export default function InterviewPrepHero() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-[80vw] md:w-full max-w-7xl mx-auto bg-yellow-50 rounded-lg overflow-hidden shadow-lg">
      {/* Browser Bar */}
      <div className="bg-yellow-100 px-2 sm:px-4 py-2 flex items-center justify-between border-b border-yellow-200">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="hidden sm:flex items-center space-x-1 ml-4">
            <FaChevronLeft className="w-4 h-4 text-gray-500" />
            <FaChevronRight className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        <div className="flex-1 max-w-md mx-2 sm:mx-4">
          <div className="bg-white rounded px-2 sm:px-3 py-1 text-xs text-gray-600 text-center overflow-hidden">
            <span className="hidden sm:inline">
              https://interviewprep-ai.com/interview-prep
            </span>
            <span className="sm:hidden">interviewprep-ai.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <FaRedo className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          <FaPlus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[400px] lg:h-[600px]">
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden bg-yellow-50 p-4 border-b border-yellow-200">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center space-x-2 text-gray-700"
          >
            {sidebarOpen ? (
              <FaTimes className="w-4 h-4" />
            ) : (
              <FaBars className="w-4 h-4" />
            )}
            <span className="text-xs font-medium">
              {sidebarOpen ? "Close Guide" : "CSS Flexbox Guide"}
            </span>
          </button>
        </div>

        {/* Left Panel */}
        <div className="flex-1 bg-yellow-50 p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xs font-bold text-gray-900 mb-2">
              Interview Prep AI
            </h1>
          </div>

          {/* Job Title Section */}
          <div className="mb-6 lg:mb-8">
            <h2 className="text-xs font-semibold text-gray-900 mb-2">
              Frontend Developer
            </h2>
            <p className="text-gray-600 mb-4 text-xs">
              React.js, DOM manipulation, CSS flexbox
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs">
                Experience: 2 Years
              </span>
              <span className="bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs">
                JS/HTML
              </span>
              <span className="bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs">
                Last updated: 20th Apr 2024
              </span>
            </div>
          </div>

          {/* User Info - Mobile Only */}
          <div className="lg:hidden flex items-center justify-between mb-6 bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <FaUser className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900 text-xs">
                  Mike William
                </div>
                <div className="text-xs text-orange-500">Logout</div>
              </div>
            </div>
          </div>

          {/* Interview Q & A Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 mb-4 lg:mb-6">
              Interview Q & A
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {/* Question 1 */}
              <div className="border-b border-gray-200 pb-3 sm:pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-xs leading-relaxed">
                      What is JSX? Explain its role in React.
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 ml-2">
                    <span className="text-blue-600 text-xs cursor-pointer hidden sm:inline">
                      Learn More
                    </span>
                    <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="border-b border-gray-200 pb-3 sm:pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-xs leading-relaxed">
                      What is React.js and what are its main advantages?
                    </span>
                  </div>
                  <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 ml-2" />
                </div>
              </div>

              {/* Question 3 */}
              <div className="border-b border-gray-200 pb-3 sm:pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-xs leading-relaxed">
                      Explain the difference between 'props' and 'state' in
                      React.
                    </span>
                  </div>
                  <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 ml-2" />
                </div>
              </div>

              {/* Question 4 */}
              <div className="border-b border-gray-200 pb-3 sm:pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-xs leading-relaxed">
                      How does the virtual DOM work in React and why is it
                      important?
                    </span>
                  </div>
                  <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 ml-2" />
                </div>
              </div>

              {/* Question 5 */}
              <div className="border-b border-gray-200 pb-3 sm:pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-xs leading-relaxed">
                      Describe the lifecycle methods of a React component (focus
                      on the commonly used ones).
                    </span>
                  </div>
                  <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 ml-2" />
                </div>
              </div>

              {/* Question 6 */}
              <div className="border-b border-gray-200 pb-3 sm:pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-xs leading-relaxed">
                      Explain the concept of event handling in React.
                    </span>
                  </div>
                  <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 ml-2" />
                </div>
              </div>

              {/* Question 7 */}
              <div className="pb-3 sm:pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-xs leading-relaxed">
                      How do you handle DOM manipulation in React? Why is it
                      generally discouraged?
                    </span>
                  </div>
                  <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel / Mobile Overlay */}
        <div
          className={`
          ${sidebarOpen ? "block" : "hidden"} lg:block
          fixed lg:relative inset-0 lg:inset-auto
          w-full lg:w-80 
          bg-yellow-50 lg:border-l border-yellow-200 
          p-4 lg:p-6
          z-50 lg:z-auto
          overflow-y-auto
        `}
        >
          {/* Close button for mobile */}
          <div className="lg:hidden flex justify-end mb-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* User Info - Desktop Only */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <FaUser className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900 text-xs">
                  Mike William
                </div>
                <div className="text-xs text-orange-500">Logout</div>
              </div>
            </div>
          </div>

          {/* CSS Flexbox Guide */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900 text-xs">
                CSS Flexbox: A Beginner's Guide
              </h4>
              <button className="text-gray-500 hover:text-gray-700 lg:inline hidden">
                ×
              </button>
            </div>

            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              CSS Flexbox is a powerful layout method in CSS. It's designed to
              make it easier to design flexible and responsive web page layouts
              without having to rely on floats or positioning. Think of it as a
              way to organize and distribute space among items in a container
              (the parent element) to best fit the available space, or to
              display elements in the right way regardless of your screen size.
            </p>

            <div className="mb-4">
              <h5 className="font-medium text-gray-900 text-xs mb-2">
                Basic Concepts:
              </h5>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-medium">1. Flex Container:</span> This
                  is the parent element. You create an element as flex container
                  by setting{" "}
                  <code className="bg-gray-100 px-1 rounded text-xs">
                    display: flex;
                  </code>{" "}
                  or{" "}
                  <code className="bg-gray-100 px-1 rounded text-xs">
                    display: inline-flex;
                  </code>{" "}
                  on it. All direct children of this container become flex
                  items.
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">CSS</span>
                    <FiRotateCcw className="w-3 h-3 text-gray-400" />
                  </div>
                  <code className="text-xs text-green-600 block overflow-x-auto">
                    .container {"{"}
                    <br />
                    &nbsp;&nbsp;display: flex;
                    <br />
                    {"}"}
                  </code>
                </div>

                <div>
                  <span className="font-medium">2. Flex Items:</span> These are
                  the direct children of the flex container. Flexbox controls
                  the layout of these items.
                </div>

                <div>
                  <span className="font-medium">3. Main Axis:</span> This is the
                  primary axis of the flex container. By default, the main axis
                  is horizontal (left to right).
                </div>

                <div>
                  <span className="font-medium">4. Cross Axis:</span> This axis
                  runs perpendicular to the main axis. If the main axis is
                  horizontal, the cross axis is vertical (top to bottom).
                </div>

                <div>
                  <span className="font-medium">5. flex-direction:</span> This
                  property defines the direction of the main axis. Common values
                  are:
                </div>

                <ul className="ml-4 space-y-1 text-xs">
                  <li>
                    • <span className="font-mono">row</span> (default):
                    Horizontal items are displayed left to right
                  </li>
                  <li>
                    • <span className="font-mono">row-reverse</span>: Horizontal
                    items are displayed right to left
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
