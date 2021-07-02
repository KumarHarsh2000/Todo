import React,{Component} from "react";
import ToDoItems from "./ToDoItems";
class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [] 
        };
        this.addItem = this.addItem.bind(this);//this is to make render more than one
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(event) {
     console.log(event.target[0].value);
     //console.log(this._inputElement.value);
     let temp = this._inputElement.value;
     temp = temp.split(" ").join(""); 
     if(this._inputElement.value !== "" && temp !== ""){
        var newItem = {//key for unique reference
            text: this._inputElement.value,
            key: Date.now()
        }
        this.state.items.push(newItem);
        this.setState({});
        /*this.setState((preState)=> {
            return {
                items = preState.items.concat(newItem);
            };
        }
        );*/
     //event.preventDefault();
        this._inputElement.value = "";
    }

    console.log(this.state.items);
    event.preventDefault();
}
    deleteItem(key){
        var filteredItems = this.state.items.filter((item) => {
            return (item.key !== key)
        });
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return(
            <div>
                <form onSubmit ={this.addItem} >
                    <input  ref={(a) => this._inputElement = a } placeholder="Enter Task">
                    </input>
                    <button type="submit"><i class="fa fa-plus"></i></button>
                </form>
                {this.props.harsh ? this.props.harsh : null}
                <ToDoItems entries={this.state.items} delete={this.deleteItem}></ToDoItems>
            </div>
        );
    }
}

export default TodoList