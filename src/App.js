import React from "react"
import Navbar from "./NavBar"
import { Route, Routes } from "react-router-dom"

import Dashboard from "./pages/dashboard"
import Courses from "./pages/courses"
import AddNewCourse from "./pages/add_new_course"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/add_course" element={<AddNewCourse />} />
        </Routes>
      </div>
    </>
  )
}

export default App