const fireProjects = [
    {
        id: 1,
        name: '#',
        description: '#',
        github: '#',
        preview: '#',
    }
]

function Projects() {

  const projectsList = fireProjects.map((item) => {
    if (item.screenshot) {
      return (
        <div
          className="grid grid-cols-2 grid-rows-[1fr 1fr 10px 10px] border border-solid border-black mb-2 rounded-sm w-80"
          key={item.id}
        >
          <div className="col-start-1 col-end-3 row-start-1 row-end-1  border-solid border-black p-1 place-self-center">
            <img src={item.screenshot} className="h-60 aspect-auto" alt="..." />
          </div>

          <h2 className="col-start-1 col-span-2 row-start-2 row-end-2 p-1 font-bold text-slate-700 text-center border-t">
            {item.name}
          </h2>

          <p className="col-start-1 col-span-2 row-start-3 row-end-3 border-t border-solid border-black p-1 text-center">
            {item.description}
          </p>
          <p className="col-start-1 row-start-4 row-end-4 border-t border-solid border-black border-r p-1 text-center font-semibold">
            <a href={item.github} target="_blank" rel="external" className="">
              Github
            </a>
          </p>
          <p className="col-start-2 col-end-3 row-start-4 row-end-4 border-t border-solid border-black p-1 text-center font-semibold">
            <a href={item.preview} target="_blank" rel="external" className="">
              Live Version
            </a>
          </p>
        </div>
      );
    }
  });

  return (
    <section id="projects" className="p-2 bg-white">
      <h1 className="font-bold text-lg">Projects</h1>
      <div
        id="projectsList"
        className="grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6 p-3"
      >
        {projectsList}
      </div>
    </section>
  );
}

export default Projects;