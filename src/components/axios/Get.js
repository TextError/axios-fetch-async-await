import React, { Component } from 'react';

// Components
import Card from './Card';

export default class Get extends Component {

  onClickBtnOne = () => {
    console.log('One')
  };

  onClickBtnTwo = () => {
    console.log('Two')
  };

  render() {
    const result = (
      <div>
        <p>test</p>
        <span>test</span>
      </div>
    );
    return (
      <div className='get'>
        <Card
          title = 'Get Request'
          buttonOne = 'Get Todos'
          buttonTwo = 'Clear'
          onClickBtnOne = {this.onClickBtnOne}
          onClickBtnTwo = {this.onClickBtnTwo}
          result = {result}
        />
      </div>
    )
  }
}
