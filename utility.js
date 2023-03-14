function getElementFieldValueById(inputId){
    const inputField =document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValueStringToInt = parseFloat(inputValueString);
    inputField.value ='';
    return inputValueStringToInt;
}

function getElementTextValueById(elementId){
    const element =document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValueStringToInt =parseFloat(elementValueString);
    return elementValueStringToInt;
}
function setTextElementValueById(elementId, newValue){
    const textElement =document.getElementById(elementId)
    textElement.innerText = newValue;
}
