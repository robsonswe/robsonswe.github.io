import { HouseDoorFill, BriefcaseFill, EnvelopeFill } from 'react-bootstrap-icons';

function Navbar () {
    return (
        <nav className="flex justify-between p-2 bg-slate-600 text-slate-300">
        <a href="./index.html"><h1 className="text-xl font-bold">Robson</h1></a>
            <ul className="flex justify-end gap-4">
                <li><a href="#" className='flex items-center gap-1'><HouseDoorFill className='inline' />Home</a></li>
                <li><a href="#projects" className='flex items-center gap-1'><BriefcaseFill className='inline' />Projects</a></li>
                <li><a href="#contact" className='flex items-center gap-1'><EnvelopeFill className='inline' />Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar