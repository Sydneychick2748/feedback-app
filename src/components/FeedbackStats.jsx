import { createUnarySpacing } from '@mui/system'
import React from 'react'
import  PropTypes  from 'prop-types'

function FeedbackStats({feedback}) {
    // calculate the rating av

    let average = feedback.reduce((acc,cur) => {
        return acc + cur.rating
    },0) / feedback.length

    // this line is just making what ever number is sent back its not a long decimal it stops the number at one decimal 
    average = average.toFixed(1).replace(/[.,]0$/,'')


  return (
    <div className ='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
FeedbackStats.propTypes = {
feedback: PropTypes.array.isRequired

}
export default FeedbackStats