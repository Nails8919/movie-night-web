// Libraries and imports for the Favorites component, which allows users to view, edit, and delete their favorite movies.
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// Favorites component that displays the user's favorite movies, allowing them to edit notes and watched status, as well as delete favorites.
const Favorites = () => {
  const [faves, setFaves] = useState<any[]>([])

  // State variables for editing favorites, including the ID of the favorite being edited, the note, and the watched status.
  const [editingId, setEditingId] = useState("")
  const [note, setNote] = useState("")
  const [watched, setWatched] = useState(false)

  // Fetch favorites
  const loadFaves = () => {
    fetch("http://localhost:4040/favorites/show")
      .then(res => res.json())
      .then(data => {
        console.log("FAVES:", data)
        setFaves(data)
      })
  }
  // useEffect to load favorites when the component mounts.
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

  // Update favorite
  const handleUpdate = (id: string) => {
    fetch(`http://localhost:4040/favorites/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        note,
        watched
      })
    })
      .then(res => res.json())
      .then(() => {
        setEditingId("")
        loadFaves()
      })
  }

  return (
    // Main container for the favorites page, displaying the user's favorite movies with options to edit notes and watched status, as well as delete favorites. If there are no favorites, it shows a message indicating that there are no favorites yet. Each favorite is displayed in a grid layout with its poster, title, year, watched status, and note. Users can edit the note and watched status or delete the favorite entirely.
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          🏠 Home
        </Link>

      </div>
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>

      {faves.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {faves.map((fav) => (
            <div key={fav._id} className="border p-4 rounded-lg">
              {/* <p>Show ID: {fav.showID}</p> */}

              {/* Display movie details including poster, title, year, watched status, and note */}
              <img
                src={fav.poster}
                alt={fav.title}
                className="w-40 mx-auto mb-2"
              />

              <h2 className="font-bold text-lg">
                {fav.title}
              </h2>

              <p>{fav.year}</p>

              <p>
                Status:
                {fav.watched ? " Watched" : " Not Watched"}
              </p>

              <p>
                Note:
                {fav.note || "None"}
              </p>
              
              {/* // Conditional rendering to show edit form if the current favorite is being edited, otherwise show edit and delete buttons. */}
              {editingId === fav._id ? (
                <>
                  <textarea
                    className="border p-2 w-full mt-2"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />

                  {/* code for watched status checkbox */}
                  <label className="block mt-2">
                    <input
                      type="checkbox"
                      checked={watched}
                      onChange={(e) =>
                        setWatched(e.target.checked)
                      }
                    />
                    Watched
                  </label>

                  {/* // Save button to update the favorite with the new note and watched status. */}
                  <button
                    className="bg-green-500 text-white p-2 mt-2 rounded"
                    onClick={() => handleUpdate(fav._id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                // Edit button to enable editing mode for the current favorite, allowing the user to update the note and watched status. */}
                <button
                  className="bg-blue-500 text-white p-2 mt-2 mr-2 rounded"
                  onClick={() => {
                    setEditingId(fav._id)
                    setNote(fav.note || "")
                    setWatched(fav.watched || false)
                  }}
                >
                  Edit
                </button>
              )}
              {/* Edit button to enable editing mode for the current favorite, allowing the user to update the note and watched status. */}
              <button
                className="mt-2 bg-red-500 text-white p-2 rounded ml-2"
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

//exportation of Favorites component for use in other parts of the application.
export default Favorites

