import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../code-block.js';


export default class Reading extends React.Component{

  render() {
    return (
      <div className="ui reading segmentpadding">
        <ReactMarkdown source={this.props.currentMarkdown} renderers={Object.assign({}, ReactMarkdown.renderers, {
                            CodeBlock: CodeBlock })}/>
        aa
      </div>
    );
  }
}
