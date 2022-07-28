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

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
            <div>
                <label className="pt-5 text-center block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">Name:</label>
                <input className="appearance-none block w-full bg-gray-600 text-gray-700 border focus:border-red-500 rounded py-3 
                                px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500" type="text" id="name" 
                                placeholder="Enter Name" required />
            </div>
            <div>
                <label className="text-center pt-5 block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">Email:</label>
                <input className="appearance-none block w-full bg-gray-600 text-gray-700 border focus:border-red-500 rounded py-3 
                                px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500" type="email" id="email" 
                                placeholder="Enter Email" required />
            </div>
            <div>
                <label className="text-center pt-5 block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">Message:</label>
                <textarea className={ReturnMessageInputClass()} id="message"
                                placeholder="Enter Message" required />
            </div>
            <div className="pt-5">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">{status}</button>
            </div>
        </div>
    </form>
  );
};

function ReturnMessageInputClass() {
    let firstPart = "appearance-none message-input bg-gray-600 text-gray-700 border focus:border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500"

    return isMobile ? firstPart.concat(" w-[250px] h-[200px]") : firstPart.concat(" w-[400px] h-[200px]") 
}

export default ContactPage;