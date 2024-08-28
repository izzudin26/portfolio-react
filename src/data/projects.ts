import nayavada from "../assets/projects/nayavada.png";
import persakmi from "../assets/projects/persakmi.png";
import artdesign from "../assets/projects/artdesign.png";
// import slaharwotan from "../assets/projects/slaharwotan.png";
import lanjong from "../assets/projects/lanjong.png";
import rsml from "../assets/projects/rsml.png";
import puslat from "../assets/projects/puslatrsml.png";

export type TProject = {
  image: string;
  name: string;
  url?: string;
  summary?: string;
};

export const project: TProject[] = [
  {
    name: "F&B System",
    image: lanjong,
    url: "https://pos.izumob.com",
    summary: "Create mobile and web application for F&B Business system",
  },
  {
    name: "RSML Web Profile",
    image: rsml,
    url: "https://rsmlamongan.com",
    summary:
      "Create hospital web profile for branding and show schedule of doctor",
  },
  {
    name: "Artdesign",
    image: artdesign,
    summary: "Slicing UI/UX design into application",
  },
  {
    name: "Persakmi",
    image: persakmi,
    url: "https://persakmi.or.id",
    summary: "Redesign UI and make user enjoyable visit healty organization",
  },
  {
    name: "Nayavada Academic",
    image: nayavada,
    url: "https://nayavadaacademic.com",
    summary: "Redesign UI nayavada academic course",
  },
  {
    name: "Puslat RSML",
    image: puslat,
    url: "https://puslat.rsmlamongan.com",
    summary:
      "Create ELearning Website and integration with hospital employee enrollment service",
  },
];
