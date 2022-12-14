"use strict";

$('#userNameRegistration').addEventListener('blur', (e) => {
    if (e.target.value.trim().length === 0) {
        e.target.style.border = "2px solid red";
        e.target.setAttribute('placeholder', "Please fill input . . .")
    } else {
        e.target.style.border = "2px solid green";
        e.target.setAttribute('placeholder', "Enter your Username")
    }
})

$('#userEmailRegistration').addEventListener('blur', (e) => {
    if (e.target.value.trim().length === 0) {
        e.target.style.border = "2px solid red"
        e.target.setAttribute('placeholder', "Please fill input . . .");
    } else {
        e.target.style.border = "2px solid green",
        e.target.setAttribute('placeholder', "Enter your email")
    }
})

$('#userPasswordRegistration').addEventListener('blur', (e) => {
    if (e.target.value.trim().length === 0) {
        e.target.style.border = "2px solid red";
        e.target.setAttribute('placeholder', "Please fill input . . .")
    } else {
        e.target.style.border = "2px solid green",
        e.target.setAttribute('placeholder', "Enter your password")
    }
})

$('#userPasswordRegistration').addEventListener('keyup', (e) => {
    if (e.target.value.trim().length === 0) {
        $('.show').setAttribute('class', 'show d-none')
    } else {
        $('.show').setAttribute('class', 'show d-block')
    }
})

$('.show').addEventListener('click', () => {
    if ($('#userPasswordRegistration').getAttribute('type') === "password") {
        $('#userPasswordRegistration').setAttribute('type', 'text');
        $('.show').innerHTML = `<i class="bi bi-eye-fill"></i>`;
    } else {
        $('#userPasswordRegistration').setAttribute('type', 'password');
        $('.show').innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
    }
})


// ================ USERNAME FUNCTION start ============== //

(function () {

    let userName = localStorage.getItem('user');
    let token = localStorage.getItem("token");

    $("#userLogin").innerHTML = `${userName}`;

    if (!token) {
        location.replace("./login.html")
    }
} () )

// ================ USERNAME FUNCTION end ============== //


// =============== LOGOUT FUNCTION start ============== //

$('#logout').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})

// =============== LOGOUT FUNCTION end ============== //