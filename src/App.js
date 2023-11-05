import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar } from "react-icons/fa";


function App() {
  return (
    <div>
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className="bg-white rounded-lg shadow p-4 transition-all  duration-300 hover:-translate-y-1 hover:shadow-lg relative"
          >
            <img
              src="https://static8.depositphotos.com/1559986/1051/i/450/depositphotos_10513998-stock-photo-red-jacket.jpg"
              className="w-full object-cover mb-4"
            />

            <div className="flex justify-between items-center pb-2">
              <p className="bg-pink-100 px-1 text-pink-500 rounded">
                Clothing
              </p>
              <p className="text-gray-600">Rs. 500</p>
            </div>

            <p className="font-bold text-gray-800">Jacket</p>

            <div className="flex justify-between items-center">
              <div className="flex items-center border border-yellow-500 rounded px-1 mt-2">
                <p className="text-yellow-500">5.0</p>
                <FaStar className="text-yellow-500 ml-1" />
              </div>
              <button className={`px-4 py-2 rounded-full text-white bg-pink-500 hover:bg-pink-600 `}>
                <FaShoppingCart />
              </button>
            </div>
          </div>
      </div>

    </div>
  );
}

export default App;
