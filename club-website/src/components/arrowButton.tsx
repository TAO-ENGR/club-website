import React from "react";

interface Props {
  link: string;
  children: React.ReactElement;
  external?: boolean;
}

const ArrowButton: React.FC<Props> = ({ link, children, external = false }) => {
  return (
    <a
      href={link}
      target={external ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="flex w-min items-center gap-4 hover:gap-6 duration-200 bg-ashyBlue text-slate-50 text-sm
              rounded-2xl px-4 py-1 h-9"
    >
      <span className="w-max">{children}</span>
      <span>→</span>
    </a>
  );
};

export default ArrowButton;
