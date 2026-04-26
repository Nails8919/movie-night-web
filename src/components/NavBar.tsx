import { useState } from 'react'
import { Link } from 'react-router-dom'


// interface NavbarProps {
//   contentType: 'movies' | 'series' | 'all'
//   setContentType: React.Dispatch<
//     React.SetStateAction<'movies' | 'series' | 'all'>
//   >
// }

const Navbar = () => {
  const [contentType, setContentType] =
    useState<'movies' | 'series' | 'all'>('all')
  // const Navbar = ({ contentType, setContentType }: NavbarProps) => {
  return (
    <>
      <div>
        <Link className="mx-4 underline" to="/">Home</Link>
      </div>
      <div className="flex justify-center p-4 bg-gray-200">
        <select
          className="mb-4 w-9/12 rounded-lg border p-2"
          value={contentType}
          onChange={(e) =>
            setContentType(e.target.value as 'movies' | 'series' | 'all')
          }
        >
          <option value="all">All</option>
          <option value="movies">Movies</option>
          <option value="series">Series</option>
        </select>

        {/* <Link className="mx-4 underline" to="/movies">Movies</Link>
      <Link className="mx-4 underline" to="/Tv Shows">TV Shows</Link>
      <Link className="mx-4 underline" to="/myfave">My Faves</Link> */}
      </div>
    </>
  )
}

// const Navbar = () => {
//   return (
//     <>
//       <div className="flex justify-center p-4 bg-gray-200">
//       <Link className="mx-4 underline" to="/">Home</Link>
//       <Link className="mx-4 underline" to="/movies">Movies</Link>
//       <Link className="mx-4 underline" to="/Tv Shows">TV Shows</Link>
//       <Link className="mx-4 underline" to="/myfave">My Faves</Link>
//       </div>
//     </>
//   )
// }

export default Navbar