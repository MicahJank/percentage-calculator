// numField variables grab the html element and store it. We need these values to make a percentage calculation
// Calc 1 fields
const calc1NumField1 = document.getElementById('calc1NumField1');
const calc1NumField2 = document.getElementById('calc1NumField2');

// Calc 2 fields
const calc2NumField1 = document.getElementById('calc2NumField1');
const calc2NumField2 = document.getElementById('calc2NumField2');

// Calc 3 fields
const calc3NumField1 = document.getElementById('calc3NumField1');
const calc3NumField2 = document.getElementById('calc3NumField2');

// Calc 4 fields
const calc4NumField1 = document.getElementById('calc4NumField1');
const calc4NumField2 = document.getElementById('calc4NumField2');

// Calc 5 fields
const calc5NumField1 = document.getElementById('calc5NumField1');
const calc5NumField2 = document.getElementById('calc5NumField2');

// Calc 6 fields
const calc6NumField1 = document.getElementById('calc6NumField1');
const calc6NumField2 = document.getElementById('calc6NumField2');




// We also need to grab and store the result that will be displayed on the screen, otherwise the user wont know what the percentage is!
// FORM 1 RESULT FIELD
const calc1ResultField = document.getElementById('calc1ResultField');

// FORM 2 RESULT FIELD
const calc2ResultField = document.getElementById('calc2ResultField');

// FORM 3 RESULT FIELD
const calc3ResultField = document.getElementById('calc3ResultField');

// FORM 4 RESULT FIELD
const calc4ResultField = document.getElementById('calc4ResultField');

// FORM 5 RESULT FIELD
const calc5ResultField = document.getElementById('calc5ResultField');

// FORM 6 RESULT FIELD
const calc6ResultField = document.getElementById('calc6ResultField');





// The form variable stores the form that users use to enter in their numbers. We get the form by grabbing its Id.
// FORM 1
const form1 = document.getElementById('xIsWhatPercentOfY');

// FORM 2
const form2 = document.getElementById('whatIsY%OfX');

// FORM 3
const form3 = document.getElementById('xIsY%OfWhat');

// FORM 4
const form4 = document.getElementById('what%OfXIsY');

// FORM 5
const form5 = document.getElementById('x%OfWhatIsY');

// FORM 6
const form6 = document.getElementById('y%OfXIsWhat');




/* Calculate X is What % of Y */
form1.addEventListener('submit', (event) => {
    if (!calc1NumField1.value || !calc1NumField2.value) {
        alert(`Please enter values in all the fields!`);
    } else {
        const num1 = parseFloat(calc1NumField1.value);
        const num2 = parseFloat(calc1NumField2.value);
        const result = (num1 / num2) * 100;
        
        calc1ResultField.innerText = `Result: ${result}%`;
        event.preventDefault();
    }
    
});

/* Calculate What is Y% of X? */
form2.addEventListener('submit', (event) => {
    if(!calc2NumField1.value || !calc2NumField2.value) {
        alert(`Please enter values in all the fields!`);
    } else {
        const num1 = parseFloat(calc2NumField1.value);
        const num2 = parseFloat(calc2NumField2.value);
        const result = (num1 / 100) * num2;

        calc2ResultField.innerText = `Result: ${result}`;
        event.preventDefault();
    }
});

/* Calculate X is Y% of What? */
form3.addEventListener('submit', (event) => {
    if(!calc3NumField1.value || !calc3NumField2.value) {
        alert(`Please enter values in all the fields!`);
    } else {
        const num1 = parseInt(calc3NumField1.value);
        const num2 = parseInt(calc3NumField2.value);
        const result = num1 / (num2 / 100);

        calc3ResultField.innerText = `Result: ${result}`;
        event.preventDefault();
    }
});

/* Calculate What percent of X is Y? */
form4.addEventListener('submit', (event) => {
    if(!calc4NumField1.value || !calc4NumField2.value) {
        alert(`Please enter values in all the fields!`);
    } else {
        const num1 = parseFloat(calc4NumField1.value);
        const num2 = parseFloat(calc4NumField2.value);
        const result = (num2 / num1) * 100;

        calc4ResultField.innerText = `Result: ${result}%`;
        event.preventDefault();
    }
});

/* Calculate X percent of what is Y? */
form5.addEventListener('submit', (event) => {
    if(!calc5NumField1.value || !calc5NumField2.value) {
        alert(`Please enter values in all the fields!`);
    } else {
        const num1 = parseFloat(calc5NumField1.value);
        const num2 = parseFloat(calc5NumField2.value);
        const result = num2 / (num1 / 100);

        calc5ResultField.innerText = `Result: ${result}`;
        event.preventDefault();
    }
});

/* Calculate Y percent of X is what? */
form6.addEventListener('submit', (event) => {
    if(!calc6NumField1.value || !calc6NumField2.value) {
        alert(`Please enter values in all the fields!`);      
    } else {
        const num1 = parseFloat(calc6NumField1.value);
        const num2 = parseFloat(calc6NumField2.value);
        const result = (num1 / 100) * num2;

        calc6ResultField.innerText = `Result: ${result}`;
        event.preventDefault();
    }
});