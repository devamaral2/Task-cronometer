import { useEffect, useState } from 'react'
import React from 'react'
import TurnList from './TurnList';
import TaskTime from './TaskTime';
import Table from './Table';
import Buttons from './Buttons';
import Radios from './Radios';
import { setCookie, parseCookies } from 'nookies';

export function Cronometer({ data, teste }) {

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
  
  useEffect(() => {
    const dataParsed = JSON.parse(data)
    console.log(typeof(workTimeSByS))
    setWorkTimeSByB(dataParsed.workTimeSByS)
    setWorkTimeXp(dataParsed.workTimeXp)
    setTaskQuantSByB(dataParsed.taskQuantSByS)
    setTaskQuantXp(dataParsed.taskQuantXp)
    setTimeReserve(dataParsed.timeReserve)
  },[])

  useEffect(() => {
    const data = {
      taskQuantSByS: taskQuantSByS || 0,
      taskQuantXp: taskQuantXp || 0, 
      workTimeSByS: workTimeSByS || 0, 
      workTimeXp: workTimeXp || 0,
      timeReserve: timeReserve || 0,
    }
    setCookie(null, 'data', JSON.stringify(data), { path: '/', maxAge: 86400 * 7 })
  }, [taskQuantSByS, taskQuantXp, workTimeSByS, workTimeXp])

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
    } else {
      setInitTimer(false);
      setBtnName('start');
    }
  }

  function handleTurn() {
    console.log(teste)
    setAllTurns([...allTurns, count].sort((a, b) => b - a));
    reserveTimeCalc();
    setNewCount(0);
    setNewCount2(0);
    setInitTurn(initTurn ? false : true);
  }

  function handleRadio(event) {
    if (event.target.id === 'radioSbyS') setRadio('SbyS')
    if (event.target.id === 'radioXp') setRadio('Xp')
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

  return (
    <div>
      {initTimer && startTimer()}
      {initTimer && startTurn()}
      <Radios
        handleRadio={handleRadio}
        radio={radio}
      />
      <TaskTime
        totalTime={totalTime}
        setTotalTime={setTotalTime}
      />
      <p>
        Reserved time: {timeReserve}
      </p>
      <p
        className="count"
      >
        {count}
      </p>
      <Buttons
        start={start}
        btnName={btnName}
        radio={radio}
        totalTime={totalTime}
        handleTurn={handleTurn}
        resetTimer={resetTimer}
      />
      <section id="section__newcounter">
        <p
          className="count"
        >
          {initTurn ? newCount2 : newCount}
        </p>
      </section>
      <TurnList
        allTurns={allTurns}
        handleDelete={handleDelete}
        sendWorkTime={sendWorkTime}
      />
      <Table
        handleChange={handleChange}
        workTimeSByS={workTimeSByS}
        taskQuantSByS={taskQuantSByS}
        workTimeXp={workTimeXp}
        taskQuantXp={taskQuantXp}
      />
    </div >
  )
}

export function getServerSideProps({ req, res}) {
  // const resp = parseCookies(context)
  return {
    props: {
      teste:'seu'
    }
  }

}

