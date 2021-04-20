
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import '../App.css';
import { getTestText, getTodoListRedux } from "../Redux/selectors";
import { deleteFromReduxList, pushToReduxList, setTest } from '../Redux/Actions/actions';
import Component1 from './Component1';


function View1({ history }) {

    const dispatch = useDispatch();
    const toDoListRedux = useSelector(getTodoListRedux)

    const [toDo, setToDo] = useState("");
    const [list, setList] = useState([]);

    const addToList = (toDo) => {
        dispatch(pushToReduxList(toDo));
        setList([...list, toDo])
    }

    useEffect(() => {
        console.table(toDoListRedux);
    }, [toDoListRedux])



    return (
        <div className="App">
            <header className="App-header">
                <h1>LISTA</h1>
                <input value={toDo} onChange={(e) => { setToDo(e.target.value) }}></input>
                <button onClick={() => { addToList(toDo) }}>Añadir</button>
                {toDoListRedux.map((item, index) => {
                    return (
                        <h1 key={index} onClick={() => { dispatch(deleteFromReduxList(index)) }} className="list__item">{item}</h1>
                    )
                })}
                <Component1 />
            </header>
        </div>
    );
}

export default View1;
