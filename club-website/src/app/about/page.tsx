import AboutIntro from "./subsections/about-intro";
import Impact from "./subsections/impact";
import Membership from "./subsections/membership";
import Officers from "./subsections/officers";

export default function About() {
  return (
    <div className="mt-24 lg:mt-32">
      <AboutIntro />
      <Impact />
      <Membership />
      <Officers />
    </div>
  );
}
