import { createStore, applyMiddleware } from 'redux';
import reducers from '../Redux/Reducers/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';

const composeEnhacers = composeWithDevTools({
    trace: true
});

const store = createStore(reducers, composeEnhacers(
    applyMiddleware(thunk),
    persistState()
));

export default store;