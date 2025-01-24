import { useTranslation } from 'react-i18next';
import Image from "next/image";
import Link from 'next/link';
import Icon from "./svgicons";
import fireProjects from "../data/projects.json";

let iconsColor = "#C0C1C8";
let secondColor = "#2D2C40";

function Projects() {
  const { t } = useTranslation();

  const projectsList = fireProjects.map((item) => {
    if (item.screenshot) {
      const techList = item.techs.map((tech, index) => {
        return (
          <li key={index} title={tech}>< Icon name={tech} size={'1rem'} color={iconsColor} secondColor={secondColor} /></li>
        );
      });
      return (
        <div key={item.id}>
          <div className="grid w-full grid-cols-[1fr_200px] mb-2 text-left rounded bg-lightgblue items-center md:items-start">
            <div className="grid h-full grid-rows-[2fr_20px] gap-4 px-3 py-4">
              <div className="grid grid-rows-[20px_1fr] gap-4 border-b">
                <h2 className="font-bold">{item.name[t('language')] || item.name.default}</h2>
                <p className="text-sm md:text-base">{item.description[t('language')] || item.description.default}</p>
              </div>
              <ul className='flex flex-row gap-4'>
                {techList}
              </ul>
            </div>
            <div><Image src={item.screenshot} width={200} height={200} alt={`Screenshot of ${item.name[t('language')] || item.name.default}`} /></div>
          </div>
          <div className="flex flex-row justify-center p-1 mb-1 text-sm border rounded-sm w-fit bg-lightgblue border-midgray">
            <Link href="./projects/dummy" className="hidden px-2 border-r hover:underline underline-offset-2 border-midgray">{t('projects.details')}</Link>
            <Link href={item.preview} target='_blank' className="px-2 hover:underline underline-offset-2 border-midgray">{t('projects.live')}</Link>
            <Link href={item.github} target='_blank' className="px-2 border-l hover:underline underline-offset-2 border-midgray">{t('projects.source')}</Link>
          </div>
        </div>
      );
    }
  });

  return (
    <section id="projects" className="flex flex-col ml-2">
      <h1 className="text-2xl font-bold">{t('projects.title')}</h1>
      <div id="projectsList" className="flex flex-col gap-6 my-1">
        {projectsList}
      </div>
      <div className="flex flex-row self-center justify-center p-1 mb-1 text-sm border rounded w-fit bg-lightgblue border-midgray">
        <div>
          <Link href='https://ross1996.github.io/frontend-projects/' target='_blank' className="px-2 border-r border-midgray hover:underline underline-offset-2">{t('projects.frontend')}</Link>
        </div>
        <div>
          <Link href='https://github.com/ROSS1996?tab=repositories' target='_blank' className="px-2 hover:underline underline-offset-2">{t('projects.all')}</Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;