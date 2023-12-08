import React from 'react';
import TodoItem from './TodoItems';

const TodoList = ({
  todos,
  onToggleComplete,
  onEditTodo,
  onSaveEdit,
  onDeleteTodo,
  editingIndex,
}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onToggleComplete={onToggleComplete}
          onEditTodo={() => onEditTodo(index)}
          onSaveEdit={onSaveEdit}
          onDeleteTodo={() => onDeleteTodo(index)}
          isEditing={editingIndex === index}
        />
      ))}
    </ul>
  );
};
export default TodoList;