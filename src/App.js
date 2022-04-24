import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

// export enq anum vor index.jsum ereva
export default class App extends React.Component {

  // state popoxakanneri tiruyt a
  state = {    //stexcenq todo arraye vore irenic nerkayacnum a object 3 el-ic
    todos: [
      { id: 1, title: 'HTML', done: false },
      { id: 2, title: 'CSS', done: false },
      { id: 3, title: 'JavaScript', done: false },
      { id: 4, title: 'TypeScript', done: false },
      { id: 5, title: 'React', done: false },
      { id: 6, title: 'Angular', done: true },
      { id: 7, title: 'Vue', done: true }
    ]
  };

  removeTodo = (id) => { // jnjum enq yst id
    let todos = this.state.todos; // statei mej popxutyun chenq anum , vercnum enq nor popoxakan u veragrum ed popoxakanin
    todos = todos.filter(el => el.id !== id);
    this.setState({ todos });  //todos: todos // ete keyn u valuen unen nuyn anune karox enq dnel menak meke` todos
  }

  addTodo = (title) => {
    const todos = this.state.todos; // vercreci arraye
    const todo = {  // nor el stexceci
      id: Date.now(),
      title: title,
      done: false
    };
    todos.push(todo);   // avelacreci elemente
    this.setState({ todos }) // dreci elemente
  }

  doneTodo = (id) => {  // gtnum enq yst id
    const todos = this.state.todos;
    todos.map(el => {
      if (el.id === id) el.done = !el.done; // konkret  es id-ov done kpoxi  
      return el;
    });
    this.setState({ todos });
  }

  render() { // kanchvum a erb uzum enq inch vor ban tesnenq
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        {this.state.todos.length ? <TodoList todos={this.state.todos} removeTodo={this.removeTodo} doneTodo={this.doneTodo} /> : <p>No Todo</p>}
      </div>
    );
  }

  // classi depqum rendern enq kanchum functiayi depqum petq chi render`tes todoLiast.js

}

// kam es tarberakov

// import React, { useState } from 'react';
// import TodoList1 from './TodoList1'

// const App1 = () => {

//   const [todo,setTodo] = useState([
//       { title: 'react', id: 1, done: true },
//       { title: 'angular', id: 2, done: true },
//       { title: 'vue', id: 3, done: true } 
//     ])  

//     const addTodo = (e) => {
//         e.preventDefault()
//         console.log(e.target.value);
//     }

//   return (
//     <div className='App'>
//         <form>
//             <input value={todo.title}/>
//             <button onClick={(e)=>addTodo(e.target.value)}>add</button>
//         </form>
//         <div>
//           <TodoList1 todo={todo} addTodo={addTodo}/>
//         </div>
//     </div>
//   )
// }

// export default App1

