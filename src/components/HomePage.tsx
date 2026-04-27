// import ShowMovie from "./ShowMovie"

// import ShowMovie from "./ShowMovie"

// HomePage component, which serves as the landing page of the application, welcoming users and providing a brief introduction to the site.
const HomePage = () => {
  return (
  <>
    <div className="flex flex-col justify-center border-b-2 p-4 text-center text-xl font-bold">
      WELCOME TO MOVIE NIGHT!!
      <p className="text-lg font-normal">Your ultimate destination for discovering and enjoying movies!</p>
    </div>
    <div>
      Featured Movies
      <div className="flex flex-wrap justify-center">
      </div>
      {/* Additional content can be added here */}
    </div>
  </>
  )
}

//exportation of HomePage component for use in other parts of the application.
export default HomePage