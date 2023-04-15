import React, { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";
 

const AppliedJobs = () => {
  const appliedJobId = localStorage.getItem("ids");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/jobsData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const appliedJobs = data.filter((job) => appliedJobId?.includes(job.job_id));
  /*  */
  const [selectedType, setSelectedType] = useState("");
  const handleSelectChange = (e) => {
    setSelectedType(e.target.value);
  };

  const filteredJobs =
    selectedType === ""
      ? appliedJobs
      : appliedJobs.filter((card) => card.job_type[0] === selectedType);
const resetAppliedJobs = () => {
    localStorage.removeItem('ids');
    window.location.reload();
}
  return (
    <>
      <div className="header-bg ">
        <div className="my-container  ">
          <h3 className=" text-3xl font-bold text-center">Job Details : {filteredJobs.length}</h3>
        </div>
      </div>
      <div className="my-2 my-container">
      {appliedJobs.length>0?<div>
        <label htmlFor="jobType" className="font-bold">Filter by:</label>
        <select id="jobType" onChange={handleSelectChange} value={selectedType} className='bg-violet-100 p-1 rounded-lg mx-2'>
          <option value="">All</option>
          <option value="Remote">Remote</option>
          <option value="On-Site">On Site</option>
        </select>
      </div> : ''}
        {appliedJobs.length==0? <p className="text-center font-bold text-3xl my-10">Please Apply first!!</p> : ''}
        {filteredJobs.map((job) => (
          <AppliedJob job={job} key={job.job_id}></AppliedJob>
        ))}
        {
            appliedJobs.length>0?<div className="text-center">
            <button
              onClick={resetAppliedJobs}
              className="primary-btn"
              title="Click reset to remove all applied data"
            >
              Reset
            </button>
          </div> : ''
        }
      </div>
    </>
  );
};

export default AppliedJobs;
