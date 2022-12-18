import React,{Component} from 'react';

export default class AddTodo extends Component{
     state ={
       Id:"",
       Title:"",
       Status:"Pending"
     }

     handleChange=(event)=>{
       console.log(event.target.value);
       if(event.target.name==="Id"){
         this.setState({
           Id:event.target.value
         })
       }else if(event.target.name==="title"){
         this.setState({
           Title:event.target.value
         })
       }else{
         this.setState({
           Status:event.target.value
         })
       }

     }



     handleToDoSubmit=(event)=>{
       event.preventDefault();
        console.log(this.state.Title);
        console.log(this.state.Status);

        this.props.onAdd({
          Id:this.state.Id,
          Title:this.state.Title,
          Status:this.state.Status
        });
        this.setState({Id:"",Title:"",Status:"Pending"});
     }

       render(){
         return(
           <div>
               <h3>
                 Add Todo
               </h3>
               <form onSubmit={this.handleToDoSubmit}>
                 <div className="form-group">
                    <input onChange={this.handleChange} name="Id" value={this.state.Id} className="form-control" placeholder="Enter Id"/>
                 </div>
                 <div className="form-group">
                    <input className="form-control" name="title" value={this.state.Title}  placeholder="Enter Title"/>
                 </div>
                 <div className="form-group">

                    <select value={this.state.Status} className="form-control" name="status">
                       <option value="Done">Done</option>
                       <option value="Pending">Pending</option>
                    </select>
                 </div>
               <button type="submit" className="form-control btn btn-primary">Add Todo</button>
               </form>
           </div>

         )
       }
}
