
'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      'Their custom web development services helped us build a site that perfectly represents our brand. Highly recommended!',
    name: 'John Doe',
    title: 'CEO, GlobalTech Solutions',
  },
  {
    quote:
      "Our website's responsiveness and performance have drastically improved. The team's attention to detail is exceptional.",
    name: 'Jane Smith',
    title: 'Marketing Director, Innovate Corp',
  },
  {
    quote:
      'They delivered an e-commerce solution that boosted our sales by 40% in just three months!',
    name: 'Michael Brown',
    title: 'Owner, Trendy Fashion Store',
  },
  {
    quote:
      'Their full-stack development services covered everything from front-end design to back-end functionality, all with top-notch quality.',
    name: 'Lisa White',
    title: 'CTO, NextGen Software',
  },
  {
    quote:
      'Thanks to their SEO-optimized websites, we now rank on the first page of Google for all our key search terms.',
    name: 'Chris Green',
    title: 'Founder, EcoFriendly Products',
  },
];


function MusicSchoolTestimonials() {
  return (
    
    <div className="h-[40rem] w-full dark:bg-black  dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials
