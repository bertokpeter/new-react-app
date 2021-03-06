import React from 'react';
import { img } from './img.js';


export class FavoriteFoods extends React.Component {
  render(){
    const judgmental = Math.random() < 0.5;
    return (
      <div>
        {img}
        <h1>My Favorite Foods</h1>
        <h2>{this.props.text}</h2>
        <ul>
          {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
          {this.props.children}
        </ul>
      </div>
    )
  }
}

FavoriteFoods.defaultProps = {text:"Whoa there!"}