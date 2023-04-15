import React from "react";
import "./Home.css";
import banner from "./../../assets/Images/home-banner.png";
import JobCategories from "../JobCategories/JobCategories";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
const Home = () => {
  const jobsData = useLoaderData();

  return (
    <>
      {/* banner section starts  */}
      <section className="header-bg">
        <div className="my-container flex flex-col-reverse sm:flex-row ">
          <div>
            <h3 className="font-bold text-3xl sm:font-extrabold sm:text-7xl">
              One Step <br /> Closer To Your{" "}
              <span className="text-primary">Dream Job</span>
            </h3>
            <p className="py-6 text-gray-500">
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all
              your job application from start to finish.
            </p>
            <button className="primary-btn">Get Started</button>
          </div>
          <div className="w-">
            <img className=" " src={banner} alt="" />
          </div>
        </div>
      </section>

      <JobCategories></JobCategories>
      <FeaturedJobs jobsData={jobsData}  ></FeaturedJobs>
    </>
  );
};

export default Home;
