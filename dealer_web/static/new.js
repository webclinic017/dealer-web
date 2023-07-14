// consumes sync_frm_clr from main.js
document.addEventListener('DOMContentLoaded', () => {
  const txn = document.getElementById('txn')
  txn.onclick = function() {
    if (txn.checked == true) {
      sync_frm_clr('BUY') } else {
      sync_frm_clr('SELL')
    }
  }
  if (txn.checked == true)
  sync_frm_clr('BUY')
}); 



const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', () => {
  const sourceTable = document.querySelector('.mx-auto.table.table-compact');
  const targetTable = document.getElementById('basket_table');
  const rowsToCopy = Array.from(sourceTable.querySelectorAll('tr')).filter((row) => {
    const qtyInput = row.querySelector('input[name="qty"]');
    return qtyInput && Number(qtyInput.value) > 0;
  });
  rowsToCopy.forEach((row, index) => {
    const newRow = document.createElement('div');
    newRow.classList.add('row');

    const ptypeInputs = Array.from(document.querySelectorAll('input[name="ptype"]'));

    ptypeInputs.forEach((input) => {
      if (input.checked) {
        const title = input.getAttribute('data-title');
        let ptype;
        if (title == "NRML") {
          ptype = 'CARRYFORWARD'
        } else if (title == "MIS") {
          ptype = 'INTRADAY'
        } else {
          ptype = 'DELIVERY'
        }
        const ptypeInput = document.createElement('input');
        ptypeInput.name = 'ptype';
        ptypeInput.value = ptype;
        newRow.appendChild(ptypeInput);
      }
    });

    const otypeInputs = Array.from(document.querySelectorAll('input[name="otype"]'));

    otypeInputs.forEach((input) => {
      if (input.checked) {
        const title = input.getAttribute('data-title');
        let otype;
        if (title == "LMT") {
          otype = "LIMIT"
        } else if (title == "MKT") {
          otype = "MARKET"
        } else if (title == "SL") {
          otype = "STOPLOSS_LIMIT"
        } else {
          otype = "STOPLOSS_MARKET"
        }
        const otypeInput = document.createElement('input');
        otypeInput.name = 'otype';
        otypeInput.value = otype;
        newRow.appendChild(otypeInput);
      }
    });

    const qtyInput = row.querySelector('input[name="qty"]');
    const qty = qtyInput.value;
    const qtyInputField = document.createElement('input');
    qtyInputField.name = 'quantity';
    qtyInputField.value = qty;
    newRow.appendChild(qtyInputField);

    const clientNameInput = row.querySelector('input[name="client_name"]');
    const clientName = clientNameInput.value;
    const clientNameInputField = document.createElement('input');
    clientNameInputField.name = 'client_name';
    clientNameInputField.value = clientName;
    newRow.appendChild(clientNameInputField);

    const symbolInput = document.getElementById('symbol');
    const symbolInputField = document.createElement('input');
    symbolInputField.name = 'tradingsymbol';
    symbolInputField.value = symbolInput.value;
    newRow.appendChild(symbolInputField);

    const exchInput = document.getElementById('exchange');
    const exchInputField = document.createElement('input');
    exchInputField.name = 'exchange';
    exchInputField.value = exchInput.value;
    newRow.appendChild(exchInputField);

    const tknInput = document.getElementById('token');
    const tknInputField = document.createElement('input');
    tknInputField.name = 'token';
    tknInputField.value = tknInput.value;
    newRow.appendChild(tknInputField);

    const priceInput = document.getElementById('price');
    const priceInputField = document.createElement('input');
    priceInputField.name = 'price';
    priceInputField.value = priceInput.value;
    newRow.appendChild(priceInputField);

    const triggerInput = document.getElementById('trigger');
    const triggerInputField = document.createElement('input');
    triggerInputField.name = 'trigger';
    triggerInputField.value = triggerInput.value;
    newRow.appendChild(triggerInputField);

    const txnCheckbox = document.getElementById('txn');
    const txnValue = txnCheckbox.checked ? 'BUY' : 'SELL';
    const txnInputField = document.createElement('input');
    txnInputField.name = 'transactiontype';
    txnInputField.value = txnValue;
    newRow.appendChild(txnInputField);

    targetTable.appendChild(newRow);
  });
});
