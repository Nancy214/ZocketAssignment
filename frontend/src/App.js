import React from 'react'
import './index.css'
import 'react-bootstrap';
import Heading from './components/Heading'
import Slider from './components/Slider'
import Card from './components/Card'
import WhyChooseUs from './components/WhyChooseUs'


const App = () => {
  return (
    <>
      <main className='py-3'>

        <Heading/>
        <Slider section='main'/>
        <Card/>
        <WhyChooseUs/>
        <Slider section='clients'/>
      </main>
    </>
  )
}

export default App