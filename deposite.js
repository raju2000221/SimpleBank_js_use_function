function getElementFieldValueById(inputId){
    const inputField =document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValueStringToInt = parseFloat(inputValueString);
    inputField.value ='0';
    return inputValueStringToInt;
}

function getElementValueById(elementId){
    const element =document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValueStringToInt =parseFloat(elementValueString);
    return elementValueStringToInt;
}


document.getElementById('btn-diposite').addEventListener('click',function(){
    
    const depositeAmount = getElementFieldValueById('deposite-amount')

})