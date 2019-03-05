// numField variables grab the html element and store it. We need these values to make a percentage calculation
const numField1 = document.getElementById('numField1');
const numField2 = document.getElementById('numField2');

// We also need to grab and store the result that will be displayed on the screen, otherwise the user wont know what the percentage is!
const resultField = document.getElementById('resultField');

// The form variable stores the form that users use to enter in their numbers. We get the form by grabbing its Id.
const form = document.getElementById('xIsWhatPercentOfY');


form.addEventListener('submit', (event) => {
    // const calc = (numField1.value / numField2.value) * 100;
    // resultField.value = `Result: ${calc}%`;

    if (!numField1.value || !numField2.value) {
        alert(`Please enter values in all the fields!`);
    } else {
        const num1 = parseFloat(numField1.value);
        const num2 = parseFloat(numField2.value);
        const result = (num1 / num2) * 100;
        
        resultField.innerText = `Result: ${result}%`;
        event.preventDefault();
    }
    
});
