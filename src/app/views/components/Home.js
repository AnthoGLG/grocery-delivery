import React from "react";
import { List } from "../../components";
import { updateCart } from './../../lib/actions';

const SideMenu = ({ loadCategory, category }) => {
    const links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"];
  
    return (
      <div className="col-sm-2 sidebar">
        <ul>
          {links.map((link, index) => {
            return (
              <li
                className={category === index && "active"}
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

export const Home = props => {
  const {isFiltering, filtered, list, category, loadCategory, addToCart, updateCart} = props
  return (<div className="container">
  <div className="row">
    <SideMenu loadCategory={loadCategory} category={category} />
    <div className="col-sm">
      <div className="row">
        <List
          data={isFiltering ? filtered : list[category]}
          category={category}
          addToCart={addToCart}
          updateCart={updateCart}
        />
      </div>
    </div>
  </div>
</div>)
};
