import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const [message, setMessage] = useState("");

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    fetch("https://getform.io/f/a660c472-e400-4731-b8f5-48331899e341", {
      method: "POST",
      body: formData,
    }).then(() => setQuery({ name: "", email: "", phone: "", subject: "", message: "" }));
  };

  return (
    <div id="contact">
      <div className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 py-24 w-full">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
          <h2 className="py-4">Get in Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full rounded-xl">
                <div>
                  {/* <img src="/contact-me.jpg" alt="" /> */}
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src="/contact-me.jpg"
                    width={400}
                    height={1000}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="py-2">Smeet J Thakkar</h2>
                  <p>Project Manager</p>
                  <p className="py-4">
                    Contact me if you want to talk about any interest opportunities!
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Connect with me</p>
                  <div className="flex items-center justify-evenly py-4">
                    <a
                      href="https://www.linkedin.com/in/smeetjthakkar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedin size={25} />
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/smeet_j?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaTwitter size={25} />
                      </div>
                    </a>
                    <a href="/resumeSmeet.pdf" target="_blank" rel="noopener noreferrer">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineCloudDownload size={25} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form onSubmit={formSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 py-2 w-full">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="flex p-3 rounded-lg border-2 border-gray-300"
                        type="text"
                        name="name"
                        required
                        value={query.name}
                        onChange={handleParam()}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Number</label>
                      <input
                        className="flex p-3 rounded-lg border-2 border-gray-300"
                        type="number"
                        name="phone"
                        required
                        value={query.phone}
                        onChange={handleParam()}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="flex p-3 rounded-lg border-2 border-gray-300"
                      type="email"
                      name="email"
                      required
                      value={query.email}
                      onChange={handleParam()}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="flex p-3 rounded-lg border-2 border-gray-300"
                      type="text"
                      name="subject"
                      required
                      value={query.subject}
                      onChange={handleParam()}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows={10}
                      name="message"
                      required
                      value={query.message}
                      onChange={handleParam()}
                    />
                  </div>
                  <button className="w-full p-4 mt-4 text-gray-100">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-12">
          <Link href="/#home" scroll={false}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
