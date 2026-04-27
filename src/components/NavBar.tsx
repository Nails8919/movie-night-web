// Importing necessary modules and components for the Navbar.
// import { useState } from 'react'
// import { Link } from 'react-router-dom'

//Navbar component, which includes a dropdown to filter content by type (movies, series, or all).
const Navbar = () => {
  return (
    <>
    <div className="flex flex-col justify-center border-b-2 p-4 text-center text-xl font-bold">
      WELCOME TO MOVIE NIGHT!!
      <p className="text-lg font-normal">Your ultimate destination for discovering and enjoying movies!</p>
    </div>
    {/* Link to home page and dropdown for content type selection. */}
      <div>
        {/* <Link className="mx-4 underline" to="/">Home</Link> */}
      </div>
      <div className="flex justify-center p-4 bg-gray-200">
      </div>
    </>
  )
}

//exportation of Navbar component for use in other parts of the application.
export default Navbar