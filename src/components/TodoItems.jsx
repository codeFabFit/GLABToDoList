
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
          <button onClick={onEditTodo}>Cancel</button>
          <button onClick={() => onSaveEdit(index, todo.text)}>Save</button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={onEditTodo}>Edit</button>
          <button onClick={onDeleteTodo} disabled={!todo.complete}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;