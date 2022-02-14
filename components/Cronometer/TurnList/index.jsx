import React from "react"

class TurnList extends React.Component {
  render() {
  const { handleDelete, allTurns, sendWorkTime } = this.props;
  
  return (
    <ol
      className="w-full container m-0 p-8 flex flex-col" 
      reversed 
      id="list"
    >
      {allTurns.map((turn) => (
        <li 
          className="text-slate-200 w-full list-decimal p-1 text-lg" 
          key={ turn} 
        >
          { turn.count.toFixed(2) } -- { turn.newCount.toFixed(2) } - { turn.newCount2.toFixed(2) } -- { turn.totalTime }
          <button
            className="text-black text-xl font-bold bg-slate-200 w-6 h-6 ml-8 rounded"
            onClick={ handleDelete }
          >
            -
          </button>
          <button
          className="w-12 h-6 text-black m-4 bg-slate-200 rounded"
            onClick={ sendWorkTime }
            value={ turn.count.toFixed(2) }
          >
            send
          </button>
        </li>
        ))
      }
    </ol>
  )
      }
}

export default TurnList;
