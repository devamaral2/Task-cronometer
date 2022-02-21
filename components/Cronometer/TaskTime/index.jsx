import React from "react"

class TaskTime extends React.Component {
  render() {
    const { 
      radio,
      totalTime, 
      setTotalTime, 
      handleTurn,
      timeReserve,    
    } = this.props;

    return (
      <div className="flex justify-items-center p-0 container m-0 h-31">
       
        <div className="flex justify-center items-center w-4/12 h-1/2 text-4xl bg-slate-200 m-4 text-black rounded">
        <p>
          {(Number(timeReserve) + Number(totalTime)).toFixed(2)}
          </p>
      </div>
          <input
            onChange={(event) => setTotalTime(event.target.value)}
            value={totalTime}
            type="number"
            className="w-2/12 h-1/2 text-4xl text-red-800 m-4 bg-slate-200 rounded"
            name="task-time"
          />
        <button
          className="w-2/12 h-1/2 text-3xl text-black m-4 bg-slate-200 rounded disabled:opacity-50 hover:opacity-80 active:bg-slate-500 focus:outline-none transition duration-20 ease-in"
          disabled={(radio === '' || totalTime === 0) ? true : false}
          onClick={handleTurn}
        >
          turn
        </button>
      </div>
    )
  }
}

export default TaskTime;
