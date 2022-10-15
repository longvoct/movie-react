import React, { useEffect, useState } from "react";
import useSWR from "swr";
import useDebounce from "../components/hooks/useDebounce";
import { MovieCard } from "../components/movie/MovieCard";
import { fetcher } from "../config";
import ReactPaginate from "react-paginate";
// https://api.themoviedb.org/3/search/movie?api_key={}

const pageCount = 5;
const itemsPerPage = 20;
const MoviePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=dc6c85e0bac948cf596a5a8594683521"
  );
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=dc6c85e0bac948cf596a5a8594683521&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=dc6c85e0bac948cf596a5a8594683521&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];
  useEffect(() => {
    if (!data || !data.total_pages) return;
    setPageCount(Math.ceil(data.total_pages.length / itemsPerPage));
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_pages;
    setItemOffset(newOffset);
  };
  // if (!data) return null;
  // const { page, total_pages } = data;

  return (
    <div className="movie-page py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Type here to search ..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies
            .filter((item) => {
              return item.backdrop_path !== null;
            })
            .map((item, index) => (
              <MovieCard
                key={`${item.id}${index}`}
                backdrop_path={item.backdrop_path}
                title={item.title}
                release_date={item.release_date}
                vote_average={item.vote_average}
                id={item.id}
                name={item.title}
              ></MovieCard>
            ))}
      </div>
      <div className="flex items-center justify-center mt-10 gap-x-5">
        <span
          className="cursor-pointer"
          onClick={() => setNextPage(nextPage - 1)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        {new Array(pageCount).fill(0).map((item, index) => (
          <span
            key={index}
            className="cursor-pointer inline-block py-2 px-4 rounded bg-white text-slate-900 leading-none"
            onClick={() => setNextPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}

        <span
          className="cursor-pointer"
          onClick={() => setNextPage(nextPage + 1)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MoviePage;
