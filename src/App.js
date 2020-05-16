import React from 'react';
import './App.css';
import ColorBlock from './ColorBlock';
import Point from './Point';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      grid: null
    }
  }

  componentDidMount(){
    let colors = [];
    let step = 8;
    for(let r = 8; r <= 32 * step; r = r + step){
      for(let g = 8; g <= 32 * step; g = g + step){
        for(let b = 8; b <= 32 * step; b = b + step){
          colors.push({r, g, b});
        }
      }
    }

    colors.sort((a, b) => {
      let pointA = new Point(a);
      let pointB = new Point(b);
      return pointA.getValue() - pointB.getValue();
    });

    let colorsReversed = [...colors].reverse();

    let grid = [];
    for(let y = 0; y < 128; y++){
      let row = [];
      for(let x = 0; x < 256; x++){
        if(this.mathPattern(x, y)){
          row.push(colors.shift());
        }else{
          row.push(colorsReversed.shift());
        }
      }
      grid.push(row);
    }
    this.setState({ grid });
  }

  mathPattern = (x, y) => {
    return y <= (16 * (1 + (x / 256) * 2) * Math.cos(x * Math.PI / 32) + 64);
  }

  render() {
    if(this.state.grid){
      let picture = [];
      for (let row = 0; row < 128 ; row++) {
        let rowElements = [];
        for (let col = 0; col < 256; col++) {
          let colorPoint = this.state.grid[row][col];
          rowElements.push(<ColorBlock key={`${row}-${col}`} color={colorPoint} />);
        }
        picture.push(<div key={row} className="row">{rowElements}</div>)
      }
      return (
        <div id="color-image">
          {picture}
        </div>
      );
    }else{
      return null;
    }
  }
}

export default App;