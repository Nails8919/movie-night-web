// Libraries and imports for the ShowMovie component, which displays basic information about a movie in a card format, including title, director, genres, year, runtime, and poster. It also allows users to click on the card to navigate to a detailed view of the movie.
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
  return (
    <>
      {/* <Link to={`/transactions/${customer._id}`}> */}

      <div
        className="rounded-lg cursor-pointer"
        onClick={() => navigate(`/movie/${movie._id}`)}
      >

{/* // Main container for the movie card, which displays the movie's poster, title, year, director, genres, and runtime. The card is styled with Tailwind CSS classes for layout and appearance. When the card is clicked, it navigates the user to a detailed view of the movie using React Router's useNavigate hook. */}
        <div key={movie._id} className="mb-4 p-4 border rounded shadow bg-gray-100 hover:bg-gray-250 w-100 h-115">
          <div className="flex justify-center mb-2">
            <div><img src={movie.poster} alt={`${movie.title} poster`} className="w-55 h-auto" /></div>
          </div>
          <p>{`${movie.title} (${movie.year})`}</p>
          <p>{movie.director}</p>
          <div>
            <p>{movie.genres?.join(', ')}</p>
          </div>
          <p>{movie.runtime}</p>
        </div>
      </div>
    </>
  )
}

//exportation of ShowMovie component for use in other parts of the application.
export default ShowMovie