'use client'
import { AiOutlinePlus } from "react-icons/ai"
import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { FormEventHandler, useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function AddTask() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [newTask, setNewTask] = useState<string>('')

  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ task: newTask, status: 'Pendiente' })
      })
      if (res.ok) {
        setNewTask("");
        setModalOpen(false);
        router.refresh();
      } else {
        throw new Error("Fallo la creacion de una nueva tarea");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button className='btn btn-primary w-full' onClick={() => setModalOpen(true)}>
        Agregar nueva tarea <AiOutlinePlus className=" ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
        <form onSubmit={handleSubmitNewTask}>
          <h2 className=" font-bold text-lg">Agregar nueva tarea</h2>
          <div className=" modal-action">
            <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" placeholder="Agregar tarea" className=" input input-bordered w-full" />

            <button type="submit" className="btn" >Agregar</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
