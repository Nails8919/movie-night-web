import HomePage from "./components/HomePage"
import Navbar from "./components/NavBar"
import ShowMovies from "./components/ShowMovies"
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
// import { useState } from "react"


const App = () => {
//   const [contentType, setContentType] =
//     useState<'movies' | 'series' | 'all'>('all')
  return (
    <>
    <Navbar  />
    {/* <Navbar  contentType={contentType} setContentType={setContentType} />
      <ShowMovies contentType={contentType} /> */}

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<ShowMovies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </> 
    )
  }

export default App