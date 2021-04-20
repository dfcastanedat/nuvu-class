import { ADD_TO_LIST, DELETE_FROM_LIST, TEST } from "./types";

export const setTest = (test) => (
    {
        type: TEST,
        test,
    }
);

export const pushToReduxList = (item) => (
    {
        type: ADD_TO_LIST,
        item
    }
)

export const deleteFromReduxList = (index) => (
    {
        type: DELETE_FROM_LIST,
        index
    }
)