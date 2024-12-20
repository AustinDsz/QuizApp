import React, { useState } from 'react'
import {data} from './data';
import './stylequiz.css'

export default function QuizApp() {
    
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [option, setOption] = useState('');
    const [finished, setFinished] = useState(false);

    const handleNext = () => {
        
        if(option === data[index].Answer) {
            setScore(score+100);
        }

        if (index < data.length-1) {

            setIndex(index+1);
            setOption(null);

        } else {
            setFinished(true);
        }

    }

    if(finished) {
        return (
            <div className="scorePage">
            <h1>Quiz finished ...!!</h1>
            <h3>Your score is {score} out of {data.length * 100}</h3>
            </div>
        )
    }

    const handleSelect = (optn) => {
        setOption(optn);
    }

  return (
    <div className='quiz'>
        <h1>KodQuiz</h1>

        <h3>{data[index].Question}</h3>
        <ul>
            <li className={option === 'Option1' ? 'selected' : ''}
            onClick={() => handleSelect('Option1')}>{data[index].Option1}</li>
            
            <li className={option === 'Option2' ? 'selected' : ''}
            onClick={() => handleSelect('Option2')}
            >{data[index].Option2}</li>

            <li className={option === 'Option3' ? 'selected' : ''}
            onClick={()=>handleSelect('Option3')}
            >{data[index].Option3}</li>

            <li className={option === 'Option4' ? 'selected' : ''}
            onClick={()=>handleSelect('Option4')}
            >{data[index].Option4}</li>
        </ul>

        <button onClick={handleNext} disabled={!option}>Next</button>

        <h4>Score: {score}</h4>
        <h5>Question {index+1} of {data.length}</h5>
    </div>
  )
}
