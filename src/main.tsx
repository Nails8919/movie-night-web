import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
// import App from './App.tsx'
import ShowDetails from './components/ShowDetails.tsx'
import ShowMovies from './components/ShowMovies.tsx'
import NavBar from './components/NavBar.tsx'
import NotFound from './components/NotFound.tsx'
// import NavBar from './components/NavBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<NavBar />} /> */}
        <Route path="/" element={<ShowMovies />} />
        <Route path="/movie/:id" element={<ShowDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
)
