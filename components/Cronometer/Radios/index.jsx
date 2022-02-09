import React from "react"

class Radios extends React.Component {
  render() {
    const {
      handleRadio,
      radio,
      xpClass,
      sbysClass
    } = this.props;

    return (
      <div >
        <label className="radio-conteiner" htmlFor='radio'>
          <div
            className={ sbysClass }
          >
            <label
            >
              SbyS
              <input
                className="radio"
                type="radio"
                id="radioSbyS"
                name="radio"
                onChange={ handleRadio }
                value={radio}
              />
            </label>
          </div>
            <div className= { xpClass }>
          <label>
              Xp
            <input
              className="radio"
              type="radio"
              id="radioXp"
              name="radio"
              onChange={ handleRadio }
              value={ radio }
              />
          </label>
              </div>
        </label>
        <br />
      </div>
    )
  }
}

export default Radios;
