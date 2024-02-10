'use client'
import React, { useState } from 'react'
import { TodoListProps } from '@/types/todoList'
import Task from './Task'

export default function TodoList({ tasks }: TodoListProps) {
  const [filter, setFilter] = useState<string>('todos');

  const listTasks = tasks.tasks

  const filteredTasks = listTasks.filter((task) => {
    if (filter === 'todos') return true;
    return task.status === (filter === 'pendiente' ? 'pendiente' : 'completada');
  });

  console.log(filteredTasks)

  return (
    <div className="overflow-x-auto">
      <div className=' flex gap-5 items-center'>
        <button onClick={() => setFilter('todos')}>Todas</button>
        <button onClick={() => setFilter('pendiente')}>Pendientes</button>
        <button onClick={() => setFilter('completada')}>Completas</button>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" disabled />
              </label>
            </th>
            <th>Tarea</th>
            <th>Estatus</th>
            <th>Edicion</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}

        </tbody>


      </table>
    </div>
  )
}
