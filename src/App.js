import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  var [types, setTypes] = useState([
    "The Psychology of Self Motivation By Scott Geller ",
    "How to get your brain to focus by Chris Bailey ",
    "How to motivate yourself by Tali Sharot "
  ]);
  function clickHand(lm) {
    if (lm === "Motivational") {
      console.log("Clicked on motivation");

      types = [
        "The Psychology of Self Motivation By Scott Geller ",
        "How to get your brain to focus by Chris Bailey ",
        "How to motivate yourself by Tali Sharot "
      ];
      setTypes(types);
    }
    if (lm === "Insightful") {
      console.log("Clicked on insightful");
      types = [
        "Inside the mind of a procrastinator by Tim Urban  ",
        "Your personality and your brain bt Scott Schwefel",
        "The right brain vs left brain by Jill Taylor"
      ];
      setTypes(types);
    }
    if (lm === "Business") {
      console.log("Clicked on business ");

      types = [
        "Power of an Entrepreneurial Mindset by Bill Roche",
        "How AI could Empower any business by Andrew Ng",
        "How to become a millionaire in 3years by Daniel Ally "
      ];
      setTypes(types);
    }
  }

  return (
    <div className="App">
      <h1>
        <span>🧸</span>Ted Talks <span>🗣️</span>
      </h1>

      <hr></hr>
      <p>Following are some of the Ted Talks I've Found Interesting </p>
      <ul className="list_nonbullet">
        <li className="list_item_inline">
          {" "}
          <button onClick={() => clickHand("Motivational")}>
            {" "}
            Motivational{" "}
          </button>{" "}
        </li>
        <li className="list_item_inline">
          {" "}
          <button onClick={() => clickHand("Insightful")}>
            {" "}
            Insightful{" "}
          </button>{" "}
        </li>
        <li className="list_item_inline">
          {" "}
          <button onClick={() => clickHand("Business")}> Business </button>{" "}
        </li>
      </ul>
      <hr></hr>

      <div>
        {types.map(function (er) {
          return (
            <ul className="list_nonbullet">
              <li className="addSpace">{er}</li>
            </ul>
          );
        })}
      </div>

      <div className="footer">
        <h4>Welcome To Ted Talks</h4>
        <p>
          Welcome, here are some of the ted talks I found interesting , ranging
          from Motivational to insightful.
        </p>
      </div>
    </div>
  );
}
