import './App.css'
import './index.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  

useEffect(() => {
  AOS.init({ duration: 1000, once: false });
}, []);


  return (
    <>
      <section className='w-11/12 mx-auto'>
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      </section>
    </>
  )
}

export default App
