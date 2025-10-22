import { useState } from "react";

export default function Hero({ favorites, setFavorites }) {
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleRemoveFavorites = (movie) => {
    setFavorites(favorites.filter(item => item.id !== movie.id));

    // Popup message
    setPopupMessage(`${movie.title}\nhas been removed from your list.`);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }

  return (
    <div className="min-h-[100vh] px-6 md:px-12 py-20 bg-black text-white flex flex-col gap-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-wide">
          My Favorites <span className="text-red-500">List</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          All the movies you’ve saved in one place 🎬
        </p>
      </div>

      {/* Movies grid */}
      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {favorites.map((favorite, key) => (
            <div
              key={key}
              className="bg-gray-800 hover:bg-gray-700 relative rounded-xl overflow-hidden 
                hover:scale-105 duration-300 shadow-md group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${favorite.poster_path}`}
                alt={favorite.title}
                className="w-full h-auto"
              />
              {/* Title */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
                <h2 className="text-sm md:text-base font-medium">{favorite.title}</h2>
              </div>
              {/* Remove button */}
              <div
                className="absolute top-1 right-1 p-2 text-sm bg-black/70 rounded-full opacity-0 
                  group-hover:opacity-100 hover:bg-red-600 duration-300"
              >
                <button
                  onClick={() => handleRemoveFavorites(favorite)}
                  className="cursor-pointer"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 text-lg">
          You don’t have any favorites yet. Start adding some! ⭐
        </div>
      )}

      {/* Popup Message */}
      {
        showPopup && (
          <div className='fixed bottom-5 right-5 whitespace-pre-line text-white rounded-lg text-[0.85rem] font-light bg-red-600 px-4 py-2 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards] popup-shadow'>
            {popupMessage}
          </div>
        )
      }
    </div>
    
  )
}
