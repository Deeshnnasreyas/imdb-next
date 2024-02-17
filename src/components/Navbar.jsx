import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar({ searchParms }) {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 lg:text-lg justify-center gap-6">
      <NavbarItem title="Tending" param="fetchTending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  );
}
