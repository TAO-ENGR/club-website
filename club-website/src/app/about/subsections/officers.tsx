import { poppins } from "../../fonts";
import about from "../about.module.css";
import { OfficerType } from "@/lib/types";
import contentOfficers from "../../../../public/officers/content.json";
import serverOfficers from "../../../../public/officers/server.json";
import socialOfficers from "../../../../public/officers/social.json";
import webOfficers from "../../../../public/officers/web.json";
import execData from "../../../../public/officers/execs.json";
import formerOfficers from "../../../../public/officers/former.json";
import OfficerCard from "@/components/officer-card";

const Officers: React.FC = () => {
  const execs: OfficerType[] = execData;
  const officers: OfficerType[] = [];
  const former: OfficerType[] = formerOfficers;

  const officerArrays = [
    contentOfficers,
    serverOfficers,
    socialOfficers,
    webOfficers,
  ];

  officerArrays.forEach((array) => {
    officers.push(...array);
  });

  return (
    <div className={`text-left bg p-8 lg:p-24 ${about["bg-light-gray"]}`}>
      <h1 className="font-bold md:text-4xl text-3xl mb-8" style={poppins.style}>
        OFFICERS
      </h1>
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {execs.map((exec, index) => (
          <OfficerCard officer={exec} key={index} />
        ))}
      </div>
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {officers.map((officer, index) => (
          <OfficerCard officer={officer} key={index} />
        ))}
      </div>
      <h1 className="font-bold md:text-4xl text-3xl mb-8" style={poppins.style}>
        FORMER OFFICERS
      </h1>
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {former.map((officer, index) => (
          <OfficerCard officer={officer} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Officers;
