import {types} from "../types";

const initialState = {
    users: [],
    user: {}
}


export default function usersReducer(state= initialState, action) {
    switch (action.type) {
        case types.GET_USERS:
            return {...state, users: action.payload}
        case types.GET_USERS_ONE:
            return {...state, user: action.payload}

        default: return state
    }
}