'use client'
import React, { useState } from 'react'
import { TaskProps } from '@/types/task'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'




export default function Task({ task }: TaskProps) {

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  const [taskEdit, setTaskEdit] = useState<string>(task)
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [isPendin, setIsPendin] = useState<boolean>(true)
  const router = useRouter()
  return (
    <tr key={task}>
      <th>
        <label>
          <input type="checkbox" className="checkbox" onClick={() => setIsPendin(!isPendin)} />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">Cortar Manzana</div>
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
              <button type="submit" className="btn" >Agregar</button>
            </div>
          </form>
        </Modal>
        <FiTrash2 cursor="pointer" className=' text-red-500' size={25} onClick={() => setOpenModalDelete(true)} />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete} >
          <h3 className='text-lg'>Seguro que quiere eliminar la tarea</h3>
          <div className=' modal-action'>
            <button className='btn'>Si</button>
          </div>
        </Modal>
      </th>
    </tr>
  )
}
