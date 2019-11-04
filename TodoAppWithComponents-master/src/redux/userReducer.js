//in redux all things immutable( use old data and add new) so keep copy of old one

//actions have type 
// var setUserAction = {
//     type:'SET_USER',
//     payload:{
//         id:4,
//         username:'peter.pan',
        
//     }
// }

// var unsetUserAction = {
//     type:'UNSET_USER',
// }


//intial state createbcz allways start of state empty
var initialstate = null;
//create todo reducer and reducer do rollback like every time use last one
function userReducer(state = initialstate,action)//function todosReducer(data,action) here action is delete or add etc and here state is todo
{
    if(action.type == 'SET_USER')
    {
        //if current user there set it
        return action.payload;
    }
    else if (action.type == 'UNSET_USER')
    {
        //if current user no the there nothing
        return null;
    }
    else 
    {
        //nothing
        return state;
    }
    //return the state
}

export default userReducer;