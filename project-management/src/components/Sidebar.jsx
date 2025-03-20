import Button from './Button'

export default function Sidebar({
  onStartAddProject,
  project,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">
        Your project
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {project.map((data) => {
          let cssClasses =
            'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
          if (data.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400'
          }

          return (
            <li key={data.id}>
              <button
                onClick={() => onSelectProject(data.id)}
                className={cssClasses}
              >
                {data.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
