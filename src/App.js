import React, { useState } from 'react';
import styled from 'styled-components'

// custom styling using styled-components!
const AppContainer = styled.div`
  margin: 40vh 30vw;
`

const TodoItemContainer = styled.div`
  &:hover > p {
    text-decoration: line-through;
  }
`

const TodoInput = styled.input`
  padding: 0.7em 0.5em;
  border: 1px solid black;
  border-radius: 4px;
`

function TodoItem(props) {
  return (
    <TodoItemContainer onClick={props.deleteCallback}>
      <p>{props.name}</p>
    </TodoItemContainer>
  )
}

function TodoForm(props) {
  
  const [todo, setTodo] = useState("")

  const handleSubmit = (e) => {
    // prevent form from refreshing the page
    e.preventDefault()
    // push a todo to the list
    props.addCallBack(todo)
    // clear form
    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <TodoInput type="text" placeholder="Add a new todo..." value={todo} onChange={e => setTodo(e.target.value)}/>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState(["finish this workshop!", "be able to check things off"])

  // callback to remove a todo
  const deleteTodo = (index) => {
    // copy current todos
    const newTodos = [...todos]
    // remove the todo at the given index from newTodos
    newTodos.splice(index, 1)
    // set todos to be the new todos
    setTodos(newTodos);
  }

  // add a todo
  const addTodo = (todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  return (
    <AppContainer>
      <h1>Todos</h1>
      {/* map over the todos state and turn them into <TodoItem> components! */}
      {todos.map((item, i) => <TodoItem
        key = {i}
        name = {item}
        deleteCallback = {() => deleteTodo(i)}
      />)}
      <TodoForm addCallBack={addTodo}/>
    </AppContainer>
  );
}
export default App;