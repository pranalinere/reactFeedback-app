import React from 'react'
import { useState } from 'react'
import { useContext,useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function RatingSelect( {select}) {
    const [selected, setselected] = useState(10)

    const {feedbackEdit} = useContext(FeedbackContext)
    useEffect(() =>{
      setselected(feedbackEdit.item.rating)
    },[feedbackEdit])


    const handleChange = (e) => {
       setselected(+e.currentTarget.value)
       select(+e.currentTarget.value)
    }

  return (
    <div><ul className='rating'>
    {Array.from({ length: 10 }, (_, i) => (
      <li key={`rating-${i + 1}`}>
        <input
          type='radio'
          id={`num${i + 1}`}
          name='rating'
          value={i + 1}
          onChange={handleChange}
          checked={selected === i + 1}
        />
        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
      </li>
    ))}
  </ul></div>
  )
}

export default RatingSelect
