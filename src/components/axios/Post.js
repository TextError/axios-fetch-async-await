import React, { Component } from 'react';

// Components
import Card from './Card';

export default class Post extends Component {

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
      <div>
        <Card
          title = 'Post Request'
          subtitle = 'subtitle https://jsonplaceholder.typicode.com/'
          buttonOne = 'Post Todos'
          buttonTwo = 'Clear'
          onClickBtnOne = {this.onClickBtnOne}
          onClickBtnTwo = {this.onClickBtnTwo}
          result = {result}
        />
      </div>
    )
  }
}
