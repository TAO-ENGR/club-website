import React from "react";

interface Props {
  link: string;
  children: React.ReactNode;
  external?: boolean;
}

const ArrowButton: React.FC<Props> = ({ link, children, external = false }) => {
  return (
    <a
      href={link}
      target={external ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="group inline-flex w-fit items-center gap-3 rounded-xl border border-white/15 bg-black px-4 py-2 text-sm font-semibold text-slate-50 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
    >
      <span className="whitespace-nowrap">{children}</span>
      <span
        aria-hidden="true"
        className="text-base leading-none transition-transform duration-200 group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
};

export default ArrowButton;
