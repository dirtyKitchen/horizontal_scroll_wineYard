const mycursor = document.querySelector('#cursor')
const forHover = document.querySelectorAll('.forHover')
const q1 = document.querySelector('.q1');
const a1 = document.querySelector('.a1')
console.log(q1)


for (let i = 0; i < forHover.length; i++) {
    forHover[i].addEventListener('mouseover', _ => {
        mycursor.style.height = "100px";
        mycursor.style.width = '100px';
        mycursor.style.border = "2px solid red"
    })

    forHover[i].addEventListener('mouseout', _ => {
        mycursor.style.height = "50px";
        mycursor.style.width = '50px';
        mycursor.style.border = "2px solid black"
    })
}

q1.addEventListener('mouseenter', _ => {
    q1.style.transform = "scale(1.5, 1.5)"
})

q1.addEventListener('mouseleave', _ => {
    q1.style.transform = "scale(1.0, 1.0)"
})
