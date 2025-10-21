# FilmZone

Minimal React + Vite app to browse movies and save favorites.

Website: [FilmZone](https://movie-search-lyart-five.vercel.app/)

## Features
- Displays a featured movie on the home Hero component.
- Browse categories, search, and add movies to a favorites list.
- Mobile-friendly navbar with a slide-out menu.
- Uses The Movie Database (TMDb) API via [`getPopularMovie`](src/scripts/api.js).

## Quick links
- App root: [`App`](src/App.jsx)
- Pages: [src/pages/Home.jsx](src/pages/Home.jsx), [src/pages/MyList.jsx](src/pages/MyList.jsx)
- Components:
  - [`Navbar`](src/components/Navbar.jsx)
  - [`Footer`](src/components/Footer.jsx)
  - Home: [`Hero`](src/components/Home/Hero.jsx), [`Search`](src/components/Home/Search.jsx)
  - MyList: [`Hero`](src/components/MyList/Hero.jsx)
- API helpers: [`getPopularMovie`](src/scripts/api.js) — [src/scripts/api.js](src/scripts/api.js)
- Styles: [src/index.css](src/index.css)
- Index / HTML entry: [index.html](index.html)
- Vite config: [vite.config.js](vite.config.js)
- Package config: [package.json](package.json)

## Setup

1. Copy your TMDb keys into a `.env` file at the project root:
   Vite expects variables prefixed with `VITE_` (example: `VITE_API_KEY`, `VITE_BASE_URL`).

2. Install dependencies:
```bash
npm install
```

3. Start dev server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Implementation notes
- Favorites state lives in [`App`](src/App.jsx) and is passed down to [`Search`](src/components/Home/Search.jsx) and [`MyList/Hero`](src/components/MyList/Hero.jsx).
- The home featured movie is fetched in [`Hero`](src/components/Home/Hero.jsx) using [`getPopularMovie`](src/scripts/api.js) and then additional details are fetched using the TMDb movie details endpoint.
- Navbar uses fixed positioning and a high `z-index` so it remains on top: see [`Navbar`](src/components/Navbar.jsx).

## Contributing
- Follow the existing style and Tailwind utility classes in [src/index.css](src/index.css).
- Add new components under `src/components` and reference them from pages in `src/pages`.
