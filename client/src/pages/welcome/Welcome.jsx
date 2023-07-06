import React from 'react'
import { Cta } from '../../components'
import {Blog, Features, Header, Possibility, WhatGPT3  } from '../../containers'

const Welcome = () => {
  return (
    <div className='homePage'>

      <div className="gradient__bg">
        <Header />
      </div>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
  </div>
  )
}

export default Welcome
