let iconsColor

import { Exo, Literata } from '@next/font/google'
const exo = Exo({ subsets: ['latin'] })



import {
    HtmlLogo,
    CssLogo,
    JSlogo,
    TypesriptLogo,
    ReactLogo,
    NextLogo,
    ReduxLogo,
    SassLogo,
    TailwindLogo,
    NodeLogo,
    ExpressLogo,
    MongoLogo,
    PostgresLogo,
    MysqlLogo,
    FirebaseLogo,
    GitLogo,
    GithubLogo,
} from './svglogos'

export default function Skills() {
    return (
        <section id='skills' className='ml-2'>
            <h1 className="font-bold text-lg">Skills</h1>
            <div className='flex flex-row p-2 gap-4'>
                <div className='flex flex-col items-center p-4 bg-slate-200 w-fit max-w-xs border border-black rounded-md'>
                    <h2 className={`self-center text-lg font-medium ${exo.className}`}>Frontend</h2>
                    <div className='flex flex-col justify-start gap-2 p-4 opacity-70 flex-wrap'>
                        <h3>HTML</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 border-t border-solid border-black p-2'>
                            <div className='flex flex-col items-center justify-between'>
                                < HtmlLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>HTML</div>
                            </div>
                        </div>
                        <h3>CSS</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 border-t border-solid border-black p-2'>
                            <div className='flex flex-col items-center justify-between'>
                                < CssLogo size={'1.75rem'} color={iconsColor} />
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
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 border-t border-solid border-black p-2'>
                            <div className='flex flex-col items-center justify-between'>
                                < JSlogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>Javascript</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < TypesriptLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>Typescript</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < NextLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>NextJS</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < ReactLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>React</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < ReduxLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>Redux</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center p-4 bg-slate-200 w-fit max-w-xs border border-black rounded-md'>
                    <h2 className={`self-center text-lg font-medium  ${exo.className}`}>Backend</h2>
                    <div className='flex flex-col justify-start gap-2 p-4 opacity-70 flex-wrap'>
                        <h3>Javascript</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 border-t border-solid border-black p-2'>
                            <div className='flex flex-col items-center justify-between'>
                                < NodeLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>NodeJS</div>
                            </div>
                            <div className='flex flex-col items-center justify-around '>
                                < ExpressLogo size={'1.75rem'} color={iconsColor} type={'icon'} />
                                <div className='text-xs'>ExpressJS</div>
                            </div>
                        </div>
                        <h3>Database</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 border-t border-solid border-black p-2'>
                            <div className='flex flex-col items-center justify-between'>
                                < MongoLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>MongoDB</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < PostgresLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>PostgresSQL</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < MysqlLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>MySQL</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center p-4 bg-slate-200 w-fit max-w-xs border border-black rounded-md'>
                    <h2 className={`self-center text-lg font-medium ${exo.className}`}>Miscellaneous</h2>
                    <div className='flex flex-col justify-start gap-2 p-4 opacity-70 flex-wrap'>
                        <h3>Version Control</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 border-t border-solid border-black p-2'>
                            <div className='flex flex-col items-center justify-between'>
                                < GitLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>Git</div>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                < GithubLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>Github</div>
                            </div>
                        </div>
                        <h3>Cloud Services</h3>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3 border-t border-solid border-black p-2'>
                            <div className='flex flex-col items-center justify-between'>
                                < FirebaseLogo size={'1.75rem'} color={iconsColor} />
                                <div className='text-xs'>Firebase</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}