import { combineReducers } from 'redux';
import { changeCart } from './reducers';

const allReducers = combineReducers({
    products: changeCart,
});

export default allReducers;