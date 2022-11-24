const mycursor = document.querySelector('#cursor')
const forHover = document.querySelectorAll('.forHover')

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
