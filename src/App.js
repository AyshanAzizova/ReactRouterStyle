import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Practice from "./pages/Practice"
import Contact from "./pages/ContactUs";
import Services from "./pages/Services"
import Attorneys from "./pages/Attorneys"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/attorneys" element={<Attorneys />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
