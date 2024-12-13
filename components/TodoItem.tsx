import React from 'react'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

interface TodoItemProps {
  todo: {
    id: number
    text: string
    completed: boolean
  }
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-gray-50 rounded-md shadow-sm">
      <div className="flex items-center">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={onToggle}
          className="mr-3"
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
        >
          {todo.text}
        </label>
      </div>
      <Button variant="ghost" size="icon" onClick={onDelete} className="text-red-500 hover:text-red-700">
        <Trash2 className="w-5 h-5" />
      </Button>
    </div>
  )
}

