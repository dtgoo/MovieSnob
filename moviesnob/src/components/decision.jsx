import React from 'react'


function DecisionData(props) {
  const sum = props.reviewData.reduce((a, b) => a + b, 0);
  const avg = (sum / props.reviewData.length) || 0;
  const betterAvg = avg.toFixed();

  if (avg === 0 || props.reviewData.length <= 3) {
    return (
      <div>
        Start adding movies to get your SnobScore!<br/>
        <img className="decision-img" src="https://media1.tenor.com/images/a57c2f1ceb7740475f2420cd0d5c4c7d/tenor.gif?itemid=6153985"/>
      </div>
    )
  } else if (betterAvg >= 90) {
    return (
      <div>
        Your MovieSnob Score: {betterAvg} <br/>
        You're a Movie Snob. You compare all movies to Citizen Kane and Pulp Fiction. You don't call them movies, you call them "Films" and you miss the days where you can watch in 35mm. You only watch Marvel movies to complain about them later on Reddit, even though you know you secretly loved Thor Ragnorak.
        <img className="decision-img" src="https://media1.tenor.com/images/f6ac293f7d3cd6214bf263fea667c293/tenor.gif"/>
      </div>
    )

  } else if (betterAvg < 90 && betterAvg >=75) {
    return (
      <div>
        Your MovieSnob Score: {betterAvg} <br/>
        You're not a Movie Snob, but you're close. You enjoy good movies, and watch the Oscars - but, sometimes you love a good ole' Adam Sandler or Terry Perry flick. La La Land definitely made you cry, and that's okay.
        <img className="decision-img" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F150914349%2F960x0.jpg%3Ffit%3Dscale"/>
      </div>
    )

  } else if (betterAvg < 75 && betterAvg >= 50) {
    return (
      <div>
        Your MovieSnob Score: {betterAvg}<br/>
        Not a movie snob! You don't care what critics say, you like what you like. The Oscars?? those are just your two cousins that were named the same for some reason. You're really into comedies like Austin Powers and WaterBoy. You're there opening weekend for every new Fast and Furious and you wouldn't have it any other way.
        <img className="decision-img" src="https://media1.tenor.com/images/f6ac293f7d3cd6214bf263fea667c293/tenor.gif"/>
      </div>
    )

  } else if (betterAvg < 50) {
    return (
      <div>
        Your MovieSnob Score: {betterAvg} <br/>
        You've never even heard of Rotten Tomatoes, besides the ones in your crisper. Not sure how you got this low, unless you watch bad movies as a hobby. Your favorite recent movie is Gotti with John Travolta. That movie is 0% on Rotten Tomatoes...
        <img className="decision-img" src="https://media1.tenor.com/images/f6ac293f7d3cd6214bf263fea667c293/tenor.gif"/>
      </div>
    )

  }
}

export default DecisionData
