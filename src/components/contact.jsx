import { Github, Linkedin } from 'react-bootstrap-icons';

function Contact() {
  return (
    <section id="contact" className="mb-1 ml-2">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className='flex flex-col justify-between p-8 mt-1 rounded-md bg-lightgblue w-fit sm:h-56 sm:w-96'>
        <div>
          <h1 className='text-lg font-bold'>Robson O. S. de Santana</h1>
          <h2 className='font-semibold'>Web Developer</h2>
          <a href="mailto://email@example.com">
            <p className='font-thin cursor-pointer hover:underline'>email@example.com</p>
          </a>
        </div>
        <div className='flex gap-4 flew-row'>
          <a href="http://linkedin.com/in/robsonossantana/" target="_blank" rel="noreferrer">
            <Linkedin className='inline hover:cursor-pointer' />
          </a>
          <a href="https://github.com/ROSS1996" target="_blank" rel="noreferrer">
            <Github className='inline hover:cursor-pointer' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;