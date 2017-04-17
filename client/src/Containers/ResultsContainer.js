import React, {Component} from 'react';
import $ from 'jquery';
import ResultsDisplay from '../Views/ResultsDisplay';
import DetailsDisplay from '../Views/DetailsDisplay';

class ResultsContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      resultsInfo : null
    }
  }

  componentWillMount = () => {this.scrapeInfo()}

  scrapeInfo = () => {
    $.ajax({
      url: '/api/results',
      method: 'GET'
    }).done((data) => {
      this.setState({resultsInfo: data})
    })
  }
  render () {
    return (
      <div>
         {this.state.resultsInfo !== null ? <ResultsDisplay resultsInfo={this.state.resultsInfo}/> : null}
         {this.state.detailsId ? <DetailsDisplay /> : null}
      </div>
    )
  }
}

export default ResultsContainer;
