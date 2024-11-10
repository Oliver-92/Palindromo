const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');



const checkInput = input => {
    const originalInput = input;

    if (input === '') {
        alert('Please input a value');
        return;
    }
    result.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    


}


