import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import Checkbox from "./components/Checkbox";

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
          <Route
            path="/movies"
            element={<div>This is movies pages</div>}
          ></Route>
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
