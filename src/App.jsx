import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Box from './Components/Box';
import Container from './Components/Container';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Box></Box>



      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
