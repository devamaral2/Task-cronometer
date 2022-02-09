import React from "react"

class TaskTime extends React.Component {
  render() {
    const { 
      radio,
      totalTime, 
      setTotalTime, 
      handleTurn,    
    } = this.props;

    return (
      <>
        <label
          className="input__name"
          htmlFor='tasktime'
        >
          Task time:
          <input
            onChange={(event) => setTotalTime(event.target.value)}
            value={totalTime}
            type="number"
            className="inputs"
            name="task-time"
          />
        </label>
        <button
          className="turn__button"
          disabled={(radio === '' || totalTime === 0) ? true : false}
          onClick={handleTurn}
        >
          turn
        </button>
      </>
    )
  }
}

export default TaskTime;
