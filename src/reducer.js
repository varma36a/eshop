// Here we define all the application level states and define actions to make
// the changes to the state

export const initialState = {
    basket: [],
};

//Selector

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,  // ... means it will retrieve the previous state
                basket: [...state.basket, action.item], // adding the item to the basket
            };
    }
};

export default reducer;