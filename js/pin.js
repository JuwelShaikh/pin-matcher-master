function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin
    }
    else {
        return getPin()
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('btn-pin').addEventListener('click', function () {
    const pinAdd = getPin();
    const inputField = document.getElementById('input-pin');

    inputField.value = pinAdd;
})