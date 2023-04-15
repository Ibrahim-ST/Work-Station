import React from "react";

const Footer = () => {
  return (
    <>
      {/* <div className='text-center'>
            Work Station &copy; Ibrahim S Tanvir
        </div> */}
      <footer className="bg-[#1A1919] text-white pt-10 pb-3">
        <div className="container mx-auto flex flex-wrap justify-between p-4 ">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-4xl font-semibold mb-2 text-primary">Work Station</h3>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>771/A, Noorbag R/A</p>
            <p>O.R Nizam Road</p>
            <p>ibrahim.siddiquee@gmail.com</p>
            <p>+8801836-406502</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="https://www.facebook.com/ibrahim.siddiqueee" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.linkedin.com/in/ibrahim-siddiqueee/" className="hover:text-gray-400">
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.instagram.com/__witchfinder_general__/" className="hover:text-gray-400">
                  Instagram
                  
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p>
              Stay up to date with the latest news and offers from my website
              by subscribing to our newsletter.
            </p>
            <form className="mt-4">
              <div className="flex items-center flex-wrap gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-900 border border-gray-700 rounded py-2 px-3 text-white mr-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 rounded text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2023 Work Station. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
