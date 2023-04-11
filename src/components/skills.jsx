let iconsColor = "#C0C1C8";
let secondColor = "#2D2C40";

import {
    HtmlLogo,
    CssLogo,
    JSlogo,
    TypesriptLogo,
    ReactLogo,
    NextLogo,
    SassLogo,
    TailwindLogo,
    NodeLogo,
    ExpressLogo,
    PostgresLogo,
    MysqlLogo,
    PythonLogo,
    SQLlogo,
    GitLogo,
    DockerLogo
} from './svglogos'

export default function Skills({ lang }) {
    const locales = {
        'default': {
            title: 'Tech Skills',
            languages: 'Languages',
            frameworks: 'Frameworks',
            tools: 'Tools',
        },
        'pt': {
            title: 'Conhecimentos Técnicos',
            languages: 'Linguagens',
            frameworks: 'Frameworks',
            tools: 'Ferramentas',
        },
    }

    const locale = locales[lang] || locales['default'];
    return (
        <section id='skills' className='ml-2'>
            <h1 className="text-2xl font-bold">{locale.title}</h1>
            <div className='flex flex-col content-between gap-4 mt-1 lg:grid lg:grid-cols-3 opacity-70'>
                <div className='flex flex-col w-full gap-4 px-4 py-3 rounded-md bg-lightgblue'>
                    <h2 className='self-center w-full p-1 text-lg font-bold text-center border-b font-exo'>{locale.languages}</h2>
                    <div className='p-2'>
                        <ul className="grid grid-flow-col grid-rows-3 gap-5">
                            <li>
                                <div className='flex items-center gap-2'>
                                    < HtmlLogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                    <div>HTML</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < SQLlogo color={iconsColor} secondColor={secondColor} />
                                    <div>SQL</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < CssLogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                    <div>CSS</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < JSlogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                    <div>Javascript</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < TypesriptLogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                    <div>Typescript</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < PythonLogo size={'1.75rem'} color={iconsColor} />
                                    <div>Python</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col w-full gap-4 px-4 py-3 rounded-md bg-lightgblue'>
                    <h2 className='self-center w-full p-1 text-lg font-bold text-center border-b font-exo'>{locale.frameworks}</h2>
                    <div className='p-2'>
                        <ul className="grid grid-flow-col grid-rows-3 gap-5">
                            <li>
                                <div className='flex items-center gap-2'>
                                    < SassLogo size={'1.75rem'} color={iconsColor} />
                                    <div>Sass</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < TailwindLogo size={'1.75rem'} color={iconsColor} />
                                    <div>TailwindCSS</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < ExpressLogo size={'1.75rem'} color={iconsColor} />
                                    <div>ExpressJS</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < NextLogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                    <div>NextJS</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < ReactLogo size={'1.75rem'} color={iconsColor} />
                                    <div>React</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col w-full gap-4 px-4 py-3 rounded-md bg-lightgblue'>
                    <h2 className='self-center w-full p-1 text-lg font-bold text-center border-b font-exo'>{locale.tools}</h2>
                    <div className='p-2'>
                        <ul className="grid grid-flow-col grid-rows-3 gap-5">
                            <li>
                                <div className='flex items-center gap-2'>
                                    < NodeLogo size={'1.75rem'} color={iconsColor} />
                                    <div>NodeJS</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < PostgresLogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                    <div>PostgresSQL</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < MysqlLogo size={'1.75rem'} color={iconsColor} />
                                    <div>MySQL</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < GitLogo size={'1.75rem'} color={iconsColor} />
                                    <div>Git</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-2'>
                                    < DockerLogo size={'1.75rem'} color={iconsColor} />
                                    <div>Docker</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}