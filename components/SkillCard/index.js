import React from "react";

function SkillCard({ item }) {
  return (
    <div className="flex py-4 px-4 gap-3   justify-items-start  items-center ">
      <div>{item.icon}</div>
      <div>
        <h3 className="font-bold"> {item.title}</h3>
        {item.decreption}
      </div>
    </div>
  );
}

export default SkillCard;
