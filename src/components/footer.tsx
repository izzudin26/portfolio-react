import SocialIcon from "./social";
import { socials } from "../data/social";
import { useState } from "react";

export default function () {
  const [date] = useState<Date>(new Date());
  const [year] = useState<number>(date.getFullYear());

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row mt-10 w-11/12 items-center container lg:w-10/12 mx-auto">
        <div className="flex flex-row py-10 items-center justify-between w-full">
          <p className="text-white">
            © Izzudin Ar Rafiq {year} All rights Reserved
          </p>
          <div className="flex flex-row gap-2 justify-end items-center">
            {socials.map((s, i) => (
              <SocialIcon key={i} icon={s.icon} url={s.url} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
