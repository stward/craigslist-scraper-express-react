import React from 'react';
import {Link} from 'react-router';

const ResultsDisplay = (props) => {
  console.log(props.resultsInfo);
  var resultsTest = []
  for (var i in props.resultsInfo) {
    for (var j in props.resultsInfo[i].offer) {
      var resultsDiv = props.resultsInfo[i].links[j].link.map(function(item) {
        return <p data-id={item}>{item}</p>
      })
      var link = props.resultsInfo[i].links[j].link[0].replace(/\D/g, '');
            var state = <div className='resultsFlexbox'>
                          {props.resultsInfo[i].offer[j]}
                          <a href={link}>{resultsDiv}</a>
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
