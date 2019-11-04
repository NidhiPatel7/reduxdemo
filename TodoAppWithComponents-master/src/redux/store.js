//(npm i -s redux)
import {createStore,combineReducers} from 'redux';//combineReducers use for combine if more than 2 reducer
import todosReducer from './todosReducer';//access the todo reducer
import userReducer from './userReducer';//access the user reducer

//combine  reducers
var rootReducer = combineReducers({
    todos : todosReducer,
    user : userReducer,
})
//create store => give at list one reducer or if we have multiple we combine as a package
var store = createStore(rootReducer)

// var action1 = {
//     type:'ADD_TODO',
//     payload:{
//         id:4,
//         content:'study react',
//         priority:'high',
//     }
// }
//store.dispatch(action1)//store.dispatch() send action

// var action2 = {
//     type:'REMOVE_TODO',
//     payload:2,
// }
// store.dispatch(action2)
//store.dispatch() send action


// var action3 = {
//     type:'ADD_TODO',
//     payload:{
//         id:6,
//         content:'testing react',
//         priority:'high',
//     }
// }
//store.dispatch(action3)//store.dispatch() send action
// var action4 = {
//     type:'SET_USER',
//     payload:{
//         id:1,
//         username:'peter.pan',
//     }
// }
// store.dispatch(action4)//store.dispatch() send action
// var action5 = {
//     type:'UNSET_USER',
// }
// store.dispatch(action5)//store.dispatch() send action

console.log(store.getState())

export default store;
//npm i react-redux to add redux in reacct