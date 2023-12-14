import { useEffect, useState, useReducer} from 'react';
import TodoList from './components/TodoList';
import post from '/data/db.json';
import './app.css';
import api from './api/post';
import axios from 'axios';



export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [posts, setPosts] = useState([]);


  const handleAddTodo = async () => {
    if (newTodo.trim() !== '') {
     setTodos([{ text: newTodo, complete: false }, ...todos]);
      setNewTodo(''); 
      try { 
       const response = await api.post('/posts', axios)
       const posts = [...posts, response.data]; 
     } catch (error) {
       console.log(`Error: ${error.message}`)
      }
      console.log(post)
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
    updatedTodos[index].text = newText
      setTodos(updatedTodos);
    setEditingIndex(null);
    
  };




  const handleDeleteTodo = (index) => {
    if (todos[index].complete) {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    }
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await api.get('/posts');
          setPosts(response.data);
        } catch (error) {
          if (error.response){
            console.log(err.response.data);
            console.log(err.response.status); 
            console.log(err.response.headers)
            } else {
              console.log(`Error: ${err.message}`)
            }
                
          }
        }
      fetchPosts()
    }, [])
      }

  return (
    <div>
      <h1>To Do List</h1>
      <input className='admission'
        type="text"
        placeholder="Add to your list"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className='btn' onClick={handleAddTodo}>Add</button>
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


