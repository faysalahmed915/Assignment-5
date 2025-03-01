// task done
let taskDone = 0;

// task left
let taskLeft = document.getElementsByClassName("task").length;
document.getElementById("task-left").innerText = taskLeft;

// button alert
for (let i = 0; i < document.getElementsByClassName("btn-alert").length; i++) {
    document.getElementsByClassName("btn-alert")[i].addEventListener("click", function () {
        alert("Board Updated Successfully");
        // task done
        taskDone = innerTextToNumberById("task-done") + 1;
        document.getElementById("task-done").innerText = taskDone;
        // task left
        taskLeft = taskLeft - 1;
        console.log(taskLeft);
        document.getElementById("task-left").innerText = taskLeft;
        this.disabled = true;
        // all tasks completed
        if (taskLeft === 0) {
            alert("You have completed all the tasks");
        }
    });
}

