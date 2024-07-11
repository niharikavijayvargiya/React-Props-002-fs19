import React from "react";
import { movieData } from "./MovieData";

function MovieCards() {
  console.log(movieData);
  return (
    <div className="w-[100%] flex justify-center items-center flex-col gap-10 py-10">
      {movieData.map((item) => (
        <div
          key={item.id}
          className="w-[50%] m-auto py-10 rounded-lg shadow-sm shadow-white relative z-10"
        >
          <div className="flex p-4">
            <img
              src={item.posterurl}
              alt=""
              className="w-28 object-cover px-2"
            />
            <div className="flex flex-col gap-2 pl-2">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <span className="text-blue-300">{item.year}</span>
              <h1 className="text-gray-500">{item.genres.join(", ")} </h1>
            </div>
          </div>
          <h1 className="pl-4 mr-60">{item.storyline.slice(0,180)} </h1>
          <img
            src={item.posterurl}
            alt=""
            className="object-cover p-2 absolute right-0 top-0 -z-10 h-[100%] rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

export default MovieCards;
