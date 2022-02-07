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
        <label>
          SbyS
          <input
            type="radio"
            id="radioSbyS"
            name="radio"
            onChange={ handleRadio }
            value={ radio }
          />
        </label>
        <label>
          Xp
          <input
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
