import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["apple", "grapes"]);
  const [input, setInput] = useState("");

  const addTodos = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1> React TODO App </h1>
      <form>
        <FormControl>
          <InputLabel>✔ Write a Todo </InputLabel>
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </FormControl>
        <Button
          type="submit"
          disabled={!input}
          onClick={addTodos}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
