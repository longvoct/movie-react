import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "./MovieCard";
import { fetcher } from "../../config.js";
import { Pagination } from "swiper";
//https://api.themoviedb.org/3/movie/now_playing?api_key=sfad
//https://api.themoviedb.org/3/movie/550?api_key=dc6c85e0bac948cf596a5a8594683521

import useSWR from "swr";
import { useState } from "react";

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=dc6c85e0bac948cf596a5a8594683521`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  console.log(movies);

  /*   useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=dc6c85e0bac948cf596a5a8594683521"
        );
        console.log(response.data.results);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []); */

  return (
    <div className="movie-list select-none">
      <Swiper
        slidesPerView={4}
        // centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movies &&
          movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <MovieCard
                  backdrop_path={item.backdrop_path}
                  title={item.title}
                  release_date={item.release_date}
                  vote_average={item.vote_average}
                  id={item.id}
                ></MovieCard>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default MovieList;
