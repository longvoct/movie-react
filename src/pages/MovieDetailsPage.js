import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

//https://api.themoviedb.org/3/movie/{movie_id)?api_key=dc6c85e0bac948cf596a5a8594683521
//"https://api.themoviedb.org/3/movie/now_playing?api_key=dc6c85e0bac948cf596a5a8594683521

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="page-container pb-10">
      <div className="w-full h-[500px] relative mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 mb-10 ">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-center text-3xl font-bold mb-10">{title}</h1>
      {genres && (
        <div className="flex items-center justify-center gap-x-5 mb-10">
          {genres.map((item, index) => (
            <span
              key={item.id}
              className="py-2 px-4 border-primary text-primary border rounded"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed font-light px-[50px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-center text-2xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-[65px]">
        {cast
          .filter((item, index) => {
            return item.profile_path !== null;
          })
          .slice(0, 4)
          .map((item) => (
            <div className="cast-item " key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                alt=""
                className="w-full object-cover rounded-lg h-[300px]  mb-5"
              />

              <h3 className="text-full font-medium">{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return <div></div>;
}

export default MovieDetailsPage;
