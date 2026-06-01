import { useEffect, useState } from "react"

const Favorites = () => {
  const [faves, setFaves] = useState<any[]>([])

  // Fetch favorites
  const loadFaves = () => {
    fetch("http://localhost:4040/favorites/show")
      .then(res => res.json())
      .then(data => {
        console.log("FAVES:", data)
        setFaves(data)
      })
  }

  useEffect(() => {
    loadFaves()
  }, [])

  // Delete favorite
  const handleDelete = (id: string) => {
    fetch(`http://localhost:4040/favorites/delete/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        loadFaves() // refresh list
      })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>

      {faves.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {faves.map((fav) => (
            <div key={fav._id} className="border p-4 rounded-lg">
              <p>Show ID: {fav.showID}</p>

              <button
                className="mt-2 bg-red-500 text-white p-2 rounded"
                onClick={() => handleDelete(fav._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites