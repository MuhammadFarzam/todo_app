import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import { fdb } from "./firebase";
import firebase from "firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fdb
      .collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodos = (e) => {
    e.preventDefault();
    fdb.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
