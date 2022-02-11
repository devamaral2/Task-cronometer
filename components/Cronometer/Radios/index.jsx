import React from "react"

const radioClasses = "flex justify-center items-center w-3/12 h-1/2 text-4xl bg-black border-2  m-4 text-slate-200 rounded hover:cursor-pointer hover:bg-slate-50 hover:text-black transition duration-200 ease-in"

class Radios extends React.Component {
  render() {
    const {
      handleRadio,
      radio,
      xpClass,
      sbysClass
    } = this.props;

    return (
      <div>
        <label className="flex justify-items-between p-0 container m-0 h-31" htmlFor='radio'>
          <label 
            className={ sbysClass }
          >
            SbyS
            <input
              className="hidden"
              type="radio"
              id="radioSbyS"
              name="radio"
              onChange={handleRadio}
              value={radio}
            />
          </label>

          <label 
            className= { xpClass }
          >
            Xp
            <input
              className="hidden"
              type="radio"
              id="radioXp"
              name="radio"
              onChange={handleRadio}
              value={radio}
            />
          </label>

        </label>
        <br />
      </div>
    )
  }
}

export default Radios;
