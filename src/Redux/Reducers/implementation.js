export function getInitialState() {
    return {
        savedTest: [],
        toDoList: [],
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

export function pushToList(state, action) {
    const { item } = action;
    console.log(`Item to add ${item}`);
    return {
        ...state,
        toDoList: [...state.toDoList, item]
    }
}

export function deleteFromList(state, action) {
    const { index } = action;
    const aux = [...state.toDoList]
    aux.splice(index, 1);
    return {
        ...state,
        toDoList: aux
    }
}