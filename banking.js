document.getElementById('deposite-submit').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-amount');
    const newDepositeAmountText = depositeInput.value ;
    const newDepositeAmount = parseFloat (newDepositeAmountText);
    

    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeAmountText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountText);
   
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;
    

    const balanceTotal =document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousbalanceTotal =  parseFloat(balanceText);

    const newbalanceTotal = previousbalanceTotal + newDepositeAmount;
    balanceTotal.innerText =newbalanceTotal;
    depositeInput.value = '' ;





})

// clear input text
depositeInput.value = '' ;

document.getElementById('withdraw-submit').addEventListener('click', function(){
    const withdrawInput= document.getElementById('withdraw-amount');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat (withdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const  previousWithdrawAmount =parseFloat(previousWithdrawAmountText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


})