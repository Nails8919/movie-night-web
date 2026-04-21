import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center p-4 bg-gray-200">
      <Link className="mx-4 underline" to="/">Home</Link>
      <Link className="mx-4 underline" to="/movies">Movies</Link>
      <Link className="mx-4 underline" to="/Tv Shows">TV Shows</Link>
      <Link className="mx-4 underline" to="/myfave">My Faves</Link>
      </div>
    </>
  )
}

export default Navbar