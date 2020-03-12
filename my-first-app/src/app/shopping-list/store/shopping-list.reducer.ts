import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.action';




// This defines the shopping list state
export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

// This is needed if you have some default values
const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Toms', 10)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}

// When we first run the app we want the state to be the initialState. If we update the state then that will become the new state.
export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            // State changes always have to be immutable so directly updating a value is wrong.
            // You must not edit the existing or previous state
            // DONT DO THIS
            // state.ingredients.push()

            // Instead we want to return a new object which will replace the old state.
            // To not lose the old data we can copy the old state with the spread operator
            return {
                // The spread operator will pull out all the properties from state and copy them to the new object.
                // ALWAYS COPY THE OLD STATE FOR CONSISTENCY
                ...state,
                // After we copy the old state we can override the values
                // Again use spread operator so we don't lose the old list of ingredients
                // Then add the new ingredients
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            // We do it this way to edit the data immutably
            // First we get the ingredient from the state by index
            const ingredient = state.ingredients[state.editedIngredientIndex];
            // Then we make an updatedIngredient by taking the original ingredient properties
            // Then add the properties from the payload.
            // This way we only replace what has changed.
            const updatedIngredient = {
                ...ingredient,
                ...action.payload
            };
            // Now we make a copy of the current state.ingredients
            const updatedIngredients = [...state.ingredients];
            // Then we reassign the value at the index to be the updatedIngredient we made.
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: updatedIngredients,
                editedIngredientIndex: -1,
                editedIngredient: null
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter((ingredient, index) => {
                    return index !== state.editedIngredientIndex;
                }),
                editedIngredientIndex: -1,
                editedIngredient: null
            };
        case ShoppingListActions.START_EDIT:
            // We want to make sure we get a copy of the ingredient we want to edit, so we do the spread operator here.
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: { ...state.ingredients[action.payload] }
            };
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        default:
            return state;
    }
}