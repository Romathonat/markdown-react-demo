import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../code-block.js';


export default class Reading extends React.Component{
  componentWillUpdate = (nextProps) => {
    //we make the animation only if we have a new reading
    if(nextProps.currentMarkdown !== this.props.currentMarkdown){
      $('.reading').transition('hide');
      $('.reading').transition('fade');
    }
  }


  render() {
    return (
      <div className="ui container">
        <div className="reading">
          <ReactMarkdown source={this.props.currentMarkdown} renderers={Object.assign({}, ReactMarkdown.renderers, {
                              CodeBlock: CodeBlock })}/>
        </div>
      </div>
    );
  }
}
