import HomePage from "./components/HomePage"
import Navbar from "./components/NavBar"
import ShowMovies from "./components/ShowMovies"
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"


const App = () => {
  return (
    <>
    <Navbar  contentType={contentType} setContentType={setContentType} />
      <ShowMovies contentType={contentType} />
 />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<ShowMovies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App