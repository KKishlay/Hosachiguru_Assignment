import React from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import "./index.css";
import { Link } from "react-router-dom";
const UpdateInputPet = () => {
  return (
    <div className="input-container">
      <SideBar />
      <div className="input-column-container">
        <Header />
        <div className="numbers-of-input">
          <p className="input-header">Update the pet in inventory</p>
          <p className="input-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <input
            type="search"
            className="search-input"
            placeholder="Own for lifetime"
          />
          <input
            type="search"
            className="search-input"
            placeholder="Adopt for 1 year"
          />
          <div className="label-input-container">
            <label className="input-label" htmlFor="lastName">
              Name<span className="astric">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="update-input-text"
              placeholder="German shepherd"
            />
          </div>
          <div className="label-input-container">
            <label className="input-label" htmlFor="lastName">
              Given name<span className="astric">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="update-input-text"
              placeholder="Morsel"
            />
          </div>
          <div className="label-input-container">
            <label className="input-label" htmlFor="lastName">
              price<span className="astric">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="update-input-text"
              placeholder="1280"
            />
          </div>
          <Link to="/update-image">
            <button className="input-button">Next</button>
          </Link>
          <Link to="/">
            <button className="cancel-input-button">cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UpdateInputPet;
