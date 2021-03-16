import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GitGrid = ({ category }) => {
  const { data: imges, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid">
        {imges.map((img) => (
          <GifGridItem key={img.id} {...img} /> //this ..img is a shortcut to bring all the props
        ))}
      </div>
    </>
  );
};
