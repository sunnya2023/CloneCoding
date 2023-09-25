import React, {useState } from 'react'
import './main.css'

export default function Main({setShowModal}) {

  const [field, setFied] = useState('')
  const [time, setTime] =useState(0)
  const [day , setDay] = useState(0)
console.log(typeof time)
  const onSubmitHandler = (event) =>{
    event.preventDefault()
    setDay(Math.ceil(10000/parseInt(time)))
  }

  return (
    <main>
        <form onSubmit={onSubmitHandler} >
                <p className='txt-field'>나는 <input type='text' placeholder='프로그래밍'  value={field} onChange={(event)=>setFied(event.target.value)}/> 전문가가 될 것이다.</p>
                <p  className='txt-field'>그래서 앞으로 매일 하루에 <input type='number' placeholder='5' value={time} onChange={(event)=>setTime(event.target.value)}  />시간씩 훈련할 것이다.</p>
            <button className='btn-result' >나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        </form>

{day && <section>
        <h2 className='a11y-hidden '>결과</h2>
       <p className='txt-field'>당신은 <strong>{field}</strong> 전문가가 되기 위해서<br/>
        대략 <strong>{day}</strong>일 이상 훈련하셔야 합니다!:)</p>
         
            <button className='btn-go' onClick={()=>setShowModal(true)} >훈련하러 가기 GO!GO!</button>
            <button className='btn-share'>공유하기</button>
    </section>}
    </main>
  )
}
