const displayName = document.querySelector('#username')
const inputName = document.querySelector('#user')
const btn = document.querySelector('#sendBtn')



btn.addEventListener('click', displayResult)


function displayResult(){
    // console.log('you clicked on the btn')
    // console.log(inputName.value)

    displayName.textContent = inputName.value

}


inputName.addEventListener('keyup', () => {
    displayName.textContent = inputName.value
})