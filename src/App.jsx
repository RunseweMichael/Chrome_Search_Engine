import React from 'react'
import Clock from './Clock'
import InputBox from './InputBox'
import ImageLinks from './ImageLinks'
import Button from './Button'



export default function App() {
  return (
    <div className='container'>
      <Clock />
      <InputBox />
      {/* <Button /> */}
      <ImageLinks />
    </div>
  )
}
