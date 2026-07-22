import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './components/Badges/BadgeStyle.css'
import './App.css'


import Badge from './components/Badges/Badge'
import Banner from './components/Banners/Banner'
import Card from "./components/Cards/Card"
import TestimonialWithImage from './components/Testimonials/TestimonialWithImage'
import TestimonialWithoutImage from './components/Testimonials/TestimonialWithoutImage'
import Toast from "./components/Toasts/Toast"
import Tooltip from "./components/Tooltips/Tooltip"


function App() {


  return (
    <div className="examples-container">
    {/* Badge - Square Version */}
      {/* <Badge color="gray" shape="square" text="Badge" />
      <Badge color="red" shape="square" text="Badge" />
      <Badge color="yellow" shape="square" text="Badge"  />
      <Badge color="green" shape="square" text="Badge"  />
      <Badge color="blue" shape="square" text="Badge" />
      <Badge color="indigo" shape="square" text="Badge"  />
      <Badge color="purple" shape="square" text="Badge"  />
      <Badge color="pink" shape="square" text="Badge" />    */}

  
    
    {/* Badge - Pill Version */}
      {/* <Badge color="gray" shape="pill" text="Badge" /> 
      <Badge color="red" shape="pill" text="Badge" />
      <Badge color="yellow" shape="pill" text="Badge" />
      <Badge color="green" shape="pill" text="Badge"  />
      <Badge color="blue" shape="pill" text="Badge" />
      <Badge color="indigo" shape="pill" text="Badge" />
      <Badge color="purple" shape="pill" text="Badge" />
      <Badge color="pink" shape="pill" text="Badge" /> */}


    {/* Banner - Single-line Version */}
    {/* <Banner status="success" title="Congratulations!" />
    <Banner status="warning" title="Attention" />
    <Banner status="danger" title="There is a problem with your application" />
    <Banner status="neutral" title="Update available" /> */}

    {/* Banner - Multi-line Version */}
    {/* <Banner status="success" title="Congratulations" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." />
    <Banner status="warning" title="Attention" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
    <Banner status="danger" title="There is a problem with your application" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
    <Banner status="neutral" title="Update available" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." /> */}

    {/* Card  */}
    {/* <Card icon_backgroundColor='#2589bd' title='Easy Deployment' text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' />
    <Card title='Easy Deployment' text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' /> */}

    {/* Testimonial with image - desktop version */}
    {/* <TestimonialWithImage quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.' author='May Andersons' role='Workcation, CTO' viewport='desktop' /> */}
    {/* Testimonial with image - mobile version */}
    {/* <TestimonialWithImage quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.' author='May Andersons' role='Workcation, CTO' viewport='mobile' /> */}
    
     {/* Testimonial with no image - desktop version */}
     {/* <TestimonialWithoutImage quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.' author='May Andersons' role='Workcation, CTO' viewport='desktop' /> */}
     {/* Testimonial with image - mobile version */}
    {/* <TestimonialWithoutImage quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.' author='May Andersons' role='Workcation, CTO' viewport='mobile' /> */}

    {/* Toast component - Single popup bottom right corner of screen */}
    {/* Test one at a time */}

    {/* <Toast status="success" title="Success" text="Your work has been saved" />
    <Toast status="warning" text="A network error was detected" />
    <Toast status="error" text="Please re-save your work again" /> */}

    {/* <Toast status="information" title="Information" text="Please read updated information" show_delay_ms={3000} hide_delay_ms={6000}  /> */}


    {/* Tooltip */}
    {/* Custom SVG icons can be passed into this component. If you want the icon color to automatically match the component's mode and variant styles, set the SVG's fill and/or stroke attributes to currentColor. SVGs with hardcoded colors will render with their original colors.*/}

    {/* Tooltip component - light mode  */}

    {/* <Tooltip variant='achromatic' mode='light' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
    <Tooltip variant='blue' mode='light' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
    <Tooltip variant='purple' mode='light' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
    <Tooltip variant='green' mode='light' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" /> */}

    {/* Tooltip component - bold mode */}
    
    {/* <Tooltip variant='achromatic' mode='bold' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
    <Tooltip variant='blue' mode='bold' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
    <Tooltip variant='purple' mode='bold' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
    <Tooltip variant='green' mode='bold' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" /> */}

    </div>
  )
}

export default App
