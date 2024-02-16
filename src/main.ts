//////////////Deposit Part ////////////////////
const btnDeposit = document.getElementById('btn-deposit');
// console.log(btnDeposit);
if (btnDeposit) {
    btnDeposit.addEventListener('click', () => {
        console.log('clilk btnDeposit , get= ',btnDeposit)
        const depositField = document.getElementById('deposit-field') as HTMLInputElement | null;
        if (depositField) {
            const depositStr: string = depositField.value;
            // console.log(depositStr);
            const depositNum: number = parseFloat(depositStr);
            depositField.value = '';

            if (isNaN(depositNum)) {
                alert('should be a number');
                return;
            }
            // console.log(depositNum);
            const depositTotal = document.getElementById('deposite-total') as HTMLElement | null;
            if (depositTotal) {
                const depositTotalstr: string = depositTotal.innerText;
                const depositTotalNum: number = parseFloat(depositTotalstr);
                // console.log(depositTotalNum);
                const currentDeposit: number = depositNum + depositTotalNum;
                // console.log(currentDeposit);
                depositTotal.innerText = currentDeposit.toString();
            }

            const balanceElement = document.getElementById('balance-total') as HTMLElement | null;
            if (balanceElement) {
                const preBalanceStr: string = balanceElement.innerText;
                // console.log(preBalanceStr);
                const preBalance: number = parseFloat(preBalanceStr);
                // console.log(preBalance);

                const currentBalance: number = preBalance + depositNum;
                // console.log(currentBalance);
                balanceElement.innerText = currentBalance.toString();
            }
        }
    });
}


///////////Withdraw part ///////////
const btnwithdraw=document.getElementById('btn-withdraw')
if(btnwithdraw){
btnwithdraw.addEventListener('click', () => {
  const withdrawElement = document.getElementById('withdraw-field') as HTMLInputElement;
  const withdrawValueStr: string = withdrawElement.value;
  // console.log(withdrawValueStr);
  const withdrawValue: number = parseFloat(withdrawValueStr);
  withdrawElement.value = '';
  
  const balanceElement = document.getElementById('balance-total') as HTMLElement;
  const preBalanceStr: string = balanceElement.innerText;
  // console.log(preBalanceStr);
  const preBalance: number = parseFloat(preBalanceStr);
  // console.log(preBalance);

  if (isNaN(withdrawValue)) {
      alert('should be a number');
      return;
  }

  if (preBalance < withdrawValue) {
      alert('You do not have enough money');
      return;
  }

  // console.log(withdrawValue);

  const totalWithdrawE = document.getElementById('withdraw-total') as HTMLElement;
  const totalWithdrawStr: string = totalWithdrawE.innerText;
  console.log(totalWithdrawStr);
  const totalWithdraw: number = parseFloat(totalWithdrawStr);

  const currentWithdraw: number = totalWithdraw + withdrawValue;
  console.log(currentWithdraw);
  totalWithdrawE.innerText = currentWithdraw.toString();

  const currentBalance: number = preBalance - withdrawValue;
  // console.log(currentBalance);
  balanceElement.innerText = currentBalance.toString();
});
}