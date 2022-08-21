
// get result field element by id
var resultField = document.getElementById('result-field');

// concatinate numbers and show result field
function insertNumber(newNumber) {
    resultField.value += newNumber;
}

// delete last number from the result field
function deleteNumber() {
    const presentValue = resultField.value;
    const finalValue = presentValue.slice(0, -1);
    resultField.value = finalValue;
}

// clear result field
function clearAll() {
    resultField.value = '';
}

// calculate result 
function answer() {
    if (resultField.value === '') {
        return;
    }
    const calculation = resultField.value;
    const result = eval(calculation);
    resultField.value = result;
}