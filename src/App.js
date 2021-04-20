
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './App.css';
import { getTestText } from "./Redux/selectors";
import { setTest } from './Redux/Actions/actions';
import Component1 from './Components/Component1';


function App() {

  const dispatch = useDispatch();
  const testText = useSelector(getTestText)

  const [test, setTestAux] = useState(testText);

  useEffect(() => {
    setTestAux(testText);
  }, [testText])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{test}</h1>
        <input value={test} onChange={(e) => { dispatch(setTest(e.target.value)) }}></input>
        <Component1 />
      </header>
    </div>
  );
}

export default App;
