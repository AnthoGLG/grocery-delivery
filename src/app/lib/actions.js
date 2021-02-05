
/*
* actions types
*/

const actions = {
    ADD_TO_CART = "ADD_TO_CART",
    UPDATE_CART ="UPDATE_CART",
    REMOVE_FROM_CART= "REMOVE_FROM_CART"
}

/*
* actions creators
*definir les fonctions qui vont servir a dispatcher le type d'action accompagner du payload
*/

const uid = Math.random().toString(34).slice(2)
function addToCart(item, quantity) {
    return{
        type: actions.ADD_TO_CART,
        payload : {id: uid(), quantity: quantity, details: item} 
    }
}

function updateCart(item, quantity) {
    return {
        type : actions.UPDATE_CART,
        payload : {item: item, quantity}
    }
}

function removeFromCart(item) {
    return {
        type: actions.REMOVE_FROM_CART,
        payload : item
    }
}
