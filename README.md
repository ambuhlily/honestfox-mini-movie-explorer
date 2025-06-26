# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

🚀 Setup Instructions

npm install

npm run dev

The app should be running at:
http://localhost:5173

how i approached
- spun up basic react app with vite, installed and configured tailwind (eventually)
- codebase structure setup, pages, components etc.
- created all my pages with basic skeletons and set up routing using react router
- Implemented API call to omdb with the search bar, created movie card components.
- Movie detail page and favourites page.
- Created search context and favourites context.
- Added favourite button to movie detail page.
- Added notif toast
- Added some custom colours and font to tailwind styles
- Cleaned up layouts and did styling
- Fixed loading/ error/ empty states that were bugging out

my thoughts
- I have used the omdb api before so that was handy, I haven't used much Tailwind
however so the setup with the newest version of vite (v7) caused a lot of
issues before I realised vite v7 was even the issue. I just switched back to vite 6.3.5.
- Took about 6 hours in total. With some time on either end for housekeeping.
- I could have spent less time on the design and just done a more simple UI
theme that would have allowed a light/dark mode.
- I wanted to make sure that if someone clicked a movie to see details but then
went back to the search, the search query would still be there. If you click
the navbar app title it resets the search query.
- I am still finding the AI usage sweet spot.

My use of AI
- I used some chatgpt and some copilot.
- I typically like to use any AI tools to get something to appear or work
in its most basic form, and then edit and build out the details myself so I still
feel like I have control over the flow and what's happening.

With more time and a larger scope I would have included:
- light/dark mode and better UI theme
- infinite scroll (didn't feel like it needed)
- layout component for navbar
- if you click to movie detail page from favourites, it could take you back to
favourites instead of back to home/ search results.
- fixed focus state on search bar
- secure error handling
- testing
