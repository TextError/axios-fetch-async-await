import React, { Component } from 'react';

// Components
import Card from './Card';

export default class Post extends Component {

  onClickBtnOne = () => {
    console.log('One')
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
          buttonOne = 'Post Todos'
          onClickBtnOne = {this.onClickBtnOne}
          result = {result}
        />
      </div>
    )
  }
}
