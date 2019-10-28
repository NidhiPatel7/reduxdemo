//(npm i -s redux)
import {createStore} from 'redux';
import todosReducer from './todosReducer';//access the reducer

//create store => give at list one reducer or if we have multiple we combine as a package
var store = createStore(todosReducer)

var action1 = {
    type:'ADD_TODO',
    payload:{
        id:4,
        content:'study react',
        priority:'high',
    }
}
store.dispatch(action1)//store.dispatch() send action

var action2 = {
    type:'REMOVE_TODO',
    payload:2,
}
store.dispatch(action2)//store.dispatch() send action


var action3 = {
    type:'ADD_TODO',
    payload:{
        id:6,
        content:'testing react',
        priority:'high',
    }
}
store.dispatch(action3)//store.dispatch() send action

console.log(store.getState())

export default store;
//npm i react-redux to add redux in reacct