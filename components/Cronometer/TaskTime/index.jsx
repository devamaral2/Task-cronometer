import React from "react"

class TaskTime extends React.Component {
  render() {
  const { totalTime, setTotalTime } = this.props;
  
  return (
    <label htmlFor='tasktime'>
        Task time:
        <input
          onChange={ (event) => setTotalTime(event.target.value) }
          value={ totalTime }
          type="number"
          className="inputs"
          name="task-time"
        />
    </label>
  )
      }
}

export default TaskTime;
