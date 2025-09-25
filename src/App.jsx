import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-400'>i am here</h1>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
