/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';

export default function Options({ good, setGood, neutral, setNeutral, bad, setBad }) {

    return (
        <div className='d-inline-flex mx-auto gap-3 px-3'>
            <Button variant='success' onClick={() => setGood(good + 1)}>Good</Button>
            <Button variant='warning' onClick={() => setNeutral(neutral + 1)}>Neutral</Button>
            <Button variant='danger' onClick={() => setBad(bad + 1)}>Bad</Button>
            {good === 0 & neutral === 0 & bad === 0 ? 
            null : 
            <Button onClick={() => setGood(0) & setNeutral(0) & setBad(0)}>Reset</Button>
            }
        </div>
    );
}