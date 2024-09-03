import React, { useState } from "react";

const isMobile = window.innerWidth <= 768;

const ContactPage = () => {
    return (
        <div className="content-container">
            <div className="text-bold text-5xl pt-4 text-white text-center">
                Contact Me!
            </div>
            <ContactForm />
        </div>
    );
};

const FORM_ENDPOINT = "https://usebasin.com/f/16db205d16c7";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl text-white pt-5">Thank you!</div>
        <div className="text-md text-white pt-5">I'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="flex flex-col items-center">
        <div className="mb-3 pt-0">
          <label className="pt-5 text-center block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            className="appearance-none block w-full bg-gray-600 text-white border focus:border-red-500 rounded py-3 
            px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500" 
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <label className="text-center pt-5 block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            className="appearance-none block w-full bg-gray-600 text-white border focus:border-red-500 rounded py-3 
            px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <label className="text-center pt-5 block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">Message:</label>
          <textarea
            placeholder="Enter Message"
            name="message"
            className={ReturnMessageInputClass()}
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

function ReturnMessageInputClass() {
    let firstPart = "appearance-none message-input bg-gray-600 text-white border focus:border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500"

    return isMobile ? firstPart.concat(" w-[250px] h-[200px]") : firstPart.concat(" w-[400px] h-[200px]") 
}

export default ContactPage;