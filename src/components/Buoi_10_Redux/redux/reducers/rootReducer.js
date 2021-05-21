import { combineReducers } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import GameReducer from './GameReducer'

//redux nested
const rootReducer = combineReducers({
    countReducer : countReducer,
    userReducer : userReducer,
    GameReducer
})

export default rootReducer