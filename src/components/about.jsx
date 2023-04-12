function About({ lang }) {

    const locales = {
        'default': {
            title: 'About',
            para1: "Hi, i am Robson. I'm a dedicated developer who strives to build excellent applications that provide an intuitive experience for the end user. My expertise in front-end development includes using HTML, CSS, and JavaScript, as well as modern development tools such as Tailwind CSS for efficient styling, Sass for organized CSS, and TypeScript for scalable and maintainable code. Additionally, I have proficiency in popular frameworks like React and Next.js to build dynamic and scalable web applications.",
            para2: "My knowledge also extends to back-end development, using Node.js and relational databases such as MySQL and PostgreSQL. I have skills in web scraping and automation, using Python to create scripts that collect and process data quickly.",
            para3: "I'm a detail-oriented problem solver with a strong work ethic and a passion for creating high-quality, efficient applications. I'm always available to learn new technologies and frameworks to stay updated in the constantly evolving technological landscape and continually strive to improve my skills and knowledge. If you're looking for a dedicated and motivated developer who can bring value, contact me."
        },
        'pt': {
            title: 'Sobre',
            para1: "Olá, meu nome é Robson. Sou um desenvolvedor dedicado a construir aplicações de excelência, proporcionando uma experiência intuitiva para o usuário final. Minha especialidade em desenvolvimento front-end inclui o uso de HTML, CSS e JavaScript, além do uso de ferramentas modernas de desenvolvimento, como Tailwind CSS para estilização eficiente, Sass para organizar o CSS e TypeScript para escalamento e manutenção de código. Além disso, tenho proficiência em frameworks populares como React e Next.js para construir aplicativos web dinâmicos e escaláveis.            ",
            para2: "Meu conhecimento também se estende ao desenvolvimento back-end, utilizando Node.js e bancos de dados relacionais como MySQL e PostgreSQL. Tenho habilidades em web scraping e automação, utilizando Python para criar scripts que coletam e processam dados rapidamente.",
            para3: 'Sou um profissional focado em solucionar problemas com atenção aos detalhes e uma postura determinada e dedicada ao trabalho. Estou sempre a disposição para aprender novas tecnologias e frameworks para me manter atualizado no cenário tecnológico em constante evolução e continuamente esforçando-me para melhorar minhas habilidades e conhecimentos. Se você está procurando um desenvolvedor dedicado e motivado, capaz de trazer valor, contate-me.'
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
