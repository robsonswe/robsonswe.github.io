import Image from 'next/image';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

let iconsColor = "#C0C1C8";
let secondColor = "#2d2c40";

import {
    HtmlLogo,
    CssLogo,
    JSlogo,
    TailwindLogo,
    NodeLogo,
    ExpressLogo,
    MongoLogo,

} from '../../components/svglogos'

import PageHead from "../../components/head"
import Navbar from "../../components/navbar"


function About() {
    return (
        <section id="about" className="ml-2" lang="zxx">
            <h2 className="font-bold text-2xl">About</h2>
            <p className="text-justify my-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati illo error earum, ratione dolorum aliquid dolorem provident quae culpa atque odio et deleniti, eum, porro assumenda iusto. Praesentium, aliquid maxime.
                Numquam voluptatibus vitae, accusamus inventore, optio molestiae sapiente recusandae dignissimos deleniti repudiandae necessitatibus dolore? In tempore repellat quae. Veritatis repudiandae ea suscipit porro maxime blanditiis placeat aperiam dolore consequatur expedita!
                Autem recusandae quibusdam placeat tempora ea, nobis aliquid. Quis atque magni voluptatem architecto eligendi similique, sapiente aperiam eius excepturi illo tempora vero possimus in ratione qui earum nesciunt repellendus consequuntur!
                In doloremque, aliquid quidem fugiat ipsa eos soluta exercitationem? Pariatur alias libero harum quod quas molestias quasi repudiandae veritatis, enim reiciendis dignissimos facilis nisi consequatur officia labore, sequi sunt nesciunt.
            </p>
        </section>
    )
}

function Techs() {
    return (
        <section id="techs" className="ml-2">
            <h2 className="font-bold text-2xl">Tech Stack</h2>
            <div className='grid grid-rows-2 items-center p- w-full gap-2 my-2'>
                <div>
                    <h2 className='self-center text-lg font-bold font-exo'>Frontend</h2>
                    <hr />
                    <ul className='flex flex-row flex-wrap p-4 opacity-70 w-full text-center gap-4'>
                        <li className='flex items-center gap-1'><HtmlLogo size='1.5rem' color={iconsColor} secondColor={secondColor} />HTML</li>
                        <li className='flex items-center gap-1'><CssLogo size='1.5rem' color={iconsColor} secondColor={secondColor} />CSS</li>
                        <li className='flex items-center gap-1'><JSlogo size='1.5rem' color={iconsColor} secondColor={secondColor} />Javascript</li>
                        <li className='flex items-center gap-1'><TailwindLogo size='1.5rem' color={iconsColor} />TailwindCSS</li>
                    </ul>
                </div>
                <div>
                    <h2 className='self-center text-lg font-bold font-exo'>Backend</h2>
                    <hr />
                    <ul className='flex flex-row flex-wrap p-4 opacity-70 w-full text-center gap-7'>
                        <li className='flex items-center gap-1'><NodeLogo size='1.5rem' color={iconsColor} />NodeJS</li>
                        <li className='flex items-center gap-1'><ExpressLogo size='1.5rem' color={iconsColor} />ExpressJS</li>
                        <li className='flex items-center gap-1'><MongoLogo size='1.5rem' color={iconsColor} secondColor={'#96969e'} />MongoDB</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

function Links() {
    return (
        <section id="about" className="ml-2" lang="zxx">
            <h2 className="font-bold text-2xl">About</h2>
            <p className="text-justify my-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati illo error earum, ratione dolorum aliquid dolorem provident quae culpa atque odio et deleniti, eum, porro assumenda iusto. Praesentium, aliquid maxime.
                Numquam voluptatibus vitae, accusamus inventore, optio molestiae sapiente recusandae dignissimos deleniti repudiandae necessitatibus dolore? In tempore repellat quae. Veritatis repudiandae ea suscipit porro maxime blanditiis placeat aperiam dolore consequatur expedita!
                Autem recusandae quibusdam placeat tempora ea, nobis aliquid. Quis atque magni voluptatem architecto eligendi similique, sapiente aperiam eius excepturi illo tempora vero possimus in ratione qui earum nesciunt repellendus consequuntur!
                In doloremque, aliquid quidem fugiat ipsa eos soluta exercitationem? Pariatur alias libero harum quod quas molestias quasi repudiandae veritatis, enim reiciendis dignissimos facilis nisi consequatur officia labore, sequi sunt nesciunt.
            </p>
        </section>
    )
}


function Screenshots() {
    return (
        <section id="screenshots" className="ml-2 flex flex-col gap-4" lang="zxx">
            <h2 className="font-bold text-2xl">Screenshots</h2>
            <div className="my-1 flex flex-row gap-5">
                <Carousel emulateTouch useKeyboardArrows width={'60%'}>
                    <div>
                        <img src="https://picsum.photos/800/800" alt='Placeholder' />
                        <p className="legend">Image 1</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/400" alt='Placeholder' />
                        <p className="legend">Image 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/400" alt='Placeholder' />
                        <p className="legend">Image 31</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/400" alt='Placeholder' />
                        <p className="legend">Image 4</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/400" alt='Placeholder' />
                        <p className="legend">Image 5</p>
                    </div>

                </Carousel>
            </div>
        </section>
    )
}





export default function Dummy() {
    return (
        <div className='flex flex-col bg-gblue text-lightgray font-ruda sm:flex-row sm:h-screen sm:overflow-hidden'>
            < PageHead pageTitle='Project X' />
            <header className='font-ruda sm:w-56'>
                <Navbar page={'project'} />
            </header>
            <main className='overflow-y-auto scroll-smooth flex flex-col gap-6 font-outfit scrollbar-thin scrollbar-thumb-midgray scrollbar-thumb-rounded-full scrollbar-track-lightgray p-2 sm:p-6'>
                <h1 className="ml-2 text-4xl">Project X</h1>
                <About />
                <Techs />
                <Screenshots />
            </main>
        </div >
    )
}