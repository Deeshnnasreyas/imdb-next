import Image from "next/image";
import React from "react";
import Link from "next/link";
import {FiThumbsUp }from "react-icons/fi"

export default function Card({ result }) {
  console.log("reeeeeee", result);
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md
    rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
        alt="movie-img"
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
          width={500}
          height={300}
          className="sm:rounded-l-lg w-full group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date}
           <FiThumbsUp className="h-5 mr-1 ml-3"/>
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
