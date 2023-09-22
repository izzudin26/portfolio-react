import photo from "../assets/photo.png";
import resumeIcon from "../assets/resume.svg";
import SocialIcon from "./social";
import { socials } from "../data/social";

export default function About() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row  w-full min-h-screen items-center container lg:w-10/12 mx-auto">
        <div className="flex flex-col w-full">
          <div className="flex flex-col mx-auto">
            <span className="text-white">Howdy!</span>
            <h1 className="text-secondary text-6xl font-bold mt-2">
              I'm Izzudin
            </h1>
            <h1 className="text-white text-6xl font-bold mt-2">Ar Rafiq</h1>
            <p className="text-white mt-5">Software Developer | Transforming</p>
            <p className="text-white">Ideas into Robust Applications</p>
            <div className="flex flex-row gap-2 mt-5">
              {socials.map((s, i) => (
                <SocialIcon key={i} icon={s.icon} url={s.url} />
              ))}
            </div>
            <a
              href="https://resume.io/r/GViEzdsuE"
              role="button"
              target="_blank"
              className="flex flex-row p-3 mt-5 w-auto bg-secondary rounded-lg text-primary font-semibold items-center justify-center gap-3"
            >
              <img src={resumeIcon} className="w-6 h-6" />
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full my-auto items-end justify-end">
          <div className="w-1/2 items-center justify-center flex mx-auto relative">
            <div className="w-full rounded-full mx-auto relative bg-secondary">
              <img src={photo} className="rounded-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
