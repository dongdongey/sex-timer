var timecount = 0
var sec = 0
var min = 0
var sex = true
var btn = document.getElementById("btn1")
btn.addEventListener('click', Time)
var x = document.getElementById("ttim")
var timerId
// timerId는 밖에서 선언해줬어야 함
// 그래야 함수 안 어디서든 접근이 가능함
function Time(){
    if (sex === true) {
        btn.innerText = `sex stop`
        timerId = setInterval(() => {
            timecount = timecount + 1
            console.log(timecount)
            sec +=1
            if (sec>=60){
                sec-=60
                min+=1
            }
            x.innerText=`${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`; 
        }, 1000) // setInterval은 변수에 대입하는 동시에 작동함
        sex = false
        btn.className='blackbtn'
    }
    else if (sex === false) {
        btn.innerText = `sex start`
        clearInterval(timerId)
        // clearInterval을 작동하면 재사용이 불가능함
        // 따라서 타이머를 다시 사용하려면 변수에 setInterval을 다시 대입해줘야함
        sex = true
        btn.className='whitebtn'
    }
}