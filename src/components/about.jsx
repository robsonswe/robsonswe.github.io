function About({ lang }) {

    const locales = {
        'default': {
            title: 'About',
            para1: "Hello, my name is Robson. I'm a developer who strives to build efficient and user-friendly applications that provide a seamless and intuitive experience for the end-users. My expertise in front-end development includes using HTML, CSS, and JavaScript to build interactive user interfaces, as well as modern development tools such as Tailwind CSS for efficient styling, Sass for organized CSS, and TypeScript for scalable and maintainable code. Additionally, I have proficiency on popular frameworks such as React and Next.js for building dynamic and scalable web applications.",
            para2: "In addition to front-end development, my knowledge extends into back-end development with the usage of Node.js, and relational databases such as MySQL and PostgreSQL. I am also skilled in web scraping and automation, using Python to create scripts that can quickly gather and process data.",
            para3: 'I am a detail-oriented problem solver with a strong work ethic and a passion for creating high-quality, efficient, and user-focused applications. I am always eager to learn new technologies and frameworks to stay ahead of the rapidly evolving tech landscape, and constantly strive to improve my skills and knowledge. If you are looking for a dedicated and motivated developer who can bring value, I would love to hear from you.'
        },
        'pt': {
            title: 'Sobre',
            para1: "Olá, meu nome é Robson. Eu sou um desenvolvedor que se esforça para construir aplicações eficientes e amigáveis ao usuário que proporcionam uma experiência perfeita e intuitiva para os usuários finais. Minha especialização em desenvolvimento front-end inclui o uso de HTML, CSS e JavaScript para construir interfaces de usuário interativas, bem como ferramentas modernas de desenvolvimento, como Tailwind CSS para estilização eficiente, Sass para CSS organizado e TypeScript para código escalável e fácil de manter. Além disso, tenho proficiência em frameworks populares como React e Next.js para construir aplicativos web dinâmicos e escaláveis.",
            para2: "Além do desenvolvimento front-end, meu conhecimento se estende ao desenvolvimento back-end com o uso de Node.js e bancos de dados relacionais como MySQL e PostgreSQL. Também tenho habilidades em web scraping e automação, usando Python para criar scripts que podem coletar e processar dados rapidamente.",
            para3: 'Eu sou um solucionador de problemas orientado a detalhes com uma forte ética de trabalho e uma paixão por criar aplicativos de alta qualidade, eficientes e focados no usuário. Estou sempre ansioso para aprender novas tecnologias e frameworks para me manter à frente do cenário tecnológico em constante evolução e constantemente me esforço para melhorar minhas habilidades e conhecimentos. Se você está procurando um desenvolvedor dedicado e motivado que possa trazer valor, adoraria ouvir de você.'
        },
    }

    const locale = locales[lang] || locales['default'];

    return (
        <section id="about" className="ml-2" lang={lang}>
            <h2 className="text-2xl font-bold">{locale.title}</h2>
            <div className="flex flex-col gap-2 p-4 mt-1 rounded bg-lightgblue">
                <p className="text-justify">{locale.para1}</p>
                <p className="text-justify">{locale.para2}</p>
                <p className="text-justify">{locale.para3}</p>
            </div>
        </section>
    )
}

export default About;
