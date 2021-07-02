import React,{Component} from "react";
//import TodoList from "./TodoList";

class ToDoItems extends Component {
    constructor(props){
    super(props);
    }
    // createTasks(entries) {
    //     return <li key={entries.key}>{entries.text}</li>
    //     }
    // }
    delete(key){
        return this.props.delete(key);
    }
    render() {
        let entries = this.props.entries;
        let listItems = entries.map((data) => {
            return <li key={data.key} >{data.text} <i class="fa fa-trash-o" id="kachra" onClick={() => this.delete(data.key)}></i></li>
        });//sends each item of object to perform its functionality--for each entry call createTasks
        return (
            <div id="itm">
                    <ul>
                        {listItems}
                    </ul>
            </div>
        );
    }
};
export default ToDoItems