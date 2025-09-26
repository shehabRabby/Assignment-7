import { Suspense} from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Box from "./Components/Box";
import Tickets from "./Components/Tickets";

const fetchData = async()=>{
  const result = await fetch("/data.json");
  return result.json();
}

function App() {
  const fetchPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>

      <Suspense>
        <Box fetchPromise = {fetchPromise}></Box>
      </Suspense>

      <Suspense fallback={"Data Loading wait a second...."}>
        <Tickets fetchPromise = {fetchPromise}></Tickets>
      </Suspense>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
