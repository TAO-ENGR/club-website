import React from "react";
import { poppins } from "@/app/fonts";
import styles from "./blurb.module.css";
import { BsYoutube } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { FaDiscord, FaEnvelope, FaLink } from "react-icons/fa";

const Blurb: React.FC = () => {
  return (
    <div
      className={`w-full py-8 md:py-16 lg:py-32 text-4xl flex flex-col gap-4 ${styles["hover-raise"]}`}
      style={poppins.style}
    >
      <div className="flex gap-4">
        <p>
          <span className="animate-[float-up_0.7s_linear]">An </span>
          <span className="animate-[float-up_0.9s_linear] font-bold">
            engineering student organization{" "}
          </span>
          <span className="animate-[float-up_1.2s_linear]">of </span>
        </p>
      </div>
      <div className="flex gap-4">
        <p>
          <span
            className={`animate-[float-up_1.5s_linear] ${styles["strike"]} ${styles["strike-1"]}`}
            aria-label="striked through peer teachers"
          >
            peer teachers,
          </span>
          <span> </span>
          <span
            className={`animate-[float-up_1.6s_linear] ${styles["strike"]} ${styles["strike-2"]}`}
            aria-label="striked through professors"
          >
            professors,
          </span>
          <span> </span>
          <span
            className={`animate-[float-up_1.7s_linear] ${styles["strike"]} ${styles["strike-3"]}`}
            aria-label="striked through upperclassmen"
          >
            upperclassmen,
          </span>
        </p>
      </div>
      <p>
        <span className="animate-[float-up-delay_2s_linear] font-bold">
          anyone passionate about helping others
        </span>
      </p>
      <div className="flex gap-4">
        <p>
          <span className="animate-[float-up-delay_2.5s_linear]">through </span>
          <span className="animate-[float-up-delay_3s_linear]">
            Texas A&M&apos;s{" "}
          </span>
          <span className="animate-[float-up-delay_3.4s_linear]">
            first-year engineering courses.
          </span>
        </p>
      </div>
      <div className="pt-4 text-3xl text-gray-400 flex gap-4">
        <a
          href="https://discord.gg/vvKtQHb3Ys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord className="animate-[float-up-delay_3s_linear]" />
        </a>
        <a
          href="mailto:taoengr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="animate-[float-up-delay_3.2s_linear]" />
        </a>
        <a
          href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF6rTTbSI2dWwAAAYnRh99Q66Yy0_YjDulU7M9nkY0GVbjo9rjweFwRk8m7Lu9xukiacbf6C3Pd0wIgZ4zFedhdRL_eCQC1nxDCHVIVws7hWcmLg9TVAMMDDx7GPfhumP7_uB0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fengr-tao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImLinkedin className="animate-[float-up-delay_3.4s_linear]" />
        </a>
        <a
          href="https://github.com/TAO-ENGR/club-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandGithubFilled className="animate-[float-up-delay_3.6s_linear]" />
        </a>
        <a
          href="https://www.youtube.com/@engrtao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube className="animate-[float-up-delay_3.8s_linear]" />
        </a>
        <a
          href="https://getinvolved.tamu.edu/org/tao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLink className="animate-[float-up-delay_4s_linear]" />
        </a>
        <a
          href="https://instagram.com/tamutao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill className="animate-[float-up-delay_4.2s_linear]" />
        </a>
      </div>
    </div>
  );
};

export default Blurb;
