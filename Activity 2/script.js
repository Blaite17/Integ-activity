// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function to get input and calculate the sum
function calculateSum() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultMessage = document.getElementById("resultMessage");

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        resultMessage.innerHTML = "❌ Please enter valid numbers!";
        resultMessage.style.color = "red";
    } else {
        let sum = addNumbers(num1, num2);
        resultMessage.innerHTML = `✅ The sum is: <strong>${sum}</strong>`;
        resultMessage.style.color = "green";
    }
}
