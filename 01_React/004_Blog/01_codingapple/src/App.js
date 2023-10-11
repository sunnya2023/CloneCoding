/*eslint-disable */

import './App.css'
import { useState } from 'react'

function App() {

  let post = 'ReactBlog'
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학'])
  let [thumb, setThumb] = useState([0, 0, 0])
  let [modal, setModal] = useState(false)
  let [num, setNum] = useState(0)
  let [input, setInput] = useState(' ')

  // const onChangeHandler = () => {
  //   setThumb(thumb + 1)
  // }
  const onTitleChange = () => {
    let title2 = [...title]
    title2[0] = '여자 코트 추천'
    setTitle(title2)
  }

  const onTitleOrder = () => {
    let title3 = [...title].sort()
    setTitle(title3)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 >{post}</h4>
      </div>

      <button onClick={onTitleChange}>click</button>
      <button onClick={onTitleOrder}>정렬</button>

      {/* <div className='list'>
        <h4>{title[0]} <span onClick={onChangeHandler}>👍</span>{thumb}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => setModal(!modal)}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map(function (a, i) {
          return (
            <div className='list'>
              <h4 onClick={() => { setModal(!modal); setNum(i) }}>{title[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...thumb]
                  thumb[i] = thumb[i] + 1
                  setThumb(thumb)
                }}>👍</span>{thumb[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let recopy = [...title]
                recopy.splice(i, 1)
                setTitle(recopy)
              }}>삭제</button>
            </div>
          )
        })
      }

      <input type='text' onChange={(e) => { setInput(e.target.value) }} />
      <button onClick={() => {
        let copy = [...title]
        copy.unshift(input)
        setTitle(copy)
      }}>추가</button>


      {
        modal ? <Modal title={title} num={num} color='orange' setTitle={setTitle} /> : null
      }
    </div >


  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.title[props.num]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.title]
        copy[0] = '여자 코트 추천'
        props.setTitle(copy)
      }}>글수정</button>
    </div>
  )
}
export default App;
