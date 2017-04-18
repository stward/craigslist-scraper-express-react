import React from 'react';

const HomeDisplay = (props) => {
  var test = []
  for (var i in props.info) {
    for (var j in props.info[i].state) {
      var cityDiv = props.info[i].cities[j].name.map(function(item, index) {
        // console.log("The current iteration is: " + index);
        var cityLink = "/results?link=" + encodeURIComponent(props.info[i].cities[j].link[index])
        return <a href={cityLink} className='cities'><p>{item}</p></a>
      })
      var state =
                <div className='homeFlexBox'>
                  <div className='stateFlexBoxs'>
                    <div className='state'>
                      <h1><em><strong>{props.info[i].state[j]}</strong></em></h1>
                    </div>
                    <div className='citiesFlexBox'>
                      {cityDiv}
                    </div>
                  </div>
                </div>
      test.push(state)
    }
  }
  var garbage = test.map(function(item) {
    return <div>{item}</div>
  })
  return (
    <div>
      <h1 className='Heading'> HOME PAGE </h1>
      {garbage}
    </div>
  )
}

export default HomeDisplay;
