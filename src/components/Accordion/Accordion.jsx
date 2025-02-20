import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-[450px]">
      <div
        className="flx flx-col border border-slate-200 p-3"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-gray-800 font-medium">{title}</h3>
          <span className="text-xl text-gray-800 font-medium cursor-pointer">
            {isActive ? "-" : "+"}
          </span>
        </div>
        {isActive && (
          <p className="text-base text-gray-500 font-medium mt-4">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
