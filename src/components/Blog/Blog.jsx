import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="header-bg ">
        <div className="my-container  ">
          <h3 className=" text-3xl font-bold text-center">Blog Page</h3>
        </div>
      </div>
      <section className="max-w-5xl mx-auto my-4">
        <div className="border greenBg p-4 rounded-md">
          <div className="grid gap-2">
            <div className="bgBlog p-4 rounded-xl text-black">
              <h1 className="text-xl font-medium">
                1. When should you use context api?
              </h1>
              <p>
                The Context API is a feature in React that provides a way to
                share data between components without having to pass props down
                through every level of the component tree. It can be useful in
                sending data to multiple components at different levels of the
                component tree. Without context API we used to share data by
                props drilling which becomes complex in terms of complex
                hierarchy. Unlike prop drilling, Context API can be used to
                provide the necessary data to all components that need it
                without complexation. Context API should be used to deal with components that are far from each other for data passing.
              </p>
            </div>
            <div className="bgBlog p-4 rounded-xl">
              <h1 className="text-xl font-medium">2. What is custom hook?</h1>
              <p>
                A custom hook is a JavaScript function that uses React's
                built-in hooks to provide a specific functionality that can be
                shared across multiple components in a React application. Custom
                hooks allows to abstract complex logic into a reusable function,
                making code more modular and easier to maintain. <br />
                Custom hooks are created by defining a function that uses one or
                more of the existing React hooks, such as useState, useEffect,
                useContext, and useRef, to implement a specific piece of
                functionality. The function can then be imported and used in any
                component just like any other function. Custom hooks should be built with a clear and specific purpose and should not be overly complex or try to do too many things at once.
              </p>
            </div>
            <div className="bgBlog p-4 rounded-xl">
              <h1 className="text-xl font-medium">
                3. What is useRef? What is the purpose of useRef?
              </h1>
              <p>
                The useRef Hook allows to persist values between renders.It
                can be used to store a mutable value that does not cause a
                re-render when updated. It can be used to access a DOM element
                directly. The purpose of useRef is to allow to store and access mutable values, such as DOM elements or previous values, within functional components.When useRef is called, it returns a mutable object with a current property that can be set and read.  <br /> useRef can be used to store previous values in a component, such as the previous value of a prop or state. By storing the previous value in a ref, we can compare it to the current value in a useEffect hook and trigger an action when the value changes. useRef allows  to create more powerful and flexible components in your React applications.
              </p>
            </div>
            <div className="bgBlog p-4 rounded-xl">
              <h1 className="text-xl font-medium">
                4. What is useMemo? What is the purpose of useMemo?
              </h1>
              <p>The useMemo is a React hook that is used for memoization. Memoization is an optimization technique that stores the result of a function call and returns the cached result when the function is called again with the same arguments. In other words, useMemo is used to cache the result of a function so that it can be reused later without having to recompute it. <br /> The purpose of useMemo is to improve the performance of your React application by avoiding unnecessary re-renders. When a component re-renders, all of its child components also re-render, which can be expensive in terms of performance. By using useMemo, we can avoid unnecessary re-renders by caching the result of a function and returning the cached result when the function is called again with the same arguments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
