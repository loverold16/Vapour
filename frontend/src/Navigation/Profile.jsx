import React, { useContext, useState } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { loggedIn, username, message, login, logout } =
    useContext(AuthContext);
  let navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      {loggedIn ? (
        <>
          <div
            className="rounded-top text-white d-flex align-items-center justify-content-end px-5"
            style={{ backgroundColor: "#151515", height: "200px" }}
          >
            <div className="my-3">
              <h1>{username}</h1>
              <div className="d-flex gap-2">
              <button onClick={handleLogout} className="btn btn-xl btn-danger">LOGOUT</button>
              <button onClick={handleLogout} className="btn btn-xl btn-primary">EDIT PROFILE</button>
              </div>
            </div>
          </div>
          <div
            className="p-4 text-black"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="d-flex justify-content-end text-center py-1">
              <div>
                <p className="mb-1 h5">253</p>
                <p className="small text-muted mb-0">Photos</p>
              </div>
              <div className="px-3">
                <p className="mb-1 h5">1026</p>
                <p className="small text-muted mb-0">Followers</p>
              </div>
              <div>
                <p className="mb-1 h5">478</p>
                <p className="small text-muted mb-0">Following</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black" style={{ backgroundColor: "#151515" }}>
            <div className="mb-5">
              <p className="lead fw-normal mb-1">About</p>
              <div className="p-4">
                <p className="font-italic mb-1">Web Developer</p>
                <p className="font-italic mb-1">Lives in New York</p>
                <p className="font-italic mb-0">Photographer</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">Recent photos</p>
              <p className="mb-0">
                <a href="#!" className="text-muted">
                  Show all
                </a>
              </p>
            </div>
            <div className="row g-2">
              <div className="col mb-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="col mb-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
            </div>
            <div className="row g-2">
              <div className="col">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="col">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>You're not logged in! </h1>
      )}
    </>
  );
}
