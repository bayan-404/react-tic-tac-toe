import React from "react";
import Square from "./Square";
import calculateWinner from "./calculateWinner";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
      //return only ?
    }
    squares[i] = this.state.xIsNext ? "x" : "o";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      //!this.state ?
    });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "winner:" + winner;
    } else {
      status = "Next player:" + (this.state.xIsNext ? "x" : "o");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare("0")}
          {this.renderSquare("1")}
          {this.renderSquare("2")}
        </div>
        <div className="board-row">
          {this.renderSquare("3")}
          {this.renderSquare("4")}
          {this.renderSquare("5")}
        </div>
        <div className="board-row">
          {this.renderSquare("6")}
          {this.renderSquare("7")}
          {this.renderSquare("8")}
        </div>
      </div>
    );
  }
}

export default Board;
