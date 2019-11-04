import React, {Component} from 'react';
import Todo from './Todo';
import { Router, Link, navigate } from '@reach/router'
import {connect} from 'react-redux';

class  RouteAllTodos extends Component {
  
  constructor(props){
    super(props);
    // this.state = {
    //   todos:[
    //     {
    //       id:1,
    //       content: 'Ring Peter',
    //       priority: 'Important'
    //     },
    //     {
    //       id:2,
    //       content: 'Water plants',
    //       priority: 'Urgent'
    //     },
    //     {
    //       id:3,
    //       content: 'Get milk',
    //       priority: 'Can wait'
    //     }
    //   ]
    // };
  }

  handleLogoutClick = (e) => {
    e.preventDefault();
    this.props.unsetUser();
  }

  render(){
    return (
          <div className="todos">
            {
             this.props.todos.map((todo) => {
                
                var todoProps = {
                  ...todo,
                  key: todo.id,
                  //removeTodo: this.removeTodo,
           
                };

                return (
                  <Todo {...todoProps}/>
                )
              })
            }
            { this.props.currentUser == null ? <Link to="/login">login</Link>: 
            ( <>
              <Link to="/add">Add new todo</Link> |
              <a href="#" onClick={this.handleLogoutClick}>Logout</a>
            </>) }
            
            
          </div>
    );
  }
}
function mapStateToProps(state)
{
    return{todos : state.todos,
            currentUser : state.user,
    }
    // state.todos => todos come frome store.js 
    //from var rootReducer = combineReducers({
    //todos : todosReducer,
//})

}
function mapDispatchToProps(dispatch)
{
	return {
		unsetUser: () => {
			var action = {
				type:'UNSET_USER',
				
			}
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(RouteAllTodos);






