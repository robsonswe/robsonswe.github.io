import Image from "next/image";
import Link from 'next/link';
import Icon from "./svgicons";

let iconsColor = "#C0C1C8";
let secondColor = "#2D2C40";

const fireProjects = [
  {
    id: 1,
    name: {
      default: 'FinTrack',
      pt: 'FinTrack'
    },
    description: {
      default: 'FinTrack is a full-stack finance management application designed to help users keep track of their revenues, expenses, and accounts. The website is built using HTML, TailwindCSS, Typescript, and NextJS, while the backend is built using NodeJS, Typescript, and ExpressJS. The project utilizes a PostgreSQL database to store data, and it includes Docker instructions to simplify setup.',
      pt: 'FinTrack é um aplicativo de gerenciamento financeiro projetado para ajudar os usuários a acompanhar suas receitas, despesas e contas. O site é construído usando HTML, TailwindCSS, Typescript e NextJS, enquanto o backend é construído usando NodeJS, Typescript e ExpressJS. O projeto utiliza um banco de dados PostgreSQL para armazenar dados e inclui instruções Docker para simplificar a configuração.',
    },
    techs: ['HTML', 'Tailwind', 'Typescript', 'NextJS', 'NodeJS', 'ExpressJS', 'Postgres', 'Docker'],
    github: 'https://github.com/ROSS1996/financemanager',
    preview: 'https://github.com/ROSS1996/financemanager/tree/main/website/screenshots',
    screenshot: 'https://ross1996.github.io/frontend-projects/screenshots/financemanager.jpg'
  },
  {
    id: 2,
    name: {
      default: 'CS:Brasil',
      pt: 'CS:Brasil'
    },
    description: {
      default: 'CS:Brasil is a platform that provides essential statistics about eSports players and teams. The website is built using HTML, TailwindCSS, Typescript, React, and NextJS. Python scripts are used to gather and provide the information for the project.',
      pt: ' CS:Brasil é uma plataforma que fornece estatísticas essenciais sobre jogadores e equipes de esportes eletrônicos. O site é construído usando HTML, TailwindCSS, Typescript, React e NextJS. Scripts Python são usados para coletar e fornecer as informações para o projeto.',
    },
    techs: ['HTML', 'Tailwind', 'Typescript', 'NextJS', 'Python'],
    github: 'https://github.com/ROSS1996/cs50xfinal',
    preview: 'https://cs50xfinal.vercel.app/',
    screenshot: 'https://ross1996.github.io/frontend-projects/screenshots/esports.jpg'
  },
  {
    id: 3,
    name: {
      default: 'IP addres Tracker',
      pt: 'Localizador de IPs'
    },
    description: {
      default: 'IP Address Tracker is a project that provides information about IP addresses. The platform is built using HTML, CSS, and JavaScript and utilizes the LeafletJS library to map IP addresses visually.',
      pt: ' IP Address Tracker é um projeto que fornece informações sobre endereços IP. A plataforma é construída usando HTML, CSS e JavaScript e utiliza a biblioteca LeafletJS para mapear visualmente os endereços IP.',
    },
    techs: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/ROSS1996/frontend-projects/tree/iptrack-int',
    preview: 'https://ross1996.github.io/frontend-projects/iptrack-int',
    screenshot: 'https://ross1996.github.io/frontend-projects/screenshots/iptrack-int.jpg'
  },
  {
    id: 4,
    name: {
      default: 'Shortly',
      pt: 'Shortly'
    },
    description: {
      default: 'Shortly is a project that provides a URL shortening solution. The platform is built using HTML, CSS, Sass, and React.',
      pt: 'Shortly é um projeto que fornece uma solução de encurtamento de URLs. A plataforma é construída usando HTML, CSS, Sass e React.',
    },
    techs: ['HTML', 'CSS', 'Sass', 'React'],
    github: 'https://github.com/ROSS1996/frontend-projects/tree/linkshort-int',
    preview: 'https://ross1996.github.io/frontend-projects/linkshort-int',
    screenshot: 'https://ross1996.github.io/frontend-projects/screenshots/linkshort-int.jpg'
  }
]

function Projects({ lang }) {

  const locales = {
    'default': {
      title: 'Projects',
      frontend: 'Frontend Projects',
      all: 'All Projects',
      details: 'Details',
      live: 'Live Version',
      source: 'Source Code'
    },
    'pt': {
      title: 'Projetos',
      frontend: 'Projetos Frontend',
      all: 'Todos Projetos',
      details: 'Detalhes',
      live: 'Prévia',
      source: 'Código Fonte'
    },
  }

  const locale = locales[lang] || locales['default'];



  const projectsList = fireProjects.map((item) => {
    let index = fireProjects.indexOf(item)
    if (item.screenshot) {
      const techList = item.techs.map((tech, index) => {
        return (
          <li key={index} title={tech}>< Icon name={tech} size={'1rem'} color={iconsColor} secondColor={secondColor} /></li>
        )
      })
      return (
        <div key={item.id} >
          <div className="grid w-full grid-cols-[1fr_200px] mb-2 text-left rounded bg-lightgblue items-center md:items-start" >
            <div className="grid h-full grid-rows-[2fr_20px] gap-4 px-3 py-4">
              <div className="grid grid-rows-[20px_1fr] gap-4 border-b">
                <h2 className="font-bold">{item.name[lang] || item.name.default}</h2>
                <p className="text-sm md:text-base">{item.description[lang] || item.description.default}</p>
              </div>
              <ul className='flex flex-row gap-4'>
                {techList}
              </ul>
            </div>
            <div><Image src={item.screenshot} width={200} height={200} alt={`Screenshot of ${item.name[lang] || item.name.default}`} /></div>
          </div>
          <div className="flex flex-row justify-center p-1 mb-1 text-sm border rounded-sm w-fit bg-lightgblue border-midgray">
            <Link href="./projects/dummy" className="hidden px-2 border-r hover:underline underline-offset-2 border-midgray">{locale.details}</Link>
            <Link href={item.preview} target='_blank' className="px-2 hover:underline underline-offset-2 border-midgray">{locale.live}</Link>
            <Link href={item.github} target='_blank' className="px-2 border-l hover:underline underline-offset-2 border-midgray">{locale.source}</Link>
          </div>
        </div>
      )
    }
  })


  return (
    <section id="projects" className="flex flex-col ml-2">
      <h1 className="text-2xl font-bold">{locale.title}</h1>
      <div
        id="projectsList"
        className="flex flex-col gap-6 my-1"
      >
        {projectsList}
      </div>
      <div className="flex flex-row self-center justify-center p-1 mb-1 text-sm border rounded w-fit bg-lightgblue border-midgray">
        <div>
          <Link href='https://ross1996.github.io/frontend-projects/' target='_blank' className="px-2 border-r border-midgray hover:underline underline-offset-2 ">{locale.frontend}</Link>
        </div>
        <div>
          <Link href='https://github.com/ROSS1996?tab=repositories' target='_blank' className="px-2 hover:underline underline-offset-2 ">{locale.all}</Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;