import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import Blog from "../Blog/Blog";
import Statistics from "../Statistics/Statistics";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header-bg">
      <div className="  my-container">
        <div className=" relative flex items-center justify-between">
          {/* Logo section */}
          <Link to="/">
            <span className="ml-2 text-xl font-bold tracking-wide text-primary">
              Work Station
            </span>
          </Link>

          {/* Nav item section */}

          <ul className="items-center hidden space-x-8 md:flex ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active font-bold" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "active font-bold" : "default"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appliedjobs"
                className={({ isActive }) =>
                  isActive ? "active font-bold" : "default"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "active font-bold" : "default"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>

          <button className="primary-btn hidden sm:block">Start Applying</button>

          {/* Mobile navbar section */}
          <div className="md:hidden">
            {/* Dropdown open button */}
            <button
              aria-label="Open-Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="w-5 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center"> 
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Work Station
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/statistics" className="default">
                        Statistics
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/appliedjobs"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Applied Jobs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
