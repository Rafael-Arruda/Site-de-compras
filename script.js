const btnAdd = document.querySelector('.btn-add');
const btnSub = document.querySelector('.btn-sub');
const amount = document.querySelector('.amount');

function add(){
    let oldAmount = Number(amount.innerText);
    let currentAmount = oldAmount + 1;
    amount.innerHTML = currentAmount;
}

function sub() {
    let oldAmount = Number(amount.innerText);
    if(oldAmount > 0){
        let currentAmount = oldAmount - 1;
        amount.innerHTML = currentAmount;
    }
}

btnAdd.addEventListener('click', add);
btnSub.addEventListener('click', sub);