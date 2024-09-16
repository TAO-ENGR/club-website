import React from "react";
import { poppins } from "../../fonts";
import about from "../about.module.css";

const Membership: React.FC = () => {
  return (
    <div className={`text-left bg p-8 lg:p-24 ${about["bg-light-gray"]}`}>
      <h1 className="font-bold md:text-4xl text-3xl mb-8" style={poppins.style}>
        MEMBERSHIP
      </h1>
      <p className="Inter text-md">
        While TAO serves all PTs and students of ENGR 102 and 216, our members
        are those who pass both of these courses and then use their skills to
        help future students on our discord and in our reviews.
        <br />
        <br /> Applications to be a member open <b>soon</b>, and will be
        announced via our discord. <br />
        <br /> The process will include an application and interview. <br />
        <br /> So if TAO has positively impacted you and you want to give back,
        please check in then! We&rsquo;d love to have you as a member.
      </p>
    </div>
  );
};

export default Membership;
