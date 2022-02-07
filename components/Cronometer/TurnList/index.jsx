import React from "react"

class TurnList extends React.Component {
  render() {
  const { handleDelete, allTurns, sendWorkTime } = this.props;
  
  return (
    <ol reversed id="list">
      {allTurns.map((turn) => (
        <li className='turn' key={ turn} >
          { turn }
          <button
            onClick={ handleDelete }
          >
            delete
          </button>
          <button
            onClick={ sendWorkTime }
            value={turn}
          >
            send this time
          </button>
        </li>
        ))
      }
    </ol>
  )
      }
}

export default TurnList;
