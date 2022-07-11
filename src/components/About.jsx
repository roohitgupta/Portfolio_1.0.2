import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl fond-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          Aspiring Full Stack Web Developer at MASAI SCHOOL, Bengaluru, Karnataka. Looking forward graduate from University of Devi Ahilya Vishwavidyalaya, Indore with Bachelor of Computer Science.
          Have done numerous projects involving Front and Back end technologies.
        </p>
        <br />
        <p className='text-xl'>
          Apart from coding, some other activities that I love to do!

          Playing Cricket
          Writting Tech Blogs
          Reading Self Improvment Books
          
          "Any fool can write code that a computer can understand.
          Good programmers write code that humans can understand."

          Martin Fowler
        </p>
      </div>
    </div>
  );
};

export default About;
