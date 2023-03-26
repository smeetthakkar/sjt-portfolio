import { TfiWrite } from "react-icons/tfi";
import { FaTasks } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineSchedule, AiOutlineStop } from "react-icons/ai";
import { MdSyncProblem } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col h-full justify-center">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
        <h2 className="py-4">What I Do:</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div>
                <TfiWrite size={40} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Project Scoping</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div>
                <FaTasks size={40} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Task Management</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div>
                <BsCashCoin size={40} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Budget Management</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div>
                <RiTeamLine size={40} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>People Management</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div>
                <AiOutlineSchedule size={40} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Project Scheduling</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div>
                <AiOutlineStop size={40} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Risk Management</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div>
                <MdSyncProblem size={40} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Problem Solving</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div>
                <SlBadge size={40} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Quality Management</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
