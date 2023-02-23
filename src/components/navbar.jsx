import Link from "next/link"

function Index() {
    return (
        <>
            <li><a href="#about" className='flex items-center gap-1 p-1 rounded sm:text-2xl hover:bg-lightgblue'>About</a></li>
            <li><a href="#skills" className='flex items-center gap-1 p-1 rounded sm:text-2xl hover:bg-lightgblue'>Skills</a></li>
            <li><a href="#projects" className='flex items-center gap-1 p-1 rounded sm:text-2xl hover:bg-lightgblue'>Projects</a></li>
            <li><a href="#contact" className='flex items-center gap-1 p-1 rounded sm:text-2xl hover:bg-lightgblue'>Contact</a></li>
        </>
    )
}

function Projects() {
    return (
        <>
            <li><a href="#about" className='p-1 rounded sm:text-2xl hover:bg-lightgblue'>About</a></li>
            <li><a href="#techs" className='p-1 rounded sm:text-2xl hover:bg-lightgblue'>Techs</a></li>
            <li><a href="#screenshots" className='p-1 rounded sm:text-2xl hover:bg-lightgblue'>Screenshots</a></li>
            <li>
                <Link href='/' className='flex items-center gap-1 p-1 rounded sm:text-base hover:bg-lightgblue'>Return to Index</Link>
            </li>
        </>
    )
}


function Navbar(props) {
    let page = props.page
    return (
        <nav className="flex flex-col gap-2 border-r border-midgray sm:h-screen sm:p-6 sm:text-right sm:gap-20">
            <h1 className="text-5xl text-center sm:text-left">Robson <span className="sm:text-4xl">Santana</span></h1>
            <ul className="flex flex-row justify-center gap-4 sm:flex-col sm:items-end">
                {
                    props.page === 'index' ? <Index /> : <Projects />
                }
            </ul>
        </nav>
    )
}

export default Navbar