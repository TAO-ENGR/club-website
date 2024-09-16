import React from "react";

import HomeOfficers from "./_subsections/home-officers";
import Blurb from "./_subsections/blurb";
import WhatAreYouWaitingFor from "./_subsections/what-are-you-waiting-for";
import WhatWereDoing from "./_subsections/what-were-doing";
import CreatingChange from "./_subsections/creating-change";
import NeedHelp from "./_subsections/need-some-help";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 lg:px-24 gap-12">
      <Blurb />

      <WhatWereDoing />

      <CreatingChange />

      <NeedHelp />

      <HomeOfficers />

      <WhatAreYouWaitingFor />
    </main>
  );
}
