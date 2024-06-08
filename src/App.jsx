 import React, { useState } from 'react'
 import Navbar from './Components/Navbar/Navbar'
 import Hero from './Components/Hero/Hero'
 import Programs from './Components/Programs/Programs'
 import Title from './Components/Title/Title'
 import About from './Components/About/About'
import Outreach from './Components/Outreach/Outreach'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'
 
 const App = () => {
    const[playState, setPlayState] = useState(false);


   return (
     <div>
       <Navbar/>
       <Hero/>
       <div className='container'>
          <Title subTitle="OUR PROGRAM" title='What We Do'/>
          <Programs />
          <Title subTitle="Gallery" title='Outreach Photos'/>
          <Outreach />
          <About setPlayState={setPlayState}/>
          <Title subTitle="Contact us" title='Get in Touch'/>
          <Contact />
          <Footer/>
       </div>
       <Videoplayer playState={playState} setPlayState={setPlayState}/>
     </div>
   )
 }
 
 export default App
