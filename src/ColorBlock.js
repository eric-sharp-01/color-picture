import React from 'react';

class ColorBlock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
  }

  render() {
    const {r, g, b} = {r: 256, g: 0, b: 0, ...this.props.color};
    let background = `rgb(${r}, ${g}, ${b})`;
    let style={ background, width: 4, height: 4 };
    return (
      <div className="color-block" style={style}></div>
    );
  }
}

export default ColorBlock;
