import Image from "next/image";
import Link from 'next/link';


const fireProjects = [
  {
    id: 1,
    name: 'Finance Manager',
    description: 'This is a fullstack finance manager app for users to keep track of revenues, expenses and accounts. The website is built using HTML, TailwindCSS, Typescript and NextJS. The backend is built using NodeJS, Typescript and ExpressJS. To store the data, the project uses PostgreSQL database. The project also contains Docker instructions to facilitate the setup.',
    github: 'https://github.com/ROSS1996/financemanager',
    preview: 'https://github.com/ROSS1996/financemanager/tree/main/website/screenshots',
    screenshot: 'https://ross1996.github.io/frontend-projects/screenshots/financemanager.jpg'
  },
  {
    id: 2,
    name: 'eSports Page',
    description: `This is a project that provides relevant stats about eSports players and teams. The platform is built using HTML, TailwindCSS, Typescript, React, and NextJS. The project also makes use of Python scripts to gatter the information provided.`,
    github: 'https://github.com/ROSS1996/cs50xfinal',
    preview: 'https://cs50xfinal.vercel.app/',
    screenshot: 'https://ross1996.github.io/frontend-projects/screenshots/esports.jpg'
  },
  {
    id: 3,
    name: 'IP Address Tracker',
    description: 'This is a project that provides information on IP addressess. The platform is built using HTML, CSS and Javascript. It also uses LeafletJS library to visually map the IP address.',
    github: 'https://github.com/ROSS1996/frontend-projects/tree/iptrack-int',
    preview: 'https://ross1996.github.io/frontend-projects/iptrack-int',
    screenshot: 'https://ross1996.github.io/frontend-projects/screenshots/iptrack-int.jpg'
  },
  {
    id: 4,
    name: 'URL Shortening Page',
    description: 'This is a project that provides a solution to shorten URL links. The platform is built using HTML, CSS, Sass and React.',
    github: 'https://github.com/ROSS1996/frontend-projects/tree/linkshort-int',
    preview: 'https://ross1996.github.io/frontend-projects/linkshort-int',
    screenshot: 'https://ross1996.github.io/frontend-projects/screenshots/linkshort-int.jpg'
  }
]

function Projects() {

  const projectsList = fireProjects.map((item) => {
    let index = fireProjects.indexOf(item)
    if (item.screenshot) {
      return (
        <div key={item.id} >
          <div className="grid w-full grid-cols-[1fr_200px] mb-2 text-left rounded bg-lightgblue items-center md:items-start" >
            <div className="grid grid-rows-[20px_1fr] gap-4 px-3 py-4">
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-sm md:text-base">{item.description}</p>
            </div>
            <div><Image src={item.screenshot} width={200} height={200} className='rounded-r' alt="..." priority /> </div>
          </div>
          <div className="flex flex-row justify-center p-1 mb-1 text-sm border rounded w-fit bg-lightgblue border-midgray">
            <Link href="./projects/dummy" className="hidden px-2 border-r hover:underline underline-offset-2 border-midgray">Details</Link>
            <Link href={item.preview} target='_blank' className="px-2 hover:underline underline-offset-2 border-midgray">Live Version</Link>
            <Link href={item.github} target='_blank' className="px-2 border-l hover:underline underline-offset-2 border-midgray">Source Code</Link>
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