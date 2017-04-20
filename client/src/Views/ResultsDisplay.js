import React from 'react';
import {browserHistory} from 'react-router';

const ResultsDisplay = (props) => {
  console.log(props.resultsInfo);
  var resultsTest = []
  for (var i in props.resultsInfo) {
    for (var j in props.resultsInfo[i].offer) {
      var resultsDiv = props.resultsInfo[i].links[j].link.map(function(item) {
        return <p>{item}</p>
      })
      var link = props.resultsInfo[i].links[j].link[0];
      var detailLink = "/details?link=" + encodeURIComponent(link)
            var state = <div className='resultsFlexbox'>
                          <a href={detailLink}>{props.resultsInfo[i].offer[j].slice(65, 190)}</a>
                        </div>
            resultsTest.push(state)
    }
  var garbage = resultsTest.map(function(item) {
    return <div>{item}</div>
  })
    return (
      <div>
        <button onClick={browserHistory.goBack}>◀️Go Back</button>
        <h1 className='Heading'> RESULTS PAGE </h1>
          {garbage}
      </div>
    )
}
}

export default ResultsDisplay;
