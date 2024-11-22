const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkInput = () => {
    const input = userInput.value; // Capturar el valor del campo de texto

    if (input === '') {
        alert('Please input a value');
        return;
    }

    userInput.value = "";

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    if (lowerCaseStr === lowerCaseStr.split("").reverse().join("")) {
        result.innerText = "\"" + input + "\"" + " is a palindrome";
    } else {
        result.innerText = "\"" + input + "\"" + " is not a palindrome";
    }
};

checkButton.addEventListener('click', checkInput)