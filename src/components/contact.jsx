import { Github, Linkedin } from 'react-bootstrap-icons';

function Contact() {
  return (
    <section id="contact" className="ml-2 mb-1">
      <h2 className="font-bold text-2xl">Contact</h2>
      <div className='bg-quinternary w-96 justify-between h-56 flex flex-col p-8 rounded-md mt-1'>
        <div>
          <h1 className='font-bold text-lg'>Robson O. S. de Santana</h1>
          <h2 className='font-semibold'>Web Developer</h2>
          <a href="mailto://email@example.com">
            <p className='font-thin hover:underline cursor-pointer'>email@example.com</p>
          </a>
        </div>
        <div className='flex flew-row gap-4'>
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