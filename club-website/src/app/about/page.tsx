import { poppins } from "../fonts";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="text-left bg bg-light-gray p-16 h-screen">
        <h1 className="font-bold text-6xl mb-10" style={poppins.style}>
          ABOUT
        </h1>
        <p className="Inter text-4xl">
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
          <u>
            <a href="https://tx.ag/taoserver" target="_blank">
              discord
            </a>
          </u>{" "}
          -- giving quick answers on on homework and assignments, virtual office
          hours, and advice from other students and upperclassmen. We also
          provide in-person and online exam reviews, using the insight of
          students who previously took the course and current professors which
          you can view under{" "}
          <u>
            <Link href="/resources">resources</Link>
          </u>
          .
        </p>
      </div>
    </>
  );
}
