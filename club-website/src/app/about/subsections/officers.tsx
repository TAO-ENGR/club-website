import { poppins } from "../../fonts";
import about from "../about.module.css";
import { officers } from "@/data/officers";
import OfficerCard from "@/components/officer-card";

const Officers: React.FC = () => {
  const execs = officers.filter(
    officer => officer.active && officer.branch === "executive"
  );
  const activeOfficers = officers.filter(
    officer => officer.active && officer.branch !== "executive"
  );
  const former = officers.filter(officer => !officer.active);

  return (
    <div className={`text-left bg p-8 lg:p-24 ${about["bg-light-gray"]}`}>
      <h1 className="font-bold md:text-4xl text-3xl mb-8" style={poppins.style}>
        OFFICERS
      </h1>
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {execs.map(officer => (
          <OfficerCard officer={officer} key={officer.id} />
        ))}
      </div>
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {activeOfficers.map(officer => (
          <OfficerCard officer={officer} key={officer.id} />
        ))}
      </div>
      <h1 className="font-bold md:text-4xl text-3xl mb-8" style={poppins.style}>
        FORMER PRESIDENTS
      </h1>
      <div className="flex flex-wrap items-start justify-center gap-12 mb-12">
        {former.map(officer => (
          <OfficerCard officer={officer} key={officer.id} />
        ))}
      </div>
    </div>
  );
};

export default Officers;
