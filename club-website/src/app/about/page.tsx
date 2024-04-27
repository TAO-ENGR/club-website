import { poppins } from "../fonts";
import about from "./about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className={`text-left bg p-16 h-screen ${about["bg-light-gray"]}`}>
        <h1 className="font-bold text-6xl mb-10" style={poppins.style}>
          ABOUT
        </h1>
        <p className="Inter text-md">
          Howdy, we are the{" "}
          <b>Engineering Teaching Assistant Organization (TAO)</b>!
          <br />
          <br />
          We are an engineering student organization that supports the peer
          teachers, professors, and students of Texas A&M&rsquo;s first-year
          engineering courses (ENGR 102 and 216).
          <br />
          <br />
          This is done via building community on our{" "}
          <u className="hover:text-maroon">
            <a href="https://tx.ag/taoserver" target="_blank">
              discord
            </a>
          </u>{" "}
          -- giving quick answers on on homework and assignments, virtual office
          hours, and advice from other students and upperclassmen. We also
          provide in-person and online exam reviews, using the insight of
          students who previously took the course and current professors which
          you can view under{" "}
          <u className="hover:text-maroon">
            <Link href="/">resources</Link>
          </u>
          .
        </p>
      </div>
    </>
  );
}
