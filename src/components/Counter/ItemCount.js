import React from 'react'
import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [disabled, setDisabled] = useState(false);
    let incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    // const OnAdd = ()=> alert('Se seleccionaron ' + counter + ' producto/s')
    if(counter<=1) {
      decrementCounter = () => setDisabled(disabled, true);
    }
    if (counter === stock){
      incrementCounter = ()=> setDisabled(disabled, true);
    }
    return (
        
        <div className='contador'> 
            <ButtonDecrement onClickFunc={decrementCounter}/>
            <Display message={counter}/> 
            <ButtonIncrement onClickFunc={incrementCounter}/>
            <ButtonOnAdd />
        </div>
        
    )
}

export default ItemCount

export function ButtonIncrement(props) {
  
    return (
      <button className='sumar' onClick={props.onClickFunc}>+</button>
    )
 }

 export function ButtonDecrement(props) {
  
    return (
      <button className='restar' onClick={props.onClickFunc}>-</button>
    )
  }

  export function ButtonOnAdd(props) {
      return(
        
          <button className='agregar' onClick={props.onClickFunc}>Comprar</button>
      )
  }

  export function Display(props) {
    return (
      <label className='display' >{props.message}</label>
    )
  }



