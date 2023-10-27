import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import ContactUs from "./pages/ContactUs"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Header/>
        <Routes basename={"OnlineCourses"} >
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
