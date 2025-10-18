import React, { useEffect, useState } from 'react'
import { API_KEY, BASE_URL } from '../../scripts/api';

export default function Search({ setFavorites }) {
  const [movies, setMovies] = useState([]);
  const [activeCategory, setActiveCategory] = useState('popular');
  const [query, setQuery] = useState('')

  const moviesCategories = [
    {id: 'popular', name: 'Popular'},
    {id: 'top_rated', name: 'Top Rated'},
    {id: 28, name: 'Action'},
    {id: 35, name: 'Comedy'},
    {id: 27, name: 'Horror'},
    {id: 10749, name: 'Romance'},
    {id: 878, name: 'Science Fiction'},
    {id: 16, name: 'Animation'}
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = '';

        if (query) {
          url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`
        } else {
          if (activeCategory === 'popular') {
          url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`;
          } else if (activeCategory === 'top_rated'){
            url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
          } else {
            url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${activeCategory}&language=en-US`;
          }
        }
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results)
        setMovies(data.results.slice(0, columns * 2));
        
      } catch (error) {
        console.log('Error fetching data', error)
      } 
    }

    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(delayDebounce)

  }, [activeCategory, query])

  // Always 12 Movies
  const columns = window.innerWidth >= 1024 ? 6
    : window.innerWidth >= 768 ? 4
    : window.innerWidth >= 640 ? 3
    : 2;

  const handleAddToFavorites = (movie) => {
    setFavorites(prev => {
      if (prev.some(fav => fav.id === movie.id)) return prev;
      // console.log([...prev, movie])
      return [...prev, movie];
    })
    alert(`${movie.title} has been added to your list :)`);
  }

  return (
    <div className='p-10 bg-black text-white flex flex-col gap-10'>
      <div className='text-center md:text-5xl text-4xl font-extralight'>
        <p>Ready to Chill?</p>
      </div>
      <div className='flex items-center justify-center'>
        <input
          className='input-search placeholder:text-sm placeholder:md:text-[1rem]'  
          placeholder='Type your movies titles here...'
          type="text" 
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      {/* MOVIES CATEGORIES */}
      <div className='flex gap-3 flex-wrap'>
        {moviesCategories.map(({ id, name }) => {
          return (
            <div 
              className={`px-4 py-2 rounded-2xl duration-300
                ${activeCategory  === id ? "bg-red-600 hover:bg-red-500" : "bg-gray-800 hover:bg-gray-700"}`} 
              key={id}
            >
              <button className='cursor-pointer' 
                onClick={() => {
                  setActiveCategory(id)
                  setQuery('')
                }}
              >
                {name}
              </button>
            </div>
          )
        })}
      </div>
      {/* MOVIES GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies
          .filter(movie => movie.poster_path)
          .map(movie => (
            <div key={movie.id} className="bg-gray-800 hover:bg-gray-700 relative
              rounded-lg overflow-hidden hover:scale-[1.03] duration-300 group"
            >
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="w-full h-auto"
              />
              <div className='absolute top-1 right-1 p-2 text-sm bg-gray-800 rounded-full opacity-0
              hover:bg-gray-700 duration-300 group-hover:opacity-100'
              >
                <button onClick={() => handleAddToFavorites(movie)} className='cursor-pointer'>
                  <i className="fa-solid fa-bookmark"></i>
                </button>
              </div>
            </div>
        ))}
      </div>
      {/* SHOW MORE */}
      <div className='flex items-center justify-center'>
        <button className='show-more-btn'
        >+</button>
      </div>
    </div>
  )
}
