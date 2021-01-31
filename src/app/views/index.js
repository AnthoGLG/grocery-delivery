import React, { Fragment, useState, useEffect } from "react";
import { Navbar } from "../components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Cart } from "./Cart";
import { Home } from "./Home";
import "../styles/App.css";
import { list } from "../data";

const App = () => {
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [count, setCount] = useState(1);
  const loadCategory = (i) => {
    setCategory(i);
  };
  const filterResults = (input) => {
    let fullList = list.flat();
    let results = fullList.filter((item) => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) > -1;
    });
    setFiltered(results);
  };
  useEffect(() => {
    console.log(isFiltering);
  });
  return (
    <Fragment>
      <Router>
        <Navbar
          filter={filterResults}
          setFiltering={setFiltering}
          count={count}
        />

        {/* Routes */}
        <Route
          exact
          path="/"
          component={() => (
            <Home
              category={category}
              loadCategory={loadCategory}
              addToCart={setCount}
              count={count}
              list={list}
              isFiltering={isFiltering}
              filtered={filtered}
            />
          )}
        />
        <Route path="/cart" component={Cart} />
      </Router>
    </Fragment>
  );
};
export default App;
