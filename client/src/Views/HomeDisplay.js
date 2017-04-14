import React from 'react';

const HomeDisplay = (props) => {
  var test = []
  for (var i in props.info) {
    for (var j in props.info[i].state) {
      var state = <div>
                    {props.info[i].state[j]}
                    {props.info[i].city[j]}
                  </div>
      test.push(state)
    }
  }
  var garbage = test.map(function(item) {
    return <div>{item}</div>
  })
  return (
    <div>
      <h1> HOME PAGE </h1>
      {garbage}
    </div>
  )
}

export default HomeDisplay;
