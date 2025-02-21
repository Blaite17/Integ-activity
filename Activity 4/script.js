function checkEvenOdd() {
    let num = parseInt(document.getElementById("numInput").value);
    let resultElement = document.getElementById("result");

    if (isNaN(num)) {
        resultElement.innerText = "Please enter a valid number!";
        resultElement.style.color = "red";
    } else {
        if (num % 2 === 0) {
            resultElement.innerText = num + " is Even.";
            resultElement.style.color = "green";
        } else {
            resultElement.innerText = num + " is Odd.";
            resultElement.style.color = "blue";
        }
    }
}
