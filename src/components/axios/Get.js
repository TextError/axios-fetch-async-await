import React, { Component } from 'react';

// Components
import Card from './Card';

export default class Get extends Component {
  render() {
    return (
      <div className='get'>
        <Card
          title = 'Get Request'
          buttonOne = 'Get Todos'
          buttonTwo = 'Clear'
          resultObj = 'result'
        />
      </div>
    )
  }
}
