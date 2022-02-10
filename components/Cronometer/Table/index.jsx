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
      <table className="table content-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>tempo</th>
            <th>quantidade</th>
          </tr>
        </thead>
          <tbody>
        <tr className="table-middle">
          <td>Xp</td>
          <td>{ workTimeXp.toFixed(2) }</td>
          <td>{ taskQuantXp }</td>
        </tr>
        <tr>
          <td>SbyS</td>
          <td>{ workTimeSByS.toFixed(2) }</td>
          <td>{ taskQuantSByS }</td>
        </tr>
          </tbody>
      </table >
    )
  }
}

export default Table;


