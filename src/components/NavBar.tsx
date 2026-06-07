// Importing necessary modules and components for the Navbar.

//Navbar component, which includes a dropdown to filter content by type (movies, series, or all).
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col justify-center border-b-2 p-4 text-center text-xl font-bold w-full bg-sky-800">
        WELCOME TO MOVIE NIGHT!!
        <p className="text-lg font-normal">Your ultimate destination for discovering and enjoying movies!</p>
      </div>
      <div>
      </div>
    </>
  )
}

//exportation of Navbar component for use in other parts of the application.
export default Navbar