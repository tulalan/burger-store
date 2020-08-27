import {combineReducers} from 'redux';
import BurgerReducer from './BurgerReducer';


const rootReducer = combineReducers({
    BurgerReducer : BurgerReducer
})

export default rootReducer