import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const width = screen.width;
  const height =  screen.height
  const totalPixel = width * height;
  console.log(width , height)
  const EmployeeSalary = new Intl.NumberFormat().format(totalPixel);


  return (
    <>
          <p>Screen resolution check</p>
          <h4>{width} <small>X</small> {height}</h4>
          <p>total pixel: {EmployeeSalary}</p>
       
    </>
  )
}

export default App
