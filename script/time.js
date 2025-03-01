let today = new Intl.DateTimeFormat("en-bd", {
    dateStyle: "full"
}).format(new Date());
 
document.getElementById("time-now").innerText = today;