import React from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import "./index.css";
import { BsImages } from "react-icons/bs";
import { BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddImages = () => {
  return (
    <div className="add-images-container">
      <SideBar />
      <div className="add-images-column-container">
        <Header />
        <div className="upload-image-container">
          <p className="image-header">Add images for the pet</p>
          <p className="image-para">
            Images should be horizontal, at least 1280x720px
          </p>
          <BsImages className="choose-img" />
          <button className="choose-img-button">Choose files (images)</button>
          <div className="preview-header-image">
            <p className="preview-header">preview the uploaded files</p>
            <div className="row-images">
              <BsCardImage className="preview-img" />
              <BsCardImage className="preview-img" />
              <BsCardImage className="preview-img" />
            </div>
          </div>
          <Link to="/added-pet">
            <button className="input-button">Save</button>
          </Link>
          <Link to="/inputpage">
            <button className="cancel-input-button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AddImages;
