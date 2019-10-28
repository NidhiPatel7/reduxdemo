//in redux all things immutable( use old data and add new) so keep copy of old one

//actions have type 
// var addAction = {
//     type:'ADD_TODO',
//     payload:{
//         id:4,
//         content:'study react',
//         priority:'high',
//     }
// }

// var removeAction = {
//     type:'REMOVE_TODO',
//     payload:4,//id = 4 we want to delete
// }


//intial state createbcz allways start of state empty
var initialstate = [
    {
        id:1,
        content: 'Ring Peter',
        priority: 'Important'
      },
      {
        id:2,
        content: 'Water plants',
        priority: 'Urgent'
      },
      {
        id:3,
        content: 'Get milk',
        priority: 'Can wait'
      }
]
//create todo reducer and reducer do rollback like every time use last one
function todosReducer(state = initialstate,action)//function todosReducer(data,action) here action is delete or add etc and here state is todo
{
    if(action.type == 'ADD_TODO')
    {
        //add more
        //state.push(action.payload) we cant add like this bcz its mutable and in redux everything immutable 
        //best way return [...state,action.payload] this is immutable bcz we copy old data ...state and new data action.payload
        return [...state,action.payload]


    }
    else if (action.type == 'REMOVE_TODO')
    {
        //remove item from state
        var id = action.payload;
        return state.filter((todo) => {
            return todo.id !== id;
        })
    }
    else 
    {
        //nothing
        return state;
    }
    //return the state
}

export default todosReducer;