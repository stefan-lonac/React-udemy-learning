import { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef()
  const description = useRef()
  const date = useRef()
  const modal = useRef(null)

  function handleSave() {
    const savedTitle = title.current.value
    const savedDescription = description.current.value
    const savedDate = date.current.value

    if (
      savedTitle.trim() === '' ||
      savedDescription.trim() === '' ||
      savedDate.trim() === ''
    ) {
      modal.current.open()
      return
    }

    onAdd({
      title: savedTitle,
      description: savedDescription,
      date: savedDate,
    })
  }

  return (
    <>
      <Modal buttonCaption="Close" ref={modal}>
        <h2>Invalid Input</h2>
        <p>Please fill the inputs</p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="px-6 py-2 rounded-md bg-red-700 text-stone-50 hover:text-stone-200 hover:bg-red-600"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" isTextArea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  )
}
