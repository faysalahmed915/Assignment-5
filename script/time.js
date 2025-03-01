let today = new Intl.DateTimeFormat("en-bd", {
    dateStyle: "full"
}).format(new Date());
 
document.getElementById("time-now").innerText = today;

let timeNow = new Intl.DateTimeFormat("en-bd", {
    timeStyle: "medium"
    
}).format(new Date());
 
