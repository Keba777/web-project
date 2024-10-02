import React from "react";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  return (
    <section className="px-14 py-28 grid grid-cols-5 text-primary">
      <div className="col-span-2 pr-28">
        <h3 className="text-[42px] leading-[42px] mb-5">What can curiosity, wonder, and awe do for you?</h3>
        <p className="text-[12px]">
          Research shows that experiencing curiosity and awe can immensely
          benefit our mental, physical, and professional health. Here’s a brief
          overview of what curiosity and awe can do for you.
        </p>
      </div>
      <div className="col-span-3">
        <QuestionCard text="Does Fluid AI increase wellbeing and meaning in life?" />
        <QuestionCard text="What can curiosity, wonder, and awe do for you?" />
        <QuestionCard text="Does Fluid AI increase wellbeing and meaning in life?" />
        <QuestionCard text="What can curiosity, wonder, and awe do for you?" />
        <QuestionCard text="Does Fluid AI increase wellbeing and meaning in life?" />
        <QuestionCard text="What can curiosity, wonder, and awe do for you?" />
        <QuestionCard text="Does Fluid AI increase wellbeing and meaning in life?" />
        <QuestionCard text="What can curiosity, wonder, and awe do for you?" />
      </div>
    </section>
  );
};

export default Questions;
