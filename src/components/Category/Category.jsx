import React from "react";

const Category = ({ category }) => {
  const { jobs_available, name, logo } = category;
  return (
    <div className="bg-[#FAF8FF]">
      <div className=" py-8 px-6 rounded-lg">
        <img className="w-16 h-16 rounded-full" src={logo} alt="" />
        <h1 className="py-7 font-bold text-gray-700">{name}</h1>
        <p className="text-gray-500">{jobs_available}</p>
      </div>
    </div>
  );
};

export default Category;

// FAF8FF
