import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ShowDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState<any>(null)

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
        <div className="p-6">
            <h1 className="text-2xl font-bold">{movie.title}</h1>

            {movie.poster}

            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Genres:</strong> {movie.genres?.join(", ")}</p>
            <p><strong>Director:</strong> {movie.directors?.join(", ")}</p>
            <p><strong>Plot:</strong> {movie.fullplot}</p>
            <button
                className="mt-4 bg-blue-500 text-white p-2 rounded cursor-pointer"
                onClick={() => {
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

export default ShowDetails