

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const previoamount = getElementTextValueById('Withdraw-total');
    const  withdrawamount = getElementFieldValueById('withdraw-amount');
    const totalwithdraw = previoamount + withdrawamount ;

    setTextElementValueById('Withdraw-total', totalwithdraw);

    const previousbalance = getElementTextValueById('balance-total');
    const totalBalanceAfterWithdraw = previousbalance - withdrawamount;
    setTextElementValueById('balance-total',totalBalanceAfterWithdraw);

})