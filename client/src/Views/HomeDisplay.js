import React from 'react';

const HomeDisplay = (props) => {
  var test = []
  for (var i in props.info) {
    for (var j in props.info[i].state) {
      var cities = (props.info[i].city[j]).replace(/\s*([/()[\]])\s*/g, '$1').split(" ");
      var cityDiv = cities.map(function(item) {
        return <p>{item}</p>
      })
      var state = <div>
                    {props.info[i].state[j]}
                    {cityDiv}
                  </div>
      test.push(state)
    }
  }
  var garbage = test.map(function(item) {
    return <div>{item}</div>
  })
  // var states = props.info.map(function(item) {
  //   for (var i in item.state) {
  //     test.push(<div>{item.state[i]}</div>)
  //   }
  //   console.log("TEST: " + test);
  //   return test
  // });
  // var cities = props.info.map(function(item) {
  //   for (var i in item.city) {
  //     test.push(<div>{item.city[i]}</div>)
  //     console.log(item.city[i]);
  //     var res = item.city[i].split(" ");
  //     console.log(res);
  //   }
  //   return test
  // });
  return (
    <div>
      <h1> HOME PAGE </h1>
      {garbage}
    </div>
  )
}

export default HomeDisplay;
