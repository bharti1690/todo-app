import React,{Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTodo from './AddTodo';
export default class TodoList extends Component{
  state = {
    todos:[
      {Id:1,Title:"The task is completed",Status:"Done"},
      {Id:2,Title:"The task is pending",Status:"Pending"}
    ]
  }

  deleteTodo=(todo)=>{
    const filteredItems = this.state.todos.filter(x=>x.Id!==todo.Id);
    this.setState({
      todos:filteredItems
    });
  }

  editTodo = (x) =>{
    this.setState(state=>({
       todos:state.todos.map(todo => {
         if(todo.Id === x.Id){
           return{
             ...todo,
             Status:todo.Status === "Done" ? "pending" : "Done"
           };
         }else{
           return todo;
         }
       })
    }))
  }

  addTodo=(todo)=>{
    this.setState({
      todos:[...this.state.todos,todo]
    })
  }

  render(){
    return(
      <div>
      <AddTodo onAdd={this.addTodo}></AddTodo>
         <h1>Todo List</h1>
         <table className="table">
            <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Status</th>

                </tr>
              </thead>
              <tbody>
              {
                this.state.todos.map(x=>{
                  return(
                    <tr>
                      <td>{x.Id}</td>
                      <td>{x.Title}</td>
                      <td style={{color:x.Status==="Done"?"green":"red"}}>{x.Status}</td>
                      <td>
                         <button className="btn btn-primary" onClick={()=>this.deleteTodo(x)}>
                           <span>
                             <FontAwesomeIcon icon='trash'></FontAwesomeIcon>

                           </span>

                         </button>
                         <button className="btn btn-primary" onClick={()=>this.editTodo(x)}>
                           <span>
                             <FontAwesomeIcon icon='edit'></FontAwesomeIcon>
                           </span>
                         </button>
                      </td>
                    </tr>
                  )
                })
              }
              </tbody>
         </table>
      </div>
    )
  }
}
