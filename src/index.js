import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import ToDoItems from "./ToDoItems";

var destination = document.querySelector("#container");

ReactDOM.render (
    <div>
        <h1><i class="fa fa-check-square-o"></i> To-Do List</h1>
        <TodoList harsh=""></TodoList>
    </div>
    ,
    destination
)
