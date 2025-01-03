/* eslint-disable react-hooks/exhaustive-deps */
import Feedback from "./components/Feedback"
import Header from "./components/Header"
import Options from "./components/Options"

import { useState, useEffect } from "react"

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let feedbackk = { 
    good : good, 
    neutral: neutral, 
    bad: bad 
  }

  
  useEffect(() => {
    const storedFeedback = localStorage.getItem("feedback");
    if (storedFeedback) {
      const parsedFeedback = JSON.parse(storedFeedback);

      setGood(parsedFeedback.good);
      setNeutral(parsedFeedback.neutral);
      setBad(parsedFeedback.bad);

      feedbackk = {
        good: parsedFeedback.good,
        neutral: parsedFeedback.neutral,
        bad: parsedFeedback.bad
      }

      console.log("parsedFeedback", parsedFeedback);
    }
  }, []);

  useEffect(() => {

    if (feedbackk !== 0) {
      localStorage.setItem("feedback", JSON.stringify(feedbackk));
    }

    console.log("feedback", feedbackk);

  }, [feedbackk])

  return (
    <div className="d-inline-flex flex-column mx-auto my-0 gap-5 border border-2 rounded border-dark">
      <Header />
      <Options good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad}/>
      {good === 0 & neutral === 0 & bad === 0 ? 
      <p className="p-3">No feedback yet</p> : 
      <Feedback good={good} neutral={neutral} bad={bad}/>}
    </div>
  )
}

export default App
