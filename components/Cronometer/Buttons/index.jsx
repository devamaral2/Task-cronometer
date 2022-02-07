import React from "react"

class Buttons extends React.Component {
  render() {
    const { start, 
      btnName, 
      radio, 
      totalTime, 
      handleTurn, 
      resetTimer 
    } = this.props;

    return (
      <>
        <button
          onClick={start}
        >
          {btnName}
        </button>
        <button
          disabled={(radio === '' || totalTime === 0) ? true : false}
          onClick={handleTurn}
        >
          turn
        </button>
        <button onClick={resetTimer}>Reset</button>
      </>
    )
  }
}

export default Buttons;
