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
    if (item.screenshot) {
      return (
        <div className="flex flex-row justify-between bg-lightgblue mb-2 rounded w-full gap-5 text-left p-3" key={item.id} >
          <div className="flex flex-col justify-around">
            <h2 className="font-bold">{item.name}</h2>
            <p>{item.description}</p>
            <p className="self-stretch">
              <Link href="./projects/dummy">See more</Link>
            </p>
          </div>
          <div><Image src={item.screenshot} width={220} height={220} className='rounded' alt="..." priority /> </div>
        </div>
      );
    }
  });

  return (
    <section id="projects" className="ml-2">
      <h1 className="font-bold text-2xl">Projects</h1>
      <div
        id="projectsList"
        className="flex flex-col gap-6 mt-1"
      >
        {projectsList}
      </div>
    </section>
  );
}

export default Projects;