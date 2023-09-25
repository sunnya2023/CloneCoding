import React from 'react'
import title from '../../img/title.png'
import txtSub from '../../img/txt_subtitle.png'
import './header.css'

export default function Header() {
  return (
    <header>
        <h1 className='tit-img'>
            <img src={title}/>
        </h1>
        <img src={txtSub} className='txt-sub'/>
        <p className='txt-desc'><strong>1만 시간의 법칙</strong>은<br/>
       어떤 분야의 전문가가 되기 위해서는<br/>
       최소한 1만 시간 시간의 훈련이 필요하다는 법칙이다.</p>
       
    </header>
  )
}
