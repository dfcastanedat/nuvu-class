export function getInitialState() {
    return {
        savedTest: [],
    }
}


export function setStateTest(state, action) {
    const { test } = action;
    console.log(test);
    return {
        ...state,
        savedTest: test,
    }
}