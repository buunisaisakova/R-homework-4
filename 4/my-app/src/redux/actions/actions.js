import {types} from "../types";


function getUsersAction (users) {
    return {
        type: types.GET_USERS,
        payload: users
    }
}

function getUserOneAction (user){
    return {
        type: types.GET_USERS_ONE,
        payload: user
    }

}


export function fetchUsersAction () {

    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

export function fetchUserOneAction (id) {

    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
       dispatch(getUserOneAction(data))
    }
}