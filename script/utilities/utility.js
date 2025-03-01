function innerTextToNumberById (Id) {
    newValue = parseInt(document.getElementById(Id).innerText);
    return newValue;
}
function valueToNumberById (Id) {
    return parseInt(document.getElementById(Id).value);
}