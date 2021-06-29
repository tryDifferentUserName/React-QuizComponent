import React, { useState } from 'react'

let quizData = require('./quiz_data.json')

const Quiz = () => {
const [quizPosition, setQuizPosition] = useState(1)
    return (
        <div className='QuizQuestion'>
            {quizData.quiz_questions.map((data) => {
                return data
            })}
        </div>
    )
}

export default Quiz