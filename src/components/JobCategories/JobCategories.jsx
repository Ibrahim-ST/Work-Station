import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const JobCategories = () => { 
  const [categories, setCategories] =  useState([]);
  useEffect(()=> {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])
  return (
    <div className="my-container mt-16 ">
      <div>
        <h3 className="text-5xl font-bold text-center pb-4">Job Category List</h3>
        <p className="text-center text-gray-500 font-medium pb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Category category={category} key={category.id}></Category>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
