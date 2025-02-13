import React from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <main>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/services" element={<Services />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/contact" element={<Contact />} />
    //       </Routes>
    //     </main>
    //     <Footer />
    //   </div>
    // </Router>

    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
