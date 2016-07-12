import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Reading from './components/Reading.js';

import markdown1 from 'raw!./markdown/markdown1.md';

var markdownFiles = [
  {'title': 'markdown1.md', 'file': markdown1}];

export default class App extends Component {
  constructor() {
    super();
    this.state = {'currentMarkdow': markdownFiles[0].file};
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
