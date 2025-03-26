// src/pages/Blogs.jsx
import React from 'react';
import logo from '../assets/blog.jpg'

const Blogs = () => {
  return (
    <section className="container mx-auto px-6 lg:px-16 py-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Latest Blogs</h2>
      <div className="bg-blue-100 border border-blue-200 rounded-lg shadow-md max-w-lg">
        <img
          src={logo}
          alt="Blog Image"
          className="w-full rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-blue-900">
            10 Simple Exercises for Quick Back Pain Relief: Tailored for the Indian Lifestyle
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Blogs;