import React from "react";
import { useNavigate } from "react-router-dom";

export const MovieCard = (props) => {
  /**
   * 0:
adult: false
backdrop_path: "/vvObT0eIWGlArLQx3K5wZ0uT812.jpg"
genre_ids: (3) [28, 12, 14]
id: 616037
original_language: "en"
original_title: "Thor: Love and Thunder"
overview: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late."
popularity: 7036.373
poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
release_date: "2022-07-06"
title: "Thor: Love and Thunder"
video: false
vote_average: 6.8
vote_count: 2067
[[Prototype]]: Object
   */

  //`https://image.tmdb.org/t/p/original/${data.poster_path}`
  const navigate = useNavigate();
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white flex flex-col">
      <div className="h-[330px] flex-0">
        <div className="image ">
          <img
            src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
            alt=""
            className="w-full h-[250px] object-cover rounded-lg mb-5"
          />
        </div>
        <h3 className="text-white text-lg  font-bold mb-[30px]">
          {props.name}
        </h3>
      </div>
      <div className="content flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between text-sm opacity-50 font-regular mb-8">
          <span>{new Date(props.release_date).getFullYear()}</span>
          <span>{props.vote_average}</span>
        </div>
        <div className="">
          <button
            onClick={() => navigate(`/movie/${props.id}`)}
            className="py-3 px-6 rounded-lg capitalize bg-primary w-full "
          >
            Watch now
          </button>
        </div>
      </div>
    </div>
  );
};
