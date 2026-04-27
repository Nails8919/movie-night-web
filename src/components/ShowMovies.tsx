//libraries and imports.
import { useEffect, useState, type ChangeEvent } from 'react'
import ShowMovie from './ShowMovie'

// interface for media type, which includes the fields that are needed for the front-end.
interface mediaType {
    _id: string
    title: string
    director: string
    genres: string[]
    year: number
    runtime: number
    poster: string
}
type ContentType = 'movies' | 'series' | 'all'

//state variables for movies, filtered movies, pagination, selected genre, and content type (movies, series, or all).
const ShowMovies = () => {
    const [allMovies, setAllMovies] = useState<mediaType[]>([])
    const [filteredMovies, setFilteredMovies] = useState<mediaType[]>([])
    const [page, setPage] = useState(1)
    const [selectedGenre, setSelectedGenre] = useState('all')
    const [contentType, setContentType] = useState<ContentType>('movies')

    // Pagination handlers for next page.
    const handlePageNext = () => {
        setPage((currentPage) => currentPage + 1)
    }
    //Pagination handler for previous page.
    const handlePagePrev = () => {
        setPage((currentPage) => Math.max(1, currentPage - 1))
    }
    //function for handling the filtering and searching of movies.
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase()
        setFilteredMovies(
            allMovies?.filter((movie) => {
                console.log(searchTerm, movie)
                if (movie.title.toLowerCase().includes(searchTerm) ||
                    movie.genres.some((genre) => genre.toLowerCase().includes(searchTerm))
                ) {
                    return movie
                }
            }),
        )
    }

    //function for handling the filtering of movies by genre.
    const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const genre = event.target.value
        setSelectedGenre(genre)

        setFilteredMovies(
            allMovies.filter(movie =>
                genre === 'all' ? true : movie.genres.includes(genre)
            )
        )
    }

    //fetch for movies and series, with pagination and content type filtering (movies, series, or all)
    useEffect(() => {
        const fetchData = async () => {
            let data: mediaType[] = []

            if (contentType === 'movies' || contentType === 'all') {
                const movies = await fetch(
                    `http://localhost:4040/movie/p${page}`
                ).then(res => res.json())

                data = [...data, ...movies]
            }

            if (contentType === 'series' || contentType === 'all') {
                const series = await fetch(
                    `http://localhost:4040/series/p${page}`
                ).then(res => res.json())

                data = [...data, ...series]
            }

            setAllMovies(data)
            setFilteredMovies(data)
        }

        fetchData()
    }, [page, contentType])

    // code for the input movie search and genre filter, as well as the pagination buttons and dropdown for movies/series/all
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center text-xl font-bold">
                <div className="border-b-2 text-center text-xl font-bold flex justify-center p-4 bg-green-200 w-full gap-4">
                    <div>
                        {/* search input for movies */}
                        <input
                            type="text"
                            placeholder="Search by title, director, or genre"
                            className="w-96 rounded-lg border p-2"
                            onChange={handleSearch}
                        />
                    </div>

                    {/* genre filter dropdown */}
                    <select
                        value={contentType}
                        onChange={(e) => {
                            // @ts-ignore
                            setContentType(e.target.value)
                        }}
                        className="mb-4 w-32 rounded-lg border p-2"
                    >
                        {/* dropdown options for movies, series, or all */}
                        <option value="all">All</option>
                        <option value="movies">Movies</option>
                        <option value="series">Series</option>
                    </select>

                    {/* dropdown for selecting content type (movies, series, or all) */}
                    <select
                        value={selectedGenre}
                        onChange={handleGenreChange}
                        className="mb-4 w-32 flex justify-between rounded-lg border p-2"
                    >
                        {/* dropdown options for genres, with "all" option to show all media types. */}
                        <option value="all">All Genres</option>
                        {Array.from(new Set(allMovies.flatMap(m => m.genres))).map(genre => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>


            </div>

            {/* grid layout for displaying movies, with conditional rendering to show "No movies found" if there are no filtered movies. */}
            <div className="grid grid-cols-3 items-center border-b-2 p-4 bg-sky-800 text-center text-xl font-bold">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => <ShowMovie key={movie._id} movie={movie} />)
                ) : (
                    <p>No movies found</p>
                )}
            </div>

            {/* pagination buttons for previous and next page, with handlers to update the page state variable. */}
            <div className="mt-4 flex justify-between gap-4">
                <button className="w-24 cursor-pointer rounded-lg border p-3" onClick={handlePagePrev}>Prev</button>
                <button className="w-24 cursor-pointer rounded-lg border p-3" onClick={handlePageNext}>Next</button>
            </div>
        </>
    )
}
//exportation of ShowMovies component, to be used elsewhere.
export default ShowMovies