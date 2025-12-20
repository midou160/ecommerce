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

document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة سنة " + new Date().getFullYear();