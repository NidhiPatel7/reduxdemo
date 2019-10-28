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
            
            <Link to="/add">Add new todo</Link>
          </div>
    );
  }
}
function mapStateToProps(state)
{
    return{todos : state}
}
export default connect(mapStateToProps)(RouteAllTodos);






