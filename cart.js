function updateProductNumber (product,  price, isIncreasing){
const productInput = document.getElementById(product + '-number');
let productNumber = productInput.value;
if(isIncreasing){
    productNumber = parseInt(productInput.value) + 1;
} else if(productNumber > 0){
    productNumber = parseInt(productInput.value) - 1;
}
productInput.value = productNumber;
// update total
const productTotal = document.getElementById(product + '-total');
productTotal.innerText = productNumber * price;

// update total price
calculateTotalPrice();
};
// get number input update total price
function inputTotalNumber (product ) {
 const productInput = document.getElementById(product + '-number');
 const productNumber = parseInt(productInput.value);
 return productNumber;
};
// calculate total update total price
function calculateTotalPrice (){
    const phoneTotal = inputTotalNumber('phone') * 1219;
    const caseTotal = inputTotalNumber('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const totalPrice = subTotal + tax;
document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax-amount').innerText = tax;
document.getElementById('total-price').innerText = totalPrice;
};

// phone plus minus
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
});
// case plus minus
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case',  59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case',  59, false);
});





