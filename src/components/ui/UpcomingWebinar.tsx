'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './card-hover-effect.tsxcard-hover-effect';


function UpcomingWebinar() {
    const featuredWebinars  = [
      {
        title: 'Custom Web Development',
        description:
          'Create tailored websites that meet your business needs and exceed expectations.',
        slug: 'custom-web-development',
        isFeatured: true,
      },
      {
        title: 'Responsive Design Techniques',
        description:
          'Develop responsive websites that provide seamless experiences across all devices.',
        slug: 'responsive-design-techniques',
        isFeatured: true,
      },
      {
        title: 'E-Commerce Solutions',
        description:
          'Build robust online stores with secure payment systems and user-friendly interfaces.',
        slug: 'e-commerce-solutions',
        isFeatured: true,
      },
      {
        title: 'SEO Optimization',
        description:
          'Optimize your website to rank higher in search engines and drive more traffic.',
        slug: 'seo-optimization',
        isFeatured: true,
      },
      {
        title: 'Performance Optimization',
        description:
          'Enhance your website’s speed and performance for a better user experience.',
        slug: 'performance-optimization',
        isFeatured: true,
      },
      {
        title: 'Digital Marketing Integration',
        description:
          'Integrate digital marketing strategies into your web development for better results.',
        slug: 'digital-marketing-integration',
        isFeatured: true,
      },
    ];
    
  return (
    <div className='p-12 bg-gray-900'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                    FEATURED</h2>
                <p>Enhance Developing journey</p>
            </div>
            <div className='mt-10'>
         <HoverEffect
         items={featuredWebinars.map(webinar=>(
            {
                title:webinar.title,
                description:webinar.description,
                link:'/'
            }
         ))} />
            </div>
            <div className='mt-10 text-center'>
                <Link href={'/'} className='px-4 py-2 rounded border border-neutral-600   text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                View All Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinar