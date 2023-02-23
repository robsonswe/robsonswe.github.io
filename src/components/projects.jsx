import Image from "next/image";
import Link from 'next/link';


const fireProjects = [
  {
    id: 1,
    name: 'Social Media Dashboard',
    description: 'Social Media Dashboard with Theme Selector',
    github: 'https://github.com/ROSS1996/frontend-projects/tree/main/smdt-junior',
    preview: 'https://ross1996.github.io/frontend-projects/smdt-junior',
    screenshot: 'https://ross1996.github.io/frontend-projects/screenshots/smdt-junior.jpeg'
  },
  {
    id: 2,
    name: 'Interactive card details',
    description: 'Interactive credit card page',
    github: 'https://github.com/ROSS1996/frontend-projects/tree/main/icdf-junior',
    preview: 'https://ross1996.github.io/frontend-projects/icdf-junior',
    screenshot: 'https://ross1996.github.io/frontend-projects/screenshots/icdf-junior.jpeg'
  }
]

function Projects() {

  const projectsList = fireProjects.map((item) => {
    let index = fireProjects.indexOf(item)
    if (item.screenshot) {
      return (
        <div key={item.id} >
          <div className="flex flex-row justify-between w-full gap-5 p-3 mb-2 text-left rounded bg-lightgblue" >
            <div className="flex flex-col justify-around">
              <h2 className="font-bold">{item.name}</h2>
              <p>{item.description}</p>
            </div>
            <div><Image src={item.screenshot} width={220} height={220} className='rounded-sm' alt="..." priority /> </div>
          </div>
          <div className="flex flex-row justify-center p-1 mb-1 text-sm border rounded w-fit bg-lightgblue border-midgray">
            <Link href="./projects/dummy" className="px-2 border-r hover:underline underline-offset-2 border-midgray">Details</Link>
            <Link href={item.preview} target='_blank' className="px-2 hover:underline underline-offset-2 border-midgray">Live Version</Link>
            <Link href={item.preview} target='_blank' className="px-2 border-l hover:underline underline-offset-2 border-midgray">Source Code</Link>
          </div>
        </div>
      );
    }
  });

  return (
    <section id="projects" className="flex flex-col ml-2">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div
        id="projectsList"
        className="flex flex-col gap-6 my-1"
      >
        {projectsList}
      </div>
      <div className="flex flex-row self-center justify-center p-1 mb-1 text-sm border rounded w-fit bg-lightgblue border-midgray">
        <div>
          <Link href='https://ross1996.github.io/frontend-projects/' target='_blank' className="px-2 border-r border-midgray hover:underline underline-offset-2 ">Frontend Projects</Link>
        </div>
        <div>
          <Link href='https://github.com/ROSS1996?tab=repositories' target='_blank' className="px-2 hover:underline underline-offset-2 ">All Projects</Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;