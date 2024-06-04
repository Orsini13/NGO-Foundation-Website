 import React from 'react'
 import Navbar from './Components/Navbar/Navbar'
 import Hero from './Components/Hero/Hero'
 import Programs from './Components/Programs/Programs'
 import Title from './Components/Title/Title'
 import About from './Components/About/About'
import Outreach from './Components/Outreach/Outreach'
 
 const App = () => {
   return (
     <div>
       <Navbar/>
       <Hero/>
       <div className='container'>
          <Title subTitle="OUR PROGRAM" title='What We Do'/>
          <Programs />
          <About />
          <Title subTitle="Gallery" title='Outreach Photos'/>
          <Outreach/>

       </div>
     </div>
   )
 }
 
 export default App
