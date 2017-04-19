import React from 'react';
import {browserHistory} from 'react-router';

const DetailsDisplay = (props) => {
  var Title = [];
  for (var i in props.detailInfo) {
    for (var j in props.detailInfo[i].titles) {
      var titlediv = props.detailInfo[i].titles[j].title.map(function(item) {
        return <h1>{item}</h1>
      })
      for (var k in props.detailInfo[i].images) {
        var imageDiv = props.detailInfo[i].images[k].image.map(function(item) {
          return <img src={item} alt='no image provided' className='detailImage'/>
        })
    }
    for (var l in props.detailInfo[i].body) {
      var bodyDiv = props.detailInfo[i].body[l].text.map(function(item) {
        return <div className='description'>{item.slice(47)}</div>
      })
  }
    var state = <div className='detailsFlexBox'>
                  {titlediv}
                  {imageDiv}
                  {bodyDiv}
                </div>
    Title.push(state)
  }
  var garbage = Title.map(function(item) {
    return <div>{item}</div>
  })

  return (
    <div>
      <button onClick={browserHistory.goBack}>Go Back</button>
      {garbage}
    </div>
  );
}
}

export default DetailsDisplay;
