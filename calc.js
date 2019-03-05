// numField variables grab the html element and store it. We need these values to make a percentage calculation
const numField1 = document.getElementById('numField1');
const numField2 = document.getElementById('numField2');

// We also need to grab and store the result that will be displayed on the screen, otherwise the user wont know what the percentage is!
const resultField = document.getElementById('resultField');


// to calculate percentage first divide the the first number by the second, then multiply the result by 100
const calculatePercentage = (num1, num2) => (num1 / num2) * 100;
