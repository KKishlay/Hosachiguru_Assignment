import HomePage from "./components/HomePage";
import InputPage from "./components/InputPage";
import AddImages from "./components/AddImages";
import AddedPet from "./components/AddedPet";
import UpdateInputPet from "./components/UpdateInputPet";
import UpdateImage from "./components/UpdateImage";
import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/inputpage" component={InputPage} />
      <Route exact path="/add-images" component={AddImages} />
      <Route exact path="/update-input-pet" component={UpdateInputPet} />
      <Route exact path="/update-image" component={UpdateImage} />
      <Route exact path="/added-pet" component={AddedPet} />
    </Switch>
  );
};
export default App;
