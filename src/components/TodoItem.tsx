import React from 'react';
import { Check, Trash2, Circle } from 'lucide-react';

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
    category: string;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className={`group flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm transition-all duration-200 ${
        todo.completed ? 'opacity-75' : ''
      }`}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={`p-1 rounded-full transition-colors duration-200 ${
          todo.completed ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100'
        }`}
      >
        {todo.completed ? (
          <Check className="w-5 h-5" />
        ) : (
          <Circle className="w-5 h-5" />
        )}
      </button>
      
      <span
        className={`flex-1 text-gray-700 ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {todo.text}
      </span>
      
      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
        {todo.category}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:bg-red-50 rounded transition-all duration-200"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}