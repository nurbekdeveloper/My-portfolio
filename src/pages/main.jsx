import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Header from '../component/header/Header'
import Skills from '../component/Skills/Skills'
import Works from '../component/works/Works'
import Contact from '../component/contact/Contact'



function Main() {
  return (
    <>
    <Navbar />
    <Header />
    <Skills/>
    <Works/>
    <Contact/>

    </>
  )
}

export default Main