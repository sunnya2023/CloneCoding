import React from 'react'
import Licat from '../../img/licat.png'
import './modal.css'

export default function Modal({setShowModal}) {
  return (
    <article id='modal-wrap'>
        <div  className='modal-content'>
            <h1>화이팅!!&#9829;&#9829;&#9829;</h1>
            <h3>당신의 꿈을 응원합니다.</h3>
            <img src={Licat}/>
            <button className='btn-close' onClick={()=>{setShowModal(false)}}>종료하고 진짜 훈련하러 가기 GO!GO!</button>
        </div>

    </article>
  )
}
