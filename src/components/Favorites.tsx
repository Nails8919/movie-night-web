import { useEffect, useState } from "react"

const Favorites = () => {
  const [faves, setFaves] = useState<any[]>([])

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>

      {faves.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {faves.map((fav) => (
            <div key={fav._id} className="border p-4 rounded-lg">
              {/* <p>Show ID: {fav.showID}</p> */}

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

              <p>
                Status:
                {fav.watched ? " Watched" : " Not Watched"}
              </p>

              <p>
                Note:
                {fav.note || "None"}
              </p>

              {editingId === fav._id ? (
                <>
                  <textarea
                    className="border p-2 w-full mt-2"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />

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

                  <button
                    className="bg-green-500 text-white p-2 mt-2 rounded"
                    onClick={() => handleUpdate(fav._id)}
                  >
                    Save
                  </button>
                </>
              ) : (
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
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">My Favorites</h1>

//       {faves.length === 0 ? (
//         <p>No favorites yet</p>
//       ) : (
//         <div className="grid grid-cols-3 gap-4">
//           {faves.map((fav) => (
//             <div key={fav._id} className="border p-4 rounded-lg">
//               <p>Show ID: {fav.showID}</p>

//               <button
//                 className="mt-2 bg-red-500 text-white p-2 rounded"
//                 onClick={() => handleDelete(fav._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

export default Favorites

