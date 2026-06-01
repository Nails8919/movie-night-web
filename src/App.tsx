// import HomePage from "./components/HomePage"
import Navbar from "./components/NavBar"
import ShowMovies from "./components/ShowMovies"
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import Favorites from "./components/Favorites"

// Main App component that sets up the structure of the application.
const App = () => {
  return (
    <>
{/* Routes for the displaying and functioning of the webpage. */}
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<ShowMovies />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </> 
    )
  }

  //exportation of App component for use in other parts of the application.
export default App