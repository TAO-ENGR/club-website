import { Poppins } from "next/font/google";
import Link from "next/link";

import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

export default function Home() {
  return (
    <main className="bg-slate-50 flex min-h-screen flex-col space-y-1 gap-12">
      <div>
        <div className="flex justify-content p-10">
          <p className="Inter text-lg">
            An <b>engineering student organizaton</b> of
            <s> peer teachers</s> <s>professors</s> <s>upperclassmen</s>
            <b> anyone passionate about helping others </b>
            through Texas A&M&apos;s first-year engineering courses.
          </p>
        </div>
        <div className="flex justify-content ps-10">
          <div className="flex gap-1 ">
            <a
              href="mailto:taoengr@gmail.com"
              target="_blank"
              className="hover:text-maroon"
            >
              <div>
                <MdOutlineEmail />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/engr-tao/"
              target="_blank"
              className="hover:text-maroon"
            >
              <div>
                <AiOutlineLinkedin />
              </div>
            </a>
            <a
              href="https://www.youtube.com/@ENGRTAO"
              target="_blank"
              className="hover:text-maroon"
            >
              <div>
                <FaYoutube />
              </div>
            </a>
            <a
              href="https://github.com/TAO-ENGR"
              target="_blank"
              className="hover:text-maroon"
            >
              <div>
                <VscGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
