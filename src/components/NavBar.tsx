import { Link } from 'react-router'

    const Navbar = () => {
        return (
          <>
          <div>Navbar</div>
          <Link className="mx-4 underline" to="/">Home</Link>
          <Link className="mx-4 underline" to="/movies">Movies</Link>
          </>
        )
      }
      
      export default Navbar