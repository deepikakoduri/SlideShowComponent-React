import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import * as slideshowstyles from './css/slideshow.css';
import { nextImage, previousImage, startSlideShow } from "../actions/slideshow.js";

@connect((store) => {
  return {
    slideshow: store.slideshow
  }
})

export default class SlideShow extends React.Component{

  getImageTag(image){
     let src = `../../resources/slideshow/${image}`
      return (
        <img src = {src}/>
      )
  }

  getNextImage(){
    this.props.dispatch(nextImage())
  }

  getPreviousImage(){
    this.props.dispatch(previousImage())
  }

  getPreviousImage(){
    this.props.dispatch(previousImage())
  }

  componentWillMount(){
    this.props.dispatch(startSlideShow())
  }

  render(){
    var {slideshow} = this.props;
    return (
      <div class = "slideshow-container">
        {this.getImageTag(slideshow.imageList[slideshow.currentIndex])}
        <h1 class="title">POKEDEX</h1>
        <div class = "list">
        </div>
        <a class = "previous" onClick = {this.getPreviousImage.bind(this)}>&#10094;</a>
        <a class = "next" onClick = {this.getNextImage.bind(this)}>&#10095;</a>
      </div>
    )
  }

}
