let timeout;

function debounceAdder() {
    clearTimeout(timeout);
    timeout = setTimeout(adder, 1000);
}

async function adder() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultElement = document.getElementById("finalSum");

    try {
        const response = await fetch(`http://localhost:3000/sum?a=${num1}&b=${num2}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const sum = await response.text();
        resultElement.innerHTML = sum;
    } catch (error) {
        resultElement.innerHTML = 'Error:' + error.message;
    }
}
