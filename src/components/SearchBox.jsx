"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router=useRouter()
  const handleSubmit=(e)=>{
    e.preventDefault();
  
    router.push(`/search/${search}`)
    

  }
  return (
    <form className="flex justify-center max-w-6xl max-auto px-5" onSubmit={handleSubmit}>
      <input
        placeholder="Search keywords.."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="outline-none h-14 w-full placeholder-gray-500 rounded-md bg-transparent flex-1"
        type="text"
      />
      <button
        className="outline-none text-amber-600 font-medium disabled:text-amber-400 cursor-pointer"
        disabled={search == ""}
      >
        Search
      </button>
    </form>
  );
}
