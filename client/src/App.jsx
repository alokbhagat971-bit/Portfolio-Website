import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certificates from "./components/Certificates"
import Education from "./components/Education"
import Footer from "./components/Footer"
import HireMe from "./pages/HireMe"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="max-w-7xl mx-auto px-4">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Certificates />
          <Projects />
          <Education />
          <Footer />
        </div>
      } />
      <Route path="/hire-me" element={<HireMe />} />
    </Routes>
  );
}

export default App;