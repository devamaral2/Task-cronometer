import React from "react"

class Table extends React.Component {
  render() {
    const {
      handleChange,
      workTimeSByS,
      taskQuantSByS,
      workTimeXp,
      taskQuantXp,
    } = this.props;

    return (
      <table>
        <tr>
          <td>
            Task
          </td>
          <td
            className="table__title"
          >
            tempo
          </td>
          <td
            className="table__title"
          >
            quantidade
          </td>
        </tr>
        <tr>
          <td>Xp</td><td><input
            className="inputs"
            name="workTimeXp"
            onChange={handleChange}
            value={ workTimeXp.toFixed(2) }
          /></td><td><input
            className="inputs"
            name="taskQuantXp"
            onChange={ handleChange }
            value={taskQuantXp}
          /></td>
        </tr>
        <tr>
          <td>SbyS</td><td><input
            className="inputs"
            name="workTimeSByS"
            onChange={ handleChange }
            value={ workTimeSByS.toFixed(2) }
          /></td><td><input
            className="inputs"
            name="taskQuantSByS"
            onChange={ handleChange }
            value={ taskQuantSByS }
          /></td>
        </tr>
      </table>
    )
  }
}

export default Table;


