/*eslint-disable */

import './App.css'
import { useState } from 'react'

function App() {

  let post = 'ReactBlog'
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학'])
  let [thumb, setThumb] = useState(0)

  const onChangeHandler = () => {
    setThumb(thumb + 1)
  }
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
      <div className='list'>
        <h4>{title[0]} <span onClick={onChangeHandler}>👍</span>{thumb}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
export default App;
