import React from 'react';

const DetailsDisplay = (props) => {
  var Title = [];
  for (var i in props.detailInfo) {
    for (var j in props.detailInfo[i].titles) {
      var titlediv = props.detailInfo[i].titles[j].title.map(function(item) {
        return <p>{item}</p>
      })
      for (var k in props.detailInfo[i].images) {
        var imageDiv = props.detailInfo[i].images[k].image.map(function(item) {
          return <img src={item} alt='no image provided' />
        })
    }
    var state = <div>
                  {titlediv}
                  {imageDiv}
                </div>
    Title.push(state)
  }
  var garbage = Title.map(function(item) {
    return <div>{item}</div>
  })

  return (
    <div>
      <h1> DETAILS PAGE </h1>
      {garbage}
    </div>
  );
}
}

export default DetailsDisplay;
