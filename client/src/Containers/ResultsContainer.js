import React, {Component} from 'react';
import ResultsDisplay from '../Views/ResultsDisplay';
import DetailsDisplay from '../Views/DetailsDisplay';

class ResultsContainer extends Component {
  render () {
    return (
      <div>
        {this.state.detailsId ? <DetailsDisplay /> : <ResultsDisplay />}
      </div>
    )
  }
}

export default ResultsContainer;
