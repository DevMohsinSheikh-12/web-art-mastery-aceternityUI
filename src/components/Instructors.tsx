'use client'
import { BackgroundBeams } from "./ui/background-beams"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'ChutKii',
      designation: 'designer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      name: 'Andrew Tate',
      designation: 'Motivator',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
      id: 3,
      name: 'Khatoon',
      designation: 'Developer',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'Chintuu',
      designation: 'Sleeping Expert',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
  ];

function Instructors() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    <div className="max-w-2xl mx-auto p-4">
          <BackgroundBeams />
      <h1 className=" z-10 text-lg md:text-6xl pb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold">
        Meet Our Instructors
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto pb-10 my-2 text-sm text-center relative z-10">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis.
      </p>

      <div className="flex flex-row items-center
      justify-center mb-10 w-full"> 
      <AnimatedTooltip items={instructors}/>

      </div>
     
      </div>
    </div>
   
  )
}

export default Instructors