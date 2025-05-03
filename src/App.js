import './App.css';
import TodoTable from './components/TodoTable';
import React, {useState} from 'react';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos,setTodos]=useState([
    {rowNumber: 1, rowDescription: "Feed dog", rowAssigned: "Eric"},
    {rowNumber: 2, rowDescription: "Walk dog", rowAssigned: "Eric"},
    {rowNumber: 3, rowDescription: "Feed cat", rowAssigned: "Eric"},
    {rowNumber: 4, rowDescription: "Walk cat", rowAssigned: "Eric"}
  ]
)
  const addTodo = (description, assigned) => {
    
    let maxRowNumber = todos.length > 0 
    ? Math.max(...todos.map(todo => todo.rowNumber)) 
    : 0;
      const newTodo = {
        rowNumber: maxRowNumber + 1,
        rowDescription: description,
        rowAssigned: assigned
  };
      setTodos(todos=>[...todos, newTodo]);
      setShowAddTodoForm(false);
  }

  const deleteTodo = (deleteTodoNumber) => {
    let filtered = todos.filter((todo) => todo.rowNumber !== deleteTodoNumber);
    let reordered = filtered.map((todo, index) => ({
      ...todo,
      rowNumber: index + 1
    }));
    setTodos(reordered);
    
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button 
          onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>}
          
        </div>
      </div>
     
    </div>
  );
}

export default App;
