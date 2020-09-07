import React from "react";
import "./Todo.css";
import { List, ListItem, ListItemText } from "@material-ui/core";

function Todo(props) {
  return (
    <div>
      <List className="todo_list">
        <ListItem>
          <ListItemText primary={props.todo} secondary="Todo Item 🚀" />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
