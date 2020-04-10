import { combineReducers } from 'redux';
import commentsReducer from "reducers/commentsReducer.js";

export default combineReducers({
	comments: commentsReducer
});
