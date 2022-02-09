import React from "react"

class TurnList extends React.Component {
  render() {
  const { handleDelete, allTurns, sendWorkTime } = this.props;
  
  return (
    <ol reversed id="list">
      {allTurns.map((turn) => (
        <li 
          className='turn' 
          key={ turn} 
        >
          { turn }
          <button
            className="delete-button"
            onClick={ handleDelete }
          >
            x
          </button>
          <button
          className="send-button"
            onClick={ sendWorkTime }
            value={turn}
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
