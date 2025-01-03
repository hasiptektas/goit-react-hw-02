/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Feedback({ good, neutral, bad, setGood, setNeutral, setBad }) {

    const total = good + neutral + bad;
    const positive = Math.round((good / total) * 100);

    return (
        <div className="d-inline-flex flex-column p-3">
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positive === null || undefined || isNaN(positive) ? 0 : positive }%</p>
        </div>
    );
}