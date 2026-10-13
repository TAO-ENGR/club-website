import { poppins } from "../../fonts";
import { officers } from "@/data/officers";
import OfficerCard from "@/components/officer-card";

const Officers: React.FC = () => {
  const execs = officers.filter(
    (officer) => officer.active && officer.branch === "executive",
  );
  const activeOfficers = officers.filter(
    (officer) => officer.active && officer.branch !== "executive",
  );
  const former = officers.filter((officer) => !officer.active);

  return (
    <section className="bg-white">
      <div className="bg-maroon px-5 pb-12 pt-14 sm:px-8 lg:px-24 lg:pt-20">
        <div className="text-white">
          <h1 className="text-3xl font-bold md:text-4xl" style={poppins.style}>
            MEET THE OFFICERS
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/75 md:text-base">
            The students behind TAO&apos;s events, resources, and community.
          </p>
        </div>
      </div>

      <div className="px-5 pb-10 sm:px-8 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-[96rem] bg-white px-5 py-10 sm:px-8 lg:px-0 lg:py-14">
          <h2
            className="mb-8 text-center text-2xl font-bold text-weirdGray md:text-3xl"
            style={poppins.style}
          >
            EXECUTIVES
          </h2>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 lg:gap-x-4 lg:gap-y-10">
            {execs.map((officer) => (
              <OfficerCard officer={officer} key={officer.id} />
            ))}
          </div>

          <div className="mt-16 border-t border-slate-200 pt-12">
            <h2
              className="mb-8 text-center text-2xl font-bold text-weirdGray md:text-3xl"
              style={poppins.style}
            >
              OFFICERS
            </h2>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 lg:gap-x-4 lg:gap-y-10">
              {activeOfficers.map((officer) => (
                <OfficerCard officer={officer} key={officer.id} />
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 pt-12">
            <h2
              className="mb-8 text-center text-2xl font-bold text-weirdGray md:text-3xl"
              style={poppins.style}
            >
              FORMER PRESIDENTS
            </h2>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 lg:gap-x-4 lg:gap-y-10">
              {former.map((officer) => (
                <OfficerCard officer={officer} key={officer.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officers;
