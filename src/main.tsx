// Main entry point of the React application, which sets up the routing and renders the main components of the app. It uses React Router for navigation between different pages, including the home page that shows movies, a details page for individual movies, a favorites page, and a not found page for undefined routes. The NavBar component is included at the top of every page for easy navigation. Tailwind CSS is used for styling throughout the application.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import ShowDetails from './components/ShowDetails.tsx'
import ShowMovies from './components/ShowMovies.tsx'
import NavBar from './components/NavBar.tsx'
import NotFound from './components/NotFound.tsx'
import Favorites from './components/Favorites.tsx'

// Rendering the main application component, which includes the NavBar and sets up the routes for the different pages of the application. The BrowserRouter component is used to enable routing, and the Routes component defines the different routes and their corresponding components. The home page ("/") displays the ShowMovies component, the details page ("/movie/:id") displays the ShowDetails component, the favorites page ("/favorites") displays the Favorites component, and any undefined route displays the NotFound component. The NavBar is included at the top of every page for easy navigation. Tailwind CSS is used for styling throughout the application.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowMovies />} />
        <Route path="/movie/:id" element={<ShowDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
