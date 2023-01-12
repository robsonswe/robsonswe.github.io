function Navbar() {
    return (
        <nav className="flex flex-col border-r border-midgray gap-2 sm:h-screen sm:p-6 sm:text-right sm:gap-20">
            <h1 className="text-5xl text-center sm:text-left">Robson <span className="sm:text-4xl">Santana</span></h1>
            <ul className="flex flex-row justify-center gap-4 sm:flex-col sm:items-end">
                <li><a href="#about" className='flex items-center gap-1 sm:text-2xl p-1 rounded hover:bg-lightgblue'>About</a></li>
                <li><a href="#skills" className='flex items-center gap-1 sm:text-2xl p-1 rounded hover:bg-lightgblue'>Skills</a></li>
                <li><a href="#projects" className='flex items-center gap-1 sm:text-2xl p-1 rounded hover:bg-lightgblue'>Projects</a></li>
                <li><a href="#contact" className='flex items-center gap-1 sm:text-2xl p-1 rounded hover:bg-lightgblue'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar