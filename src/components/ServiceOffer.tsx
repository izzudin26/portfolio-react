import { useState } from "react";
import { TService, services as serviceData } from "../data/serviceOffer";

function ServiceOfferCard({ icon, name, summary }: TService) {
  return (
    <>
      <div
        className="flex flex-col p-4 rounded-lg ring-1 ring-secondary bg-primary"
        data-aos="fade-up"
      >
        <div className="flex flex-row gap-2 items-center">
          <img src={icon} className="w-6 h-6" />
          <h3 className="font-medium text-lg text-secondary">{name}</h3>
        </div>
        <p className="text-white mt-2">{summary}</p>
      </div>
    </>
  );
}

export default function () {
  const [services] = useState<TService[]>(serviceData);
  return (
    <>
      <div className="flex flex-col min-h-screen items-center w-11/12 py-10 lg:py-0 lg:w-10/12 mx-auto justify-center">
        <h2 data-aos="fade-up">
          <span className="text-secondary text-3xl lg:text-5xl font-bold">
            {"<"}
          </span>
          <span className="text-white text-3xl lg:text-5xl font-semibold">
            ServiceOffer
          </span>
          <span className="text-secondary text-3xl lg:text-5xl font-bold">
            {"/>"}
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5 w-full lg:w-10/12">
          {services.map((s, i) => (
            <ServiceOfferCard
              icon={s.icon}
              name={s.name}
              summary={s.summary}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}
