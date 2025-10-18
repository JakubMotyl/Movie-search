import React, { useEffect, useState } from 'react'
import { getPopularMovie } from '../../scripts/api'
import { API_KEY, BASE_URL } from '../../scripts/api'

const MovieRating = ({ vote_average }) => {
  return (
    <div className='flex items-center w-fit bg-black rounded-[4px] h-6'>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" 
        alt="IMDb" 
        className="h-full"
      />
      <span className='movie-details'>
        {vote_average ? vote_average.toFixed(1) : 'N/A'}
      </span>
    </div>
  )
}

export default function Hero() {
  const [popularMovie, setPopularMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPopularMovie();           
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const movie = data.results[randomIndex];
        // console.log(movie);
        const detailsRes = await fetch(`${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}&language=en-US`);
        const details = await detailsRes.json();
        // console.log(details);
        setPopularMovie(details);
      } catch (error) {
        console.log('Error fetching movies', error)
      } 
    }
    fetchData(); 
  }, []);

  const handleChangeRuntime = (runtime) => {
    if (!runtime) return 'N/A';
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`
  }

  return (
    <>
      {
        popularMovie && (
          <div 
            className='relative h-[100vh] bg-center bg-cover flex items-end md:items-center px-10 py-10'
            style={{
              backgroundImage: popularMovie 
              ? `url(https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path})`
              : 'none',
              backgroundColor: !popularMovie ? '#000' : 'transparent'
            }}
          >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0"></div>
            {/* Movie Details */}
            <div className='relative z-10 flex flex-col gap-5 md:w-1/2 w-full'>
              <div>
                <p
                  className='text-white font-bold md:text-4xl text-3xl'
                >
                  {popularMovie.title}
                </p>
              </div>
              <div className='flex items-center justify-between'>
                <MovieRating vote_average={popularMovie.vote_average} />
                <div>
                  <span className='movie-details'>{handleChangeRuntime(popularMovie.runtime)}</span>
                </div>
                <div>
                  <span className='movie-details'>{popularMovie.release_date.slice(0,4)}</span>
                </div>
              </div>
              <div>
                <span className='text-[#f2f2f2] font-light md:text-[1rem] text-[0.9rem]'>
                  {popularMovie.overview}
                </span>
              </div>
              {/* Movie Buttons */}
              <div className='flex items-center gap-5 w-full'>
                <a 
                  href="#"
                  className='watch-now-btn'
                >
                  Watch Now
                </a>
                <a 
                  href="#"
                  className='add-to-list-btn'
                >
                  <i className="fa-solid fa-plus"></i>
                  Add To My List
                </a>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
