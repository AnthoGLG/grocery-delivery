import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/App.css";

const Row = ( props ) => {
  const { quantity, details } = props.item
  return (
    <tr>
      <td>
        <img
          width="70"
          height="70"
          src={process.env.PUBLIC_URL + `/assets/${details.category}/${details.image}`}
          alt={details.name}
        />
      </td>
      <td>{details.ref}</td>
      <td>€{details.price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">
            -
          </button>
          <span className="btn btn-light">{quantity}</span>
          <button type="button" className="btn btn-secondary">
            +
          </button>
        </div>
      </td>
      <td>€{(quantity * details.price).toFixed(2)}</td>
      <td>
        <button type="button" className="btn btn-danger remove">
          X
        </button>
      </td>
    </tr>
  );
};

const Table = () => {
  const items = useSelector(state => state.items)
  useEffect(() => {
    console.log(`You have ${items.length} in your cart`)
  })
  return (
    <table>
      <tr>
        <th width="200">Product</th>
        <th width="80">Reference</th>
        <th width="150">Price</th>
        <th width="150">Quantity</th>
        <th width="200">Total</th>
      </tr>
      {items.map(item => {
        return(<Row item={item}/>)
      })}
    </table>
  );
};

export const CartPage = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm cart">
            <Table />
          </div>
          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Order Summary</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Subtotal</li>
                  <li className="text-right">€0.00</li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">shipping</li>
                  <li className="text-right">€0.00</li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> >> Add Coupon Code</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left">Total</li>
                  <li className="text-right">€0.00</li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-light btn-lg btn-block checkout bg-crimson"
              disabled="true"
            >
              <a href="#" className="white">
                Checkout
              </a>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
