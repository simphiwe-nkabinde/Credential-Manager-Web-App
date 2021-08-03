
export function showAlert(color, message) {
    var alert = document.getElementById('alert')
    //set color
    alert.classList.add('show', 'alert-'+ color)
    //set messsage
    alert.firstChild.innerText = message
}
export function dismissAlert() {
    var alert = document.getElementById('alert')
    alert.firstChild.innerText = ''
    alert.classList.remove('show')
}