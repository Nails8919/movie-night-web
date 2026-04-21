

interface MovieType {
  _id: string,
  title: string,
  director: string,
  genres: string[],
  releaseDate: string,
  runtime: number
  poster: string

}

const ShowMovie = ({ movie }: { movie: MovieType }) => {
  console.log(movie)
  
  return (
    <>
    {/* <Link to={`/transactions/${customer._id}`}> */}
      <div key={movie._id} className="mb-4 p-4 border rounded shadow bg-white hover:bg-gray-150 w-100">
        <p>Title: {movie.title}</p>
        <p>Director: {movie.director}</p>
        <div>
          <p>Genres: {movie.genres?.join(', ')}</p>
        </div>
        <p>Release Date: {movie.releaseDate}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>Poster: <img src={movie.poster} alt={`${movie.title} poster`} className="w-32 h-auto" /></p>
        {/* <p>ID: {movie._id}</p> */}
      </div>
    {/* </Link> */}
    </>
  )

  
}

export default ShowMovie