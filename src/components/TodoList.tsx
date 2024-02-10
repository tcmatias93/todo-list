import React from 'react'
import { TodoListProps } from '@/types/todoList'
import Task from './Task'

export default function TodoList({ tasks }: TodoListProps) {

  const listTasks = tasks.tasks

  return (
    <div className="overflow-x-auto">
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
          {listTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}

        </tbody>


      </table>
    </div>
  )
}
