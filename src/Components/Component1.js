import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTodoListRedux } from '../Redux/selectors';

export default function Component1() {

    const list = useSelector(getTodoListRedux);

    return (
        <h1>{list.length}</h1>
    )
}
