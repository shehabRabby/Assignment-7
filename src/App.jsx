import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Box from "./Components/Box";
import Tickets from "./Components/Tickets";
import { use } from "react";

const fetchData = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchData();

  const [pickCard, setPickCard] = useState([]);
  const [resolved, setResolved] = useState([]);

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={""}>
        <Box
          fetchPromise={fetchPromise}
          resolved={resolved}
          setResolved={setResolved}
        ></Box>
      </Suspense>

      <Suspense fallback={<div className="loader min-h-[550px]"> </div>}>
        <Tickets
          fetchPromise={fetchPromise}
          pickCard={pickCard}
          setPickCard={setPickCard}
          resolved={resolved}
          setResolved={setResolved}
        ></Tickets>
      </Suspense>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
