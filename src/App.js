import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  useEffect(() => {
    document.title = "Movie App";
  });
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetailsPage />}></Route>
        </Route>
        <Route
          path="*"
          element={<div className="text-white">Page not found</div>}
        ></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
