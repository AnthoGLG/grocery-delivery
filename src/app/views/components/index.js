import React, { Fragment, useState, useEffect } from "react";
import { Navbar } from "../../components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CartPage } from "./Cart";
import { Home } from "./Home";
import "../../styles/App.css";
import { list } from "../../data";
import { updateCart } from './../../lib/actions';

const App = props => {
  const { items, onAddToCart, onUpdateCart } = props
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [count, setCount] = useState(1);
  const loadCategory = (i) => {
    setCategory(i);
  };
  const filterResults = input => {
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

  const add = (item, quantity) => {
    onAddToCart(item, quantity)
  }

  const update = () => {

  }

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
              addToCart={add}
              updateCart={update}
              list={list}
              isFiltering={isFiltering}
              filtered={filtered}
            />
          )}
        />
        <Route path="/cart" component={CartPage} />
      </Router>
    </Fragment>
  );
};
export default App;
