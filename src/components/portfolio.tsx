import { TProject, project } from "../data/projects";
import { useState } from "react";

function ProjectCard({ image, name, summary, url }: TProject) {
  return (
    <>
      <div
        className="flex flex-col w-full relative group overflow-hidden"
        data-aos="fade-up"
      >
        <img src={image} className="rounded-md" />
        <div className="inset-0 absolute group-hover:translate-y-0 translate-y-full duration-500 bg-primary/70 flex flex-col items-center justify-center">
          <p className="text-xl text-white">{name}</p>
          <p className="text-white text-sm mt-3 text-center px-5">{summary}</p>
          {url && (
            <a
              href={url}
              role="button"
              target="_blank"
              className="px-10 py-2 bg-secondary text-primary rounded-full mt-5"
            >
              Visit
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default function () {
  const [projects] = useState<TProject[]>(project);
  return (
    <>
      <div className="flex flex-col min-h-screen items-center w-11/12 py-10 lg:py-0 lg:w-10/12 mx-auto justify-center">
        <h2 data-aos="fade-up">
          <span className="text-secondary text-3xl lg:text-5xl font-bold">
            {"<"}
          </span>
          <span className="text-white text-3xl lg:text-5xl font-semibold">
            Portfolio
          </span>
          <span className="text-secondary text-3xl lg:text-5xl font-bold">
            {"/>"}
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-10">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              image={p.image}
              name={p.name}
              summary={p.summary}
              url={p.url}
            />
          ))}
        </div>
      </div>
    </>
  );
}
