const mycursor = document.querySelector('#cursor')
const forHover = document.querySelectorAll('.forHover')

for (let i = 0; i < forHover.length; i++) {
    forHover[i].addEventListener('click', _ => {
        console.log(forHover[i])
    })
}
