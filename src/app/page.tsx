import React from 'react';
import Link from 'next/link';


export default function Home() {
  return (
        <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            My Portfolio
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="./about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="./projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="./contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
     
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © 2024 Laiba Sarfraz Portfolio. All rights reserved.
          </p>
         
        </div>
      </footer>
    </div>
  );
};


