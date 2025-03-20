import { useState } from 'react'

export default function NewTask({ onAddNew }) {
  const [enteredTask, setEnteredTask] = useState('')

  function handleChange(event) {
    setEnteredTask(event.target.value)
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      return
    }

    onAddNew(enteredTask)
    setEnteredTask('')
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
      <button
        onClick={handleClick}
        className="px-2 py-2 text-base rounded-md text-stone-700 hover:bg-stone-600 hover:text-stone-100"
      >
        Add Task
      </button>
    </div>
  )
}
