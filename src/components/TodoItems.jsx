
import React from 'react';

const TodoItem = ({
  todo,
  index,
  onToggleComplete,
  onEditTodo,
  onSaveEdit,
  onDeleteTodo,
  isEditing,
}) => {
  return (
    <li key={index}>
      <input type="checkbox" checked={todo.complete} onChange={() => onToggleComplete(index)} />
      {isEditing ? (
        <>
          <input type="text" value={todo.text} onChange={(e) => onSaveEdit(index, e.target.value)} />
          <button className='redo' onClick={onEditTodo}>Cancel</button>
          <button className='save' onClick={() => onSaveEdit(index, todo.text)}>Save</button>
        </>
      ) : (
        <>
          {todo.text}
          <button className='edit' onClick={onEditTodo}>Edit</button>
          <button className='delete' onClick={onDeleteTodo} disabled={!todo.complete}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;