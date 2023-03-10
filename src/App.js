import React from "react"
import Navbar from "./NavBar"
import { Route, Routes } from "react-router-dom"

import Dashboard from "./pages/dashboard"
import Courses from "./pages/courses"
import AddCourseForm from "./pages/add_new_course"
import CourseSinglePage from "./pages/cousesinglepage"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/add_new_course" element={<AddCourseForm />} />
          <Route path="/courses/:id" element={<CourseSinglePage />}>
          
        </Route>
        </Routes>
      </div>
    </>
  )
}

export default App