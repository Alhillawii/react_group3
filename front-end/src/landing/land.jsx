import React from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.min.css'


import NavLand from './components/nav'
import HeroLand from './components/hero'
import AboutLand from './components/about'
import ServiceLand from './components/service'
import TestimonialLand from './components/testimonial'
import CategoriesLand from './components/categories'
import CoursesLand from './components/Courses'
import FAQLand from './components/FAQ'
import FooterLand from './components/footer'
import TopLand from './components/top'


export default function land() {
  return (
    <div>
          <NavLand />
          <HeroLand />
          <AboutLand />
          <ServiceLand />
          <CategoriesLand />
          <CoursesLand />
          <TestimonialLand />
          <FAQLand />
          <FooterLand />
          <TopLand />
    </div>
  )
}