import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";

const Banner = () => {
  const [movies, setMovies] = useState();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/search/movie?api_key=dc6c85e0bac948cf596a5a8594683521&query=''`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);

  const arrMovies = movies?.filter((item, index) => {
    return index < 9 && index !== 4;
  });

  return (
    <section className="banner h-[600px] page-container mb-20 overflow-hidden">
      {!movies}
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {movies &&
          arrMovies.map((item, index) => (
            <SwiperSlide key={item.id}>
              <BannerItem poster_path={item.poster_path}></BannerItem>{" "}
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ poster_path }) => {
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.15)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
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
  );
};

export default Banner;
