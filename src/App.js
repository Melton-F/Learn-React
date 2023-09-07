import Header from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { useState } from "react";
import { AddToDo } from "./AddToDo";
import { SearchTodo } from "./SearchTodo";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todo_list"))
  );

  const [newToDos, setNewToDos] = useState("");
  const [search, setSearch] = useState('')

  const handleCheck = (id) => {
    const alterTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
    });
    setTodos(alterTodos);
    localStorage.setItem("todo_list", JSON.stringify(alterTodos));
  };

  //Task
  const handleDeleteTodo = (id) => {
    const alterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(alterTodos);
    localStorage.setItem("todo_list", JSON.stringify(alterTodos));
  };

  const addItems = (todo) => {
    const id = todos.length ? todos.length + 1 : 1;
    const addNewTodo = {
      id,
      activity: todo,
      checked: false,
    };
    const listTodo = [...todos, addNewTodo];
    setTodos(listTodo);
    localStorage.setItem("todo_list", JSON.stringify(listTodo));
  };


  // const handleEmptyTodo = (params) =>{
  //     if(params.length < 1){
  //         return <h1>Your To Do are empty..!</h1>
  //     }
  // }

  const handleAddButton = (event) => {
    event.preventDefault();
    if (!newToDos) return;
    addItems(newToDos);
    setNewToDos("");
  };

  return (
    <div className="App">
      <Header head="ToDo" />
      <AddToDo
        newToDos={newToDos}
        setNewToDos={setNewToDos}
        handleAddButton={handleAddButton}
      />
      <SearchTodo
        search={search}
        setSearch={setSearch}
      />
      <Content
        todos={todos.filter((element)=>(element.activity).toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDeleteTodo={handleDeleteTodo}
      />
      <Footer length={todos.length} />
    </div>
  );
}

export default App;
