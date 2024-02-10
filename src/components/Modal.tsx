import { ModalProps } from "@/types/modal"

export default function Modal({ modalOpen, setModalOpen, children }: ModalProps) {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className=" modal-box relative">
        <label onClick={() => setModalOpen(false)} className='btn btn-sm btn-circle absolute right-2 top-2'>X</label>
        {children}
      </div>
    </div>
  )
}
