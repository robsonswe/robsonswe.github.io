let iconsColor = "#C0C1C8";
let secondColor = "#2D2C40";

import Icon from "./svgicons";

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
                            <li className='flex items-center gap-2' title="HTML">
                                < Icon name={'html'} size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div>HTML</div>
                            </li>
                            <li className='flex items-center gap-2' title="SQL">
                                < Icon name={'sql'} size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div>SQL</div>
                            </li>
                            <li className='flex items-center gap-2' title="CSS">
                                < Icon name={'css'} size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div>CSS</div>
                            </li>
                            <li className='flex items-center gap-2' title="Javascript">
                                < Icon name={'javascript'} size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div>Javascript</div>
                            </li>
                            <li className='flex items-center gap-2' title="Typescript">
                                < Icon name={'typescript'} size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div>Typescript</div>
                            </li>
                            <li className='flex items-center gap-2' title="Python">
                                < Icon name={'python'} size={'1.75rem'} color={iconsColor} />
                                <div>Python</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col w-full gap-4 px-4 py-3 rounded-md bg-lightgblue'>
                    <h2 className='self-center w-full p-1 text-lg font-bold text-center border-b font-exo'>{locale.frameworks}</h2>
                    <div className='p-2'>
                        <ul className="grid grid-flow-col grid-rows-3 gap-5">
                            <li className='flex items-center gap-2' title="Sass">
                                < Icon name={'sass'} size={'1.75rem'} color={iconsColor} />
                                <div>Sass</div>
                            </li>
                            <li className='flex items-center gap-2' title="Tailwind">
                                < Icon name={'tailwind'} size={'1.75rem'} color={iconsColor} />
                                <div>Tailwind</div>
                            </li>
                            <li className='flex items-center gap-2' title="Express">
                                < Icon name={'expressjs'} size={'1.75rem'} color={iconsColor} />
                                <div>ExpressJS</div>
                            </li>
                            <li className='flex items-center gap-2' title="Next">
                                < Icon name={'nextjs'} size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div>NextJS</div>
                            </li>
                            <li className='flex items-center gap-2' title="React">
                                < Icon name={'reactjs'} size={'1.75rem'} color={iconsColor} />
                                <div>React</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col w-full gap-4 px-4 py-3 rounded-md bg-lightgblue'>
                    <h2 className='self-center w-full p-1 text-lg font-bold text-center border-b font-exo'>{locale.tools}</h2>
                    <div className='p-2'>
                        <ul className="grid grid-flow-col grid-rows-3 gap-5">
                            <li className='flex items-center gap-2' title="NodeJS">
                                < Icon name={'nodejs'} size={'1.75rem'} color={iconsColor} />
                                <div>NodeJS</div>
                            </li>
                            <li className='flex items-center gap-2' title="Postgres">
                                < Icon name={'postgres'} size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div>PostgresSQL</div>
                            </li>
                            <li className='flex items-center gap-2' title="MySQL">
                                < Icon name={'mysql'} size={'1.75rem'} color={iconsColor} />
                                <div>MySQL</div>
                            </li>
                            <li className='flex items-center gap-2' title="Git">
                                < Icon name={'git'} size={'1.75rem'} color={iconsColor} />
                                <div>Git</div>
                            </li>
                            <li className='flex items-center gap-2' title="Docker">
                                < Icon name={'docker'} size={'1.75rem'} color={iconsColor} />
                                <div>Docker</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}