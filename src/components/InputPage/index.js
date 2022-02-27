import React from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import "./index.css";
import { Link } from "react-router-dom";

const InputPage = () => {
  return (
    <div className="input-container">
      <SideBar />
      <div className="input-column-container">
        <Header />
        <div className="numbers-of-input">
          <p className="input-header">Add pet for adoption</p>
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
              className="input-text"
              placeholder="Breed of the pet"
            />
          </div>
          <div className="label-input-container">
            <label className="input-label" htmlFor="lastName">
              Given name<span className="astric">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="input-text"
              placeholder="Custom name of the pet"
            />
          </div>
          <div className="label-input-container">
            <label className="input-label" htmlFor="lastName">
              price<span className="astric">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="input-text"
              placeholder="Price the pet"
            />
          </div>
          <Link to="/add-images">
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
export default InputPage;
