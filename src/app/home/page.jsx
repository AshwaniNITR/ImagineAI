"use client";
import React from 'react';
import Navbar from '../components/Home/Navbar';



const Herosection = () => {
    const images = {
        bgImgRight:
          "https://res.cloudinary.com/dg3qhhnjo/image/upload/v1730450985/ImageAi/ohgkl68z28eoqrotrljw.jpg",
        }
  return (
    <>
    <Navbar/>
    <section id='Home'
    className="min-h-screen w-[100%]  lg:py-24 pt-24 bg-no-repeat flex flex-col  "
    style={{
      backgroundImage: `url(${images.bgImgRight})`,
    }}   >
        <div className='grid grid-cols-1 lg:grid-cols-12 p-24'>
            <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl  mt-2 font-extrabold"><span className='text-transparent bg-clip-text bg-[#67E331]'>Hexadepth</span>
   
        <br/>
       
      </h1>
        <p className='text-[#ADB7BE] text-lg lg:text-xl  mb-6 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam distinctio cumque ullam! Provident saepe consequuntur quibusdam repellat reiciendis incidunt, temporibus voluptate tempore vel. Blanditiis vero animi ducimus necessitatibus modi?<br/>Welcome to the dynamic world !</p>
        <div>
          <button className='px-6 py-3 my-1  w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-300  text-white bg-gradient-to-br from-[#13163F] to-[#67E331]'>Let&apos;s go</button>
          <button className='px-6 py-3 my-2 w-full sm:w-fit rounded-full mr-4 bg-transparant hover:bg-gradient-to-br from-[#13163F] to-[#67E331] hover:text-black  text-white border  border-white' >click me</button>
         
        </div>
        </div>
        </div>
        
    </section>
    </>
  )
}

export default Herosection