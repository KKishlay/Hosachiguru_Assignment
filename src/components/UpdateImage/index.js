import React from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import "./index.css";
import { BsImages } from "react-icons/bs";
import { Link } from "react-router-dom";
// BsCardImage;

const UpdateImage = () => {
  return (
    <div className="add-images-container">
      <SideBar />
      <div className="add-images-column-container">
        <Header />
        <div className="upload-image-container">
          <p className="image-header">Modify images for the pet</p>
          <p className="image-para">
            Images should be horizontal, at least 1280x720px
          </p>
          <BsImages className="choose-img" />
          <button className="choose-img-button">Choose files (images)</button>
          <div className="preview-header-image">
            <p className="preview-header">preview the uploaded files</p>
            <div className="row-images">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMkyo-FFqNmnLp0Q0QMUDCFxnymgsEoje9A&usqp=CAU"
                alt="pet-image"
                className="update-preview-img"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYy4mS5E0-eG5aKeoTPTtkwal628dGFsrgA&usqp=CAU"
                alt="pet-image"
                className="update-preview-img"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzC8J0yjdX8lc7O8S4ii67OeZF9yudt4jk4g&usqp=CAU"
                alt="pet-image"
                className="update-preview-img"
              />
              {/* <BsCardImage className="preview-img" />
              <BsCardImage className="preview-img" />
              <BsCardImage className="preview-img" /> */}
            </div>
          </div>
          <Link to="/added-pet">
            <button className="update-input-button">Update</button>
          </Link>
          <Link to="/update-input-pet">
            <button className="update-cancel-input-button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UpdateImage;
