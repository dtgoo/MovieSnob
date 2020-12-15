import React from 'react'


function DecisionData(props) {
  console.log('this is the review array', props.reviewData)
  return (
    <div>
      {props.reviewData}
    </div>
  )
}

export default DecisionData
