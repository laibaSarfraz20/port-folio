import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import me from './assets/me.png'

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
      <section className="my-12" id="about">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image src={me} alt="A professional headshot of the portfolio owner" className=" w-60 h-90 md:w-60 md:h-50 mb-4 md:mb-0 md:mr-6" height={150}  width={150} />
            <p className="text-gray-700 text-lg">
              Hello!I&apos;m An Aspiring Front-End Developer with a solid foundation in HTML, CSS, JavaScript, React, and Tailwind CSS.
                Currently contributing to real-world projects at a start-up while continuing to learn and expand my
                expertise in web development. Proficient in using GitHub for version control and Firebase for back-end
                integration. Passionate about growing my skills and eager to take on new opportunities to develop
                further within the industry.
            </p>
          </div>
        </section>
     
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


