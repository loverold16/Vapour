import React, { Suspense, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const menus = [
    { label: "Home", path: "/" },
    { label: "All Games", path: "/games" },
    { label: "Tags", path: "/tags" },
    { label: "Genres", path: "/genres" },
    { label: "Platforms", path: "/platforms" },
    { label: "Stores", path: "/stores" },
    { label: "Publishers", path: "/publishers" },
    { label: "Developers", path: "/developers" },
  ];

  const location = useLocation()
  const [query, setQuery] = useState("");
  let navigate = useNavigate();
  const handleSearch = (e) => {
    setQuery(e.target.value.toLowerCase());

    if (e.target.value) {
      setTimeout(() => {
        navigate(`/search?q=${e.target.value}`);
      }, 1000);
    } else {
      navigate("/games");
    }
  };

  const getPagetitle = (item) => {
    document.title = item
    return item;
  }

  return (
    <>
      <nav className={`navbar navbar-expand-xl sticky-top py-0`}>
        <div className="container-fluid">
          <a className="navbar-brand text-white py-0" href="/">
            VAPOUR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menus?.map((item, id) => (
                <li className={`nav-item ${location.pathname === item.path ? 'active' : ''}`} key={id}>
                  <input type="text" value={getPagetitle(item.label)} className="d-none" />
                  <Link className="nav-link text-white" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="navbar-nav mb-lg-0 align-items-start mb-3 mx-2">
              <li className="account__data mx-1">
                <Link to={"/login"} className={`px-3 nav-link ${location.pathname === '/login' ? 'active' : ''}`}>
                  Login
                </Link>
              </li>
              <li className="account__data">
                <Link to={"/register"}className={`px-3 nav-link ${location.pathname === '/register' ? 'active' : ''}`}>
                  Sign Up
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                value={query}
                onChange={handleSearch}
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
