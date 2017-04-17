import React, {Component} from 'react';
import $ from 'jquery';
import DetailsDisplay from '../Views/DetailsDisplay';

class ResultsContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      resultsInfo : null,
      detailsInfo : null
    }
  }

  componentWillMount = () => {
    this.resultsScrapeInfo()
    setTimeout(() => {
      this.detailsScrapeInfo()
}, 100);
  }

  resultsScrapeInfo = () => {
    $.ajax({
      url: '/api/results',
      method: 'GET'
    }).done((data) => {
      this.setState({resultsInfo: data})
    })
  }

  detailsScrapeInfo = () => {
    for (var i in this.state.resultsInfo) {
      for (var j in this.state.resultsInfo[i].offer) {
        var detailId = this.state.resultsInfo[i].detailIds[j].detailId.map(function(item) {
          return <p>{item}</p>
        })
      $.ajax({
        url: '/api/details/'+detailId,
        method: 'GET'
      }).done((data) => {
        this.setState({detailInfo: data})
      })
      }
    }
  }
  render () {
    return (
      <div>
         {this.state.detailId ? <DetailsDisplay /> : <span> no detail Id </span>}
      </div>
    )
  }
}

export default ResultsContainer;
