

document.getElementById('btn-diposite').addEventListener('click',function(){
    
    const depositeAmount = getElementFieldValueById('deposite-amount');
    const previoustotal = getElementTextValueById('deposite-total');

    const totalDeposite = depositeAmount + previoustotal;
    setTextElementValueById('deposite-total', totalDeposite);

    const previousbalance = getElementTextValueById('balance-total')
    const totalbalanceafterdeposite = previousbalance + depositeAmount ;

    setTextElementValueById('balance-total',totalbalanceafterdeposite )


})