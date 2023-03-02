import React from "react";
import "./Style.css";

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    color: 1,
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    color: 2,
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    color: 3,
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    color: 4,
  },
];

const ResultSummary = () => {
  return (
    <div className="container">
      <div className="container-body">
        <div className="result">
          <div className="title">Your Result</div>
          <div class="card__group--score">
            <span class="card__score">76</span>
            <span class="card__denom">of 100</span>
          </div>
          <div className="content">
            <h3>Great</h3>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="result-summary">
          <p>Summary</p>
          {data.map((item) => {
            return (
              <div
                className={
                  item.color === 1
                    ? "color-select-bg-1 summary"
                    : item.color === 2
                    ? "color-select-bg-2 summary"
                    : item.color === 3
                    ? "color-select-bg-3 summary"
                    : "color-select-bg-4 summary"
                }
              >
                <div>
                  <img src={item.icon} alt="null" />
                  <p
                    className={
                      item.color === 1
                        ? "color-select-1"
                        : item.color === 2
                        ? "color-select-2"
                        : item.color === 3
                        ? "color-select-3"
                        : "color-select-4"
                    }
                  >
                    {item.category}
                  </p>
                </div>
                <p>
                  {item.score} <span style={{ color: "darkgray" }}>/100</span>
                </p>
              </div>
            );
          })}
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ResultSummary;
