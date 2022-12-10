const loremIpsum =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae voluptatibus nobis aspernatur fugiat tempore dolore! Hic, beatae? Quae at nihil eum delectus laboriosam repudiandae. Doloribus, molestias. Minima, ad quos!";

const placeholderPic =
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";

const ProjectDB = [
  {
    id: 0,
    projectName: "Sketchpage",
    projectLink: "https://github.com/ROSS1996/sketchpage",
    projectDesc: loremIpsum,
    projectPic:
      "https://github.com/ROSS1996/sketchpage/raw/main/screenshot.png",
  },
  {
    id: 1,
    projectName: "Web Calculator",
    projectLink: "https://github.com/ROSS1996/web-calculator",
    projectDesc: loremIpsum,
    projectPic: placeholderPic,
  },
  {
    id: 2,
    projectName: "Rock, Paper, Scissors",
    projectLink: "https://github.com/ROSS1996/rps-game",
    projectDesc: loremIpsum,
    projectPic: "https://github.com/ROSS1996/rps-game/raw/main/screenshot.png",
  },
  {
    id: 3,
    projectName: "Landing Page Template #1",
    projectLink: "https://github.com/ROSS1996/lpage-template1",
    projectDesc: loremIpsum,
    projectPic:
      "https://github.com/ROSS1996/lpage-template1/raw/main/screenshot.jpeg",
  },
  {
    id: 4,
    projectName: "Register Page Template #1",
    projectLink: "https://github.com/ROSS1996/regpage",
    projectDesc: loremIpsum,
    projectPic: placeholderPic,
  },
];

function Projects() {
  const projectsList = ProjectDB.map((item) => {
    return (
      <div
        className="grid grid-cols-[fit-content,1fr] grid-rows-[2rem,1fr] border border-solid border-black mb-2 rounded-sm"
        key={item.id}
      >
        <div className="col-start-1 col-end-2 row-start-1 row-span-2 w-40 border-r border-solid border-black p-1">
          <img src={item.projectPic} alt="..." />
        </div>
        <a
          href={item.projectLink}
          target="_blank"
          rel="external"
          className="col-start-2 row-start-1 p-1"
        >
          <h2 className="font-bold text-slate-700">{item.projectName}</h2>
        </a>
        <p className="col-start-2 row-start-2 border-t border-solid border-black p-1">{item.projectDesc}</p>
      </div>
    );
  });

  return (
    <section id="projects" className="p-2 bg-white">
      <h1 className="font-bold text-lg">Projects</h1>
      <div id="projectsList">{projectsList}</div>
    </section>
  );
}

export default Projects;
