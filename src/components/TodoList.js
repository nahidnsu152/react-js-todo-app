import React from 'react'
import Todo from "./Todo"

const TodoList = ({todos,setTodos,selectedTodos}) => {
    return (
        <div className= "todo-container">
            <ul className="todo-list"> 
                {selectedTodos.map((todo) => (
                    <Todo
                    text={todo.text}
                    key={todo.id}
                    todos={todos}
                    todo={todo}
                    setTodos={setTodos} 
                    />
                ))}
            </ul>
        </div>
     )
}

export default TodoList
