import React from 'react';

const HomeDisplay = (props) => {
  var test = []
  for (var i in props.info) {
    for (var j in props.info[i].state) {
      var cityDiv = props.info[i].cities[j].name.map(function(item, index) {
        // console.log("The current iteration is: " + index);
        var cityLink = "/results?link=" + encodeURIComponent(props.info[i].cities[j].link[index])
        return <a href={cityLink}><li className='homeFlexItem'>{item}</li></a>
      })
      var state = <div>
                    <div className='homePageFlexBoxs'>
                      {props.info[i].state[j]}
                    </div>
                    <ul className='homePageFlexItems'>
                      {cityDiv}
                    </ul>
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
