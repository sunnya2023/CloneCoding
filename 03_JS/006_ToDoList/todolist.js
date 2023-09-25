// const inputBox = document.querySelector('.input-box input')
// const addBtn = document.querySelector('.add')


// addBtn.addEventListener('click', (event) => {
//     if (inputBox.value === '') {
//         alert('wirte your to do list')
//     } else {
//         const newList = document.querySelector('.list_field')
//         let task = document.querySelector('#task').value
//         newList.innerHTML += `
//         <div class="new__list">
//         <div class="checkbox"><input type="checkbox"></div>
//         <div class="txt">
//             <p>${task}</p>
//         </div>
//         <div class="del"><i class="fa-solid fa-x "></i></div>
//     </div>
//         `

//         const del = document.querySelectorAll('.del')
//         for (let i = 0; i < del.length; i++) {
//             del[i].addEventListener('click', () => {
//                 this.parentNode.remove()
//             })

//         }
//     }
// })

//2nd
const addBtn = document.querySelector('.add')
const inputBox = document.querySelector('#task')
const newList = document.querySelector('.list_field')


addBtn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert('write something!!!')
    } else {
        const inputValue = inputBox.value
        newList.innerHTML += `
<div class="new__list">
                <div class="checkbox"><input type="checkbox"></div>
                <div class="txt">
                    <p>${inputValue}</p>
                </div>
                <div class="del"><i class="fa-solid fa-x "></i></div>
            </div>
`
        const del = document.querySelectorAll('.del')
        for (let i = 0; i < del.length; i++) {
            del[i].addEventListener('click', () => {
                del[i].parentNode.remove()
            })
        }
    }

})