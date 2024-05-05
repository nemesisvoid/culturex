import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Bookmarks from './pages/Bookmarks';
import WatchedList from './pages/WatchedList';
import AppLayout from './components/AppLayout';
import MovieDetails from './features/details/MovieDetails';
import ShowDetails from './features/details/ShowDetails';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              element={<Home />}
              path='/'
            />
            <Route
              element={<Movies />}
              path='movies'
            />
            <Route
              element={<Shows />}
              path='shows'
            />
            <Route
              element={<Bookmarks />}
              path='bookmarks'
            />
            <Route
              element={<WatchedList />}
              path='watchedList'
            />

            <Route
              element={<MovieDetails />}
              path='movie/details/:id'
            />
            <Route
              element={<ShowDetails />}
              path='show/details/:id'
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
