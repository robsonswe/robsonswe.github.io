
function Socials() {
    return (
      <section id="Socials">
        <ul className="flex flex-row gap-4">
          <li>
            <a
              href="http://linkedin.com/in/robsonossantana/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/ROSS1996" target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i> Github
            </a>
          </li>
        </ul>
      </section>
    );
  }
  
  function ContactForm() {
    return (
      <section
        id="ContactForm"
        className="max-w-screen-md border-solid border border-slate-500 rounded p-2"
      >
        <form className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              minLength="3"
              className="border border-zinc-500 rounded-sm p-1 indent-1 focus:bg-zinc-200 "
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              minLength="6"
              className="border border-zinc-500 rounded-sm p-1 indent-1 focus:bg-zinc-200 "
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              minLength="5"
              className="border border-zinc-500 rounded-sm p-1 indent-1 focus:bg-zinc-200 "
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              minLength="10"
              className="border border-zinc-500 rounded-sm p-1 indent-1 focus:bg-zinc-200 "
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="max-w-fit bg-blue-500 p-1 border-2 rounded border-solid border-slate-300 hover:bg-blue-600 hover:border-slate-400 active:bg-blue-600 text-white font-semibold text-sm"
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
  
  function Contact() {
    return (
      <section id="contact" className="p-2 bg-white">
        <h2 className="font-bold text-lg">Contact</h2>
        <Socials />
        <ContactForm />
      </section>
    );
  }
  
  export default Contact;