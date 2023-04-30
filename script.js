//select prople
const peopleSum = document.getElementById('people_sum');

//increment by one
const plusSum = document.getElementById('plus_sum');

let count = 1;

plusSum.addEventListener('click', () => {
  count++;
  peopleSum.innerHTML = count;
});

//decrement by one
const minusSum = document.getElementById('minus_sum');

minusSum.addEventListener('click', () => {
  if (count > 1) {
    count--;
  }
  peopleSum.innerHTML = count;
});

//calculate
const calculator = document.getElementById('calculator');

calculator.addEventListener('click', () => {
  document.querySelector('.total_per_person').style.display = 'block';

  //calculating tip
  const totalBill = Number(document.getElementById('total_bill').value);

  const tipMain = Number(document.getElementById('tip_main').value);

  let total = totalBill * (tipMain / 100);

  let finalPeople = peopleSum.innerHTML;

  // diplay total total bill and total in summary tab
  document.getElementById('final_bill').innerHTML = totalBill;

  document.getElementById('tip_amount').innerHTML = total;

  const taxAmount = (document.getElementById('tax_amount').innerHTML =
    (totalBill + 5) / 100);

  // final calculation
  document.getElementById('total_per_person').innerHTML = (
    (totalBill + total + taxAmount) /
    finalPeople
  ).toFixed(2);
});
