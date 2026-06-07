// Libraries and imports for the ShowDetails component, which displays detailed information about a selected movie or series, including title, year, genres, director, plot, and an option to add it to the user's favorites.
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// ShowDetails component that displays detailed information about a selected movie or series, including title, year, genres, director, plot, and an option to add it to the user's favorites.
const ShowDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState<any>(null)
    const navigate = useNavigate()

    // useEffect to fetch movie details based on the ID from the URL parameters when the component mounts. It makes a GET request to the backend to retrieve the movie information and sets it in the state.
    useEffect(() => {
        fetch(`http://localhost:4040/info/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("DETAIL:", data)
                setMovie(data)
            })
    }, [id])

    if (!movie) return <p>Loading...</p>

    return (
        // Main container for the movie details page, displaying the movie's title, poster, year, genres, director, plot, and a button to add the movie to the user's favorites. The button triggers a POST request to the backend to add the movie to the favorites list and then navigates the user to the favorites page.
        <div className="p-6">
            <h1 className="text-2xl font-bold">{movie.title}</h1>

            {movie.poster}

            {/* //Display the movie poster, title, year, genres, director, and plot. The "Add to Favorites" button allows users to add the movie to their favorites list, which triggers a POST request to the backend and then navigates the user to the favorites page. */}
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Genres:</strong> {movie.genres?.join(", ")}</p>
            <p><strong>Director:</strong> {movie.directors?.join(", ")}</p>
            <p><strong>Plot:</strong> {movie.fullplot}</p>
            {/* // Button to add the movie to the user's favorites, which triggers a POST request to the backend and then navigates the user to the favorites page. */}
            <button
                className="mt-4 bg-blue-500 text-white p-2 rounded cursor-pointer"
                onClick={() => {
                    navigate("/favorites")
                    fetch(`http://localhost:4040/favorites/add/${id}`, {
                        method: "POST"
                    })
                        .then(res => res.json())
                        .then(data => {
                            alert(data.msg || data.error)
                        })
                }}
            >
                Add to Favorites
            </button>

        </div>
    )
}
//exportation of ShowDetails component for use in other parts of the application.
export default ShowDetails