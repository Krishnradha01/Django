console.log('It works 👌')

updateColor = function(){
    console.log('hakuna matata is a great song')
}

function doSomething(){
    alert('I am doing Something')
}

animate_button = () => {
    console.log('I am animating the button')
}

changeMessage = (e) => {
    e.target.innerText = 'Button Clicked'
}

// event listener
let btnul = document.querySelector('#btn-uplink')
let allLinks = document.querySelectorAll('a')

/* let allLinks = document.querySelector('a')*/

/* e => is a variable (event) */ 
/* btnul.addEventListener('click', (e) => {
    console.log("Ky ye chal raha hai ")
})*/

btnul.addEventListener('click', (e) => {
    allLinks.forEach((link, idx)=>{
        link.textContent = `Link ${idx}`   /* `` symbol is tilled => to show as a variable */
    })
})