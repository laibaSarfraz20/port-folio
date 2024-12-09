import React from 'react';
import Image from 'next/image';
import COVID from '../assets/COVID.png'
import NIKE from '../assets/NIKE.png'
import QUIZ from '../assets/QUIZ.png'
import portfolio  from '../assets/portfolio.png'
import calculator from '../assets/calculator.png'
import ebook from '../assets/ebook.png'

const Projects =()=>{
    return(
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
    )
}
export default Projects;
