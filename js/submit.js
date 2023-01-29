function getInputAmount(inputValue){
    const input = document.getElementById(inputValue);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);
    input.value = '';
    return inputAmount;
}
function depoAndWithMoney(money, depositAmount){
    const totalMoney = document.getElementById(money);
    const totalMoneyText = totalMoney.innerText;
    const totalMoneyAmount = parseFloat(totalMoneyText);
    totalMoney.innerText = totalMoneyAmount + depositAmount;
}
function getCurrentBalance(){
    const balanceMoney = document.getElementById('add-balance');
    const balanceText = balanceMoney.innerText;
    const lastBlanceAmount = parseFloat(balanceText);
    return lastBlanceAmount;
}
function addToBalance( depositAmount, isAdd){
    const balanceMoney = document.getElementById('add-balance');
    /* const balanceText = balanceMoney.innerText;
    const lastBlanceAmount = parseFloat(balanceText); */
    const lastBlanceAmount = getCurrentBalance();
    if(isAdd == true){
        balanceMoney.innerText = lastBlanceAmount + depositAmount;
    }else{
        balanceMoney.innerText = lastBlanceAmount - depositAmount;
    }

}


// Get deposit input amount
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputAmount('deposit-input');
    if(depositAmount > 0){
        const addInputToDeposit = depoAndWithMoney('deposit-money', depositAmount);
        const totalBalanceMoney = addToBalance(depositAmount, true);
    }
    
    
});

// Get withdraw input amount
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputAmount('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        const addInputToWithdraw = depoAndWithMoney('withdraw-money', withdrawAmount);
    addToBalance(withdrawAmount, false);
    }
    
})
