import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { addToCart } from "./app/lib/actions";
import { store } from "./app/lib/store"
import App from './app/views'

// Log the initial state
console.log(store.getState);
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addToCart({name: "citron"}, 2))
store.dispatch(addToCart({name: "kiwi"}, 5))
unsubscribe()

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root")
);

