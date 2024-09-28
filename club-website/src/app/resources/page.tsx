"use client";
import { poppins } from "../fonts";
import MaterialHubs from "./subsections/material-hubs";
import ResourcesBanner from "./subsections/resources-banner";

export default function Resources() {
  return (
    <main className="bg-slate-50 flex min-h-screen flex-col gap-12 mt-24 lg:mt-32">
      <h1
        className="text-slate-950 md:text-4xl text-3xl text-left font-bold items-start mt-8 md:mt-16 mx-8 lg:mx-24"
        style={poppins.style}
      >
        RESOURCES
      </h1>

      <ResourcesBanner />

      <MaterialHubs />
    </main>
  );
}
