import React from "react";
import Card from "./Card";

export default function Results({ reslts }) {

  return (
    <div  className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
    mx-w-6xl mx-auto py-4">
      {reslts.map((item, index) => (    
       <div key={index}>
     <Card key={item.id} result={item}/>
       </div>
    
      ))}
    </div>
  );
}
