import React from "react";
import SideBar from "../SideBar";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import ListItem from "../ListItem";
import "./index.css";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

const data = [
  { name: "Dogs", uv: 400, pv: 2400, amt: 2400 },
  {
    name: "Cows",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Horses",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const listsdata = [
  {
    id: 1,
    sno: "01",
    givenName: "ice",
    petName: "Barbet",
    price: "$1,250.08",
    status: "Adopted",
    editImage: <MdModeEditOutline />,
    deleteImage: <RiDeleteBin5Fill />,
  },
  {
    id: 2,
    sno: "02",
    givenName: "Morsel",
    petName: "Hamiltonstovare",
    price: "$44.07",
    status: "Available",
    editImage: <MdModeEditOutline />,
    deleteImage: <RiDeleteBin5Fill />,
  },
  {
    id: 3,
    sno: "03",
    givenName: "Spud",
    petName: "Fox Terrier",
    price: "$23.15",
    status: "Available",
    editImage: <MdModeEditOutline />,
    deleteImage: <RiDeleteBin5Fill />,
  },
  {
    id: 4,
    sno: "04",
    givenName: "Rasta",
    petName: "Norrbottenspets",
    price: "$500.31",
    status: "Adopted",
    editImage: <MdModeEditOutline />,
    deleteImage: <RiDeleteBin5Fill />,
  },
  {
    id: 5,
    sno: "05",
    givenName: "Rasta",
    petName: "Norrbottenspets",
    price: "$500.31",
    status: "Adopted",
    editImage: <MdModeEditOutline />,
    deleteImage: <RiDeleteBin5Fill />,
  },
];

const HomePage = () => {
  return (
    <div className="homepage-container">
      <SideBar />
      <div className="pet-details-list">
        <div className="home-header">
          <p className="header-name">Adopt a pet</p>
          <Link to="/inputpage">
            <button className="top-header-button">Add new pet</button>
          </Link>
        </div>

        <div className="chart-details">
          <LineChart width={600} height={250} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>

          <div className="details-conatiner">
            <p className="details-para">
              Each year, it's a estimated that more then one million adoptable
              dogs and cats are euthanized in the India, simply because too many
              pets came into shelters
            </p>
            <div className="total-pets-and-adopted">
              <div className="total-pets">
                <p className="total">Total Pets</p>
                <p className="number">46</p>
              </div>
              <div className="total-pets">
                <p className="total">Total adopted</p>
                <p className="number">15</p>
              </div>
            </div>
          </div>
        </div>

        <div className="details-view-all">
          <p>Pet details</p>
          <p className="view-all">
            view all <GoChevronRight />
          </p>
        </div>
        <div className="list-data-container">
          <div className="list-header">
            <p className="name-of-list">S.No</p>
            <p className="name-of-list">Given name</p>
            <p className="name-of-list">Pet name</p>
            <p className="name-of-list">Price</p>
            <p className="name-of-list">Status</p>
            <p className="name-of-list">Actions</p>
          </div>
          <ul className="pet-list">
            {listsdata.map((eachdata) => (
              <ListItem
                id={eachdata.id}
                key={eachdata.id}
                sno={eachdata.sno}
                givenName={eachdata.givenName}
                petName={eachdata.petName}
                price={eachdata.price}
                status={eachdata.status}
                editImage={eachdata.editImage}
                deleteImage={eachdata.deleteImage}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
