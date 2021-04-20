import { TEST } from "../Actions/types";
import { getInitialState, setStateTest } from "./implementation";


const initialState = getInitialState();

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case TEST:
            return setStateTest(state, action);
        default:
            return state;
    }
}