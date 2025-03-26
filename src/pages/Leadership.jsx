// src/pages/Leadership.jsx
import React from 'react';

import logo from '../assets/baburao.png';
import logo1 from '../assets/shyam.png';
import logo2 from '../assets/kachra.png';
import logo3 from '../assets/raju.png';


const Leadership = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900">Leadership</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center shadow-md">
            <img
              src={logo}
              alt="Person 1"
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-4">Baburao Ganpatrao Apte</h3>
            <p className="text-gray-600">CEO</p>
            <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              → View Profile
            </button>
          </div>
          {/* Card 2 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center shadow-md">
            <img
              src={logo3}
              alt="Person 2"
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-4">Raju</h3>
            <p className="text-gray-600">Sr CEO</p>
            <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              → View Profile
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center shadow-md">
            <img
              src={logo1}
              alt="Person 3"
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-4">Shyam</h3>
            <p className="text-gray-600">Co-Founder</p>
            <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              → View Profile
            </button>
          </div>
          {/* Card 4 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center shadow-md">
            <img
              src={logo2}
              alt="Person 4"
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-4">Kachra Seth</h3>
            <p className="text-gray-600">Head of Operations</p>
            <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              → View Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;