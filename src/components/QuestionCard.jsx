import React from "react";

const QuestionCard = ({text}) => {
  return (
    <div className="flex justify-between border-b mb-4 pb-2 border-b-white/40">
      <p>{text}</p>
      <button>+</button>
    </div>
  );
};

export default QuestionCard;
