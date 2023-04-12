import { useState } from "react";


import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import image0 from "../../../public/images/108-900x900.jpg";
import image1 from "../../../public/images/175-900x900.jpg";
import image2 from "../../../public/images/235-900x900.jpg";
import image3 from "../../../public/images/781-900x900.jpg";



let iconsColor = "#C0C1C8";
let secondColor = "#2d2c40";

import Icon from "../../components/svgicons";

import PageHead from "../../components/head"
import Navbar from "../../components/navbar"


function About() {
    return (
        <section id="about" className="ml-2" lang="zxx">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="p-4 my-1 text-justify rounded bg-lightgblue">
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
            <h2 className="text-2xl font-bold">Tech Stack</h2>
            <div className='grid items-center w-full grid-rows-2 gap-2 p-4 my-2 rounded p- bg-lightgblue'>
                <div>
                    <h2 className='self-center text-lg font-bold font-exo'>Frontend</h2>
                    <hr />
                    <ul className='flex flex-row flex-wrap w-full gap-4 p-4 text-center opacity-70'>
                        <li className='flex items-center gap-1'>< Icon name={'html'} size={'1.5rem'} color={iconsColor} secondColor={secondColor} />HTML</li>
                        <li className='flex items-center gap-1'>< Icon name={'css'} size={'1.5rem'} color={iconsColor} secondColor={secondColor} />CSS</li>
                        <li className='flex items-center gap-1'>< Icon name={'jvascript'} size={'1.5rem'} color={iconsColor} secondColor={secondColor} />Javascript</li>
                        <li className='flex items-center gap-1'>< Icon name={'tailwind'} size={'1.5rem'} color={iconsColor} secondColor={secondColor} />TailwindCSS</li>
                    </ul>
                </div>
                <div>
                    <h2 className='self-center text-lg font-bold font-exo'>Backend</h2>
                    <hr />
                    <ul className='flex flex-row flex-wrap w-full p-4 text-center opacity-70 gap-7'>
                        <li className='flex items-center gap-1'>< Icon name={'node'} size={'1.5rem'} color={iconsColor} secondColor={secondColor} />NodeJS</li>
                        <li className='flex items-center gap-1'>< Icon name={'express'} size={'1.5rem'} color={iconsColor} secondColor={secondColor} />ExpressJS</li>
                        <li className='flex items-center gap-1'>< Icon name={'mongo'} size={'1.5rem'} color={iconsColor} secondColor={'#96969e'} />MongoDB</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

function Links() {
    return (
        <section id="about" className="ml-2" lang="zxx">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="my-1 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati illo error earum, ratione dolorum aliquid dolorem provident quae culpa atque odio et deleniti, eum, porro assumenda iusto. Praesentium, aliquid maxime.
                Numquam voluptatibus vitae, accusamus inventore, optio molestiae sapiente recusandae dignissimos deleniti repudiandae necessitatibus dolore? In tempore repellat quae. Veritatis repudiandae ea suscipit porro maxime blanditiis placeat aperiam dolore consequatur expedita!
                Autem recusandae quibusdam placeat tempora ea, nobis aliquid. Quis atque magni voluptatem architecto eligendi similique, sapiente aperiam eius excepturi illo tempora vero possimus in ratione qui earum nesciunt repellendus consequuntur!
                In doloremque, aliquid quidem fugiat ipsa eos soluta exercitationem? Pariatur alias libero harum quod quas molestias quasi repudiandae veritatis, enim reiciendis dignissimos facilis nisi consequatur officia labore, sequi sunt nesciunt.
            </p>
        </section>
    )
}


function Screenshots() {

    const [index, setIndex] = useState(-1);



    return (
        <section id="screenshots" className="flex flex-col gap-4 ml-2" lang="zxx">
            <h2 className="text-2xl font-bold">Screenshots</h2>
            <div className="flex flex-col gap-5 p-4 my-1 rounded w-fit bg-lightgblue lg:flex-row">

                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={[image0, image1, image2, image3]}
                    render={{
                        slide: (image, offset, rect) => {
                            const width = Math.round(Math.min(rect.width, (rect.height / image.height) * image.width));
                            const height = Math.round(Math.min(rect.height, (rect.width / image.width) * image.height));

                            return (
                                <div style={{ position: "relative", width, height }}>
                                    <Image
                                        fill
                                        src={image}
                                        loading="eager"
                                        placeholder="blur"
                                        alt={"alt" in image ? image.alt : ""}
                                        sizes={
                                            typeof window !== "undefined"
                                                ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                                                : `${width}px`
                                        }
                                    />
                                </div>
                            );
                        }
                    }}
                />


                <Image src={image0} height={800} width={800} alt='imageOne' onClick={() => setIndex(0)} />

                <div className="flex flex-row flex-wrap gap-4 lg:flex-col">
                    <Image src={image1} height={200} width={200} alt='imageOne' onClick={() => { setIndex(1) }} />
                    <Image src={image2} height={200} width={200} alt='imageTwo' onClick={() => setIndex(2)} />
                    <Image src={image3} height={200} width={200} alt='imageThree' onClick={() => setIndex(3)} />
                </div>


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
            <main className='flex flex-col gap-6 p-2 overflow-y-auto scroll-smooth font-outfit scrollbar-thin scrollbar-thumb-midgray scrollbar-thumb-rounded-full scrollbar-track-lightgray sm:p-6'>
                <h1 className="ml-2 text-4xl">Project X</h1>
                <About />
                <Techs />
                <Screenshots />
            </main>
        </div >
    )
}