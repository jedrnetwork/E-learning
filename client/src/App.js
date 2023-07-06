import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {About, Login, Mission, Motivation, Signup, Vision, Welcome} from './pages';

import { Navbar, Footer } from './components'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>

        <main className='middle_body'>
        <Routes>
          <Route  path='/' element={ <Welcome/> }/>
          <Route  path='/jedr-tech-signup' element={ <Signup/> }/>
          <Route path='/jedr-tech-login' element={ <Login/> }/>
          <Route path='/jedr-tech-mission' element={ <Mission/> }/>
          <Route path='/jedr-tech-vision' element={ <Vision/> }/>
          <Route path='/jedr-tech-about' element={ <About/> }/>
          <Route path='/jedr-tech-motivation' element={ <Motivation/> }/>
          <Route  path='*' element={ <h1> Page not found !!</h1> }/>
        </Routes>
        </main>
        
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
