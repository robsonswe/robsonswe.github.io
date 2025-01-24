import { useTranslation } from 'react-i18next';
import Icon from "./svgicons";
import { useSkills } from '../hooks/useSkills';

let iconsColor = "#C0C1C8";
let secondColor = "#2D2C40";

export default function Skills() {
  const { t } = useTranslation();
  const { skillsData, loading, error } = useSkills();

  // Filter skills by category
  const languages = skillsData.filter(skill => skill.category === 'language');
  const frameworks = skillsData.filter(skill => skill.category === 'framework');
  const tools = skillsData.filter(skill => skill.category === 'tool');

  return (
    <section id='skills' className='ml-2'>
      <h1 className="text-2xl font-bold">{t('skills.title')}</h1>
      <div className='flex flex-col content-between gap-4 mt-1 lg:grid lg:grid-cols-3 opacity-70'>
        {/* Languages Card */}
        <div className='flex flex-col w-full gap-4 px-4 py-3 rounded-md bg-lightgblue'>
          <h2 className='self-center w-full p-1 text-lg font-bold text-center border-b font-exo'>
            {t('skills.languages')}
          </h2>
          <div className='p-2'>
            <ul className="grid grid-flow-col grid-rows-3 gap-5">
              {loading ? (
                <div className="text-center">Loading languages...</div>
              ) : (
                languages.map((skill) => (
                  <li key={skill.name} className='flex items-center gap-2' title={skill.name}>
                    <Icon 
                      name={skill.iconname} 
                      size={'1.75rem'} 
                      color={iconsColor} 
                      secondColor={secondColor} 
                    />
                    <div>{skill.name}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        {/* Frameworks Card */}
        <div className='flex flex-col w-full gap-4 px-4 py-3 rounded-md bg-lightgblue'>
          <h2 className='self-center w-full p-1 text-lg font-bold text-center border-b font-exo'>
            {t('skills.frameworks')}
          </h2>
          <div className='p-2'>
            <ul className="grid grid-flow-col grid-rows-3 gap-5">
              {loading ? (
                <div className="text-center">Loading frameworks...</div>
              ) : (
                frameworks.map((skill) => (
                  <li key={skill.name} className='flex items-center gap-2' title={skill.name}>
                    <Icon 
                      name={skill.iconname} 
                      size={'1.75rem'} 
                      color={iconsColor} 
                      secondColor={secondColor} 
                    />
                    <div>{skill.name}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        {/* Tools Card */}
        <div className='flex flex-col w-full gap-4 px-4 py-3 rounded-md bg-lightgblue'>
          <h2 className='self-center w-full p-1 text-lg font-bold text-center border-b font-exo'>
            {t('skills.tools')}
          </h2>
          <div className='p-2'>
            <ul className="grid grid-flow-col grid-rows-3 gap-5">
              {loading ? (
                <div className="text-center">Loading tools...</div>
              ) : (
                tools.map((skill) => (
                  <li key={skill.name} className='flex items-center gap-2' title={skill.name}>
                    <Icon 
                      name={skill.iconname} 
                      size={'1.75rem'} 
                      color={iconsColor} 
                      secondColor={secondColor} 
                    />
                    <div>{skill.name}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
      {error && <div className="mt-2 text-red-500">Error: {error}</div>}
    </section>
  );
}