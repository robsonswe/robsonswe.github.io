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
    PythonLogo
} from './svglogos'

export default function Skills() {
    return (
        <section id='skills' className='ml-2'>
            <h1 className="text-2xl font-bold">Tech Skills</h1>
            <div className='flex flex-col content-between gap-4 mt-1 lg:grid lg:grid-cols-2'>
                <div className='flex flex-col items-center w-full p-4 rounded-md bg-lightgblue'>
                    <h2 className='self-center text-lg font-bold font-exo'>Frontend</h2>
                    <div className='flex flex-col flex-wrap justify-start w-full gap-2 p-4 opacity-70'>
                        <h3>HTML</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 p-2 border-t border-solid'>
                            <div className='flex flex-col items-center justify-between'>
                                < HtmlLogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div className='text-xs'>HTML</div>
                            </div>
                        </div>
                        <h3>CSS</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 p-2 border-t border-solid'>
                            <div className='flex flex-col items-center justify-between'>
                                < CssLogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div className='text-xs'>CSS</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < SassLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>Sass</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < TailwindLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>TailwindCSS</div>
                            </div>
                        </div>
                        <h3>Javascript</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 p-2 border-t border-solid'>
                            <div className='flex flex-col items-center justify-between'>
                                < JSlogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div className='text-xs'>Javascript</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < TypesriptLogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div className='text-xs'>Typescript</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < NextLogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div className='text-xs'>NextJS</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < ReactLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>React</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center w-full p-4 rounded-md bg-lightgblue'>
                    <h2 className='self-center text-lg font-bold font-exo'>Backend</h2>
                    <div className='flex flex-col flex-wrap justify-start w-full gap-2 p-4 opacity-70'>
                        <h3>Javascript</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 p-2 border-t border-solid'>
                            <div className='flex flex-col items-center justify-between'>
                                < NodeLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>NodeJS</div>
                            </div>
                            <div className='flex flex-col items-center justify-around '>
                                < ExpressLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>ExpressJS</div>
                            </div>
                        </div>
                        <h3>Python</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 p-2 border-t border-solid'>
                            <div className='flex flex-col items-center justify-between'>
                                < PythonLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>Python</div>
                            </div>
                        </div>
                        <h3>Database</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 p-2 border-t border-solid'>
                            <div className='flex flex-col items-center justify-between'>
                                < PostgresLogo size={'1.75rem'} color={iconsColor} secondColor={secondColor} />
                                <div className='text-xs'>PostgresSQL</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < MysqlLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>MySQL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}