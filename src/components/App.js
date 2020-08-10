import React,{useState} from 'react';
import { Button } from './Button';
import { Display } from './Display';


function App() {
  const [counter,setCounter]=useState(1);
  const incrementCounter=(incValue)=>setCounter(counter+incValue);
  return(
    <React.Fragment>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </React.Fragment>
  )
}

export default App;
