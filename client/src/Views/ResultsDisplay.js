import React from 'react';

const ResultsDisplay = (props) => {
  console.log(props.resultsInfo);
  var resultsTest = []
  for (var i in props.resultsInfo) {
    for (var j in props.resultsInfo[i].offer) {
      var resultsDiv = props.resultsInfo[i].links[j].link.map(function(item) {
        return <p><li>{item}</li></p>
      })
      var state = <div className='resultsFlexbox'>
                    {props.resultsInfo[i].offer[j]}
                    {resultsDiv}
                  </div>
      resultsTest.push(state)
    }
  var garbage = resultsTest.map(function(item) {
    return <div>{item}</div>
  })
    return (
      <div>
        <h1> RESULTS PAGE </h1>
        {garbage}
      </div>
    )
}
}

export default ResultsDisplay;
