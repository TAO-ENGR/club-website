import { Officer } from "@/data/officers";
import Image from "next/image";
import { Linkedin } from "lucide-react";

interface OfficerCardProps {
  officer: Officer;
}

const OfficerCard = ({ officer }: OfficerCardProps) => {
  const image = officer.image ?? "/officer_imgs/default.png";
  const fullName = `${officer.firstName} ${officer.lastName}`;

  return (
    <article className="group flex w-[calc((100%-1.25rem)/2)] flex-col text-left md:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-6rem)/7)]">
      <div className="relative aspect-square shrink-0 overflow-hidden bg-maroon/10">
        <Image
          src={image}
          alt={fullName}
          width={450}
          height={450}
          className="h-full w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
        />
        {officer.linkedin && (
          <a
            href={officer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${fullName}'s profile`}
            className="absolute bottom-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-maroon shadow-sm transition-colors hover:bg-white hover:text-darkMaroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
          >
            <Linkedin className="h-3 w-3" aria-hidden="true" />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <div>
          <h2 className="text-base font-bold leading-tight text-weirdGray">
            {fullName}
          </h2>
          <p className="mt-1 text-xs font-bold uppercase leading-tight tracking-[0.08em] text-maroon">
            {officer.role}
          </p>
          {officer.major && (
            <p className="mt-1 text-xs font-medium leading-tight text-slate-500">
              {officer.major}
            </p>
          )}
        </div>

        {officer.bio ? (
          <p className="mt-2 text-xs leading-5 text-slate-600">
            {officer.bio}
          </p>
        ) : null}
      </div>
    </article>
  );
};

export default OfficerCard;
