import React from 'react'
import './css/style.css'
import './css/bootstrap.min.css'


import NavLand from './components/nav'
import HeroLand from './components/hero'
import AboutLand from './components/about'
import ServiceLand from './components/service'
import TestimonialLand from './components/testimonial'
import CategoriesLand from './components/Categories'

import CoursesLand from './components/Courses'
import TeamLand from './components/team'
import FooterLand from './components/footer'
import TopLand from './components/top'


export default function land() {
  return (
    <div>
        <>
          <NavLand />
          <HeroLand />
          <AboutLand />
          <ServiceLand />
          <TestimonialLand />
          <CategoriesLand />
          <CoursesLand />
          <TeamLand />
          <FooterLand />
          <TopLand />
        </>
    </div>
  )
}
