export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getPopularMovie = async () => {
  try {
    const res = await fetch(`${BASE_URL}/movie/popular?language=en-US&api_key=${API_KEY}`)
    const data = await res.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.error('Error fetching popular movies', error);
    return {results: []};
  }
}
