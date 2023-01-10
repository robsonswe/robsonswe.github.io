import { Github, Linkedin, EnvelopeAtFill } from 'react-bootstrap-icons';

function Contact() {
  return (
    <section id="contact" className="p-2 bg-white ml-2">
      <h2 className="font-bold text-lg">Contact</h2>
      <ul className="flex flex-row gap-4 p-2">
        <li className='p-4 bg-slate-200 w-fit border border-black rounded-md'>
          <a href="mailto://robsonlvr76@gmail.com" className='flex flex-col items-center gap-1'>
            <EnvelopeAtFill className='inline' />
            Email
          </a>
        </li>
        <li className='p-4 bg-slate-200 w-fit border border-black rounded-md'>
          <a href="http://linkedin.com/in/robsonossantana/" target="_blank" rel="noreferrer" className='flex flex-col items-center gap-1'>
            <Linkedin className='inline' />LinkedIn
          </a>
        </li>
        <li className='flex flex-col items-center p-4 bg-slate-200 w-fit border border-black rounded-md'>
          <a href="https://github.com/ROSS1996" target="_blank" rel="noreferrer" className='flex flex-col items-center gap-1'>
            <Github className='inline' />Github
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;