const mycursor = document.querySelector('#cursor')
const forHover = document.querySelectorAll('.forHover')
for (i = 0; i < forHover.length; i++){
    forHover[i].addEventListener('click', _ => {
        console.log(forHover[i])
    })
}
 

// position: absolute;
// width: 50px;
// height: 50px;
// border: 2px solid rgba(0, 0, 0, 0.333);
// box - sizing: border - box;
// transition: 0.1s;
// transform: translate(-50 %, -50 %);
// border - radius: 50 %;
// pointer - events: none;