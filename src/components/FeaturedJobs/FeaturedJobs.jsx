import React, { useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = ({ jobsData }) => {
//  console.log(jobsData);
 const defaultJobData = jobsData.slice(0,4);
//  console.log(defaultJobData);
 const [jobData, setJobData] = useState(defaultJobData);
 const handleShowAll = () => {
    setJobData(jobsData);
 }
  return (
    <div className="my-container my-10 ">
      <div>
        <h3 className="text-5xl font-bold text-center pb-4">Featured Jobs</h3>
        <p className="text-center text-gray-500 font-medium pb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between ">
        {jobData.map((job) => (
          <Jobs job={job} key={job.job_id}></Jobs>
        ))}
      </div>
      <div className="text-center">
      {
        jobData.length <5 && <button className="primary-btn my-5 " onClick={handleShowAll}>See All Jobs</button>
      }
      </div>
    </div>
  );
};

export default FeaturedJobs;
