import React from "react"

class TurnList extends React.Component {
  render() {
  const { handleDelete, allTurns, sendWorkTime, initTurn } = this.props;
  
  return (
    <ol
      className="w-full container m-0 p-8 flex flex-col" 
      reversed 
      id="list"
    >
      {allTurns.map((turn, index) => (
        <li 
          className="text-slate-200 w-full list-decimal p-1 text-lg" 
          key={ index } 
          value= { index } 
        >
          {`${ turn.count.toFixed(2) } -- ${ turn.initTurn ?  parseFloat(turn.newCount2).toFixed(2) : parseFloat(turn.newCount).toFixed(2)} - ${ turn.totalTime }`}
          {/* { turn.count.toFixed(2) } -- { turn.newCount.toFixed(2) } - { turn.newCount2.toFixed(2) } -- { turn.totalTime }  */}
          <button
            className="text-black text-xl font-bold bg-slate-200 w-6 h-6 ml-8 rounded"
            onClick={ handleDelete }
          >
            -
          </button>
          <button
          className="w-12 h-6 text-black m-4 bg-slate-200 rounded hover:opacity-80 active:bg-slate-500 focus:outline-none transition duration-20 ease-in focus:ring-4 focus:ring-red-800"
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
