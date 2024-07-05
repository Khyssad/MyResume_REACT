// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'aos/dist/aos.css'
import './css/style.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Facts from './components/Facts'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <main id="main">
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </React.StrictMode>
)