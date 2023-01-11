function Navbar() {
    return (
        <nav className="flex flex-col h-screen p-6 border-r border-midgray text-right gap-20">
            <h1 className="text-5xl text-left">Robson <span className="text-4xl">Santana</span></h1>
            <ul className="flex flex-col items-end gap-4">
                <li><a href="#about" className='flex items-center gap-1 text-2xl p-1 rounded hover:bg-lightgblue'>About</a></li>
                <li><a href="#skills" className='flex items-center gap-1 text-2xl p-1 rounded hover:bg-lightgblue'>Skills</a></li>
                <li><a href="#projects" className='flex items-center gap-1 text-2xl p-1 rounded hover:bg-lightgblue'>Projects</a></li>
                <li><a href="#contact" className='flex items-center gap-1 text-2xl p-1 rounded hover:bg-lightgblue'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar