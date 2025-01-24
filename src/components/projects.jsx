import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createClient } from '@supabase/supabase-js';
import Image from "next/image";
import Link from 'next/link';
import Icon from "./svgicons";
import fireProjects from "../data/projects.json";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

let iconsColor = "#C0C1C8";
let secondColor = "#2D2C40";

function Projects() {
  const { t } = useTranslation();
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (process.env.NODE_ENV === 'development') {
          console.log('[DEBUG] Starting Supabase fetch...');
        }
        
        const { data, error: supabaseError } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (supabaseError) {
          if (process.env.NODE_ENV === 'development') {
            console.error('[SUPABASE ERROR]', supabaseError);
          }
          throw new Error(supabaseError.message);
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('[DEBUG] Supabase response data:', data);
        }
        
        if (data && data.length > 0) {
          setProjectsData(data);
        } else {
          if (process.env.NODE_ENV === 'development') {
            console.warn('[WARNING] Supabase returned empty array, using fallback');
          }
          setProjectsData(fireProjects);
        }
        
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error('[FETCH ERROR]', err);
          console.log('[FALLBACK] Loading local data:', fireProjects);
        }
        setError(err.message);
        setProjectsData(fireProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[RENDER] Current projects data:', projectsData);
  }


  const projectsList = projectsData?.map((item) => {
    if (!item) return null;
    
    // Ensure required fields exist
    const hasRequiredFields = item.screenshot && item.name && item.description;
    
    if (hasRequiredFields) {
      const techList = item.techs?.map((tech, index) => (
        <li key={index} title={tech}>
          <Icon name={tech} size={'1rem'} color={iconsColor} secondColor={secondColor} />
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
    }
    return null;
  })?.filter(Boolean);


  return (
    <section id="projects" className="flex flex-col ml-2">
      <h1 className="text-2xl font-bold">{t('projects.title')}</h1>
      <div id="projectsList" className="flex flex-col gap-6 my-1">
        {projectsList}
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

export default Projects;