import React, { Fragment, useState } from "react";
import { Navbar, List } from "./components";
import "./styles/App.css";
import { list } from "./data";

const SideMenu = ({ loadCategory, category }) => {
  const links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"];

  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => {
          return (
            <li
              className={ category === index && 'active'}
              key={index}
              onClick={() => loadCategory(index)}
            >
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const App = () => {
  const [category, setCategory] = useState(0);
  const loadCategory = (i) => {
    setCategory(i);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <SideMenu loadCategory={loadCategory} category={category}/>
          <div className="col-sm">
            <div className="row">
              <List data={list} category={category} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default App;
