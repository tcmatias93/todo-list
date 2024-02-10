'use client'
import React, { FormEventHandler, useState } from 'react'
import { TaskProps } from '@/types/task'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'




export default function Task({ task }: TaskProps) {

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  const [taskEdit, setTaskEdit] = useState<string>(task.task)
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [isPendin, setIsPendin] = useState<boolean>(task.status === 'finalizado' ? false : true)
  const router = useRouter()

  console.log(isPendin)


  const hanleDeteleTask: FormEventHandler<HTMLFormElement> = async (taskId: String) => {
    console.log('deletedTask:', taskId);
    try {
      const res = await fetch('http://localhost:3000/api/tasks', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId }),
      });

      if (res.ok) {
        router.refresh();
      } else {
        throw new Error("Fallo la eliminación de la tarea");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTask: FormEventHandler<HTMLFormElement> = async (taskId: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/tasks`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId,
          updatedTaskData: { task: taskEdit }
        }),
      });

      if (res.ok) {

        router.refresh();
      } else {
        throw new Error("Fallo la actualización de la tarea");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateStatus: FormEventHandler<HTMLFormElement> = async (taskId: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/tasks`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId,
          updatedTaskData: { status: isPendin == true ? "finalizado" : 'pendiente' }
        }),
      });

      if (res.ok) {

        router.refresh();
      } else {
        throw new Error("Fallo la actualización de la tarea");
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <tr key={task.id}>
      <th>
        <label>
          <input type="checkbox" className="checkbox" checked={!isPendin} onClick={() => {
            setIsPendin(!isPendin);
            handleUpdateStatus(task._id);
          }} />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{task.task}</div>
          </div>
        </div>
      </td>
      <td>
        {isPendin ? 'pendiente' : 'Finalizada'}
      </td>
      <th className=' flex gap-4'>
        <FiEdit cursor="pointer" className=' text-blue-500' size={25} onClick={() => setOpenModalEdit(true)} />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit} >
          <form>
            <h2 className='font-bold text-lg'>Editar Tarea</h2>
            <div className=" modal-action">
              <input value={taskEdit} onChange={(e) => setTaskEdit(e.target.value)} type="text" placeholder="Agregar tarea" className=" input input-bordered w-full" />
              <button onClick={() => handleUpdateTask(task._id)} type="submit" className="btn" >Cambiar</button>
            </div>
          </form>
        </Modal>
        <FiTrash2 cursor="pointer" className=' text-red-500' size={25} onClick={() => setOpenModalDelete(true)} />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete} >
          <h3 className='text-lg'>Seguro que quiere eliminar la tarea</h3>
          <div className=' modal-action'>
            <button onClick={() => hanleDeteleTask(task._id)} className='btn'>Si</button>
          </div>
        </Modal>
      </th>
    </tr>
  )
}
