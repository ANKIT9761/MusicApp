import React from "react";

function CenterMenu() {
  const liStyle = "mr-[3rem] hover:cursor-pointer";
  return (
    <div className="menu flex">
      <ul className="flex w-[100%] justify-between text-lg">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle}>Performer</li>
        <li className={liStyle}>Event Shedule</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
