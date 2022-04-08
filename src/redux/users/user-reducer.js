import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from "./user-action";

const users = createReducer([], {
    [actions.createUser]: (state, { payload }) => [payload, ...state]
});

export default combineReducers({users});