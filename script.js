let balance = 0;

document.getElementById('transactionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (type === '收入') {
        balance += amount;
    } else if (type === '支出') {
        balance -= amount;
    }

    document.getElementById('balance').textContent = balance.toFixed(2);
    document.getElementById('amount').value = '';  // 清空输入框
});
