import { useNavigate } from "react-router-dom"

//interface for defining the fields of the query result for movie type.
interface MovieType {
  _id: string,
  title: string,
  director: string,
  genres: string[],
  year: number,
  runtime: number
  poster: string

}

//functional component for how the movie infomation is displayed on the front-end.
const ShowMovie = ({ movie }: { movie: MovieType }) => {
  const navigate = useNavigate()

  console.log(movie)
  return (
    <>
      {/* <Link to={`/transactions/${customer._id}`}> */}

      <div
        className="rounded-lg cursor-pointer"
        onClick={() => navigate(`/movie/${movie._id}`)}
      >

        <div key={movie._id} className="mb-4 p-4 border rounded shadow bg-gray-100 hover:bg-gray-250 w-100 h-115">
          <div className="flex justify-center mb-2">
            <div><img src={movie.poster} alt={`${movie.title} poster`} className="w-55 h-auto" /></div>
          </div>
          <p>{`${movie.title} (${movie.year})`}</p>
          <p>{movie.director}</p>
          <div>
            <p>{movie.genres?.join(', ')}</p>
          </div>

          {/* OPTIONAL poster */}
          {/* {movie.poster} */}

          {/* <p>{movie.releaseDate}</p> */}
          <p>{movie.runtime}</p>
          {/* <p>ID: {movie._id}</p> */}
        </div>
      </div>
      {/* </Link> */}
    </>
  )
}

//exportation of ShowMovie component for use in other parts of the application.
export default ShowMovie