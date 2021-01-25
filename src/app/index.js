import React, { Fragment } from "react";
import { Navbar, List } from "./components";
import "./styles/App.css";


const SideMenu = () => {
  const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"];
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link) => {
          return <li>{link}</li>;
        })}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <SideMenu />
          <div className="col-sm">
            <div className="row">
              <List />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default App;
