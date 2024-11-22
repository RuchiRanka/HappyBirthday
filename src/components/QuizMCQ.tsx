import React, { useState } from "react";

export default function QuizMCQ() {
  const questions = ["question 1", "question 2"];
  const choices = [
    ["opt1", "opt2", "opt3", "opt4"],
    ["opt1", "opt2", "opt3", "opt4"],
  ];
  const answers = ["opt1", "opt3"];

  const [formData, setFormData] = useState<{ [key: number]: string }>({
    0: "",
    1: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitQuiz(e: any) {
    e.preventDefault();
    // console.log(formData[]);
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== formData[i]) {
        // console.log("You got some questions wrong!");
      }
    }
  }

  return (
    <div>
      <form>
        {questions.map((question, index) => (
          <div>
            <label>{question}</label>
            <input
              type="radio"
              name={index + ""}
              value={choices[index][0]}
              onChange={handleChange}
            />
            {choices[index][0]}
            <input
              type="radio"
              name={index + ""}
              value={choices[index][1]}
              onChange={handleChange}
            />
            {choices[index][1]}
            <input
              type="radio"
              name={index + ""}
              value={choices[index][2]}
              onChange={handleChange}
            />
            {choices[index][2]}
            <input
              type="radio"
              name={index + ""}
              value={choices[index][3]}
              onChange={handleChange}
            />
            {choices[index][3]}
          </div>
        ))}
        <button type="submit" onClick={submitQuiz}>
          Submit Answers
        </button>
      </form>
    </div>
  );
}
