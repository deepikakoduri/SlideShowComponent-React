import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import SlideShow from "./SlideShow";
import * as layoutStyles from "./css/layout.css";

@connect((store) => {
  return {
    layout: store.layout
  }
})

export default class Layout extends React.Component{

  render(){
    return(<div class = "layout">
          <SlideShow/>
        </div>)
  }
}
