import { useEffect, useState } from 'react'
import ShowMovie from './ShowMovie'

    const ShowMovies = () => {
      interface MovieType {
          _id: string,
          title: string,
          director: string,
          genre: string,
          releaseDate: string,
          rating: number
      }
      }
  
      //Code for handling the Next button click. It increments the page number by 1 when the Next button is clicked.
      const handlePageNext = () => {
          setPage(pg => pg + 1)
      }
  
      //Code for handling the Prev button click. It checks if the current page number minus 1 is less than or equal to 0. If it is, it sets the page number to 1 (the first page). Otherwise, it decrements the page number by 1.
      const handlePagePrev = () => {
          setPage(pg => {
              if (pg - 1 <= 0)
                  return 1
              else
                  return pg - 1
          })
      }
  
      //Code for handling the search input change. It takes the search term entered by the user and filters the list of movies based on whether their title, director, or genre includes the search term (case-insensitive). The filtered list of movies is then stored in the filteredMovies state variable.
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
          const searchTerm = e.target.value
          setFilteredMovies(
              (allMovies ?? []).filter(movie => {
                  if (movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || movie.director.toLowerCase().includes(searchTerm.toLowerCase()) || movie.genre.toLowerCase().includes(searchTerm.toLowerCase()))
                      return movie
              })
          )
          // console.log("Search term: ", searchTerm)
      }
  
      //State variables for managing movie data, filtered movie data, and the current page number. allMovies is used to store the complete list of movies fetched from the backend API, while filteredMovies is used to store the list of movies that match the search criteria entered by the user. The page state variable keeps track of the current page number for pagination purposes.
      const [allMovies, setAllMovies] = useState<MovieType[] | null>(null)
      const [filteredMovies, setFilteredMovies] = useState<MovieType[] | null>(null)
      const [page, setPage] = useState<number>(1)
  
      //Code for fetching movies from the backend API. It constructs the URL for fetching movies based on the current page number and sends a GET request to that URL. The response is then parsed as JSON and stored in the allMovies and filteredMovies state variables.
      const fetchMovies = (pgNum: number) => {
          console.log("Fetching movies for page: ", pgNum)
          const getMoviesURL = `http://localhost:4050/movies/pg${pgNum}`
          const getMoviesReq = new Request(
              getMoviesURL, {
              headers: {
                  'Content-Type': 'application/json'
              },
          })
  
          // console.log("Fetching movies with URL: ", getMoviesURL)
          fetch(getMoviesReq)
              .then(res => res.json())
              .then(data => {
                  console.log(data[0])
                  setAllMovies(data)
                  setFilteredMovies(data)
              })
      }
  
      useEffect(() => {
          fetchMovies(page)
      }, [page])
  
      return (
          <>
              <div className="flex flex-col p-4 justify-center border-b-2 mb-4 text-xl font-bold text-center">
  
  
                  <div className="justify-center border-b-2 mb-4 text-xl font-bold text-center">MOVIES LIST</div>
                  <input type="text" placeholder="Search by title, director, or genre" className="border p-2 mb-4 w-full rounded-lg" onChange={handleSearch} />
                  {filteredMovies && filteredMovies.length > 0 ?
                      filteredMovies.map((movie: MovieType) => {
                          return (
                              <ShowMovie key={movie._id} movie={movie} />
                          )
                      })
                      :
                      <p>No movies found</p>}
                  <div className="justify-between flex gap-4 mt-4">
                      <button className="border p-3 w-24 cursor-pointer rounded-lg" onClick={handlePagePrev}>Prev</button>
                      <button className="border p-3 w-24 cursor-pointer rounded-lg" onClick={handlePageNext}>Next</button>
                  </div>
              </div>
          </>
      )
  
export default ShowMovies