import { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Movie App";
  });
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.15)] rounded-lg"></div>
          <img
            src="https://cdnimg.vietnamplus.vn/t1200/Uploaded/Mtpyelagtpy/2019_04_29/avengersendgame2904.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg object-top"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-[25px] mb-3  ">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="py-3 px-6 rounded bg-primary text-white font-medium">
              Watch Now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          Now playing
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white ">
            <img
              src="https://www.axn-asia.com/sites/axn-asia.com/files/ct_series_f_primary_image/spiderman_homecoming_-_keyart.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="text-white text-lg  font-bold mb-3">
              Spiderman: Homecoming
            </h3>
            <div className="flex items-center justify-between text-sm opacity-50 font-regular mb-8">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          Top rated
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white ">
            <img
              src="https://www.axn-asia.com/sites/axn-asia.com/files/ct_series_f_primary_image/spiderman_homecoming_-_keyart.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="text-white text-lg  font-bold mb-3">
              Spiderman: Homecoming
            </h3>
            <div className="flex items-center justify-between text-sm opacity-50 font-regular mb-8">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          Treding
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white ">
            <img
              src="https://www.axn-asia.com/sites/axn-asia.com/files/ct_series_f_primary_image/spiderman_homecoming_-_keyart.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="text-white text-lg  font-bold mb-3">
              Spiderman: Homecoming
            </h3>
            <div className="flex items-center justify-between text-sm opacity-50 font-regular mb-8">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
