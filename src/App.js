import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Kbc from "./components/Kbc";
import Timer from "./Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question:
        "What of the following is used in React.js to increase performance?",
      answers: [
        {
          text: "Original DOM",
          correct: false,
        },
        {
          text: "Virtual DOM",
          correct: true,
        },
        {
          text: "Both A and B",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Which of the following acts as the input of a class-based component?",
      answers: [
        {
          text: "Class",
          correct: false,
        },
        {
          text: "Factory",
          correct: false,
        },
        {
          text: "Render",
          correct: false,
        },
        {
          text: "Props",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question:
        "How many numbers of elements a valid react component can return?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question:
        "Khijadiya wildlife sanctuary, is a new Ramsar site, located in which state/UT?",
      answers: [
        {
          text: "Uttarakhand",
          correct: false,
        },
        {
          text: "Bihar",
          correct: false,
        },
        {
          text: "Haryana",
          correct: false,
        },
        {
          text: "Gujarat",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Thanks for Playing !!",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endtext">You got only : {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>

                <div className="bottom">
                  <Kbc
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneylist">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id ? "listitem active" : "listitem"
                  }
                >
                  <span className="listitemnumber">{m.id}</span>
                  <span className="listitemamount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
