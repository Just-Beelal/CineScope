🎬 CineScope

CineScope is an open-source movie explorer app built with React Native (Expo).
It lets users search for movies via the TMDB API, track trending searches with Supabase, and view detailed movie info including posters, release dates, and overviews.

✨ Features

🔍 Search movies using TMDB API

📊 Trending section powered by Supabase (tracks most-searched movies)

🎥 Movie details page with poster, release date, and overview

🎨 Modern UI styled with NativeWind (Tailwind for React Native)

📱 Built with Expo Router for navigation

🚀 Tech Stack

React Native
(Expo)

Expo Router

NativeWind
(Tailwind for RN)

Supabase
(Postgres, RLS, API)

TMDB API
(movie data)

TypeScript

⚡️ Getting Started

1. Clone the repo
   git clone https://github.com/Just-Beelal/CineScope.git
   cd CineScope

2. Install dependencies
   npm install

3. Set up environment variables

Create a .env file in the root directory:

EXPO_PUBLIC_TMDB_API_KEY=972a79f9ef98f07033a73c2a251a1531
EXPO_PUBLIC_SUPABASE_URL=https://vkfixgygdwufnaitqsij.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrZml4Z3lnZHd1Zm5haXRxc2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1MDEwNjIsImV4cCI6MjA3NDA3NzA2Mn0.0ktUhdwab8bvsAyq0aAU4xA4FAnHRl5OF3xW3yZesC4

4. Run the app
   npx expo start

🛠 Supabase Setup

Create a new project on Supabase.

Create a table named metrics with these columns:

id → bigint (Primary key)

searchTerm → text

movie_id → int8

title → text

poster_url → text

count → int4

Enable Row Level Security (RLS) and add policies for insert, update, select.

📸 Screenshots

(Add screenshots of Home, Search, Trending, and Movie Details here)

🤝 Contributing

See CONTRIBUTING.md
for guidelines on how to get started.
We welcome contributions of all kinds — from code improvements to documentation!

## 👨‍💻 Credits

This project was developed by:

- _Bilal Abdulazeez Yakubu(Just-Beelal) (FCP/CSE/20/1049)_ – Project Lead, Git Manager, Supabase Setup, Initial Project Structure (pushed foundational files: .gitignore, README.md, LICENSE e.t.c and additional file like constants, lib e.t.c).
- _ALMUSTAPHA ABUBAKAR MUHAMMAD (FCP/CSE/20/1053)_ – Navigation (layout.tsx).
- _AYMAN DADUM (FCP/CSE/20/1052)_ – Search UI (search.tsx).
- _MAHMUD AMINA (FCP/CSE/20/1047)_ – Movie Display UI (MovieCard.tsx).
- _ABDULSALAM USMAN ADAM (FCP/CSE/20/1050)_ – Developed and Styled SearchBar UI (SearchBar.tsx).
- _ADAM UMAR (FCP/CSE/20/1055)_ – TMDB api fuction (api.ts).
- _MUSA ABDULLAHI MUSA (FCP/CSE/20/1045)_ – Trending Movies UI and part of the Logic (Trendingmovies.tsx).
- _ABUBAKAR JAMILU (FCP/CSE/20/1051)_ – Logic behind search (useFetch.tsx).
- _OLADELE BENJAMIN OLUTOLA (FCP/CSE/20/1054)_ – all the logic behind each movie card displayed ([id].tsx).

📄 License

This project is licensed under the MIT License.
We chose MIT because it is:

Simple and permissive

Encourages open collaboration

Works well for both personal and commercial use
