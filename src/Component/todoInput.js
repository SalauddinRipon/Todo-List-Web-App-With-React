import React, {Component} from 'react'
import './todoInput.css'
class TodoInput extends Component{

    constructor(props){
        super(props)
        this.state={
            value: ''
        }

        this.changeHandeler = this.changeHandeler.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    changeHandeler(e){
        this.setState({
            value:e.target.value
        });
        
    }
    addTodo(todo){
        //Ensure todo isn't empty
        if(todo.length >0){
            this.props.addTodo(todo);
            this.setState({
                value: ''
            })
        }
        
    }

    render(){
        return(
            <div>
                    <input type='text' 
                    value={this.state.value}
                    onChange={this.changeHandeler} />
                 <button className='btn btn-primary' 
                onClick={()=> this.addTodo(this.state.value) }>Submit</button>
            </div>
        )
    }
}

export default TodoInput