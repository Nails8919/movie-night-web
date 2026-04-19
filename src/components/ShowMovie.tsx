

interface MovieType {
  _id: string,
  title: string,
  director: string,
  genre: string,
  releaseDate: string,
  rating: number
}

const ShowMovie = ({ movie }: { movie: MovieType }) => {
  
  return (
    <>
    {/* <Link to={`/transactions/${customer._id}`}> */}
      <div key={movie._id} className="mb-4 p-4 border rounded shadow bg-white hover:bg-gray-150 w-150">
        <p>Title: {movie.title}</p>
        <p>Director: {movie.director}</p>
        <div>
          <p>Genre: {movie.genre}</p>
        </div>
        <p>Release Date: {movie.releaseDate}</p>
        <p>Rating: {movie.rating}</p>
        {/* <p>ID: {movie._id}</p> */}
      </div>
    {/* </Link> */}
    </>
  )

  
}

export default ShowMovie