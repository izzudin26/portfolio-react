import { useState } from "react";
import {
  TTechnicalSkill,
  skills as skillsData,
  tools as toolsData,
} from "../data/skills";

function SkillCard({ icon, name }: TTechnicalSkill) {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col rounded-lg bg-white/10 hover:bg-white/20 duration-300 p-6 items-center justify-center"
      >
        <img src={icon} className="w-10 h-10" />
        <p className="text-white mt-2">{name}</p>
      </div>
    </>
  );
}

export default function Skills() {
  const [skills] = useState<TTechnicalSkill[]>(skillsData);
  const [tools] = useState<TTechnicalSkill[]>(toolsData);

  return (
    <>
      <div className="flex flex-col min-h-screen items-center w-11/12 py-10 lg:py-0 lg:w-10/12 mx-auto justify-center">
        <h2 data-aos="fade-up">
          <span className="text-secondary text-3xl lg:text-5xl font-bold">
            {"<"}
          </span>
          <span className="text-white text-3xl lg:text-5xl font-semibold">
            TechnicalSkills
          </span>
          <span className="text-secondary text-3xl lg:text-5xl font-bold">
            {"/>"}
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="flex flex-col w-full items-center">
            <span className="text-white font-medium" data-aos="fade-up">
              Programming
            </span>
            <div className="grid grid-cols-3 gap-5 mt-2 w-full">
              {skills.map((s, i) => (
                <SkillCard icon={s.icon} name={s.name} key={i} />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <span className="text-white font-medium" data-aos="fade-up">
              Tools
            </span>
            <div className="grid grid-cols-3 gap-5 mt-2 w-full">
              {tools.map((s, i) => (
                <SkillCard icon={s.icon} name={s.name} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
