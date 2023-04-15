import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Jobs = ({ job }) => {
  const { company_logo, company, location, salary, job_type, job_position, job_id } =job;
  const navigate = useNavigate();
  // console.log(job)
  return (
    <div className="border p-10 rounded-lg border-[#E8E8E8]">
      <img className="h-10" src={company_logo} alt="" />
      <div className="py-4">
        <h3 className="font-bold">{job_position}</h3>
        <h3 className="py-3">{company}</h3>
        <h3 className="flex">
          {job_type.map((jt) => (
            <p className="border py-2 px-4 me-2 border-[#8A82FE] rounded-md text-[#8A82FE] font-bold">
              {jt}
            </p>
          ))}
        </h3>
        <h3 className="pt-2 flex gap-7">
          <span className="flex">
            <MapPinIcon className="h-6 w-6 text-[#8A82FE] " />
            {location}
          </span>
          <span className="flex">
            <CurrencyDollarIcon className="h-6 w-6 text-[#8A82FE] " />
            {salary}
          </span>
        </h3>
      </div>
      <button className="viewDetails-btn" onClick={()=>navigate(`jobDetails/${job_id}`)}>View Details</button>
    </div>
  );
};

export default Jobs;
