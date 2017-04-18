import React, {Component} from 'react';
import $ from 'jquery';
import ResultsDisplay from '../Views/ResultsDisplay';

class ResultsContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      resultsInfo : null,
    }
  }

  componentWillMount = () => {this.scrapeInfo()}

  scrapeInfo = () => {
    $.ajax({
      url: '/api/results?link=' + this.props.location.query.link,
      method: 'GET'
    }).done((data) => {
      this.setState({resultsInfo: data})
    })
  }
  render () {
    return (
      <div>
         {(this.state.resultsInfo !== null) ? <ResultsDisplay resultsInfo={this.state.resultsInfo}/> : null}
      </div>
    )
  }
}

export default ResultsContainer;
