import React from 'react';
import Image from 'next/image';
import COVID from './assets/COVID.png'
import NIKE from './assets/NIKE.png'
import QUIZ from './assets/QUIZ.png'
import portfolio  from './assets/portfolio.png'
import me from './assets/me.png'
import calculator from './assets/calculator.png'
import ebook from './assets/ebook.png'

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
                <a className="text-gray-600 hover:text-gray-800" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
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
        <section className="my-12" id="projects">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src ={COVID} alt="Screenshot of Project 1" className="w-full h-48 object-cover" height={200}  width={300} />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Project 1
                </h3>
                <p className="text-gray-600">
                  A brief description of Project 1.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src ={NIKE} alt="Screenshot of Project 2" className="w-full h-48 object-cover" height={200}  width={300} />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Project 2
                </h3>
                <p className="text-gray-600">
                  A brief description of Project 2.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src ={ebook} alt="Screenshot of Project 3" className="w-full h-48 object-cover" height={200}  width={300} />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Project 3
                </h3>
                <p className="text-gray-600">
                  A brief description of Project 3.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src ={QUIZ} alt="Screenshot of Project 4" className="w-full h-48 object-cover" height={200}  width={300}/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Project 4
                </h3>
                <p className="text-gray-600">
                  A brief description of Project 4.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={portfolio} alt="Screenshot of Project 5" className="w-full h-48 object-cover" height={200}  width={300} />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Project 5
                </h3>
                <p className="text-gray-600">
                  A brief description of Project 5.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={calculator} alt="Screenshot of Project 6" className="w-full h-48 object-cover" height={200} width={300}/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Project 6
                </h3>
                <p className="text-gray-600">
                  A brief description of Project 6.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="my-12" id="contact">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contact
          </h2>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Your name" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Your email" type="email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows={5}></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
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


