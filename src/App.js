import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Reading from './components/Reading.js';

import markdown1 from 'raw!./markdown/markdown1.md';
import redux_intro from 'raw!./markdown/redux_intro.md';

var markdownFiles = [
  {'title': 'markdown1.md', 'file': markdown1},
  {'title': 'redux_intro.md', 'file': redux_intro}];

export default class App extends Component {
  constructor() {
    super();
    this.state = {'currentMarkdown': markdownFiles[0].file};
  }
  setCurrentMarkdown = (newMarkdown) => {
    this.setState({'currentMarkdown': newMarkdown});
  }
  render() {
    return (
      <div>
        <NavBar markdownFiles={markdownFiles} setCurrentMarkdown={this.setCurrentMarkdown} />
        <Reading currentMarkdown={this.state.currentMarkdown} />
      </div>
    );
  }
}
