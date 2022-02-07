import React from "react"

class Radios extends React.Component {
  render() {
    const { 
      handleRadio,  
      radio, 
      
    } = this.props;

    return (
      <>
        <label htmlFor='radio'>
        <label className="radio__label">
          SbyS
          <input
            className="radio"
            type="radio"
            id="radioSbyS"
            name="radio"
            onChange={ handleRadio }
            value={ radio }
          />
        </label>
        <label className="radio__label">
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
      </label>
      <br />
      </>
    )
  }
}

export default Radios;
