import { ADD_TO_LIST, DELETE_FROM_LIST, TEST } from "../Actions/types";
import { deleteFromList, getInitialState, pushToList, setStateTest } from "./implementation";


const initialState = getInitialState();

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case TEST:
            return setStateTest(state, action);
        case ADD_TO_LIST:
            return pushToList(state, action);
        case DELETE_FROM_LIST:
            return deleteFromList(state, action);
        default:
            return state;
    }
}