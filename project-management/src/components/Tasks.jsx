import NewTask from './NewTask'

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-600 mb-2">Tasks</h2>
      New Task
      <NewTask onAddNew={onAdd} />
      {tasks.length === 0 ? (
        <p className="mb-4 text-stone-400">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="mt-8 flex flex-col gap-4 rounded-md">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex bg-slate-100 justify-between rounded-md p-4"
            >
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
