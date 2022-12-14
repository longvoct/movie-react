import React from "react";
import { Link, NavLink } from "react-router-dom";
const ListLinks = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/movies",
    title: "Movies",
  },
];

const Header = () => {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        {ListLinks.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            {item.title}
          </Link>
        ))}
      </header>
    </>
  );
};

export default Header;
