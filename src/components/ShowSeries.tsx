// import React from 'react'

// interface for media type, which includes the fields that are needed for the front-end.
interface mediaType {
    _id: string
    title: string
    director: string
    genres: string[]
    year: number
    runtime: number
    poster: string
    seasons?: number
    episodes?: number
}

//Showseries component, which takes in a series object and displays its information in a card format, similar to ShowMovie but with optional fields for seasons and episodes.
const ShowSeries = ({ series }: { series: mediaType }) => {
  return (
    <div key={series._id} className="mb-4 p-4 border rounded shadow bg-gray-100 hover:bg-gray-250 w-100 h-115">
        <div className="flex justify-center mb-2">
        <div><img src={series.poster} alt={`${series.title} poster`} className="w-55 h-auto" /></div>
        </div>
        <p>{`${series.title} (${series.year})`}</p>
        <p>{series.director}</p>
        <div>
          <p>{series.genres?.join(', ')}</p>
        </div>
        {/* <p>{series.releaseDate}</p> */}
        <p>{series.runtime}</p>
        {/* <p>ID: {series._id}</p> */}
      </div>
    )
}

//exportation of ShowSeries component for use in other parts of the application.
export default ShowSeries