window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        alert("اضف المنتج الى عربة الشراء")
})
})

document.querySelectorAll(".size-option input[type='radio']").forEach(item =>(
    item.addEventListener("change", () => {
        document.querySelectorAll(".size-option").forEach(i => i.classList.remove("active"))
    
     item.parentNode.parentNode.classList.add('active')
    })
))

document.querySelectorAll(".color-option input[type='radio']").forEach(item =>(
    item.addEventListener("change", () => {
        document.querySelectorAll(".color-option").forEach(i => i.classList.remove("active"))
    
     item.parentNode.parentNode.classList.add('active')
    })
))

// حساب سعر اجمالي المنتج

document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener("change", () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceforproduct = newQuantity * pricePerUnit;
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceforproduct+'$';

        calculateTotalPrice();
})});

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener("click", () => {
        const parent = item.closest('[data-product-info]');
        parent.remove();
        calculateTotalPrice();
       
    })
})

function calculateTotalPrice() {
     let totalPriceforAllproduct = 0;
        document.querySelectorAll('[data-product-info]').forEach(product => {
            const pricePerUnit = product.getAttribute('data-product-price');
            const quantity = product.querySelector('[data-product-quantity]').value;
            const totalPriceforproduct = pricePerUnit * quantity;
            totalPriceforAllproduct += totalPriceforproduct;
        }
        )
        document.querySelector('#total-price-for-all-products').innerHTML = totalPriceforAllproduct+'$';
}
document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة سنة " + new Date().getFullYear();