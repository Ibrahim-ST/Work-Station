import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid"; 

const JobDetails = () => {
  const params = useParams();
  const { jobId } = params;
  const data = useLoaderData();
  //   console.log(jobId);

  //   console.log(data);
  const details = data.find((d) => d.job_id == jobId);
  const [jobs, setJobs] = useState([]);
  const {
    educational_requirements,
    job_responsibilities,
    job_description,
    phone,
    salary,
    job_position,
    email,
    address,
    experiences,
  } = details;
  console.log(details);
  const handleApplyNow = (details) => { 
    const existingIds = JSON.parse(localStorage.getItem("ids")) || [];
    existingIds.push(details.job_id);
    localStorage.setItem("ids", JSON.stringify(existingIds));
  };
  return (
    <>
      <div className="header-bg ">
        <div className="my-container  ">
          <h3 className=" text-3xl font-bold text-center">Job Details</h3>
        </div>
      </div>
      <div className="md:grid job-info pt-16 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:mx-24 lg:px-8 pb-4">
        <div>
          <p>
            <strong>Job Description:</strong> {job_description}{" "}
          </p>
          <p>
            <strong>Job Responsibilities:</strong> {job_responsibilities}{" "}
          </p>
          <p>
            <strong>Educational Requirements:</strong> <br />{" "}
            {educational_requirements}{" "}
          </p>
          <p>
            <strong>Experiences :</strong> <br /> {experiences}{" "}
          </p>
        </div>
        <div>
          <div className="job-details py-3 px-7 mb-2">
            <h3 className="font-bold text-lg pb-4">Job details</h3>
            <hr />
            <p>
              <CurrencyDollarIcon className="h-6 w-6 text-primary" />
              <span>Salary:</span> {salary}
            </p>
            <p>
              <BriefcaseIcon className="h-6 w-6 text-primary" />
              <span>Job Title:</span> {job_position}
            </p>
            <h3 className="font-bold text-lg pb-4">Contact Information</h3>
            <hr />
            <p>
              <PhoneIcon className="h-6 w-6 text-primary" />
              <span>Phone :</span> {phone}
            </p>
            <p>
              <EnvelopeIcon className="h-6 w-6 text-primary" />
              <span>Email :</span> {email}
            </p>
            <p>
              <MapPinIcon className="h-7 w-7 text-primary" />
              <span>Address:</span> {address}
            </p>
          </div>
          <button
            className="apply-btn w-full py-4 text-white font-bold "
            onClick={() => handleApplyNow(details)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
