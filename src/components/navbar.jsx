function Navbar () {
    return (
        <header>
        <nav className="flex justify-between p-2 bg-slate-600 text-slate-300">
        <a href="./index.html"><h1 className="text-xl font-bold">Robson</h1></a>
            <ul className="flex justify-end gap-4">
                <li><a href="./index.html"><i className="bi bi-house-door-fill" /> Home</a></li>
                <li><a href="./projects.html"><i className="bi bi-briefcase-fill"/> Projects</a></li>
                <li><a href="./contact.html"><i className="bi bi-envelope-fill"/> Contact</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar