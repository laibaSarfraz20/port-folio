import React from 'react';


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
            <img alt="A professional headshot of the portfolio owner" className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0 md:mr-6" height="150" src="https://storage.googleapis.com/a1aa/image/dA886njQ65pXKRwTcLDKEF1jeXDKytJPXF1BN2tzC6YfelgnA.jpg" width="150" />
            <p className="text-gray-700 text-lg">
              Hello! I'm a passionate developer with experience in building web applications using React and Tailwind CSS. I love creating beautiful and functional user interfaces.
            </p>
          </div>
        </section>
        <section className="my-12" id="projects">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img alt="Screenshot of Project 1" className="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/DAzZuPuAlE6bK1jfypJzscv6da0hABn12DErfpVf1EP49lgnA.jpg" width="300" />
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
              <img alt="Screenshot of Project 2" className="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/8s95sSVdxo7SAZp8RoWVooWbMVpK3XW4LiFP2GJbqfgeelgnA.jpg" width="300" />
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
              <img alt="Screenshot of Project 3" className="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/SLFviJ8p3K6xEV0DrE7UVTqC3C3ubylXyHb1SholKMLwvE8E.jpg" width="300" />
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
              <img alt="Screenshot of Project 4" className="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/V0e6h6ehnMvDSUuam7X7izdeEkzsp8TIhRevuEgUCLpt7LBPB.jpg" width="300" />
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
              <img alt="Screenshot of Project 5" className="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/vZab4nPZOzpZL54qusZrafYPuDa4IW3PWSEcIi8PGhhfelgnA.jpg" width="300" />
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
              <img alt="Screenshot of Project 6" className="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/9pqh5T2LDroGNd3ZcBBFgOdOtMibgfjsnDb4WeJfTOfn7LBPB.jpg" width="300" />
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © 2023 My Portfolio. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a className="text-white hover:text-gray-400" href="https://github.com">
              <i className="fab fa-github">
              </i>
            </a>
            <a className="text-white hover:text-gray-400" href="https://linkedin.com">
              <i className="fab fa-linkedin">
              </i>
            </a>
            <a className="text-white hover:text-gray-400" href="https://twitter.com">
              <i className="fab fa-twitter">
              </i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};


