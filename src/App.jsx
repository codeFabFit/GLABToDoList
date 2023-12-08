import { useState } from 'react';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([{ text: newTodo, complete: false }, ...todos]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].complete = !updatedTodos[index].complete;
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const handleDeleteTodo = (index) => {
    if (todos[index].complete) {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    }
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onEditTodo={handleEditTodo}
        onSaveEdit={handleSaveEdit}
        onDeleteTodo={handleDeleteTodo}
        editingIndex={editingIndex}
      />
    </div>
  );
}


