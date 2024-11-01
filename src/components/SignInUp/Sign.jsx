"use client";
import React, { useTransition, useState } from 'react';
import TabButton from './TabButton';
import { Signup } from './signUp';
import { SignIn } from './SignIn';

const TAB_DATA = [
  {
    title: "SignUp",
    id: "SignUp",
    thing: (
        <Signup/>
      ),
  },
  {
    title: "SignIn",
    id: "SignIn",
    thing: (
        <SignIn/>
      ),
  },
];

export const Sign = () => {
  const [tab, setTab] = useState("SignUp");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const images = {
    bgImgRight:
      "https://res.cloudinary.com/dg3qhhnjo/image/upload/v1730380591/ImageAi/rewfhxtn2g7asfxkmfmg.png",
    }
  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section>
      <h1 className='text-center pt-0 text-4xl sm:text-5xl lg:text-6xl mt-0  text-transparent bg-clip-text bg-gradient-to-br from-[#70BCCD] to-[#67E331] font-extrabold'>
        WEBSITE
      </h1>
      
      <div className='grid md:grid-cols-2 my-6 md:my-12 py-12 '>
      {/* className="min-h-screen w-[100%] md:w-[95%] lg:py-24 pt-24 bg-no-repeat flex flex-col  "
         style={{
           backgroundImage: `url(${images.bgImgRight})`,
         }}       */}
        <div>
          <p className='font-bold my-2 text-transparent bg-clip-text bg-gradient-to-br from-[#70BCCD] to-[#67E331] md:text-4xl text-3xl'>ImageAI</p>
          <p className='text-[#ADB7BE] mb-4 mt-4 max-w-md md:text-xl text-lg '>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores quos quod porro aperiam incidunt magni repudiandae ab. Quia esse quisquam ab cupiditate. Et tempora voluptatibus inventore nesciunt? Ducimus, voluptates.
          </p>
        </div>
        
        <div className='bg-gradient-to-br from-[#70BCCD] to-[#67E331] rounded-lg p-7'>
          <div className='flex flex-row  max-w-full  justify-evenly'>
            <TabButton
              selectTab={() => handleTabChange('SignUp')}
              active={tab === 'SignUp'}
            >
              Sign Up
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('SignIn')}
              active={tab === 'SignIn'}
              
            >
              Sign In
            </TabButton>
          </div>
          <div className='mt-8'>
            {selectedTab ? selectedTab.thing : <p>Tab not found</p>}
          </div>
        </div> 
      </div>
    </section>
  );
};
