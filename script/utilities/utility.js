// convertion functions
function innerTextToNumberById (Id) {
    newValue = parseInt(document.getElementById(Id).innerText);
    return newValue;
}
function valueToNumberById (Id) {
    return parseInt(document.getElementById(Id).value);
}

// activity functions
let taskTitle = document.getElementsByClassName("task-title")
const divHistory = document.getElementById("activity-container");
function activity (indexOfCard) {
    
        const divUpdate = document.createElement("div");
       
        divUpdate.innerHTML = `
            <div class="card bg-blue-100 px-8 py-5 my-3">
                <p>
                    You have complited the task <span class="font-bold">${
                        taskTitle[indexOfCard].innerText
                    }</span> at <span class="font-bold">${timeNow}</span> 
                </p>
            </div>
        `
       
       
        divHistory.appendChild(divUpdate)
        return
}