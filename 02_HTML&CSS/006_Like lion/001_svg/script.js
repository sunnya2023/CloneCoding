const path = document.querySelector('#path')

//path의 전체 길이 구하기
const pathLength = path.getTotalLength()

//dash의 길이와 공백
// console.log(pathLength) //2507.61328125
// path.style.strokeDasharray = pathLength + "" + pathLength
path.style.strokeDasharray = `${pathLength} ${pathLength}`

//dash를 어디서부터 그릴지
path.style.strokeDashoffset = pathLength


function scrollHandler() {
    //현재 스크롤 위치
    const scrollTop = document.documentElement.scrollTop

    //전체 스크롤의 길이
    const scrollHeight = document.documentElement.scrollHeight

    //뷰포트의 높이
    const clientHeght = document.documentElement.clientHeight
    // console.log(scrollTop, scrollHeight, clientHeght)
    //스크롤의 위치를 %로 변경 (전체 스크롤에서 뷰포트 하나 뺀 만큼) 0 -> 1
    const scrollPercentage = scrollTop / (scrollHeight - clientHeght)
    // console.log(scrollPercentage)

    const drawLength = pathLength * scrollPercentage
    console.log(drawLength)

    path.style.strokeDashoffset = pathLength - drawLength
}

window.addEventListener('scroll', scrollHandler)
