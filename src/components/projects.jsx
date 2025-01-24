import { useTranslation } from 'react-i18next';
import Image from "next/image";
import Link from 'next/link';
import Icon from "./svgicons";
import { useProjects } from '../hooks/useProjects';

// Constants (moved outside the component)
const iconsColor = "#C0C1C8";
const secondColor = "#2D2C40";

export default function Projects() {
  const { t } = useTranslation();
  const { projectsData, loading, error } = useProjects();

  if (loading) return <div>Loading projects...</div>;
  if (error) console.error('Error fetching projects:', error);

  // ProjectItem rendering logic (coupled with Projects component)
  const renderProjectItem = (item) => {
    if (!item?.screenshot || !item?.name || !item?.description) return null;

    const techList = item.techs?.map((tech, index) => (
      <li key={index} title={tech}>
        <Icon name={tech} size="1rem" color={iconsColor} secondColor={secondColor} />
      </li>
    ));

    return (
      <div key={item.id || Math.random()}>
        <div className="grid w-full grid-cols-[1fr_200px] mb-2 text-left rounded bg-lightgblue items-center md:items-start">
          <div className="grid h-full grid-rows-[2fr_20px] gap-4 px-3 py-4">
            <div className="grid grid-rows-[20px_1fr] gap-4 border-b">
              <h2 className="font-bold">
                {item.name[t('language')] || item.name.default || 'Untitled Project'}
              </h2>
              <p className="text-sm md:text-base">
                {item.description[t('language')] || item.description.default || 'No description'}
              </p>
            </div>
            <ul className='flex flex-row gap-4'>
              {techList || <li>No technologies listed</li>}
            </ul>
          </div>
          <div>
            <Image 
              src={item.screenshot} 
              width={200} 
              height={200} 
              alt={`Screenshot of ${item.name[t('language')] || item.name.default || 'project'}`} 
            />
          </div>
        </div>
        <div className="flex flex-row justify-center p-1 mb-1 text-sm border rounded-sm w-fit bg-lightgblue border-midgray">
          {item.preview && (
            <Link href={item.preview} target='_blank' className="px-2 hover:underline underline-offset-2 border-midgray">
              {t('projects.live')}
            </Link>
          )}
          {item.github && (
            <Link href={item.github} target='_blank' className="px-2 border-l hover:underline underline-offset-2 border-midgray">
              {t('projects.source')}
            </Link>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="flex flex-col ml-2">
      <h1 className="text-2xl font-bold">{t('projects.title')}</h1>
      <div id="projectsList" className="flex flex-col gap-6 my-1">
        {projectsData?.map(renderProjectItem)}
      </div>
      <div className="flex flex-row self-center justify-center p-1 mb-1 text-sm border rounded w-fit bg-lightgblue border-midgray">
        <div>
          <Link href='https://ross1996.github.io/frontend-projects/' target='_blank' className="px-2 border-r border-midgray hover:underline underline-offset-2">
            {t('projects.frontend')}
          </Link>
        </div>
        <div>
          <Link href='https://github.com/ROSS1996?tab=repositories' target='_blank' className="px-2 hover:underline underline-offset-2">
            {t('projects.all')}
          </Link>
        </div>
      </div>
    </section>
  );
}