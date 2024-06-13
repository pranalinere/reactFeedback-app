//import { useState } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext
  (FeedbackContext)

    /*    const handleClick  = ()=>{
        setRating((prev)=>{
        console.log(prev)
        return prev + 1
       }) 
    }*/
    //const [rating, setRating] = useState(7)
    //const [text, setText] = useState('This is an example of feedback item')
  return (
    <Card reverse={false}>
          <div className="num-display">{item.rating}</div>
          <div onClick={() => deleteFeedback(item.id)} 
          className="close">
            <FaTimes color='purple'/>
            
          </div>
          <button onClick={() =>  editFeedback(item)} className="edit">
              <FaEdit color='purple' />
            </button>
          <div className="text-display">{item.text}</div>
    </Card>
           
            /* <button onClick={handleClick}>Click</button>     */
    
  )
}

FeedbackItem.propTypes ={
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
