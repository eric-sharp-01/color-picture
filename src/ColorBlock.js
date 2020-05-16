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
    let style = null;
    if(this.props.color){
      const {r, g, b} = this.props.color;
      style = { background: `rgb(${r}, ${g}, ${b})` };
    }else{
      style= {
        background: "linear-gradient(45deg, black, blue, white)"
      };
    }
    return <div className="color-block" style={style}></div>;
  }
}

export default ColorBlock;
