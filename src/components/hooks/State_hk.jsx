import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { likes } from '../global/atom';
import './styles.scss'
const State_hk = ({country}) => {
  let [count, setCount] = useState(0); //! declear useState variable
  //! count is the actual variabe and has the initial value of 0
  //! setCount is a function useState returns which you can use to update count anytime
  let [styles, setStyles] = useState('');
  let [names, setNames] = useState('Rispa');
  let [love, setLove] = useRecoilState(likes);

    function addCount() {
        count++;
      console.log(count);
      setCount(count);
        return count;
  }
  
  function sum(a, b) {
    return `${a} + ${b} = ${a + b}`;
    // return String(a) + ' + ' + String(b) + ' = ' + String(a+b);
  }

  //? using useEffect

  useEffect(() => {
    // setInterval(() => {
      setCount(count = count + 1);
      
    // }, 500);
  },[styles])

  // end of js
  return (
      <div>State_hk
          <h3>Count: {count} </h3>
      <button onClick={() => addCount()} >++</button>
      <hr />
      <div className={styles}>
        <h1>Changing Colors</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam perferendis vel incidunt eum! Sit aliquid numquam consequuntur amet, dolores consequatur.</p>
        <button onClick={()=> setStyles('red')}>Red</button>
        <button onClick={() => setStyles('blue')}>Blue</button>
      </div>

      <hr />
      <h1>My name is {names} </h1>
      <button onClick={() => setNames('Chile')}>Change Names</button>
      <hr />
      <h3>{sum(12, 51)}</h3>
      <h4>My name is Mr. {names}, I'm a Citizen of {country} </h4>
      <hr />
      <h2>Do you Like NIgeria? Likes: {love}
        <button onClick={() => setLove(love=love+1)}>Like Now</button> </h2>
    </div>
  )
}

export default State_hk