import FeaturedCourses from '@/components/FeaturedCourses'
import Footer from '@/components/Footer'
import { GlobeDemo } from '@/components/Globe'
import HeroSection from '@/components/HeroSection'
import Instructors from '@/components/Instructors'
import MusicSchoolTestimonials from '@/components/TestimonialCards'


import UpcomingWebinar from '@/components/ui/UpcomingWebinar'
import WhyChooseUs from '@/components/ui/WhyChooseUs'
import React from 'react'


const page = () => {
  return (
  <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] '>
     <HeroSection />
     <FeaturedCourses />
     <WhyChooseUs />
     <MusicSchoolTestimonials />
     <UpcomingWebinar />  
    <GlobeDemo />
     <Instructors />
<Footer />
  </main>
  )
}

export default page