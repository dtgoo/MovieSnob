import React from 'react'


function DecisionData(props) {
  console.log('this is the review array', props.reviewData)
  const sum = props.reviewData.reduce((a, b) => a + b, 0);
  const avg = (sum / props.reviewData.length) || 0;
  const betterAvg = avg.toFixed();
  console.log('ROTTEN TOMATOES AVG', betterAvg)



  return (
    <div>
      Your MovieSnob Average: {betterAvg}
    </div>
  )
}

export default DecisionData
