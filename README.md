# FilmZone 🎬

A movie discovery app allowing users to browse categories, search for titles, and manage a favorites list using the TMDB API.

🚀 **Live Demo:** [View App Here](https://movie-search-lyart-five.vercel.app)

## 🛠 Tech Stack
- **Core:** React, Vite, React Router
- **Styling:** Tailwind CSS
- **API:** TMDB API (The Movie Database)

## ✨ Features
- Movie search functionality.
- Browse by categories (Popular, Top Rated, etc.).
- "My List" feature for saving favorite movies.
- Detailed movie views in hero section with ratings and descriptions.
  
## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
      git clone https://github.com/JakubMotyl/Movie-search.git
      cd Movie-search
   ```
2. **Install dependencies:**
   ```bash
     npm install
   ```
3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and your TMDB API key:
   ```env
      VITE_API_KEY=your_tmdb_api_key
      VITE_BASE_URL=https://api.themoviedb.org/3
   ```
4. **Start with development server:**
   ```bash
     npm run dev
   ```
