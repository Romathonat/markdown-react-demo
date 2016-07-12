import React from 'react';

export default class NavBar extends React.Component{
  componentDidMount = () => {
    $('.ui.dropdown').dropdown();
  }

  render() {
    var setCurrentMarkdown = this.props.setCurrentMarkdown;
    var markdownFiles = this.props.markdownFiles.map(function(file){
      return (
        <div className="item" key={file.title} onClick={() => setCurrentMarkdown(file.file)}>
          {file.title}
        </div>);
    });

    return (
      <div className="ui inverted menu navbar centered grid orange ">
        <div className="ui container wrapNavbar">
          <a className="brand item largefont">Mardown Demo</a>
          <a className="ui dropdown item">
          <div className="default text">Select file</div>
            <i className="dropdown icon"></i>
            <div className="menu">
              {markdownFiles}
            </div>
          </a>
          <a href="https://github.com/Romathonat/markdown-react-demo" className="item right">GitHub</a>
        </div>
      </div>
    );
  }
}
