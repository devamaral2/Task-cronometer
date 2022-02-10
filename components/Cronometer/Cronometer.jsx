import { useEffect, useState } from 'react'
import React from 'react'
import TurnList from './TurnList';
import TaskTime from './TaskTime';
import Table from './Table';
import Radios from './Radios';

export function Cronometer() {

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
  const [sbysClass, setSbysClass] = useState('radio-label')
  const [xpClass, setXpClass] = useState('radio-label')
  const [startClass, setStartClass] = useState('button green')

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
      setStartClass('button blue')
    } else {
      setInitTimer(false);
      setBtnName('start');
      setStartClass('button green')
    }
  }

  function handleTurn() {
    setAllTurns([...allTurns, count].sort((a, b) => b - a));
    reserveTimeCalc();
    setNewCount(0);
    setNewCount2(0);
    setInitTurn(initTurn ? false : true);
  }

  function handleRadio(event) {
    if (event.target.id === 'radioSbyS') {
      setRadio('SbyS');
      setSbysClass('radio-label brown');
      setXpClass('radio-label')
    }
    if (event.target.id === 'radioXp') {
      setRadio('Xp');
      setXpClass('radio-label brown');
      setSbysClass('radio-label')
    }
  }

  function handleDelete(event) {
    event.target.parentNode.remove();
  }

  function resetTimer() {
    setInitTimer(false)
    setTimeout(() => {
      setNewCount(0)
      setNewCount2(0)
      setCount(0);
    }, 101);
    setAllTurns([])
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

  function botao() {
    setTrigger(trigger + 1)
  }

  function cleaning() {
    setWorkTimeSByB(0);
    setWorkTimeXp(0);
    setTaskQuantXp(0);
    setTaskQuantSByB(0);
  }

  return (
    <div className='timer'>
      {initTimer && startTimer()}
      {initTimer && startTurn()}
      <Radios
        handleRadio={handleRadio}
        radio={radio}
        xpClass={xpClass}
        sbysClass={sbysClass}
      />
      <p>
        Reserved time:
      </p>
      <p>
        {timeReserve}
      </p>
      <TaskTime
        totalTime={totalTime}
        setTotalTime={setTotalTime}
        radio={radio}
        handleTurn={handleTurn}
      />
      <h2>
        {Number(timeReserve) + Number(totalTime)}
      </h2>
      <h2
        className="count-turn"
      >
        {initTurn ? newCount2 : newCount}
      </h2>
      <p
        className="count"
      >
        {count}
      </p>
      <div
        className='container'
      >

        <button
          className={ startClass }
          onClick={start}
        >
          {btnName}
        </button>
        <button
          className='button reset'
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      <section id="section__newcounter">
      </section>
      <TurnList
        allTurns={allTurns}
        handleDelete={handleDelete}
        sendWorkTime={sendWorkTime}
      />
      <section className="table-button">

        <Table
          handleChange={handleChange}
          workTimeSByS={workTimeSByS}
          taskQuantSByS={taskQuantSByS}
          workTimeXp={workTimeXp}
          taskQuantXp={taskQuantXp}
        />
        <button
          className="button reset"
          onClick={cleaning}
        >
          Clear
        </button>
      </section>
    </div >
  )
}


