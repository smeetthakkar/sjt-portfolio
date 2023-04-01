import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-600">
            Let us innovate together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#5651e5]">Smeet</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Project Manager</h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            Multi-tasking Project Manager well-known for successfully taking a project from shop
            drawing to completion. Certified as a Project Management Professional with almost a
            decade project management experience. Adept at planning, estimating, organising, optimal
            resource utilisation and overall implementation of software projects.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/smeetjthakkar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin size={25} />
              </div>
            </a>
            <a href="https://twitter.com/smeet_j?lang=en" target="_blank" rel="noopener noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter size={25} />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
