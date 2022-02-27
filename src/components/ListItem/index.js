import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

const ListItem = ({
  sno,
  givenName,
  petName,
  price,
  status,
  editImage,
  deleteImage,
}) => {
  const [modal, setModel] = useState(false);

  const toggleModal = () => {
    setModel(!modal);
  };
  return (
    <li className="list-item">
      <p className="sno">{sno}</p>
      <p className="sno">{givenName}</p>
      <p className="petname">{petName}</p>
      <p className="price">{price}</p>
      <p className="sno">{status}</p>
      <div className="edit-delete">
        <Link to="/update-input-pet">
          <button className="edit-icon-btn">{editImage}</button>
        </Link>

        <button className="edit-icon-btn delete-icon-btn" onClick={toggleModal}>
          {deleteImage}
        </button>
        {modal && (
          <div className="popup">
            <div className="popup-inner">
              <p className="delete-popup">Remove the pet from inventory?</p>
              <div className="popoup-button-container">
                <button className="yes-btn" onClick={toggleModal}>
                  yes
                </button>
                <button className="no-btn" onClick={toggleModal}>
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};
export default ListItem;
