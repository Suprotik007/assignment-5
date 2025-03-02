// discover
document.getElementById('discover').addEventListener('click',function(event){
    event.preventDefault()
     window.location.href="./ques.html"
})


// theme
document.getElementById('theme-btn').addEventListener('click',function(event){
    event.preventDefault()
    let colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1"]
    
    let color = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = color
})


// time
let realDate = new Date().toDateString()
document.getElementById("real-date").innerText = realDate 

// clear

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("act-log").innerText = ""; 
})

//  complete

let Button = document.getElementsByClassName('com-btn')

for (let x = 0; x < Button.length; x++) {
    Button[x].addEventListener('click', function () {
        alert('Board updated successfully')
        this.disabled = true 
        
        
    })
}
// task-functions

document.addEventListener("DOMContentLoaded", function () {
    const eachButton = document.querySelectorAll(".com-btn")
    const task1 = document.getElementById("task-1")
    const task2 = document.getElementById("task-2")
    const logAct =document.getElementById('act-log')
    let totalClick = 0;


    eachButton.forEach((button) => {
        button.addEventListener("click", function () {
            
            let Task1 = parseInt(task1.innerText)
            let Task2 = parseInt(task2.innerText)

            task1.innerText = Task1 + 1
            task2.innerText =  Task2 - 1 

            const taskTitle = this.closest(".card").querySelector(".card-title").innerText;
            const logEntry = document.createElement("p");
            
            logEntry.innerHTML = `You have done the task <strong style="color: green;">"${taskTitle}"</strong> at <strong>${new Date().toLocaleTimeString()}</strong>`;
 
            logAct.prepend(logEntry)


            totalClick++;

            
            if (totalClick === 6) {
                alert("'Board updated successfully'")
                alert("Congratulations! You've completed all tasks!")
            } 
        })
        
    })
})

 