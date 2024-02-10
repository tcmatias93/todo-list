import React from 'react'
import { TodoListProps } from '@/types/todoList'
import Task from './Task'

export default function TodoList({ tasks }: TodoListProps) {
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
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
            </td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <Task />
        </tbody>


      </table>
    </div>
  )
}
