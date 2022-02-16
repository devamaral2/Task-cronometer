import { useEffect, useState } from 'react'
import React from 'react'
import TurnList from './TurnList';
import TaskTime from './TaskTime';
import Table from './Table';
import Radios from './Radios';

export function Cronometer() {

  const radioClasses = "flex justify-center items-center w-3/12 h-1/2 text-4xl bg-black border-2  m-4 text-slate-200 rounded hover:cursor-pointer hover:bg-slate-50 hover:text-black transition duration-200 ease-in"
  const radioClassesSelected = "flex justify-center items-center w-3/12 h-1/2 text-4xl border-2  m-4 rounded bg-slate-200 text-black"
  const [count, setCount] = useState(0);
  const [initTimer, setInitTimer] = useState(false);
  const [btnName, setBtnName] = useState('Start');
  const [totalTime, setTotalTime] = useState(0);
  const [allTurns, setAllTurns] = useState([]);
  const [newCount, setNewCount] = useState(0);
  const [initTurn, setInitTurn] = useState(false);
  const [newCount2, setNewCount2] = useState(0);
  const [timeReserve, setTimeReserve] = useState(0);
  const [radio, setRadio] = useState('');
  const [workTimeSByS, setWorkTimeSByB] = useState(0);
  const [workTimeXp, setWorkTimeXp] = useState(0);
  const [taskQuantSByS, setTaskQuantSByB] = useState(0);
  const [taskQuantXp, setTaskQuantXp] = useState(0);
  const [sbysClass, setSbysClass] = useState(radioClasses);
  const [xpClass, setXpClass] = useState(radioClasses);
  const [startClass, setStartClass] = useState('bg-green-800 w-20 h-20 rounded-full text-xl');

  useEffect(() => {
    const data = localStorage.getItem('data')
    if (data) {
      const dataParsed = JSON.parse(data)
      setWorkTimeSByB(dataParsed.workTimeSByS)
      setWorkTimeXp(dataParsed.workTimeXp)
      setTaskQuantSByB(dataParsed.taskQuantSByS)
      setTaskQuantXp(dataParsed.taskQuantXp)
      setTimeReserve(dataParsed.timeReserve)
    }
  }, [])

  useEffect(() => {
    const data = {
      taskQuantSByS: taskQuantSByS || 0,
      taskQuantXp: taskQuantXp || 0,
      workTimeSByS: workTimeSByS || 0,
      workTimeXp: workTimeXp || 0,
      timeReserve: timeReserve || 0,
    }
    localStorage.setItem('data', JSON.stringify(data))
  }, [taskQuantSByS, taskQuantXp, workTimeSByS, workTimeXp, timeReserve])

  function startTimer() {
    setTimeout(() => {
      setCount(count + 0.00166666667);
    }, 100);
  }

  function startTurn() {
    if (initTurn) {
      setTimeout(() => {
        setNewCount2(newCount2 + 0.00166666667);
      }, 100);
    }
    if (!initTurn) {
      setTimeout(() => {
        setNewCount(newCount + 0.00166666667);
      }, 100);
    }
  }
  function reserveTimeCalc() {
    if (initTurn) setTimeReserve(timeReserve + (totalTime - newCount2))
    if (!initTurn) setTimeReserve(timeReserve + (totalTime - newCount))
  }

  function start() {
    if (!initTimer) {
      setInitTimer(true);
      setBtnName('Stop');
      setStartClass('bg-red-800 w-20 h-20 rounded-full text-xl')
    } else {
      setInitTimer(false);
      setBtnName('start');
      setStartClass('bg-green-800 w-20 h-20 rounded-full text-xl')

    }
  }

  function handleTurn() {
    const data = {
      count,
      newCount,
      newCount2,
      totalTime,
    }
    setAllTurns([...allTurns, data].sort((a, b) => b.count- a.count));
    reserveTimeCalc();
    setNewCount(0);
    setNewCount2(0);
    setInitTurn(initTurn ? false : true);
  }

  function handleRadio(event) {
    if (event.target.id === 'radioSbyS') {
      setRadio('SbyS');

      setSbysClass(radioClassesSelected);
      setXpClass(radioClasses)
    }
    if (event.target.id === 'radioXp') {
      setRadio('Xp');
      setXpClass(radioClassesSelected);
      setSbysClass(radioClasses)

    }
  }

  function handleDelete(event) {
    event.target.parentNode.remove();
  }

  function sendWorkTime(event) {
    if (radio === 'SbyS') {
      const resultSbyS = Number(event.target.value)
      setWorkTimeSByB(resultSbyS + workTimeSByS)
      setTaskQuantSByB(taskQuantSByS + allTurns.length)
    }
    if (radio === 'Xp') {
      const resultXp = Number(event.target.value)
      setWorkTimeXp(resultXp + workTimeXp)
      setTaskQuantXp(taskQuantXp + allTurns.length)
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'workTimeSByS') setWorkTimeSByB(value)
    if (name === 'taskQuantSByS') setTaskQuantSByB(value)
    if (name === 'workTimeXp') setWorkTimeXp(value)
    if (name === 'taskQuantXp') setTaskQuantXp(value)

  }

  function cleaning() {
    setWorkTimeSByB(0);
    setWorkTimeXp(0);
    setTaskQuantXp(0);
    setTaskQuantSByB(0);
  }

  return (
    <div className=''>
      {initTimer && startTimer()}
      {initTimer && startTurn()}
      <Radios
        handleRadio={handleRadio}
        radio={radio}
        xpClass={xpClass}
        sbysClass={sbysClass}
      />

      <TaskTime
        totalTime={totalTime}
        setTotalTime={setTotalTime}
        radio={radio}
        handleTurn={handleTurn}
        timeReserve={timeReserve}
      />
      <div className='m-10 p-0 text-center'>

        <h2
          className="text-5xl"
        >
          {initTurn ? parseFloat(newCount2).toFixed(2) : parseFloat(newCount).toFixed(2) }
        </h2>
        <p
          className="text-xl"
        >
          { parseFloat(count).toFixed(2) }
        </p>
      </div>
      <div
        className="container m-0"
      >
        <div className="container m0 p-4">
          <button
            className={ startClass }
            onClick={ start }
          >
            { btnName }
          </button>
        </div>
      </div>
      <TurnList
        allTurns={allTurns}
        handleDelete={handleDelete}
        sendWorkTime={sendWorkTime}
      />
      <section className="flex justify-around container m-0">
        <Table
          handleChange={handleChange}
          workTimeSByS={workTimeSByS}
          taskQuantSByS={taskQuantSByS}
          workTimeXp={workTimeXp}
          taskQuantXp={taskQuantXp}
        />
        <button
          className="w-2/12 h-1/2 text-2xl text-slate-200 m-4 bg-red-800 rounded"

          onClick={cleaning}
        >
          Clear
        </button>
      </section>
    </div >
  )
}


