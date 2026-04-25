// import ShowMovie from "./ShowMovie"


const HomePage = () => {
  return (
  <>
    <div className="flex flex-col justify-center border-b-2 p-4 text-center text-xl font-bold">
      WELCOME TO MOVIE NIGHT!!
      <p className="text-lg font-normal">Your ultimate destination for discovering and enjoying movies!</p>
    </div>
    <div>
      Featured Movies
      {/* <ShowMovie movie={MovieType} /> */}
    </div>
  </>
  )
}

export default HomePage